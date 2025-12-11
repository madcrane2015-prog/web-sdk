/**
 * RTP Simulator V2 - 81 WAYS System
 * - 81 WAYS (no restrictions - all possible paths)
 * - User-specified paytable and hit rates
 * - Empty 75% (outer), Wild 50% (middle)
 * - Target: 15-22% hit rate, Free spins 1/75-175
 * - Win multipliers: Base (2x/3x/5x), Free Spins (2x/3x/5x)
 * - Free spins triggered by 5-12 scatters (5-12 free spins)
 */

// Symbol weights - NEW USER SPECIFICATIONS
const SYMBOL_WEIGHTS = {
  k: 0.09,   // Milkshake (9%)
  j: 0.08,   // Fries (8%)
  i: 0.08,   // Burger (8%)
  c: 0.07,   // Roller Skates (7%)
  d: 0.07,   // Microphone (7%)
  b: 0.07,   // Jacket (7%)
  a: 0.07,   // Hot Rod (7%)
  f: 0.06,   // Brunette (6%)
  e: 0.05,   // Blonde (5%)
  g: 0.04,   // Rockabilly (4%)
  l: 0.12,   // Scatter (12%)
  emptyslot: 0.20 // Empty (20%)
};

// Paytable - NEW USER SPECIFICATIONS (before multiplier)
const SYMBOL_PAYTABLE = {
  k: { 3: 0.2, 4: 0.6, 5: 2 },      // Milkshake
  j: { 3: 0.5, 4: 1, 5: 3 },        // Fries
  i: { 3: 0.5, 4: 1, 5: 3 },        // Burger
  c: { 3: 1, 4: 3, 5: 10 },         // Roller Skates
  d: { 3: 1, 4: 3, 5: 10 },         // Microphone
  b: { 3: 2, 4: 5, 5: 15 },         // Jacket
  a: { 3: 2, 4: 5, 5: 15 },         // Hot Rod
  f: { 3: 3, 4: 10, 5: 20 },        // Brunette
  e: { 3: 5, 4: 15, 5: 25 },        // Blonde
  g: { 3: 10, 4: 25, 5: 50 },       // Rockabilly
  h: {},                            // Wild
  l: {},                            // Scatter
  emptyslot: {}                     // Empty
};

// Multiplier system - Center reel (position 6)
function getWinMultiplier(isFreeSpinMode) {
  const rand = Math.random();
  
  if (isFreeSpinMode) {
    // Free spins: 2x/5x/10x (need distribution)
    // Using placeholder: 50% 2x, 30% 5x, 20% 10x
    if (rand < 0.50) return 2;
    if (rand < 0.80) return 5;
    return 10;
  } else {
    // Base game: Empty 50%, 1x 25%, 2x 15%, 3x 10%
    if (rand < 0.50) return 1; // Empty = no multiplier
    if (rand < 0.75) return 1; // 1x
    if (rand < 0.90) return 2; // 2x
    return 3; // 3x
  }
}

// Generate random symbol for a reel position
function randomSymbol(reelIndex) {
  // Reel 6 (middle) - emptyslot (50%) or Wild (50%)
  if (reelIndex === 6) {
    return Math.random() < 0.50 ? 'emptyslot' : 'h';
  }
  
  // Outer reels - Include Empty, no Wild
  const availableSymbols = Object.keys(SYMBOL_WEIGHTS).filter(s => s !== 'h');
  const totalWeight = availableSymbols.reduce((sum, sym) => sum + SYMBOL_WEIGHTS[sym], 0);
  const rand = Math.random();
  let cumulative = 0;
  
  for (const symbol of availableSymbols) {
    cumulative += SYMBOL_WEIGHTS[symbol] / totalWeight;
    if (rand < cumulative) return symbol;
  }
  return 'k';
}

