import { createInitialStandaloneGameState, type StandaloneGameState } from './state';
import { SYMBOL_KEYS } from './types';
import { DemoRoundProvider, type RoundOutcome, type RoundProvider } from './roundProvider';

export type RoundPhase = 'ready' | 'animating' | 'settled';
/** Owns round accounting. Presentation can start/skip/settle, never mutate funds. */
export class RoundController {
	private state = createInitialStandaloneGameState();
	private pending: { bet: number; freeSpin: boolean; outcome: RoundOutcome } | null = null;
	private bonusBet: number | null = null;
	private phaseValue: RoundPhase = 'ready';
	constructor(private readonly provider: RoundProvider = new DemoRoundProvider()) {}
	get phase() { return this.phaseValue; }
	get betLocked() { return this.pending !== null || this.state.isFreeSpinMode; }
	get roundBet() { return this.pending?.bet ?? this.bonusBet; }
	snapshot(): Readonly<StandaloneGameState> { return { ...this.state }; }
	start(selectedBet: number): RoundOutcome | null {
		if (this.pending) return null;
		if (!Number.isFinite(selectedBet) || selectedBet <= 0) throw new Error('Invalid bet');
		const freeSpin = this.state.isFreeSpinMode;
		if (freeSpin && this.state.freeSpinsRemaining <= 0) return null;
		const bet = freeSpin ? this.bonusBet! : selectedBet;
		if (!freeSpin && this.state.balance < bet) return null;
		// Generate/validate before mutating accounting, so failure cannot debit the demo.
		const outcome = this.provider.play({ bet, freeSpin });
		if (outcome.symbols.length !== 13 || outcome.symbols.some(symbol=>!SYMBOL_KEYS.includes(symbol)) || outcome.wins.some(w => !Number.isFinite(w.payout) || w.payout < 0) || (outcome.scatterTrigger && (!Number.isInteger(outcome.scatterTrigger.freeSpinsTriggered) || outcome.scatterTrigger.freeSpinsTriggered<1))) {
			throw new Error('Invalid round outcome');
		}
		this.pending = { bet, freeSpin, outcome: structuredClone(outcome) };
		this.phaseValue = 'animating';
		if (freeSpin) {
			this.state.freeSpinsRemaining--;
			this.state.freeSpinsPlayedCount++;
		} else {
			this.state.balance -= bet;
			this.state.totalRounds++;
			this.state.totalWagered += bet;
		}
		this.state.lastWin = 0;
		return structuredClone(outcome);
	}
	settle(): RoundOutcome | null {
		if (!this.pending) return null;
		const { outcome, bet, freeSpin } = this.pending;
		const payout = outcome.wins.reduce((sum, win) => sum + win.payout, 0);
		this.state.balance += payout;
		this.state.totalWon += payout;
		this.state.lastWin = payout;
		if (payout > 0) this.state.totalWins++;
		// Classify using the mode at round start, before a new bonus trigger.
		if (freeSpin) this.state.freeSpinsTotalWon += payout;
		if (outcome.scatterTrigger) {
			if (!freeSpin) {
				this.state.freeSpinsTotalWon = 0;
				this.state.freeSpinsTriggerCount++;
				this.bonusBet = bet;
			}
			this.state.isFreeSpinMode = true;
			this.state.freeSpinsRemaining += outcome.scatterTrigger.freeSpinsTriggered;
		}
		this.pending = null;
		this.phaseValue = 'settled';
		return structuredClone(outcome);
	}
	acknowledgeBonusEnd() {
		if (this.pending || this.state.freeSpinsRemaining > 0) return false;
		this.state.isFreeSpinMode = false;
		this.state.freeSpinsTotalWon = 0;
		this.bonusBet = null;
		return true;
	}
	grantDemoFreeSpins(count: number, bet: number) {
		if (this.provider.kind !== 'demo' || this.betLocked || !Number.isInteger(count) || count < 1) return false;
		this.state.isFreeSpinMode = true;
		this.state.freeSpinsRemaining = count;
		this.state.freeSpinsTotalWon = 0;
		this.state.freeSpinsTriggerCount++;
		this.bonusBet = bet;
		return true;
	}
	resetStatistics() {
		this.state.totalRounds = this.state.totalWagered = this.state.totalWon = this.state.totalWins = 0;
		this.state.freeSpinsTriggerCount = this.state.freeSpinsPlayedCount = 0;
	}
}
