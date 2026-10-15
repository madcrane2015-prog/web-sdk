/**
 * RTP Simulator V2 - 81 WAYS System
 * 
 * YAML CONFIG V1.0:
 * - 81 WAYS with TRUE ways logic (count symbols per reel, multiply)
 * - Empty: 25% | Scatter: 10% | Wild: 50% (middle reel only)
 * - Multipliers ENABLED: base game (1x/2x/3x), free spins (3x/5x/10x)
 * - Free spins: variable (5 scatters=5 spins, 6=6, ..., 12=12)
 * - Symbol replacement in free spins: k→f, j→e, i→g
 */

// Symbol weights - YAML CONFIG V1.0 - BASE GAME
const SYMBOL_WEIGHTS_BASE = {
  k: 0.08,          // Milkshake (8%)
  j: 0.07,          // Fries (7%)
  i: 0.07,          // Burger (7%)
  c: 0.07,          // Roller Skates (7%)
  d: 0.07,          // Microphone (7%)
  b: 0.07,          // Jacket (7%)
  a: 0.07,          // Hot Rod (7%)
  f: 0.06,          // Brunette (6%)
  e: 0.05,          // Blonde (5%)
  g: 0.04,          // Rockabilly (4%) - JACKPOT
  l: 0.10,          // Scatter (10%) - Free spins trigger
  emptyslot: 0.25   // Empty (25%) - RTP balancer
};

// Symbol weights - FREE SPINS (k/j/i removed, f/e/g increased)
const SYMBOL_WEIGHTS_FS = {
  k: 0,             // Milkshake - REMOVED in free spins
  j: 0,             // Fries - REMOVED in free spins
  i: 0,             // Burger - REMOVED in free spins
  c: 0.07,          // Roller Skates (7%)
  d: 0.07,          // Microphone (7%)
  b: 0.07,          // Jacket (7%)
  a: 0.07,          // Hot Rod (7%)
  f: 0.14,          // Brunette (6% + 8% from k = 14%)
  e: 0.12,          // Blonde (5% + 7% from j = 12%)
  g: 0.11,          // Rockabilly (4% + 7% from i = 11%)
  l: 0.10,          // Scatter (10%) - Free spins trigger
  emptyslot: 0.25   // Empty (25%) - RTP balancer
};

// Paytable from YAML config v1.0
const SYMBOL_PAYTABLE = {
  k: { 3: 0.20, 4: 0.60, 5: 1.50 },     // Red_milkshake
  j: { 3: 0.40, 4: 1.00, 5: 2.50 },     // Red_fries
  i: { 3: 0.40, 4: 1.00, 5: 2.50 },     // Red_burger
  c: { 3: 0.80, 4: 2.00, 5: 5.00 },     // Blue_rollers
  d: { 3: 0.80, 4: 2.00, 5: 5.00 },     // Blue_speakers
  b: { 3: 1.50, 4: 4.00, 5: 8.00 },     // Blue_jacket
  a: { 3: 1.50, 4: 4.00, 5: 8.00 },     // Blue_hotrod
  f: { 3: 3.00, 4: 8.00, 5: 20.00 },    // Premium_brunette
  e: { 3: 5.00, 4: 10.00, 5: 25.00 },   // Premium_blonde
  g: { 3: 7.00, 4: 15.00, 5: 50.00 },   // Premium_rocker (JACKPOT!)
  h: {},                                 // Wild
  l: {},                                 // Scatter
  emptyslot: {}                          // Empty
};

// Multipliers from YAML config v1.7
function getWinMultiplier(isFreeSpinMode) {
  const rand = Math.random();
  
  if (isFreeSpinMode) {
    // Free spins: 3x (70%), 5x (22%), 10x (8%)
    if (rand < 0.70) return 3;
    if (rand < 0.92) return 5;
    return 10;
  } else {
    // Base game: 1x (70%), 2x (22%), 3x (8%)
    if (rand < 0.70) return 1;
    if (rand < 0.92) return 2;
    return 3;
  }
}

