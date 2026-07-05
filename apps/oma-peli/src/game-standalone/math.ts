import {
	MULTIPLIER_DISTRIBUTIONS,
	SYMBOL_PAYTABLE,
	SYMBOL_WEIGHTS_BASE,
	SYMBOL_WEIGHTS_FS,
} from './mathConfig';
import { SYMBOL_KEYS, type CalculateWinsResult, type ReelPosition, type SymbolKey } from './types';

export type Rng = () => number;

export function randomSymbol(
	reelIndex: number,
	isFreeSpinMode: boolean,
	rng: Rng = Math.random,
): SymbolKey {
	if (reelIndex === 6) {
		return rng() < 0.55 ? 'h' : 'emptyslot';
	}

	const symbolWeights = isFreeSpinMode ? SYMBOL_WEIGHTS_FS : SYMBOL_WEIGHTS_BASE;
	const rand = rng();
	let cumulative = 0;
	const availableSymbols = SYMBOL_KEYS.filter((symbol) => symbol !== 'h');
	const totalWeight = availableSymbols.reduce((sum, symbol) => sum + symbolWeights[symbol], 0);

	for (const symbol of availableSymbols) {
		cumulative += symbolWeights[symbol] / totalWeight;
		if (rand < cumulative) {
			return symbol;
		}
	}

	return 'f';
}

export function getReelPosition(reelIndex: number): ReelPosition {
	if (reelIndex < 3) return { col: 0, row: reelIndex };
	if (reelIndex < 6) return { col: 1, row: reelIndex - 3 };
	if (reelIndex === 6) return { col: 2, row: 0 };
	if (reelIndex < 10) return { col: 3, row: reelIndex - 7 };
	return { col: 4, row: reelIndex - 10 };
}

export function getReelIndex(col: number, row: number): number {
	if (col === 0) return row;
	if (col === 1) return 3 + row;
	if (col === 2) return 6;
	if (col === 3) return 7 + row;
	if (col === 4) return 10 + row;
	return -1;
}

export function getWinMultiplier(isFreeSpinMode: boolean, rng: Rng = Math.random): number {
	const rand = rng();
	const distribution = isFreeSpinMode
		? MULTIPLIER_DISTRIBUTIONS.freeSpins
		: MULTIPLIER_DISTRIBUTIONS.base;

	return (
		distribution.find((entry) => rand < entry.threshold)?.multiplier ??
		distribution.at(-1)!.multiplier
	);
}

interface WinPath {
	symbol: SymbolKey;
	length: number;
	path: number[];
	startRow: number;
}

