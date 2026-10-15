import assert from 'node:assert/strict';
import { createActiveRoundProvider, ACTIVE_MATH } from '../src/game-standalone/activeMath';
import { DemoRoundProvider } from '../src/game-standalone/roundProvider';
import { RoundController } from '../src/game-standalone/roundController';
console.log = () => {};
function rng(seed: number) { return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
assert.equal(ACTIVE_MATH.id, 'balanced-96-v1');
assert.ok(Math.abs(ACTIVE_MATH.baseScale * ACTIVE_MATH.baselineBaseRtp + ACTIVE_MATH.freeScale * ACTIVE_MATH.baselineBonusRtp - .96) < 1e-12);
for (const freeSpin of [false, true]) {
	const active = createActiveRoundProvider(rng(1700)), legacy = new DemoRoundProvider(rng(1700));
	for (let i = 0; i < 2000; i++) {
		const a = active.play({bet: 3, freeSpin}), b = legacy.play({bet: 3, freeSpin});
		assert.deepEqual(a.symbols, b.symbols);
		assert.deepEqual(a.scatterTrigger, b.scatterTrigger);
		assert.deepEqual(a.wins, b.wins.map(w => ({...w, payout: w.payout * (freeSpin ? ACTIVE_MATH.freeScale : ACTIVE_MATH.baseScale)})));
	}
}
const controller = new RoundController(createActiveRoundProvider(rng(1700)));
const initial = controller.snapshot().balance;
const paid = controller.start(3)!;
assert.equal(controller.start(3), null);
controller.settle(); assert.equal(controller.settle(), null);
assert.ok(Math.abs(controller.snapshot().balance - (initial - 3 + paid.wins.reduce((s,w)=>s+w.payout,0))) < 1e-9);
const bonus = new RoundController(createActiveRoundProvider(rng(1717)));
assert.ok(bonus.grantDemoFreeSpins(2,3));
bonus.start(3); bonus.settle(); bonus.start(100); assert.equal(bonus.roundBet,3); bonus.settle();
process.stdout.write('PASS: active 96% provider, baseline preservation, paired payouts, settlement and frozen bonus bet\n');
