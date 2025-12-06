// RTP simulator for new paytable and symbol distribution

const SYMBOL_PAYTABLE = {
  // Red tier (cheap) - FINAL: Lower values but frequent
  'a': { 3: 0.15, 4: 0.5, 5: 2.4 },   // Red_milkshake
  'b': { 3: 0.25, 4: 1, 5: 5 },       // Red_fries
  'c': { 3: 0.25, 4: 1, 5: 5 },       // Red_burger
  
  // Blue tier (mid) - FINAL
  'd': { 3: 0.75, 4: 2.5, 5: 10 },    // Blue_rollers
  'e': { 3: 0.75, 4: 2.5, 5: 10 },    // Blue_speakers
  'f': { 3: 1, 4: 3.5, 5: 12.5 },     // Blue_jacket
  'g': { 3: 1, 4: 3.5, 5: 12.5 },     // Blue_hotrod
  
  // Premium tier (expensive) - FINAL
  'i': { 3: 1.5, 4: 7.5, 5: 25 },     // Premium_brunette
  'j': { 3: 2.5, 4: 10, 5: 37.5 },    // Premium_blonde
  'k': { 3: 2.5, 4: 12.5, 5: 50 },    // Premium_rocker
  'l': { 3: 2.5, 4: 12.5, 5: 50 },    // Premium_pin
  
  // Wild
  'h': { 3: 0, 4: 0, 5: 0 }           // Red_bubblegum (Wild)
};

// New symbol distribution - MORE CHEAP SYMBOLS as requested
const SYMBOL_WEIGHTS = {
  // Red tier - 48% of symbols (MANY cheap symbols as requested!)
  'a': 0.18,  // Red_milkshake (18%)
  'b': 0.15,  // Red_fries (15%)
  'c': 0.15,  // Red_burger (15%)
  
  // Blue tier - 32% of symbols (mid)
  'd': 0.09,  // Blue_rollers (9%)
  'e': 0.09,  // Blue_speakers (9%)
  'f': 0.07,  // Blue_jacket (7%)
  'g': 0.07,  // Blue_hotrod (7%)
  
  // Premium tier - 12% of symbols (rare expensive)
  'i': 0.04,  // Premium_brunette (4%)
  'j': 0.03,  // Premium_blonde (3%)
  'k': 0.025, // Premium_rocker (2.5%)
  'l': 0.025, // Premium_pin (2.5%)
  
  // Wild - 8% (middle reel 50%, others 0%)
  'h': 0.08   // Red_bubblegum (Wild) - special handling
};

function randomSymbol(reelIndex) {
  // Middle reel (index 6) - 50% Wild, 50% empty
  if (reelIndex === 6) {
    return Math.random() < 0.5 ? 'emptyslot' : 'h';
  }
  
  // Other reels - weighted distribution (no Wild except on middle reel)
  const rand = Math.random();
  let cumulative = 0;
  
  const symbols = Object.entries(SYMBOL_WEIGHTS).filter(([sym]) => sym !== 'h'); // No Wild on other reels
  
  // Normalize weights after removing Wild
  const totalWeight = symbols.reduce((sum, [_, weight]) => sum + weight, 0);
  
  for (const [symbol, weight] of symbols) {
    cumulative += weight / totalWeight;
    if (rand < cumulative) {
      return symbol;
    }
  }
  
  return 'a'; // Fallback
}

function generatePaths() {
  const paths = [];
  // 81 paths: 3 rows × 3 rows × 1 middle × 3 rows × 3 rows = 81
  for (let r0 = 0; r0 < 3; r0++) {
    for (let r1 = 0; r1 < 3; r1++) {
      for (let r2 = 0; r2 < 1; r2++) { // Middle reel has only 1 position
        for (let r3 = 0; r3 < 3; r3++) {
          for (let r4 = 0; r4 < 3; r4++) {
            paths.push([r0, r1 + 3, 6, r3 + 7, r4 + 10]);
          }
        }
      }
    }
  }
  return paths;
}

