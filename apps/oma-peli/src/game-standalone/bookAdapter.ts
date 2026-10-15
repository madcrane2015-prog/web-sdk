import { SYMBOL_KEYS, type SymbolKey, type WinResult } from './types';
import { getReelIndex } from './math';
import type { RoundOutcome } from './roundProvider';

export interface BookReveal { type: 'reveal'; board: { name: string }[][]; }
export interface BookWin { symbol: string; kind: number; win: number; positions: { reel: number; row: number }[]; }
/** Explicit amounts conversion prevents accidentally treating API units as book units. */
export function adaptBookRound(reveal: BookReveal, wins: readonly BookWin[], amountToCredits: (amount:number)=>number, freeSpinsGranted = 0): RoundOutcome {
	const shape = reveal.board.map(column => column.length);
	const expected = [3,3,1,3,3];
	if (shape.length !== 5 || shape.some((size,i)=>size!==expected[i])) {
		throw new Error('Book board must use Rockabilly [3,3,1,3,3] coordinates');
	}
	const symbol = (name:string): SymbolKey => {
		if (!SYMBOL_KEYS.includes(name as SymbolKey)) throw new Error(`Unknown book symbol: ${name}`);
		return name as SymbolKey;
	};
	const symbols = reveal.board.flat().map(raw=>symbol(raw.name));
	const mapped: WinResult[] = wins.map(win => {
		const payout=amountToCredits(win.win);
		if (!Number.isFinite(payout)||payout<0) throw new Error('Invalid book payout');
		return {symbol:symbol(win.symbol),count:win.kind,payout,multiplier:1,positions:win.positions.map(position=>{
			if (!Number.isInteger(position.reel)||!Number.isInteger(position.row)||position.reel<0||position.reel>4||position.row<0||position.row>=expected[position.reel]) throw new Error('Invalid book position');
			return getReelIndex(position.reel,position.row);
		})};
	});
	if (!Number.isInteger(freeSpinsGranted)||freeSpinsGranted<0) throw new Error('Invalid free spin award');
	return {symbols,wins:mapped,scatterTrigger:freeSpinsGranted?{scatterPositions:symbols.flatMap((s,i)=>s==='l'?[i]:[]),freeSpinsTriggered:freeSpinsGranted}:null};
}
