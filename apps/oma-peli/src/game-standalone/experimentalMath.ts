import { calculateWins, randomSymbol, type Rng } from './math';
import { CENTER_WILD_PROBABILITY, MIN_SCATTERS, MULTIPLIER_DISTRIBUTIONS, SYMBOL_PAYTABLE, SYMBOL_WEIGHTS_BASE, SYMBOL_WEIGHTS_FS } from './mathConfig';
import { SYMBOL_KEYS, type SymbolKey } from './types';
import type { RoundProvider, RoundRequest, RoundOutcome } from './roundProvider';

function exactMode(weights: Record<SymbolKey, number>, free: boolean) {
	const total = SYMBOL_KEYS.filter(s => s !== 'h').reduce((sum, s) => sum + weights[s], 0);
	let previous = 0;
	const meanMultiplier = (free ? MULTIPLIER_DISTRIBUTIONS.freeSpins : MULTIPLIER_DISTRIBUTIONS.base)
		.reduce((sum, entry) => { const probability = entry.threshold - previous; previous = entry.threshold; return sum + probability * entry.multiplier; }, 0);
	let payout = 0;
	for (const symbol of SYMBOL_KEYS) {
		const p = weights[symbol] / total, n = 3 * p, absent = (1 - p) ** 3, pay = SYMBOL_PAYTABLE[symbol];
		payout += CENTER_WILD_PROBABILITY * n * n * (absent * (pay[3] ?? 0) + n * absent * (pay[4] ?? 0) + n * n * (pay[5] ?? 0)) * meanMultiplier;
	}
	const scatter = weights.l / total;
	let grant = 0, trigger = 0;
	for (let k = MIN_SCATTERS; k <= 12; k++) {
		let combinations = 1;
		for (let j = 1; j <= k; j++) combinations = combinations * (13 - j) / j;
		const probability = combinations * scatter ** k * (1 - scatter) ** (12 - k);
		grant += k * probability;
		trigger += probability;
	}
	return { payout, grant, trigger };
}

const base = exactMode(SYMBOL_WEIGHTS_BASE, false);
const free = exactMode(SYMBOL_WEIGHTS_FS, true);
if (free.grant >= 1) throw new Error('Experimental bonus chain must have a finite expectation');
const currentBonus = base.grant * free.payout / (1 - free.grant);

/** Prototype v1: two payout budgets, with existing outcomes/bonus rules unchanged.
 * No money rounding is applied. Production currency quantization needs a new audit.
 */
export const EXPERIMENTAL_MATH = Object.freeze({
	id: 'balanced-96-v1', targetRtp: 0.96, baseTarget: 0.66, bonusTarget: 0.30,
	baseScale: 0.66 / base.payout,
	freeScale: 0.30 / currentBonus,
	baselineBaseRtp: base.payout, baselineBonusRtp: currentBonus,
	baselineRtp: base.payout + currentBonus,
	triggerProbability: base.trigger,
	expectedFreeSpinsPerPaidRound: base.grant / (1 - free.grant),
});

export function experimentalScale(freeSpin: boolean) {
	return freeSpin ? EXPERIMENTAL_MATH.freeScale : EXPERIMENTAL_MATH.baseScale;
}

export class ExperimentalRoundProvider implements RoundProvider {
	readonly kind = 'demo';
	constructor(private readonly rng: Rng = Math.random) {}
	play({ bet, freeSpin }: RoundRequest): RoundOutcome {
		const symbols = Array.from({ length: 13 }, (_, i) => randomSymbol(i, freeSpin, this.rng));
		const result = calculateWins(symbols, bet, freeSpin, this.rng);
		return { symbols, ...result, wins: result.wins.map(win => ({ ...win, payout: win.payout * experimentalScale(freeSpin) })) };
	}
}
