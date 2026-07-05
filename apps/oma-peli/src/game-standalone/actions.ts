import type { StandaloneGameState } from './state';

type BeginSpinAccountingResult =
	| {
			canSpin: true;
			isFreeSpin: true;
			freeSpinsRemaining: number;
			freeSpinsPlayedCount: number;
	  }
	| {
			canSpin: true;
			isFreeSpin: false;
			balance: number;
			totalRounds: number;
			totalWagered: number;
	  }
	| {
			canSpin: false;
			isFreeSpin: false;
			reason: 'insufficient_balance' | 'no_free_spins_remaining';
	  };

type GrantTestFreeSpinsResult =
	| {
			granted: false;
	  }
	| {
			granted: true;
			isFreeSpinMode: true;
			freeSpinsRemaining: number;
			freeSpinsTotalWon: number;
			freeSpinsTriggerCount: number;
	  };

export function increaseBetIndex(currentBetIndex: number, betLevelCount: number) {
	return Math.min(currentBetIndex + 1, betLevelCount - 1);
}

export function decreaseBetIndex(currentBetIndex: number) {
	return Math.max(currentBetIndex - 1, 0);
}

export function maxBetIndex(betLevelCount: number) {
	return betLevelCount - 1;
}

export function startAutoPlayState(rounds: number) {
	return {
		isAutoPlaying: true,
		autoPlayRoundsLeft: rounds,
		showAutoPlayMenu: false,
	};
}

export function stopAutoPlayState() {
	return {
		isAutoPlaying: false,
		autoPlayRoundsLeft: 0,
		isProcessingAutoPlay: false,
	};
}

export function beginAutoPlaySpin(roundsLeft: number) {
	return Math.max(roundsLeft - 1, 0);
}

export function beginSpinAccounting(
	state: Pick<
		StandaloneGameState,
		| 'balance'
		| 'isFreeSpinMode'
		| 'freeSpinsRemaining'
		| 'freeSpinsPlayedCount'
		| 'totalRounds'
		| 'totalWagered'
	>,
	betAmount: number,
): BeginSpinAccountingResult {
	if (state.isFreeSpinMode && state.freeSpinsRemaining > 0) {
		return {
			canSpin: true,
			isFreeSpin: true,
			freeSpinsRemaining: state.freeSpinsRemaining - 1,
			freeSpinsPlayedCount: state.freeSpinsPlayedCount + 1,
		};
	}

	if (!state.isFreeSpinMode) {
		if (state.balance < betAmount) {
			return {
				canSpin: false,
				isFreeSpin: false,
				reason: 'insufficient_balance' as const,
			};
		}

		return {
			canSpin: true,
			isFreeSpin: false,
			balance: state.balance - betAmount,
			totalRounds: state.totalRounds + 1,
			totalWagered: state.totalWagered + betAmount,
		};
	}

	return {
		canSpin: false,
		isFreeSpin: false,
		reason: 'no_free_spins_remaining' as const,
	};
}

export function resetSpinResultState() {
	return {
		lastWin: 0,
		winsCheckedForCurrentSpin: false,
	};
}

export function applyWinAccounting(
	state: Pick<
		StandaloneGameState,
		'balance' | 'totalWon' | 'totalWins' | 'freeSpinsTotalWon' | 'isFreeSpinMode'
	>,
	winAmount: number,
) {
	return {
		balance: state.balance + winAmount,
		totalWon: state.totalWon + winAmount,
		totalWins: winAmount > 0 ? state.totalWins + 1 : state.totalWins,
		freeSpinsTotalWon: state.isFreeSpinMode
			? state.freeSpinsTotalWon + winAmount
			: state.freeSpinsTotalWon,
	};
}

export function triggerFreeSpinsState(
	state: Pick<
		StandaloneGameState,
		'isFreeSpinMode' | 'freeSpinsRemaining' | 'freeSpinsTriggerCount'
	>,
	freeSpinsTriggered: number,
) {
	const isNewTrigger = !state.isFreeSpinMode;

	return {
		isNewTrigger,
		isFreeSpinMode: true,
		freeSpinsRemaining: state.freeSpinsRemaining + freeSpinsTriggered,
		freeSpinsTotalWon: isNewTrigger ? 0 : undefined,
		freeSpinsTriggerCount: isNewTrigger
			? state.freeSpinsTriggerCount + 1
			: state.freeSpinsTriggerCount,
	};
}

export function grantTestFreeSpins(
	state: Pick<StandaloneGameState, 'isFreeSpinMode' | 'freeSpinsTriggerCount'>,
	freeSpins: number,
): GrantTestFreeSpinsResult {
	if (state.isFreeSpinMode) {
		return { granted: false };
	}

	return {
		granted: true,
		isFreeSpinMode: true,
		freeSpinsRemaining: freeSpins,
		freeSpinsTotalWon: 0,
		freeSpinsTriggerCount: state.freeSpinsTriggerCount + 1,
	};
}
