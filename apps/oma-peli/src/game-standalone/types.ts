export const SYMBOL_KEYS = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'emptyslot',
] as const;

export type SymbolKey = (typeof SYMBOL_KEYS)[number];

export type SpinSpeed = 'slow' | 'medium' | 'fast';

export interface ReelPosition {
	col: number;
	row: number;
}

export interface WinResult {
	symbol: SymbolKey;
	count: number;
	payout: number;
	positions: number[];
	multiplier: number;
}

export interface ScatterTriggerResult {
	scatterPositions: number[];
	freeSpinsTriggered: number;
}

export interface CalculateWinsResult {
	wins: WinResult[];
	scatterTrigger: ScatterTriggerResult | null;
}
