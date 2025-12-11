/**
 * OMA PELI - MATEMATIIKKASIMULAATTORI
 * 
 * Nopea iterointityökalu pelimatematiikan testaukseen.
 * Muokkaa SCENARIOS-arrayta testaamaan eri konfiguraatioita.
 * Aja: node math-simulator.js
 */

// ============================================================
// BASE CONFIGURATION - Nykyinen pelimatematiikka
// ============================================================

const BASE_CONFIG = {
  name: "Base Configuration",
  
  // Symbol weights (hit rates per position, excluding center wild reel)
  symbolWeights: {
    k: 0.09,   // Milkshake
    j: 0.08,   // Fries
    i: 0.08,   // Burger
    c: 0.07,   // Roller Skates
    d: 0.07,   // Microphone
    b: 0.07,   // Jacket
    a: 0.07,   // Hot Rod
    f: 0.06,   // Brunette
    e: 0.05,   // Blonde
    g: 0.04,   // Rockabilly
    l: 0.12,   // Scatter
    emptyslot: 0.20 // Empty
  },

  // Paytable (bet multipliers for 3/4/5 of a kind)
  paytable: {
    k: { 3: 0.2, 4: 0.6, 5: 2 },
    j: { 3: 0.5, 4: 1, 5: 3 },
    i: { 3: 0.5, 4: 1, 5: 3 },
    c: { 3: 1, 4: 3, 5: 10 },
    d: { 3: 1, 4: 3, 5: 10 },
    b: { 3: 2, 4: 5, 5: 15 },
    a: { 3: 2, 4: 5, 5: 15 },
    f: { 3: 3, 4: 10, 5: 20 },
    e: { 3: 5, 4: 15, 5: 25 },
    g: { 3: 10, 4: 25, 5: 50 }
  },

  // Base game multipliers (center reel position 6)
  baseMultipliers: {
    empty: 0.50,  // 50% = no multiplier
    1: 0.25,      // 25% = 1x
    2: 0.15,      // 15% = 2x
    3: 0.10       // 10% = 3x
  },

  // Free spins multipliers
  freeSpinsMultipliers: {
    2: 0.50,   // 50% = 2x
    5: 0.30,   // 30% = 5x
    10: 0.20   // 20% = 10x
  },

  // Free spins trigger
  scatterSymbol: 'l',
  minScatters: 5,      // 5+ scatters trigger
  maxScatters: 12,     // Max 12 scatters
  scattersGiveSpins: 'equal', // 'equal' = 5 scatters = 5 spins, 'fixed' = always 10

  // Symbol replacement in free spins
  // null = no replacement, or { from: 'k', to: 'g' }
  freeSpinsReplace: null
};

// ============================================================
// TEST SCENARIOS - Lisää tähän testattavia konfiguraatioita
// ============================================================

const SCENARIOS = [
  // Scenario 1: Nykyinen setup ilman korvausta
  {
    ...BASE_CONFIG,
    name: "Current Setup (No Replacement)",
    freeSpinsReplace: null
  },

  // Scenario 2: Milkshake → Rockabilly
  {
    ...BASE_CONFIG,
    name: "Milkshake → Rockabilly (FS)",
    freeSpinsReplace: { from: 'k', to: 'g' }
  },

  // Scenario 3: Jacket → Rockabilly
  {
    ...BASE_CONFIG,
    name: "Jacket → Rockabilly (FS)",
    freeSpinsReplace: { from: 'b', to: 'g' }
  },

  // Scenario 4: Blonde → Rockabilly
  {
    ...BASE_CONFIG,
    name: "Blonde → Rockabilly (FS)",
    freeSpinsReplace: { from: 'e', to: 'g' }
  },

  // Scenario 5: Brunette → Rockabilly
  {
    ...BASE_CONFIG,
    name: "Brunette → Rockabilly (FS)",
    freeSpinsReplace: { from: 'f', to: 'g' }
  },

  // Scenario 6: Skaalaattu paytable (×0.70 kaikki arvot)
  {
    ...BASE_CONFIG,
    name: "Scaled Paytable (×0.70)",
    paytable: scalePaytable(BASE_CONFIG.paytable, 0.70),
    freeSpinsReplace: { from: 'b', to: 'g' }
  },

  // Scenario 7: Lower free spins multipliers
  {
    ...BASE_CONFIG,
    name: "Lower FS Multipliers (1x/2x/3x)",
    freeSpinsMultipliers: {
      1: 0.50,
      2: 0.30,
      3: 0.20
    },
    freeSpinsReplace: { from: 'b', to: 'g' }
  },

  // Scenario 8: Combination - Lower paytable + Blonde replace
  {
    ...BASE_CONFIG,
    name: "Scaled ×0.80 + Blonde→Rockabilly",
    paytable: scalePaytable(BASE_CONFIG.paytable, 0.80),
    freeSpinsReplace: { from: 'e', to: 'g' }
  }
];