function checkWins(reelData) {
  const paths = generatePaths();
  const winsBySymbolAndLength = {};
  
  for (const path of paths) {
    const symbols = path.map(reelIdx => reelData[reelIdx]);
    
    // Skip if first symbol is empty
    if (symbols[0] === 'emptyslot') continue;
    
    let matchLength = 1;
    let firstSymbol = symbols[0];
    
    // Count consecutive matches (Wild substitutes)
    for (let i = 1; i < symbols.length; i++) {
      const currentSymbol = symbols[i];
      
      if (currentSymbol === 'emptyslot') {
        break;
      }
      
      // Wild substitution
      if (currentSymbol === 'h' || firstSymbol === 'h') {
        if (firstSymbol === 'h' && currentSymbol !== 'h') {
          firstSymbol = currentSymbol;
        }
        matchLength++;
      } else if (currentSymbol === firstSymbol) {
        matchLength++;
      } else {
        break;
      }
    }
    
    // Record win if 3+ matches
    if (matchLength >= 3 && firstSymbol !== 'h') {
      const key = `${firstSymbol}-${matchLength}`;
      winsBySymbolAndLength[key] = (winsBySymbolAndLength[key] || 0) + 1;
    }
  }
  
  // Calculate total win
  let totalWin = 0;
  for (const [key, count] of Object.entries(winsBySymbolAndLength)) {
    const [symbol, length] = key.split('-');
    const lengthNum = parseInt(length);
    
    if (SYMBOL_PAYTABLE[symbol] && SYMBOL_PAYTABLE[symbol][lengthNum]) {
      const multiplier = SYMBOL_PAYTABLE[symbol][lengthNum];
      totalWin += multiplier; // Pay once per combo
    }
  }
  
  return totalWin;
}

// Simulate
const SPINS = 1000000;
let totalWagered = SPINS;
let totalWon = 0;
let totalWins = 0;
let biggestWin = 0;
const winDistribution = {};

console.log('Starting simulation with new distribution...');
console.log('Symbol weights:');
for (const [sym, weight] of Object.entries(SYMBOL_WEIGHTS)) {
  if (sym !== 'h') {
    console.log(`  ${sym}: ${(weight * 100).toFixed(1)}%`);
  }
}
console.log('  h (Wild): 50% on middle reel, 0% on others');
console.log('');

for (let i = 0; i < SPINS; i++) {
  // Generate reel data
  const reelData = [];
  for (let reelIdx = 0; reelIdx < 13; reelIdx++) {
    reelData.push(randomSymbol(reelIdx));
  }
  
  const win = checkWins(reelData);
  totalWon += win;
  
  if (win > 0) {
    totalWins++;
    if (win > biggestWin) biggestWin = win;
    
    const winKey = Math.floor(win);
    winDistribution[winKey] = (winDistribution[winKey] || 0) + 1;
  }
  
  if ((i + 1) % 100000 === 0) {
    const currentRTP = (totalWon / totalWagered) * 100;
    console.log(`${((i + 1) / 1000000).toFixed(1)}M spins: RTP = ${currentRTP.toFixed(2)}%`);
  }
}

const rtp = (totalWon / totalWagered) * 100;
const hitFrequency = (totalWins / SPINS) * 100;
const avgWin = totalWon / totalWins;

console.log('\n=== RESULTS ===');
console.log(`Total spins: ${SPINS.toLocaleString()}`);
console.log(`Total wagered: ${totalWagered.toLocaleString()}`);
console.log(`Total won: ${totalWon.toFixed(2)}`);
console.log(`RTP: ${rtp.toFixed(2)}%`);
console.log(`Hit frequency: ${hitFrequency.toFixed(2)}%`);
console.log(`Average win: ${avgWin.toFixed(2)}x bet`);
console.log(`Biggest win: ${biggestWin.toFixed(2)}x bet`);

console.log('\n=== WIN DISTRIBUTION ===');
const sortedWins = Object.entries(winDistribution).sort((a, b) => parseInt(a[0]) - parseInt(b[0]));
for (const [win, count] of sortedWins.slice(0, 20)) {
  const percentage = (count / totalWins) * 100;
  console.log(`${win}x: ${count.toLocaleString()} (${percentage.toFixed(2)}%)`);
}
