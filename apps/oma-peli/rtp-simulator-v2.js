/**
 * RTP Simulator V2 - New Math System
 * - Empty slots 18% on reels 1,2,4,5
 * - New paytable multipliers
 * - Win multipliers: Base (1x/2x/3x), Free Spins (3x/5x/10x)
 * - Free spins triggered by 5-12 scatters (8-15 free spins)
 * - Target: 60-65% base RTP, 30-35% free spins RTP
 */

// Symbol weights (matching HelloPixi.svelte)
const SYMBOL_WEIGHTS = {
  k: 0.14,   // Red_milkshake (14%)
  j: 0.12,   // Red_fries (12%)
  i: 0.12,   // Red_burger (12%)
  c: 0.055,  // Blue_rollers (5.5%)
  d: 0.055,  // Blue_speakers (5.5%)
  b: 0.04,   // Blue_jacket (4%)
  a: 0.04,   // Blue_hotrod (4%)
  f: 0.02,   // Premium_brunette (2%)
  e: 0.012,  // Premium_blonde (1.2%)
  g: 0.008,  // Premium_rocker (0.8%) - JACKPOT
  l: 0.09,   // Premium_pin/Scatter (9%)
  emptyslot: 0.28  // Empty slots (28%) on outer reels
};

// Paytable (matching HelloPixi.svelte)
const SYMBOL_PAYTABLE = {
  k: { 3: 0.3, 4: 1, 5: 5 },      // Red_milkshake
  j: { 3: 0.5, 4: 2, 5: 10 },     // Red_fries
  i: { 3: 0.5, 4: 2, 5: 10 },     // Red_burger
  c: { 3: 1.5, 4: 5, 5: 20 },     // Blue_rollers
  d: { 3: 1.5, 4: 5, 5: 20 },     // Blue_speakers
  b: { 3: 2, 4: 7, 5: 25 },       // Blue_jacket
  a: { 3: 2, 4: 7, 5: 25 },       // Blue_hotrod
  f: { 3: 3, 4: 15, 5: 50 },      // Premium_brunette
  e: { 3: 5, 4: 20, 5: 75 },      // Premium_blonde
  g: { 3: 5, 4: 25, 5: 100 },     // Premium_rocker (JACKPOT!)
  h: {},                          // Wild
  l: {},                          // Scatter
  emptyslot: {}                   // Empty
};

// Generate win multiplier
function getWinMultiplier(isFreeSpinMode) {
  const rand = Math.random();
  if (isFreeSpinMode) {
    // Free spins: 3x (50%), 5x (30%), 10x (20%)
    if (rand < 0.5) return 3;
    if (rand < 0.8) return 5;
    return 10;
  } else {
    // Base game: 1x (50%), 2x (30%), 3x (20%)
    if (rand < 0.5) return 1;
    if (rand < 0.8) return 2;
    return 3;
  }
}

// Generate random symbol for a reel position
function randomSymbol(reelIndex) {
  // Reel 6 (middle) - ONLY emptyslot (50%) or Wild (50%)
  if (reelIndex === 6) {
    return Math.random() < 0.5 ? 'emptyslot' : 'h';
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
  
  // 1. Check scatters
  const scatterPositions = [];
  for (let i = 0; i < 13; i++) {
    if (reelData[i] === 'l') {
      scatterPositions.push(i);
    }
  }
  
  let freeSpinsTriggered = 0;
  if (scatterPositions.length >= 5) {
    freeSpinsTriggered = 8 + (scatterPositions.length - 5);
  }
  
  // 2. Build grid
  const grid = [
    [reelData[0], reelData[1], reelData[2]],
    [reelData[3], reelData[4], reelData[5]],
    [reelData[6]],
    [reelData[7], reelData[8], reelData[9]],
    [reelData[10], reelData[11], reelData[12]]
  ];
  
  // 3. Generate all 81 paths
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
  
  // 4. Count wins by symbol-length
  const winCounts = new Map();
  
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
      const winKey = `${winSymbol}-${matchLength}`;
      const existing = winCounts.get(winKey);
      if (existing) {
        existing.lineCount++;
      } else {
        winCounts.set(winKey, {
          symbol: winSymbol,
          length: matchLength,
          lineCount: 1
        });
      }
    }
  }
  
  // 5. Convert to wins with multiplier
  const winMultiplier = winCounts.size > 0 ? getWinMultiplier(isFreeSpinMode) : 1;
  
  for (const [key, winData] of winCounts.entries()) {
    const payoutMultiplier = SYMBOL_PAYTABLE[winData.symbol]?.[winData.length];
    
    if (payoutMultiplier !== undefined && payoutMultiplier > 0) {
      const basePayout = payoutMultiplier; // × 1 bet
      const finalPayout = basePayout * winMultiplier;
      
      wins.push({
        symbol: winData.symbol,
        count: winData.length,
        payout: finalPayout,
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
  const baseGameRTP = (baseGameWins / numSpins * 100).toFixed(2);
  const totalRTP = (totalWon / totalWagered * 100).toFixed(2);
  const hitFrequency = (totalWins / (numSpins + totalFreeSpinsPlayed) * 100).toFixed(2);
  const freeSpinsHitRate = (numSpins / totalFreeSpinsTriggered).toFixed(0);
  
  // Results
  console.log(`\n${'='.repeat(60)}`);
  console.log('RESULTS');
  console.log(`${'='.repeat(60)}`);
  console.log(`Total Wagered: ${totalWagered.toLocaleString()}`);
  console.log(`Total Won: ${totalWon.toLocaleString()}`);
  console.log(`Base Game RTP: ${baseGameRTP}%`);
  console.log(`Total RTP: ${totalRTP}%`);
  console.log(`Hit Frequency: ${hitFrequency}% (${totalWins.toLocaleString()} wins)`);
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
