// game/symbols.ts

export type SymbolID = 0 | 1 | 2 | 3 | 4 | 5 | 6;

// 7 perussymbolia (voit muuttaa nämä kuviksi myöhemmin)
export const SYMBOLS: SymbolID[] = [0, 1, 2, 3, 4, 5, 6];

// 5 rullaa, 3 riviä
export const COLS = 5;
export const ROWS = 3;

// Luo satunnainen symboliruudukko (5x3)
export function generateRandomGrid(): SymbolID[][] {
  const grid: SymbolID[][] = [];

  for (let col = 0; col < COLS; col++) {
    const column: SymbolID[] = [];

    for (let row = 0; row < ROWS; row++) {
      const randomSymbol = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      column.push(randomSymbol);
    }

    grid.push(column);
  }

  return grid;
}