// ============================================================
// HELPER FUNCTIONS
// ============================================================

function scalePaytable(paytable, multiplier) {
  const scaled = {};
  for (const [symbol, pays] of Object.entries(paytable)) {
    scaled[symbol] = {};
    for (const [count, value] of Object.entries(pays)) {
      scaled[symbol][count] = parseFloat((value * multiplier).toFixed(2));
    }
  }
  return scaled;
}

// ============================================================
// SIMULATION ENGINE
// ============================================================

class SlotSimulator {
  constructor(config) {
    this.config = config;
    this.stats = {
      totalSpins: 0,
      totalWagered: 0,
      totalWon: 0,
      baseGameWon: 0,
      freeSpinsWon: 0,
      totalWins: 0,
      baseGameWins: 0,
      freeSpinWins: 0,
      biggestWin: 0,
      freeSpinsTriggered: 0,
      freeSpinsPlayed: 0,
      multiplierDist: {},
      winComboDist: {}
    };
  }

  randomSymbol(reelIndex) {
    // Center reel (position 6) is 50% empty, 50% wild
    if (reelIndex === 6) {
      return Math.random() < 0.50 ? 'emptyslot' : 'h';
    }

    const weights = this.config.symbolWeights;
    const symbols = Object.keys(weights);
    const totalWeight = symbols.reduce((sum, s) => sum + weights[s], 0);
    
    let rand = Math.random() * totalWeight;
    for (const symbol of symbols) {
      rand -= weights[symbol];
      if (rand <= 0) return symbol;
    }
    return 'k'; // Fallback
  }

  createReelData() {
    return Array.from({ length: 13 }, (_, i) => this.randomSymbol(i));
  }

  getWinMultiplier(isFreeSpinMode) {
    const multipliers = isFreeSpinMode 
      ? this.config.freeSpinsMultipliers
      : this.config.baseMultipliers;

    const rand = Math.random();
    let cumulative = 0;

    for (const [mult, prob] of Object.entries(multipliers)) {
      cumulative += prob;
      if (rand < cumulative) {
        return mult === 'empty' ? 1 : parseInt(mult);
      }
    }
    return 1;
  }

