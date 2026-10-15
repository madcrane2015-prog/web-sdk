// RTP Simulator for 81-ways slot game
// Simuloi miljoonan pyöräytyksen tulokset ja laskee tarkan RTP:n

const SYMBOL_KEYS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

// Paytable - symbolien voitot 3x, 4x, 5x osumille (kertoimet x Bet)
// Adjusted for ~60% base RTP + ~36% bonus RTP = ~96% total
const SYMBOL_PAYTABLE = {
  k: { 3: 0.025, 4: 0.06, 5: 0.24 },   // Red_milkshake
  j: { 3: 0.025, 4: 0.1, 5: 0.48 },    // Red_fries
  i: { 3: 0.025, 4: 0.1, 5: 0.48 },    // Red_burger
  c: { 3: 0.06, 4: 0.15, 5: 0.9 },     // Blue_rollers
  d: { 3: 0.06, 4: 0.15, 5: 0.9 },     // Blue_speakers
  b: { 3: 0.08, 4: 0.3, 5: 1.5 },      // Blue_jacket
  a: { 3: 0.08, 4: 0.3, 5: 1.5 },      // Blue_hotrod
  f: { 3: 0.15, 4: 0.6, 5: 3 },        // Premium_brunette
  e: { 3: 0.3, 4: 1.2, 5: 6 },         // Premium_blonde
  g: { 3: 0.45, 4: 1.8, 5: 9 },        // Premium_rocker
  h: {},                               // Wild
  l: {},                               // Scatter
  emptyslot: {}                        // Tyhjä
};

// Satunnainen symboli tietylle kiekolle
function randomSymbol(reelIndex) {
  // Reel 6 (keskikiekko) - VAIN emptyslot ja h (Wild)
  if (reelIndex === 6) {
    return Math.random() < 0.5 ? 'emptyslot' : 'h';
  }
  
  // Muut kiekot - kaikki symbolit PAITSI emptyslot (a-l = 12 symbolia)
  const availableSymbols = SYMBOL_KEYS.filter(s => s !== 'emptyslot');
  return availableSymbols[Math.floor(Math.random() * availableSymbols.length)];
}

// Luo 13 kiekkoa
function createReelData() {
  const reelData = [];
  for (let i = 0; i < 13; i++) {
    reelData.push(randomSymbol(i));
  }
  return reelData;
}

// Tarkista voitot 81-ways järjestelmällä
function checkWins(reelData) {
  const wins = [];
  
  // Rakenna grid (5 saraketta x 3 riviä, keskisarake vain 1)
  const grid = [
    [reelData[0], reelData[1], reelData[2]],        // Sarake 0
    [reelData[3], reelData[4], reelData[5]],        // Sarake 1
    [reelData[6]],                                   // Sarake 2 (keskikiekko)
    [reelData[7], reelData[8], reelData[9]],        // Sarake 3
    [reelData[10], reelData[11], reelData[12]]      // Sarake 4
  ];
  
  // Käy läpi kaikki 81 polkua
  for (let path0 = 0; path0 < 3; path0++) {
    for (let path1 = 0; path1 < 3; path1++) {
      for (let path2 = 0; path2 < 1; path2++) {
        for (let path3 = 0; path3 < 3; path3++) {
          for (let path4 = 0; path4 < 3; path4++) {
            const symbols = [
              grid[0][path0],
              grid[1][path1],
              grid[2][path2],
              grid[3][path3],
              grid[4][path4]
            ];
            
            // Laske match
            const winResult = calculateMatch(symbols);
            if (winResult && winResult.count >= 3) {
              wins.push(winResult);
            }
          }
        }
      }
    }
  }
  
  return wins;
}

// Laske matching symbolit polulla
function calculateMatch(symbols) {
  let matchSymbol = null;
  let matchCount = 0;
  
  // Aloita vasemmalta
  for (let i = 0; i < symbols.length; i++) {
    const currentSymbol = symbols[i];
    
    // Ohita emptyslot
    if (currentSymbol === 'emptyslot') {
      break;
    }
    
    // Wild (h) korvaa minkä tahansa symbolin
    if (currentSymbol === 'h') {
      matchCount++;
      continue;
    }
    
    // Scatter (l) ei ole osa line-voittoja
    if (currentSymbol === 'l') {
      break;
    }
    
    // Ensimmäinen ei-wild symboli määrittää mitä etsitään
    if (matchSymbol === null) {
      matchSymbol = currentSymbol;
      matchCount++;
    } else if (currentSymbol === matchSymbol) {
      matchCount++;
    } else {
      break; // Ketju katkeaa
    }
  }
  
  // Jos löytyi vähintään 3 matchaavaa
  if (matchCount >= 3 && matchSymbol && matchSymbol !== 'h' && matchSymbol !== 'l') {
    const multiplierTable = SYMBOL_PAYTABLE[matchSymbol];
    if (multiplierTable && multiplierTable[matchCount]) {
      return {
        symbol: matchSymbol,
        count: matchCount,
        baseMultiplier: multiplierTable[matchCount]
      };
    }
  }
  
  return null;
}

