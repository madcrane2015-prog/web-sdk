/**
 * QUICK RTP CALCULATOR
 * Nopea matematiikan testaustyökalu ilman 1M spin simulaatiota
 * Laskee teoreettiset odotusarvot suoraan todennäköisyyksistä
 */

// ============================================================
// CONFIGURATION - Muokkaa näitä arvoja testataksesi eri skenaarioita
// ============================================================

const CONFIG = {
  // Symbol weights (hit rates)
  SYMBOL_WEIGHTS: {
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

  // Paytable (before multiplier)
  SYMBOL_PAYTABLE: {
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

  // Base game multipliers (center reel)
  BASE_MULTIPLIERS: {
    1: 0.75,  // Empty 50% + 1x 25% = 75%
    2: 0.15,  // 2x 15%
    3: 0.10   // 3x 10%
  },

  // Free spins multipliers
  FS_MULTIPLIERS: {
    2: 0.50,  // Placeholder distribution
    5: 0.30,
    10: 0.20
  },

  // Free spins configuration
  SCATTER_RATE: 0.12,
  MIN_SCATTERS: 5,
  AVG_FREE_SPINS: 8.5,  // Average of 5-12 scatters

  // SYMBOL REPLACEMENT IN FREE SPINS
  // Set to null to disable, or specify: { from: 'k', to: 'g' }
  FS_SYMBOL_REPLACE: { from: 'b', to: 'g' }  // Jacket → Rockabilly
};

// ============================================================
// CALCULATION ENGINE
// ============================================================

function calculateAverageMultiplier(multipliers) {
  return Object.entries(multipliers).reduce((sum, [mult, prob]) => {
    return sum + (parseFloat(mult) * prob);
  }, 0);
}

function calculateSymbolEV(symbol, weights, paytable, grid = [3,3,1,3,3]) {
  const symbolWeight = weights[symbol];
  if (!symbolWeight || !paytable[symbol]) return 0;
  
  let ev = 0;
  const pays = paytable[symbol];
  
  // Calculate probabilities for 3, 4, and 5 symbol wins
  // Simplified: assume symbol appears independently on each reel
  
  // For 81-ways: 3×3×1×3×3 = multiply hit rates
  // P(3 symbols) = w^3 (first 3 reels)
  // P(4 symbols) = w^4 (first 4 reels) 
  // P(5 symbols) = w^5 (all 5 reels)
  
  const w = symbolWeight;
  const wildWeight = 0.50; // Middle reel is 50% wild
  
  // 5-of-a-kind (all reels)
  const p5 = Math.pow(w, 3) * wildWeight * Math.pow(w, 2);
  ev += p5 * (pays[5] || 0);
  
  // 4-of-a-kind (first 4 reels, exclude 5-of-a-kind)
  const p4 = Math.pow(w, 3) * wildWeight * w * (1 - w);
  ev += p4 * (pays[4] || 0);
  
  // 3-of-a-kind (first 3 reels, exclude 4 and 5)
  const p3 = Math.pow(w, 3) * (1 - wildWeight * w);
  ev += p3 * (pays[3] || 0);
  
  // Ways multiplier: count unique positions per reel
  // Average ways for different match counts
  const avgWays3 = 3 * 3 * 1; // 9 ways
  const avgWays4 = 3 * 3 * 1 * 3; // 27 ways  
  const avgWays5 = 3 * 3 * 1 * 3 * 3; // 81 ways
  
  return ev;
}

function calculateBaseGameRTP(config) {
  const avgMult = calculateAverageMultiplier(config.BASE_MULTIPLIERS);
  let totalEV = 0;
  
  for (const symbol of Object.keys(config.SYMBOL_PAYTABLE)) {
    const symbolEV = calculateSymbolEV(
      symbol, 
      config.SYMBOL_WEIGHTS,
      config.SYMBOL_PAYTABLE
    );
    totalEV += symbolEV;
  }
  
  return totalEV * avgMult * 100; // Convert to percentage
}

function calculateFreeSpinsRTP(config) {
  // Apply symbol replacement if configured
  let fsWeights = { ...config.SYMBOL_WEIGHTS };
  
  if (config.FS_SYMBOL_REPLACE) {
    const { from, to } = config.FS_SYMBOL_REPLACE;
    const replacedWeight = fsWeights[from];
    fsWeights[to] = (fsWeights[to] || 0) + replacedWeight;
    fsWeights[from] = 0;
  }
  
  const avgFsMult = calculateAverageMultiplier(config.FS_MULTIPLIERS);
  let totalEV = 0;
  
  for (const symbol of Object.keys(config.SYMBOL_PAYTABLE)) {
    const symbolEV = calculateSymbolEV(
      symbol,
      fsWeights,
      config.SYMBOL_PAYTABLE
    );
    totalEV += symbolEV;
  }
  
  // Free spins trigger rate
  const scatterRate = config.SCATTER_RATE;
  const minScatters = config.MIN_SCATTERS;
  
  // Approximate: probability of getting 5+ scatters on 13 positions
  // Binomial: P(X >= 5) where n=13, p=scatterRate
  // Simplified: use scatter^5 as rough estimate
  const fsHitRate = Math.pow(scatterRate, minScatters) * 500; // Rough approximation
  const avgSpins = config.AVG_FREE_SPINS;
  
  return totalEV * avgFsMult * fsHitRate * avgSpins * 100;
}

// ============================================================
// COMPARISON CALCULATOR
// ============================================================

function compareReplacements() {
  console.log('\n' + '='.repeat(60));
  console.log('QUICK RTP CALCULATOR - SYMBOL REPLACEMENT COMPARISON');
  console.log('='.repeat(60) + '\n');
  
  const symbols = ['k', 'j', 'i', 'c', 'd', 'b', 'a', 'f', 'e'];
  const symbolNames = {
    k: 'Milkshake',
    j: 'Fries',
    i: 'Burger', 
    c: 'Roller Skates',
    d: 'Microphone',
    b: 'Jacket',
    a: 'Hot Rod',
    f: 'Brunette',
    e: 'Blonde'
  };
  
  console.log('Testing: Replace symbol → Rockabilly (g) in Free Spins\n');
  console.log('Symbol          | Hit% | Pay(3/4/5) | Estimated FS RTP Impact');
  console.log('-'.repeat(60));
  
  for (const sym of symbols) {
    const testConfig = { ...CONFIG };
    testConfig.FS_SYMBOL_REPLACE = { from: sym, to: 'g' };
    
    const hitRate = (CONFIG.SYMBOL_WEIGHTS[sym] * 100).toFixed(1);
    const pays = CONFIG.SYMBOL_PAYTABLE[sym];
    const payStr = `${pays[3]}/${pays[4]}/${pays[5]}`;
    
    // Quick estimate: impact = (hitRate) * (payDiff) * fsMultiplier
    const oldEV = pays[5] * CONFIG.SYMBOL_WEIGHTS[sym];
    const newEV = CONFIG.SYMBOL_PAYTABLE.g[5] * CONFIG.SYMBOL_WEIGHTS[sym];
    const impact = ((newEV - oldEV) * 50).toFixed(1); // Rough multiplier
    
    console.log(
      `${symbolNames[sym].padEnd(15)} | ${hitRate.padStart(4)}% | ` +
      `${payStr.padEnd(10)} | +${impact}% RTP`
    );
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('CURRENT CONFIG:');
  console.log('='.repeat(60));
  
  if (CONFIG.FS_SYMBOL_REPLACE) {
    const { from, to } = CONFIG.FS_SYMBOL_REPLACE;
    console.log(`Free Spins: ${from} → ${to}`);
  } else {
    console.log('Free Spins: No replacement');
  }
  
  console.log('\nBase Game Multipliers:');
  for (const [mult, prob] of Object.entries(CONFIG.BASE_MULTIPLIERS)) {
    console.log(`  ${mult}x: ${(prob * 100).toFixed(1)}%`);
  }
  
  console.log('\nFree Spins Multipliers:');
  for (const [mult, prob] of Object.entries(CONFIG.FS_MULTIPLIERS)) {
    console.log(`  ${mult}x: ${(prob * 100).toFixed(1)}%`);
  }
  
  console.log('\n' + '='.repeat(60) + '\n');
}

// ============================================================
// RUN
// ============================================================

compareReplacements();

console.log('TIP: Muokkaa CONFIG-objektia tiedoston alussa testataksesi');
console.log('     eri symboli-korvauksia ja kertoimia!\n');