  checkWins(reelData, isFreeSpinMode) {
    const wins = [];
    let reelDataCopy = [...reelData];

    // Apply symbol replacement in free spins
    if (isFreeSpinMode && this.config.freeSpinsReplace) {
      const { from, to } = this.config.freeSpinsReplace;
      reelDataCopy = reelDataCopy.map(s => s === from ? to : s);
    }

    // Check for scatter trigger
    const scatterCount = reelDataCopy.filter(s => s === this.config.scatterSymbol).length;
    let freeSpinsTriggered = 0;
    
    if (scatterCount >= this.config.minScatters) {
      if (this.config.scattersGiveSpins === 'equal') {
        freeSpinsTriggered = Math.min(scatterCount, this.config.maxScatters);
      } else {
        freeSpinsTriggered = 10; // Fixed amount
      }
    }

    // Build grid: [3,3,1,3,3]
    const grid = [
      [reelDataCopy[0], reelDataCopy[1], reelDataCopy[2]],
      [reelDataCopy[3], reelDataCopy[4], reelDataCopy[5]],
      [reelDataCopy[6]],
      [reelDataCopy[7], reelDataCopy[8], reelDataCopy[9]],
      [reelDataCopy[10], reelDataCopy[11], reelDataCopy[12]]
    ];

    // Generate all 81 paths
    const paths = [];
    for (let r0 = 0; r0 < 3; r0++) {
      for (let r1 = 0; r1 < 3; r1++) {
        for (let r2 = 0; r2 < 1; r2++) {
          for (let r3 = 0; r3 < 3; r3++) {
            for (let r4 = 0; r4 < 3; r4++) {
              paths.push([
                grid[0][r0],
                grid[1][r1],
                grid[2][r2],
                grid[3][r3],
                grid[4][r4]
              ]);
            }
          }
        }
      }
    }

    // Evaluate each path for wins
    const pathWins = [];
    for (const path of paths) {
      let firstSymbol = path[0];
      
      // Wild substitution
      if (firstSymbol === 'h') firstSymbol = path.find(s => s !== 'h' && s !== 'emptyslot') || 'h';
      if (firstSymbol === 'emptyslot' || firstSymbol === 'l' || firstSymbol === 'h') continue;

      let matchCount = 0;
      for (const symbol of path) {
        if (symbol === firstSymbol || symbol === 'h') {
          matchCount++;
        } else {
          break;
        }
      }

      if (matchCount >= 3) {
        const payout = this.config.paytable[firstSymbol]?.[matchCount] || 0;
        if (payout > 0) {
          pathWins.push({ symbol: firstSymbol, count: matchCount, payout, path });
        }
      }
    }

    // Group wins by symbol and count
    const winGroups = new Map();
    for (const win of pathWins) {
      const key = `${win.symbol}_${win.count}`;
      if (!winGroups.has(key)) {
        winGroups.set(key, []);
      }
      winGroups.get(key).push(win);
    }

    // Calculate ways for each win group
    const winMultiplier = this.getWinMultiplier(isFreeSpinMode);

    for (const [key, winsInGroup] of winGroups.entries()) {
      const firstWin = winsInGroup[0];
      const payoutMultiplier = firstWin.payout;

      // Count unique positions per reel
      const symbolCountsPerReel = new Map();
      for (const win of winsInGroup) {
        for (let reelIndex = 0; reelIndex < win.count; reelIndex++) {
          if (!symbolCountsPerReel.has(reelIndex)) {
            symbolCountsPerReel.set(reelIndex, new Set());
          }
          // Add position index based on reel structure
          const pathIndexToPosition = [
            [0, 1, 2],      // Reel 0
            [3, 4, 5],      // Reel 1
            [6],            // Reel 2
            [7, 8, 9],      // Reel 3
            [10, 11, 12]    // Reel 4
          ];
          
          // Find which position in the path maps to which grid position
          // This is complex, so we simplify by just tracking symbol occurrence
          symbolCountsPerReel.get(reelIndex).add(win.path[reelIndex]);
        }
      }

      // Calculate ways: multiply unique symbol counts per reel
      let ways = 1;
      for (let i = 0; i < firstWin.count; i++) {
        ways *= symbolCountsPerReel.get(i)?.size || 1;
      }

      const totalPayout = payoutMultiplier * winMultiplier * ways;

      wins.push({
        symbol: firstWin.symbol,
        count: firstWin.count,
        payout: totalPayout,
        ways,
        multiplier: winMultiplier
      });
    }

    return { wins, freeSpinsTriggered };
  }