// Generate random symbol for a reel position
function randomSymbol(reelIndex, isFreeSpinMode = false) {
  // Reel 6 (middle) - Wild (55%) or emptyslot (45%)
  if (reelIndex === 6) {
    return Math.random() < 0.55 ? 'h' : 'emptyslot';
  }
  
  // Select appropriate weight table
  const SYMBOL_WEIGHTS = isFreeSpinMode ? SYMBOL_WEIGHTS_FS : SYMBOL_WEIGHTS_BASE;
  
  // Outer reels - Include Empty, no Wild
  const availableSymbols = Object.keys(SYMBOL_WEIGHTS).filter(s => s !== 'h');
  const totalWeight = availableSymbols.reduce((sum, sym) => sum + SYMBOL_WEIGHTS[sym], 0);
  const rand = Math.random();
  let cumulative = 0;
  
  for (const symbol of availableSymbols) {
    cumulative += SYMBOL_WEIGHTS[symbol] / totalWeight;
    if (rand < cumulative) return symbol;
  }
  return 'f'; // Fallback to brunette in free spins, milkshake in base
}

// Create reel data (13 positions)
function createReelData(isFreeSpinMode = false) {
  const reelData = [];
  for (let i = 0; i < 13; i++) {
    // randomSymbol() now uses correct weights based on isFreeSpinMode
    // In free spins: k/j/i have 0 weight, f/e/g have increased weights
    const symbol = randomSymbol(i, isFreeSpinMode);
    reelData.push(symbol);
  }
  return reelData;
}

// Convert reel index to column/row
function getReelPosition(reelIndex) {
  if (reelIndex < 3) return { col: 0, row: reelIndex };
  if (reelIndex < 6) return { col: 1, row: reelIndex - 3 };
  if (reelIndex === 6) return { col: 2, row: 0 };
  if (reelIndex < 10) return { col: 3, row: reelIndex - 7 };
  return { col: 4, row: reelIndex - 10 };
}

// Convert column/row to reel index
function getReelIndex(col, row) {
  if (col === 0) return row;
  if (col === 1) return 3 + row;
  if (col === 2) return 6;
  if (col === 3) return 7 + row;
  if (col === 4) return 10 + row;
  return -1;
}

// Generate all 81 paths
function generateAllPaths() {
  const paths = [];
  for (let r0 = 0; r0 < 3; r0++) {
    for (let r1 = 0; r1 < 3; r1++) {
      for (let r2 = 0; r2 < 1; r2++) {
        for (let r3 = 0; r3 < 3; r3++) {
          for (let r4 = 0; r4 < 3; r4++) {
            paths.push([
              getReelIndex(0, r0),
              getReelIndex(1, r1),
              getReelIndex(2, r2),
              getReelIndex(3, r3),
              getReelIndex(4, r4)
            ]);
          }
        }
      }
    }
  }
  return paths;
}