// Create reel data (13 positions)
function createReelData() {
  const reelData = [];
  for (let i = 0; i < 13; i++) {
    reelData.push(randomSymbol(i));
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

// Check wins (81-ways system)
function checkWins(reelData, isFreeSpinMode) {
  const wins = [];
  
  // FREE SPINS: Replace Jacket (b) with Rockabilly (g)
  if (isFreeSpinMode) {
    reelData = reelData.map(symbol => symbol === 'b' ? 'g' : symbol);
  }
  
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
  
  // 2. Build grid
  const grid = [
    [reelData[0], reelData[1], reelData[2]],
    [reelData[3], reelData[4], reelData[5]],
    [reelData[6]],
    [reelData[7], reelData[8], reelData[9]],
    [reelData[10], reelData[11], reelData[12]]
  ];
  
  // 3. Generate 81 paths (NO restrictions - all possible paths)
  const allPaths = [];
  for (let r0 = 0; r0 < 3; r0++) {
    for (let r1 = 0; r1 < 3; r1++) {
      for (let r2 = 0; r2 < 1; r2++) {
        for (let r3 = 0; r3 < 3; r3++) {
          for (let r4 = 0; r4 < 3; r4++) {
            const path = [
              getReelIndex(0, r0),
              getReelIndex(1, r1),
              getReelIndex(2, r2),
              getReelIndex(3, r3),
              getReelIndex(4, r4)
            ];
            allPaths.push(path);
          }
        }
      }
    }
  }
  
  // 4. Collect ALL wins with start row tracking
  const allWins = [];
  
  for (const path of allPaths) {
    const symbols = path.map(idx => reelData[idx]);
    
    // Skip if first is empty or scatter
    if (symbols[0] === 'emptyslot' || symbols[0] === 'l') continue;
    
    // Find win symbol (first non-wild)
    let winSymbol = null;
    for (let i = 0; i < symbols.length; i++) {
      if (symbols[i] !== 'h' && symbols[i] !== 'emptyslot' && symbols[i] !== 'l') {
        winSymbol = symbols[i];
        break;
      }
    }
    
    if (!winSymbol) continue;
    
    // Count consecutive matches
    let matchLength = 0;
    for (let i = 0; i < symbols.length; i++) {
      if (symbols[i] === winSymbol || symbols[i] === 'h') {
        matchLength++;
      } else {
        break;
      }
    }
    
    // Min 3 symbols to win
    if (matchLength >= 3) {
      const startRow = path[0] % 3;
      allWins.push({
        symbol: winSymbol,
        length: matchLength,
        startRow: startRow,
        path: path // Tallenna polku uniikin tunnistuksen mahdollistamiseksi
      });
    }
  }
  
  // Filter: Keep only LONGEST wins for each UNIQUE PATH
  // In ways games, each unique path pays separately!
  const filteredWins = [];
  const winsGroupedByPath = new Map();
  
  for (const win of allWins) {
    // Käytä koko polkua avaimena (symboli + polku)
    const pathKey = `${win.symbol}-${win.path.join(',')}`;
    if (!winsGroupedByPath.has(pathKey)) {
      winsGroupedByPath.set(pathKey, []);
    }
    winsGroupedByPath.get(pathKey).push(win);
  }
  
  // Jokaisesta polusta ota vain PISIN voitto
  for (const [pathKey, winsInGroup] of winsGroupedByPath.entries()) {
    const maxLength = Math.max(...winsInGroup.map(w => w.length));
    const longestWin = winsInGroup.find(w => w.length === maxLength);
    
    if (longestWin) {
      filteredWins.push(longestWin);
    }
  }
  
  // 5. WAYS LOGIC: Count symbols per reel, multiply counts = ways
  const winsBySymbolAndLength = new Map();
  
  for (const win of filteredWins) {
    const key = `${win.symbol}-${win.length}`;
    if (!winsBySymbolAndLength.has(key)) {
      winsBySymbolAndLength.set(key, []);
    }
    winsBySymbolAndLength.get(key).push(win);
  }
  
  // One multiplier for the entire spin
  const winMultiplier = filteredWins.length > 0 ? getWinMultiplier(isFreeSpinMode) : 1;
  
  // Process each symbol+length combination
  for (const [key, winsInGroup] of winsBySymbolAndLength.entries()) {
    const firstWin = winsInGroup[0];
    const payoutMultiplier = SYMBOL_PAYTABLE[firstWin.symbol]?.[firstWin.length];
    
    if (payoutMultiplier !== undefined && payoutMultiplier > 0) {
      // WAYS: Count how many of this symbol on EACH reel
      // Multiply counts together = ways
      const symbolCountsPerReel = new Map();
      
      for (const win of winsInGroup) {
        for (let reelIndex = 0; reelIndex < win.length; reelIndex++) {
          if (!symbolCountsPerReel.has(reelIndex)) {
            symbolCountsPerReel.set(reelIndex, new Set());
          }
          symbolCountsPerReel.get(reelIndex).add(win.path[reelIndex]);
        }
      }
      
      // Multiply counts: ways = reel0_count × reel1_count × ... × reelN_count
      let ways = 1;
      for (let i = 0; i < firstWin.length; i++) {
        ways *= symbolCountsPerReel.get(i)?.size || 1;
      }
      
      const totalPayout = payoutMultiplier * winMultiplier * ways;
      
      wins.push({
        symbol: firstWin.symbol,
        count: firstWin.length,
        payout: totalPayout,
        multiplier: winMultiplier
      });
    }
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
    
    const reelData = createReelData();
    const { wins, freeSpinsTriggered } = checkWins(reelData, false);
    
    let spinWin = 0;
    if (wins.length > 0) {
      totalWins++;
      baseGameWins++;
      
      for (const win of wins) {
        spinWin += win.payout * betAmount;
        
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
        
        const fsReelData = createReelData();
        const { wins: fsWins, freeSpinsTriggered: fsRetrigger } = checkWins(fsReelData, true);
        
        let fsSpinWin = 0;
        if (fsWins.length > 0) {
          totalWins++;
          freeSpinWins++;
          
          for (const win of fsWins) {
            fsSpinWin += win.payout * betAmount;
            
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