  simulateSpin(isFreeSpinMode = false) {
    const reelData = this.createReelData();
    const { wins, freeSpinsTriggered } = this.checkWins(reelData, isFreeSpinMode);

    let spinWin = 0;
    if (wins.length > 0) {
      this.stats.totalWins++;
      if (isFreeSpinMode) {
        this.stats.freeSpinWins++;
      } else {
        this.stats.baseGameWins++;
      }

      for (const win of wins) {
        spinWin += win.payout;

        // Track distribution
        const comboKey = `${win.count}×${win.symbol}`;
        this.stats.winComboDist[comboKey] = (this.stats.winComboDist[comboKey] || 0) + 1;
        this.stats.multiplierDist[win.multiplier] = (this.stats.multiplierDist[win.multiplier] || 0) + 1;
      }
    }

    if (isFreeSpinMode) {
      this.stats.freeSpinsWon += spinWin;
    } else {
      this.stats.baseGameWon += spinWin;
    }

    this.stats.totalWon += spinWin;
    if (spinWin > this.stats.biggestWin) {
      this.stats.biggestWin = spinWin;
    }

    return { spinWin, freeSpinsTriggered };
  }

  run(numSpins = 100000) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`SIMULATING: ${this.config.name}`);
    console.log(`${'='.repeat(60)}`);
    console.log(`Spins: ${numSpins.toLocaleString()}`);
    
    const startTime = Date.now();

    for (let i = 0; i < numSpins; i++) {
      this.stats.totalSpins++;
      this.stats.totalWagered += 1;

      const { spinWin, freeSpinsTriggered } = this.simulateSpin(false);

      // Handle free spins
      if (freeSpinsTriggered > 0) {
        this.stats.freeSpinsTriggered++;
        let freeSpinsRemaining = freeSpinsTriggered;

        while (freeSpinsRemaining > 0) {
          freeSpinsRemaining--;
          this.stats.freeSpinsPlayed++;

          const { spinWin: fsWin, freeSpinsTriggered: fsRetrigger } = this.simulateSpin(true);

          if (fsRetrigger > 0) {
            freeSpinsRemaining += fsRetrigger;
          }
        }
      }
    }

    const elapsed = Date.now() - startTime;
    this.printResults(elapsed);
  }

  printResults(elapsed) {
    const s = this.stats;
    const baseGameRTP = ((s.baseGameWon / s.totalWagered) * 100).toFixed(2);
    const freeSpinsRTP = ((s.freeSpinsWon / s.totalWagered) * 100).toFixed(2);
    const totalRTP = ((s.totalWon / s.totalWagered) * 100).toFixed(2);
    const hitFreq = ((s.totalWins / (s.totalSpins + s.freeSpinsPlayed)) * 100).toFixed(2);
    const fsHitRate = s.freeSpinsTriggered > 0 ? Math.round(s.totalSpins / s.freeSpinsTriggered) : 0;
    const baseGamePct = ((s.baseGameWon / s.totalWon) * 100).toFixed(1);
    const freeSpinsPct = ((s.freeSpinsWon / s.totalWon) * 100).toFixed(1);

    console.log(`\n┌${'─'.repeat(58)}┐`);
    console.log(`│ RESULTS${' '.repeat(50)}│`);
    console.log(`├${'─'.repeat(58)}┤`);
    console.log(`│ RTP Breakdown:${' '.repeat(43)}│`);
    console.log(`│   Base Game:     ${baseGameRTP.padStart(6)}%  (${baseGamePct}% of wins)${' '.repeat(18 - baseGamePct.length)}│`);
    console.log(`│   Free Spins:    ${freeSpinsRTP.padStart(6)}%  (${freeSpinsPct}% of wins)${' '.repeat(18 - freeSpinsPct.length)}│`);
    console.log(`│   ─────────────────────────────────────────────────────│`);
    console.log(`│   TOTAL RTP:     ${totalRTP.padStart(6)}%${' '.repeat(32)}│`);
    console.log(`├${'─'.repeat(58)}┤`);
    console.log(`│ Performance:${' '.repeat(45)}│`);
    console.log(`│   Hit Frequency: ${hitFreq.padStart(6)}%${' '.repeat(32)}│`);
    console.log(`│   Biggest Win:   ${s.biggestWin.toFixed(2).padStart(6)}×${' '.repeat(32)}│`);
    console.log(`├${'─'.repeat(58)}┤`);
    console.log(`│ Free Spins:${' '.repeat(46)}│`);
    console.log(`│   Triggered:     ${s.freeSpinsTriggered.toLocaleString().padStart(8)} times${' '.repeat(25)}│`);
    console.log(`│   Hit Rate:      1 in ${fsHitRate.toString().padStart(4)} spins${' '.repeat(24)}│`);
    console.log(`│   Total Played:  ${s.freeSpinsPlayed.toLocaleString().padStart(8)} spins${' '.repeat(25)}│`);
    console.log(`├${'─'.repeat(58)}┤`);
    console.log(`│ Simulation Time: ${(elapsed / 1000).toFixed(2)}s${' '.repeat(35 - (elapsed / 1000).toFixed(2).length)}│`);
    console.log(`└${'─'.repeat(58)}┘`);
  }
}