// Check wins (81-ways system) - EXACTLY like math-sim.cjs
function checkWins(reelData, isFreeSpinMode) {
  const wins = [];
  
  // Symbol replacement already done in createReelData() for free spins
  // No need to do it again here
  
  // 1. Check scatters
  const scatterPositions = [];
  for (let i = 0; i < 13; i++) {
    if (reelData[i] === 'l') {
      scatterPositions.push(i);
    }
  }
  
  let freeSpinsTriggered = 0;
  if (scatterPositions.length >= 5) {
    freeSpinsTriggered = scatterPositions.length; // 5→5, 6→6, ..., 12→12
  }
  
  // 2. Generate all 81 paths and evaluate each
  const allPaths = generateAllPaths();
  const allWins = [];
  
  for (const path of allPaths) {
    const symbols = path.map(idx => reelData[idx]);
    
    // Skip if first is empty or scatter
    if (symbols[0] === 'emptyslot' || symbols[0] === 'l') continue;
    
    // Find win symbol (first non-wild)
    let winSymbol = null;
    for (let i = 0; i < symbols.length; i++) {
      const s = symbols[i];
      if (s !== 'h' && s !== 'emptyslot' && s !== 'l') {
        winSymbol = s;
        break;
      }
    }
    if (!winSymbol) continue;
    
    // Count how many consecutive COLUMNS (from left) contain the symbol
    // CRITICAL: For a 4-symbol win, symbol must appear on columns 0,1,2,3
    // If column 3 has no symbol, win stops at column 2 (= 3 symbols)
    const columnsWithSymbol = new Set();
    
    for (let i = 0; i < path.length; i++) {
      const position = path[i];
      const { col } = getReelPosition(position);
      const s = symbols[i];
      
      if (s === winSymbol || s === 'h') {
        columnsWithSymbol.add(col);
      }
    }
    
    // Check how many consecutive columns from left have the symbol
    let matchLength = 0;
    for (let col = 0; col < 5; col++) {
      if (columnsWithSymbol.has(col)) {
        matchLength++;
      } else {
        break;
      }
    }
    
    // Min 3 symbols to win
    if (matchLength >= 3) {
      allWins.push({
        symbol: winSymbol,
        length: matchLength,
        path: path.slice(0, matchLength) // Only winning positions
      });
    }
  }
  
  // 3. Keep longest win per unique path
  const groupedByPath = new Map();
  for (const w of allWins) {
    const k = `${w.symbol}-${w.path.join(',')}`;
    if (!groupedByPath.has(k)) groupedByPath.set(k, []);
    groupedByPath.get(k).push(w);
  }
  
  const filtered = [];
  for (const group of groupedByPath.values()) {
    const maxLen = Math.max(...group.map(x => x.length));
    const longest = group.find(x => x.length === maxLen);
    if (longest) filtered.push(longest);
  }
  
  // 4. Group by symbol+length for payout calculation (PAY ALL COMBINATIONS)
  // REMOVED: "Longest per symbol" filter - this was causing underpayment
  // Correct logic: Pay all symbol+length combinations separately
  const finalFiltered = filtered;
  
  // 5. Group by symbol+length for payout calculation
  const bySymbolLen = new Map();
  for (const w of finalFiltered) {
    const k = `${w.symbol}-${w.length}`;
    if (!bySymbolLen.has(k)) bySymbolLen.set(k, []);
    bySymbolLen.get(k).push(w);
  }
  
  // 7. One multiplier for the entire spin
  const winMultiplier = finalFiltered.length > 0 ? getWinMultiplier(isFreeSpinMode) : 1;
  
  // 8. Calculate payout for each symbol+length group
  for (const [key, group] of bySymbolLen.entries()) {
    const first = group[0];
    const symbol = first.symbol;
    const len = first.length;
    
    const pt = SYMBOL_PAYTABLE[symbol]?.[len];
    if (!(typeof pt === 'number' && pt > 0)) continue;
    
    // Count unique positions per reel from all winning paths in this group
    const positionsPerReel = new Map();
    for (const w of group) {
      for (let i = 0; i < len; i++) {
        if (!positionsPerReel.has(i)) positionsPerReel.set(i, new Set());
        positionsPerReel.get(i).add(w.path[i]);
      }
    }
    
    // Calculate ways by multiplying position counts
    let ways = 1;
    for (let i = 0; i < len; i++) {
      const s = positionsPerReel.get(i);
      ways *= s ? s.size : 1;
    }
    
    // Payout = paytable × ways × multiplier (bet is always 1.0)
    const payout = pt * ways * winMultiplier;
    
    wins.push({
      symbol: symbol,
      count: len,
      payout: payout,
      multiplier: winMultiplier,
      ways: ways
    });
  }
  
  return { wins, freeSpinsTriggered };
}

