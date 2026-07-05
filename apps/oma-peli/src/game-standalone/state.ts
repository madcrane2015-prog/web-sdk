import type { SpinSpeed } from './types';

export interface StandaloneGameState {
	balance: number;
	currentBetIndex: number;
	lastWin: number;
	isAutoPlaying: boolean;
	autoPlayRoundsLeft: number;
	showAutoPlayMenu: boolean;
	showDebugPanel: boolean;
	isProcessingAutoPlay: boolean;
	winsCheckedForCurrentSpin: boolean;
	totalRounds: number;
	totalWagered: number;
	totalWon: number;
	totalWins: number;
	isFreeSpinMode: boolean;
	freeSpinsRemaining: number;
	freeSpinsTotalWon: number;
	freeSpinsTriggerCount: number;
	freeSpinsPlayedCount: number;
	totalVisibleSymbols: number;
	totalEmptySlots: number;
	musicEnabled: boolean;
	soundEnabled: boolean;
	spinSpeed: SpinSpeed;
}

export const DEFAULT_STANDALONE_GAME_STATE: StandaloneGameState = {
	balance: 1000,
	currentBetIndex: 5,
	lastWin: 0,
	isAutoPlaying: false,
	autoPlayRoundsLeft: 0,
	showAutoPlayMenu: false,
	showDebugPanel: false,
	isProcessingAutoPlay: false,
	winsCheckedForCurrentSpin: false,
	totalRounds: 0,
	totalWagered: 0,
	totalWon: 0,
	totalWins: 0,
	isFreeSpinMode: false,
	freeSpinsRemaining: 0,
	freeSpinsTotalWon: 0,
	freeSpinsTriggerCount: 0,
	freeSpinsPlayedCount: 0,
	totalVisibleSymbols: 0,
	totalEmptySlots: 0,
	musicEnabled: true,
	soundEnabled: true,
	spinSpeed: 'medium',
};

export function createInitialStandaloneGameState() {
	return { ...DEFAULT_STANDALONE_GAME_STATE };
}
