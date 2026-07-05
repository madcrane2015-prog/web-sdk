import type { SymbolKey } from './types';

export const BET_LEVELS = [0.4, 0.8, 1, 1.6, 2, 3, 5, 8, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100];

export const SYMBOL_WEIGHTS_BASE: Record<SymbolKey, number> = {
	k: 0.08,
	j: 0.07,
	i: 0.07,
	c: 0.07,
	d: 0.07,
	b: 0.07,
	a: 0.07,
	f: 0.06,
	e: 0.05,
	g: 0.04,
	l: 0.1,
	h: 0,
	emptyslot: 0.25,
};

export const SYMBOL_WEIGHTS_FS: Record<SymbolKey, number> = {
	k: 0,
	j: 0,
	i: 0,
	c: 0.07,
	d: 0.07,
	b: 0.07,
	a: 0.07,
	f: 0.14,
	e: 0.12,
	g: 0.11,
	l: 0.1,
	h: 0,
	emptyslot: 0.25,
};

export const SYMBOL_PAYTABLE: Record<SymbolKey, { 3?: number; 4?: number; 5?: number }> = {
	k: { 3: 0.2, 4: 0.6, 5: 1.5 },
	j: { 3: 0.4, 4: 1.0, 5: 2.5 },
	i: { 3: 0.4, 4: 1.0, 5: 2.5 },
	c: { 3: 0.8, 4: 2.0, 5: 5.0 },
	d: { 3: 0.8, 4: 2.0, 5: 5.0 },
	b: { 3: 1.5, 4: 4.0, 5: 8.0 },
	a: { 3: 1.5, 4: 4.0, 5: 8.0 },
	f: { 3: 3.0, 4: 8.0, 5: 20.0 },
	e: { 3: 5.0, 4: 10.0, 5: 25.0 },
	g: { 3: 7.0, 4: 15.0, 5: 50.0 },
	h: {},
	l: {},
	emptyslot: {},
};

export const MULTIPLIER_DISTRIBUTIONS = {
	base: [
		{ threshold: 0.7, multiplier: 1 },
		{ threshold: 0.92, multiplier: 2 },
		{ threshold: 1, multiplier: 3 },
	],
	freeSpins: [
		{ threshold: 0.7, multiplier: 3 },
		{ threshold: 0.92, multiplier: 5 },
		{ threshold: 1, multiplier: 10 },
	],
} as const;
