import assert from 'node:assert/strict';
import fs from 'node:fs';
import { randomSymbol, calculateWins, getWinMultiplier } from '../src/game-standalone/math';
import { EXPERIMENTAL_MATH as model, experimentalScale, ExperimentalRoundProvider } from '../src/game-standalone/experimentalMath';
import { SYMBOL_KEYS, type SymbolKey } from '../src/game-standalone/types';
import { MIN_SCATTERS, SYMBOL_PAYTABLE } from '../src/game-standalone/mathConfig';
import { RoundController } from '../src/game-standalone/roundController';

console.log = () => {};
function rng(seed: number) {
	return () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
}
function evaluate(board: SymbolKey[], free: boolean, u: number) {
	let payout = 0;
	if (board[6] === 'h') for (const symbol of SYMBOL_KEYS) {
		if (symbol === 'h' || symbol === 'l' || symbol === 'emptyslot') continue;
		const counts = [board.slice(0, 3), board.slice(3, 6), board.slice(7, 10), board.slice(10, 13)].map(col => col.filter(s => s === symbol).length);
		const [a, b, c, d] = counts;
		if (!a || !b) continue;
		const length = c ? d ? 5 : 4 : 3;
		payout += (SYMBOL_PAYTABLE[symbol][length] ?? 0) * a * b * (c || 1) * (c ? d || 1 : 1);
	}
	const scatters = board.filter(s => s === 'l').length;
	return { payout: payout * (payout ? getWinMultiplier(free, () => u) : 1), grant: scatters >= MIN_SCATTERS ? scatters : 0 };
}
const fixture = rng(96006630);
for (let i = 0; i < 20000; i++) {
	const free = i % 2 === 0;
	const board = Array.from({ length: 13 }, (_, k) => randomSymbol(k, free, fixture));
	const u = fixture();
	const actual = calculateWins(board, 1, free, () => u);
	const fast = evaluate(board, free, u);
	assert.ok(Math.abs(actual.wins.reduce((s, w) => s + w.payout, 0) - fast.payout) < 1e-9);
	assert.equal(actual.scatterTrigger?.freeSpinsTriggered ?? 0, fast.grant);
	// Feed exactly the same board/multiplier draws through the playable provider.
	const seed = i + 103;
	const draws = rng(seed), reference = rng(seed);
	const provider = new ExperimentalRoundProvider(draws);
	const expectedBoard = Array.from({ length: 13 }, (_, k) => randomSymbol(k, free, reference));
	const expected = calculateWins(expectedBoard, 2.4, free, reference);
	const outcome = provider.play({ bet: 2.4, freeSpin: free });
	assert.deepEqual(outcome.symbols, expectedBoard);
	assert.deepEqual(outcome.scatterTrigger, expected.scatterTrigger);
	assert.deepEqual(outcome.wins, expected.wins.map(w => ({ ...w, payout: w.payout * experimentalScale(free) })));
}
assert.ok(Math.abs(model.baselineBaseRtp * model.baseScale + model.baselineBonusRtp * model.freeScale - 0.96) < 1e-12);
const controller = new RoundController(new ExperimentalRoundProvider(rng(444)));
assert.ok(controller.grantDemoFreeSpins(2, 3));
controller.start(3); controller.settle();
assert.ok(controller.betLocked);
assert.equal(controller.roundBet, 3);
controller.start(50); assert.equal(controller.roundBet, 3); controller.settle();

const paidRounds = Number(process.argv[2] ?? 1000000);
assert.ok(Number.isSafeInteger(paidRounds) && paidRounds >= 2);
const runs = [];
for (const seed of [12345, 741354, 987654321]) {
	const r = rng(seed), oldReturns: number[] = [], newReturns: number[] = [], bonusGaps: number[] = [];
	let oldBase = 0, oldBonus = 0, triggers = 0, freeSpins = 0, lastTrigger = 0;
	for (let i = 0; i < paidRounds; i++) {
		const play = (free: boolean) => { const board = Array.from({ length: 13 }, (_, k) => randomSymbol(k, free, r)); return evaluate(board, free, r()); };
		const first = play(false);
		let bonus = 0, remaining = first.grant;
		if (remaining) { triggers++; bonusGaps.push(i + 1 - lastTrigger); lastTrigger = i + 1; }
		while (remaining) { remaining--; freeSpins++; const spin = play(true); bonus += spin.payout; remaining += spin.grant; assert.ok(remaining < 10000); }
		oldBase += first.payout; oldBonus += bonus;
		oldReturns.push(first.payout + bonus);
		newReturns.push(first.payout * model.baseScale + bonus * model.freeScale);
	}
	function summarize(values: number[]) {
		const mean = values.reduce((a, b) => a + b, 0) / values.length;
		const variance = values.reduce((a, b) => a + (b - mean) ** 2, 0) / (values.length - 1);
		const sorted = [...values].sort((a, b) => a - b);
		const quantile = (p: number) => sorted[Math.floor((sorted.length - 1) * p)];
		return { rtp: mean, confidence95: [mean - 1.96 * Math.sqrt(variance / values.length), mean + 1.96 * Math.sqrt(variance / values.length)], stddev: Math.sqrt(variance), zeroRate: values.filter(x => x === 0).length / values.length, partialReturnRate: values.filter(x => x > 0 && x < 1).length / values.length, breakEvenRate: values.filter(x => x === 1).length / values.length, netWinRate: values.filter(x => x > 1).length / values.length, p50: quantile(.5), p90: quantile(.9), p95: quantile(.95), p99: quantile(.99), maxObserved: sorted.at(-1) };
	}
	bonusGaps.sort((a, b) => a - b);
	runs.push({ seed, paidRounds, triggers, freeSpins, triggerRate: triggers / paidRounds, completedTriggerGapP50: bonusGaps[Math.floor(bonusGaps.length * .5)] ?? null, completedTriggerGapP95: bonusGaps[Math.floor(bonusGaps.length * .95)] ?? null, baseline: { ...summarize(oldReturns), baseRtp: oldBase / paidRounds, bonusRtp: oldBonus / paidRounds }, experimental: { ...summarize(newReturns), baseRtp: oldBase * model.baseScale / paidRounds, bonusRtp: oldBonus * model.freeScale / paidRounds } });
}
const report = { model, verifiedFixtures: 20000, scope: 'Unit paid bet; complete bonus chains; full precision; no currency rounding; debug grants excluded. Both models use identical outcomes. Return metrics include the entire bonus chain.', runs };
fs.mkdirSync('apps/oma-peli/reports', { recursive: true });
fs.writeFileSync('apps/oma-peli/reports/experimental-96-audit.json', JSON.stringify(report, null, 2) + '\n');
process.stdout.write(JSON.stringify(report, null, 2) + '\n');
