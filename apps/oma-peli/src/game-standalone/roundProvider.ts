import { calculateWins, randomSymbol, type Rng } from './math';
import type { CalculateWinsResult, SymbolKey } from './types';

export interface RoundRequest { bet: number; freeSpin: boolean; }
export interface RoundOutcome extends CalculateWinsResult { symbols: SymbolKey[]; }
export interface RoundProvider {
	readonly kind: 'demo' | 'book';
	play(request: Readonly<RoundRequest>): RoundOutcome;
}

/** The only provider allowed to generate local paying outcomes. */
export class DemoRoundProvider implements RoundProvider {
	readonly kind = 'demo';
	constructor(private readonly rng: Rng = Math.random) {}
	play({ bet, freeSpin }: RoundRequest): RoundOutcome {
		const symbols = Array.from({ length: 13 }, (_, i) => randomSymbol(i, freeSpin, this.rng));
		return { symbols, ...calculateWins(symbols, bet, freeSpin, this.rng) };
	}
}

/** Event fixtures use the same renderer, never a fallback to local RNG. */
export class BookRoundProvider implements RoundProvider {
	readonly kind = 'book';
	private cursor = 0;
	constructor(private readonly outcomes: readonly RoundOutcome[]) {}
	play(): RoundOutcome {
		const outcome = this.outcomes[this.cursor];
		if (!outcome) throw new Error('No validated book outcome available');
		this.cursor++;
		return structuredClone(outcome);
	}
}
