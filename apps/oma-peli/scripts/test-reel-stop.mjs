import assert from 'node:assert/strict';
import { Container } from 'pixi.js';
import { Reel } from '../src/game-standalone/reel.ts';

for (const speed of ['slow', 'medium', 'fast']) {
  // Each skip frame covers a different mixture of spinning/slowing/stopped
  // reels, including an immediate skip and only the final reel still rolling.
  for (const skipFrame of [null, 0, 1, 59, 60, 90, 180, 240, 300, 360]) {
    const symbols = Array(13).fill('a');
    const stops = Array(13).fill(0);
    const draws = Array(13).fill(0);
    const reels = symbols.map((_, index) => new Reel(index, new Container(), {
      symbolWidth: 180, symbolHeight: 169, rowHeight: 173,
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