// Aggregoi voitot - MAKSA VAIN KERRAN per symboli-yhdistelmä
function aggregateWins(wins) {
  const aggregated = new Map();
  
  for (const win of wins) {
    const key = `${win.symbol}-${win.count}`;
    if (!aggregated.has(key)) {
      aggregated.set(key, {
        symbol: win.symbol,
        count: win.count,
        ways: 1, // Lasketaan ways, mutta maksetaan vain kerran
        baseMultiplier: win.baseMultiplier
      });
    } else {
      // Vain kasvatetaan ways-laskuria, ei makseta uudestaan
      aggregated.get(key).ways++;
    }
  }
  
  return Array.from(aggregated.values());
}

// Simuloi spini
function simulateSpin(betAmount = 1) {
  const reelData = createReelData();
  const wins = checkWins(reelData);
  const aggregated = aggregateWins(wins);
  
  let totalWin = 0;
  
  for (const win of aggregated) {
    // Maksetaan VAIN KERRAN per symboli-yhdistelmä (ei per way, ei multiplieriä)
    const finalWin = win.baseMultiplier * betAmount;
    
    totalWin += finalWin;
  }
  
  return totalWin;
}

// Simuloi N pyöräytystä
function simulate(numSpins = 1000000, betAmount = 1) {
  console.log(`\n🎰 Starting RTP simulation...`);
  console.log(`Spins: ${numSpins.toLocaleString()}`);
  console.log(`Bet per spin: ${betAmount}`);
  console.log(`Total wagered: ${(numSpins * betAmount).toLocaleString()}\n`);
  
  let totalWagered = 0;
  let totalWon = 0;
  let totalWins = 0;
  let biggestWin = 0;
  
  const startTime = Date.now();
  
  for (let i = 0; i < numSpins; i++) {
    totalWagered += betAmount;
    const winAmount = simulateSpin(betAmount);
    
    if (winAmount > 0) {
      totalWon += winAmount;
      totalWins++;
      if (winAmount > biggestWin) {
        biggestWin = winAmount;
      }
    }
    
    // Progress update
    if ((i + 1) % 100000 === 0) {
      const progress = ((i + 1) / numSpins * 100).toFixed(1);
      const currentRTP = (totalWon / totalWagered * 100).toFixed(2);
      console.log(`Progress: ${progress}% | Current RTP: ${currentRTP}%`);
    }
  }
  
  const endTime = Date.now();
  const duration = ((endTime - startTime) / 1000).toFixed(2);
  
  const rtp = (totalWon / totalWagered * 100).toFixed(2);
  const hitFrequency = (totalWins / numSpins * 100).toFixed(2);
  const avgWin = totalWins > 0 ? (totalWon / totalWins).toFixed(2) : 0;
  
  console.log(`\n${'='.repeat(50)}`);
  console.log(`📊 SIMULATION RESULTS`);
  console.log(`${'='.repeat(50)}`);
  console.log(`Total spins:     ${numSpins.toLocaleString()}`);
  console.log(`Total wagered:   ${totalWagered.toLocaleString()}`);
  console.log(`Total won:       ${totalWon.toLocaleString()}`);
  console.log(`Total wins:      ${totalWins.toLocaleString()}`);
  console.log(`\n🎯 RTP:           ${rtp}%`);
  console.log(`🎲 Hit frequency: ${hitFrequency}%`);
  console.log(`💰 Average win:   ${avgWin}x bet`);
  console.log(`🏆 Biggest win:   ${biggestWin.toLocaleString()}x bet`);
  console.log(`⏱️  Duration:      ${duration}s`);
  console.log(`${'='.repeat(50)}\n`);
  
  return {
    rtp: parseFloat(rtp),
    hitFrequency: parseFloat(hitFrequency),
    avgWin: parseFloat(avgWin),
    biggestWin,
    totalWagered,
    totalWon,
    totalWins,
    numSpins,
    duration: parseFloat(duration)
  };
}

// Aja simulaatio
const results = simulate(1000000, 1);

// Aja myös lyhyempiä simulaatioita eri bet-määrillä
console.log('\n📈 Running additional simulations with different parameters...\n');

simulate(100000, 1);
simulate(100000, 10);
