import assert from 'node:assert/strict';
import { Container, Texture } from 'pixi.js';
import { Reel } from '../src/game-standalone/reel.ts';

// Enlarged neighbors must disappear for every bounce frame and remain hidden
// at rest, then return when the next spin starts (including reused sprites).
for (const index of [0, 6]) {
  for (const compact of [false, true]) {
    const container = new Container();
    let symbol = 'a';
    const center = index === 6;
    const reel = new Reel(index, container, {
      symbolWidth: center ? 160 : 180, symbolHeight: center ? 158 : 169,
      rowHeight: center ? 158 : 173,
      symbolBleedLeft: center ? 0 : compact ? 42 : 12,
      symbolBleedRight: center ? 0 : compact ? 16 : 12,
      symbolBleedTop: center ? 0 : 14, symbolBleedBottom: center ? 0 : 14,
      symbolYOffset: center ? 0 : -4,
    }, {
      getSymbol: () => symbol, setSymbol: (_, value) => { symbol = value; },
      randomSymbol: () => 'a', getSpinSpeed: () => 'medium',
      getSymbolTextures: () => ({ a: Texture.EMPTY, emptyslot: Texture.EMPTY }),
      playStopSound: () => {}, playDrumHit: () => {},
    });
    reel.startWithResult(1, 'emptyslot');
    let bounceFrames = 0;
    for (let frame = 0; frame < 150; frame++) {
      reel.update();
      reel.draw();
      const moving = reel.state === 'spinning' || reel.state === 'slowing';
      assert.deepEqual(container.children.map(sprite => sprite.visible), [moving, true, moving]);
      if (reel.state === 'bouncing') bounceFrames++;
    }
    assert.ok(bounceFrames > 0);
    assert.equal(reel.state, 'stopped');
    assert.equal(symbol, 'emptyslot');
    reel.start(60);
    reel.draw();
    assert.ok(container.children.every(sprite => sprite.visible));
  }
}

for (const speed of ['slow', 'medium', 'fast']) {
  // Each skip frame covers a different mixture of spinning/slowing/stopped
  // reels, including an immediate skip and only the final reel still rolling.
  for (const skipFrame of [null, 0, 1, 59, 60, 90, 180, 240, 300, 360]) {
    const symbols = Array(13).fill('a');
    const stops = Array(13).fill(0);
    const draws = Array(13).fill(0);
    const reels = symbols.map((_, index) => new Reel(index, new Container(), {
      symbolWidth: index === 6 ? 160 : 180,
      symbolHeight: index === 6 ? 158 : 169,
      rowHeight: index === 6 ? 158 : 173,
    }, {
      getSymbol: i => symbols[i], setSymbol: (i, symbol) => { symbols[i] = symbol; },
      randomSymbol: i => { draws[i]++; return i === 6 ? 'emptyslot' : 'b'; },
      getSpinSpeed: () => speed, getSymbolTextures: () => null,
      playStopSound: () => { stops[index]++; }, playDrumHit: () => {},
    }));
    reels.forEach((reel, i) => reel.start(60 + i * 20));
    for (let frame = 0; frame < 600; frame++) {
      if (frame === skipFrame) reels.forEach(reel => reel.requestStop());
      if (skipFrame !== null && frame === skipFrame + 1) {
        const before = [...draws];
        reels.forEach(reel => reel.requestStop());
        assert.deepEqual(draws, before, 'Repeated skip must preserve the selected results');
      }
      reels.forEach(reel => reel.update());
    }
    assert.ok(reels.every(reel => reel.state === 'stopped'), `${speed}: skip frame ${skipFrame} must stop all reels`);
    assert.deepEqual(stops, Array(13).fill(1), 'Every reel stops exactly once');
    assert.deepEqual(symbols, Array.from({length: 13}, (_, i) => i === 6 ? 'emptyslot' : 'b'));
    assert.ok(reels.every(reel => reel.speed === 0 && reel.offset === 0 && reel.bounceOffset === 0));
  }
}
console.log('PASS: timed stops and 27 skip scenarios; all 13 reels stop exactly once.');