export function calculateWins(
	reelData: SymbolKey[],
	betAmount: number,
	isFreeSpinMode: boolean,
	rng: Rng = Math.random,
): CalculateWinsResult {
	const wins: CalculateWinsResult['wins'] = [];
	const scatterPositions: number[] = [];

	for (let i = 0; i < reelData.length; i++) {
		if (reelData[i] === 'l') {
			scatterPositions.push(i);
		}
	}

	const scatterTrigger =
		scatterPositions.length >= 5
			? { scatterPositions, freeSpinsTriggered: scatterPositions.length }
			: null;

	if (scatterTrigger) {
		wins.push({
			symbol: 'l',
			count: scatterPositions.length,
			payout: 0,
			positions: scatterPositions,
			multiplier: 1,
		});
	}

	const allPaths: number[][] = [];

	for (let r0 = 0; r0 < 3; r0++) {
		for (let r1 = 0; r1 < 3; r1++) {
			for (let r2 = 0; r2 < 1; r2++) {
				for (let r3 = 0; r3 < 3; r3++) {
					for (let r4 = 0; r4 < 3; r4++) {
						allPaths.push([
							getReelIndex(0, r0),
							getReelIndex(1, r1),
							getReelIndex(2, r2),
							getReelIndex(3, r3),
							getReelIndex(4, r4),
						]);
					}
				}
			}
		}
	}

	console.log(`Generated ${allPaths.length} possible paths (should be 81)`);

	const allWins: WinPath[] = [];

	for (const path of allPaths) {
		const symbols = path.map((idx) => reelData[idx]);

		if (symbols[0] === 'emptyslot' || symbols[0] === 'l') continue;

		let winSymbol: SymbolKey | null = null;

		for (let i = 0; i < symbols.length; i++) {
			if (symbols[i] !== 'h' && symbols[i] !== 'emptyslot' && symbols[i] !== 'l') {
				winSymbol = symbols[i];
				break;
			}
		}

		if (!winSymbol) continue;

		let matchLength = 0;
		const columnsWithSymbol = new Set<number>();

		for (let i = 0; i < path.length; i++) {
			const position = path[i];
			const { col } = getReelPosition(position);
			const currentSymbol = symbols[i];

			if (currentSymbol === winSymbol || currentSymbol === 'h') {
				columnsWithSymbol.add(col);
			}
		}

		for (let col = 0; col < 5; col++) {
			if (columnsWithSymbol.has(col)) {
				matchLength++;
			} else {
				break;
			}
		}

		if (matchLength >= 3) {
			const startReelIndex = path[0];
			const startRow = startReelIndex % 3;

			allWins.push({
				symbol: winSymbol,
				length: matchLength,
				path: path.slice(0, matchLength),
				startRow,
			});
		}
	}

	const filteredWins: WinPath[] = [];
	const winsGroupedByPath = new Map<string, WinPath[]>();

	for (const win of allWins) {
		const pathKey = `${win.symbol}-${win.path.join(',')}`;
		if (!winsGroupedByPath.has(pathKey)) {
			winsGroupedByPath.set(pathKey, []);
		}
		winsGroupedByPath.get(pathKey)!.push(win);
	}

	for (const winsForPath of winsGroupedByPath.values()) {
		const maxLength = Math.max(...winsForPath.map((win) => win.length));
		const longestWin = winsForPath.find((win) => win.length === maxLength);

		if (longestWin) {
			filteredWins.push(longestWin);
		}
	}

	const foundWinCombos: CalculateWinsResult['wins'] = [];
	const winsBySymbol = new Map<SymbolKey, WinPath[]>();

	for (const win of filteredWins) {
		if (!winsBySymbol.has(win.symbol)) {
			winsBySymbol.set(win.symbol, []);
		}
		winsBySymbol.get(win.symbol)!.push(win);
	}

	const finalFilteredWins: WinPath[] = [];
	for (const winsForSymbol of winsBySymbol.values()) {
		const maxLength = Math.max(...winsForSymbol.map((win) => win.length));
		const longestWins = winsForSymbol.filter((win) => win.length === maxLength);
		finalFilteredWins.push(...longestWins);
	}

	const winsBySymbolAndLength = new Map<string, WinPath[]>();

	for (const win of finalFilteredWins) {
		const key = `${win.symbol}-${win.length}`;
		if (!winsBySymbolAndLength.has(key)) {
			winsBySymbolAndLength.set(key, []);
		}
		winsBySymbolAndLength.get(key)!.push(win);
	}

	const winMultiplier = finalFilteredWins.length > 0 ? getWinMultiplier(isFreeSpinMode, rng) : 1;

	for (const winsInGroup of winsBySymbolAndLength.values()) {
		const firstWin = winsInGroup[0];
		const payoutMultiplier = SYMBOL_PAYTABLE[firstWin.symbol]?.[firstWin.length as 3 | 4 | 5];

		if (payoutMultiplier !== undefined && payoutMultiplier > 0) {
			const positionsPerReel = new Map<number, Set<number>>();

			for (const win of winsInGroup) {
				for (let i = 0; i < win.length; i++) {
					if (!positionsPerReel.has(i)) {
						positionsPerReel.set(i, new Set());
					}
					positionsPerReel.get(i)!.add(win.path[i]);
				}
			}

			let ways = 1;
			for (let i = 0; i < firstWin.length; i++) {
				const positions = positionsPerReel.get(i);
				ways *= positions ? positions.size : 1;
			}

			const totalPayout = payoutMultiplier * betAmount * ways * winMultiplier;

			console.log(
				`  ${firstWin.length}x${firstWin.symbol}: ${ways} ways x ${payoutMultiplier}x x ${betAmount} bet x ${winMultiplier} mult = ${totalPayout}`,
			);

			const allPositions = new Set<number>();
			for (const win of winsInGroup) {
				win.path.forEach((position) => allPositions.add(position));
			}

			foundWinCombos.push({
				symbol: firstWin.symbol,
				count: firstWin.length,
				payout: totalPayout,
				positions: Array.from(allPositions),
				multiplier: winMultiplier,
			});
		}
	}

	wins.push(...foundWinCombos);

	return { wins, scatterTrigger };
}

export function runMathSmokeChecks() {
	const fixture: SymbolKey[] = ['k', 'k', 'k', 'k', 'k', 'k', 'h', 'k', 'k', 'k', 'k', 'k', 'k'];
	const result = calculateWins(fixture, 1, false, () => 0.1);
	return {
		reelIndexRoundTrip: getReelIndex(getReelPosition(12).col, getReelPosition(12).row) === 12,
		winCount: result.wins.length,
		firstPayout: result.wins.find((win) => win.symbol === 'k')?.payout ?? 0,
	};
}