// Run simulation
function runSimulation(numSpins) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`RTP SIMULATOR V2 - ${numSpins.toLocaleString()} SPINS`);
  console.log(`${'='.repeat(60)}\n`);
  
  let totalWagered = 0;
  let totalWon = 0;
  let baseGameWon = 0;
  let freeSpinsWon = 0;
  let totalWins = 0;
  let biggestWin = 0;
  let totalFreeSpinsTriggered = 0;
  let totalFreeSpinsPlayed = 0;
  let freeSpinWins = 0;
  let baseGameWins = 0;
  
  const winDistribution = {};
  const multiplierDistribution = { 1: 0, 2: 0, 3: 0, 5: 0, 10: 0 };
  
  // Simulate base game spins
  for (let spin = 0; spin < numSpins; spin++) {
    const betAmount = 1;
    totalWagered += betAmount;
    
    const reelData = createReelData(false); // Base game - no symbol replacement
    const { wins, freeSpinsTriggered } = checkWins(reelData, false);
    
    let spinWin = 0;
    if (wins.length > 0) {
      totalWins++;
      baseGameWins++;
      
      for (const win of wins) {
        // Win payout already includes: paytable × multiplier × ways
        // Bet is always 1.0 in simulator
        spinWin += win.payout;
        
        // Track distribution
        const key = `${win.count}x${win.symbol}`;
        winDistribution[key] = (winDistribution[key] || 0) + 1;
        multiplierDistribution[win.multiplier]++;
      }
    }
    
    totalWon += spinWin;
    baseGameWon += spinWin;
    if (spinWin > biggestWin) biggestWin = spinWin;
    
    // Free spins triggered
    if (freeSpinsTriggered > 0) {
      totalFreeSpinsTriggered++;
      let freeSpinsRemaining = freeSpinsTriggered;
      
      // Play free spins
      while (freeSpinsRemaining > 0) {
        freeSpinsRemaining--;
        totalFreeSpinsPlayed++;
        
        const fsReelData = createReelData(true); // Free spins - with symbol replacement
        const { wins: fsWins, freeSpinsTriggered: fsRetrigger } = checkWins(fsReelData, true);
        
        let fsSpinWin = 0;
        if (fsWins.length > 0) {
          totalWins++;
          freeSpinWins++;
          
          for (const win of fsWins) {
            // Win payout already includes: paytable × multiplier × ways
            // Bet is always 1.0 in simulator
            fsSpinWin += win.payout;
            
            const key = `${win.count}x${win.symbol}`;
            winDistribution[key] = (winDistribution[key] || 0) + 1;
            multiplierDistribution[win.multiplier]++;
          }
        }
        
        totalWon += fsSpinWin;
        freeSpinsWon += fsSpinWin;
        if (fsSpinWin > biggestWin) biggestWin = fsSpinWin;
        
        // Retrigger
        if (fsRetrigger > 0) {
          freeSpinsRemaining += fsRetrigger;
        }
      }
    }
    
    // Progress
    if ((spin + 1) % 100000 === 0) {
      const currentRTP = (totalWon / totalWagered * 100).toFixed(2);
      console.log(`Progress: ${(spin + 1).toLocaleString()} spins, RTP: ${currentRTP}%`);
    }
  }
  
  // Calculate RTP
  const baseGameDirectRTP = (baseGameWon / totalWagered * 100).toFixed(2);
  const freeSpinsRTP = (freeSpinsWon / totalWagered * 100).toFixed(2);
  const totalRTP = (totalWon / totalWagered * 100).toFixed(2);
  const hitFrequency = (totalWins / (numSpins + totalFreeSpinsPlayed) * 100).toFixed(2);
  const freeSpinsHitRate = (numSpins / totalFreeSpinsTriggered).toFixed(0);
  const baseGamePct = (baseGameWon / totalWon * 100).toFixed(1);
  const freeSpinsPct = (freeSpinsWon / totalWon * 100).toFixed(1);
  
  // Results
  console.log(`\n${'='.repeat(60)}`);
  console.log('RESULTS');
  console.log(`${'='.repeat(60)}`);
  console.log(`Total Wagered: ${totalWagered.toLocaleString()}`);
  console.log(`Total Won: ${totalWon.toLocaleString()}`);
  console.log(`\nRTP Breakdown:`);
  console.log(`  Base Game (direct wins): ${baseGameDirectRTP}% | ${baseGamePct}% of total wins`);
  console.log(`  Free Spins (bonus wins):  ${freeSpinsRTP}% | ${freeSpinsPct}% of total wins`);
  console.log(`  ─────────────────────────────────────`);
  console.log(`  Total RTP: ${totalRTP}%`);
  console.log(`\nHit Frequency: ${hitFrequency}% (${totalWins.toLocaleString()} wins)`);
  console.log(`Biggest Win: ${biggestWin.toFixed(2)}x`);
  console.log(`\nFree Spins:`);
  console.log(`  Triggered: ${totalFreeSpinsTriggered.toLocaleString()} times`);
  console.log(`  Hit Rate: 1 in ${freeSpinsHitRate} spins`);
  console.log(`  Total Played: ${totalFreeSpinsPlayed.toLocaleString()}`);
  console.log(`  Base Game Wins: ${baseGameWins.toLocaleString()}`);
  console.log(`  Free Spin Wins: ${freeSpinWins.toLocaleString()}`);
  
  // Multiplier distribution
  console.log(`\nMultiplier Distribution:`);
  const totalMultipliers = Object.values(multiplierDistribution).reduce((a, b) => a + b, 0);
  for (const [mult, count] of Object.entries(multiplierDistribution)) {
    const pct = (count / totalMultipliers * 100).toFixed(2);
    console.log(`  ${mult}x: ${count.toLocaleString()} (${pct}%)`);
  }
  
  // Top 10 win combinations
  console.log(`\nTop 10 Win Combinations:`);
  const sorted = Object.entries(winDistribution).sort((a, b) => b[1] - a[1]).slice(0, 10);
  for (const [combo, count] of sorted) {
    console.log(`  ${combo}: ${count.toLocaleString()}`);
  }
  
  console.log(`\n${'='.repeat(60)}\n`);
}

// Run simulation
runSimulation(1000000);