// ============================================================
// RUN ALL SCENARIOS
// ============================================================

function runAllScenarios(numSpins = 100000) {
  console.log('\n' + '█'.repeat(62));
  console.log('█' + ' '.repeat(60) + '█');
  console.log('█' + '  OMA PELI - MATHEMATICS SIMULATOR'.padEnd(61) + '█');
  console.log('█' + ' '.repeat(60) + '█');
  console.log('█'.repeat(62));
  console.log(`\nTesting ${SCENARIOS.length} scenarios with ${numSpins.toLocaleString()} spins each...\n`);

  const results = [];

  for (const scenario of SCENARIOS) {
    const sim = new SlotSimulator(scenario);
    sim.run(numSpins);
    
    results.push({
      name: scenario.name,
      rtp: ((sim.stats.totalWon / sim.stats.totalWagered) * 100).toFixed(2),
      baseRTP: ((sim.stats.baseGameWon / sim.stats.totalWagered) * 100).toFixed(2),
      fsRTP: ((sim.stats.freeSpinsWon / sim.stats.totalWagered) * 100).toFixed(2),
      hitFreq: ((sim.stats.totalWins / (sim.stats.totalSpins + sim.stats.freeSpinsPlayed)) * 100).toFixed(2),
      biggestWin: sim.stats.biggestWin.toFixed(2)
    });
  }

  // Print comparison table
  console.log('\n' + '='.repeat(120));
  console.log('COMPARISON TABLE');
  console.log('='.repeat(120));
  console.log(
    'Scenario'.padEnd(40) + 
    'Total RTP'.padStart(12) + 
    'Base RTP'.padStart(12) + 
    'FS RTP'.padStart(12) + 
    'Hit Freq'.padStart(12) + 
    'Max Win'.padStart(12)
  );
  console.log('-'.repeat(120));

  for (const result of results) {
    console.log(
      result.name.padEnd(40) +
      (result.rtp + '%').padStart(12) +
      (result.baseRTP + '%').padStart(12) +
      (result.fsRTP + '%').padStart(12) +
      (result.hitFreq + '%').padStart(12) +
      (result.biggestWin + '×').padStart(12)
    );
  }

  console.log('='.repeat(120) + '\n');
}

// ============================================================
// MAIN
// ============================================================

const numSpins = process.argv[2] ? parseInt(process.argv[2]) : 100000;
runAllScenarios(numSpins);

console.log('💡 TIP: Muokkaa SCENARIOS-arrayta testataksesi eri konfiguraatioita!');
console.log('💡 Aja: node math-simulator.js [spins] (default: 100 000)\n');
