// src/tools/math-sim.cjs

const fs = require("fs");
const path = require("path");

// -----------------------------
// 1) LUE KONFIGURAATIO
// -----------------------------

const configPathFromCli = process.argv[2];
const configPath = configPathFromCli
  ? path.resolve(configPathFromCli)
  : path.join(process.cwd(), "src", "game", "math-config.json");

if (!fs.existsSync(configPath)) {
  console.error("Config file not found:", configPath);
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

const baseBet = config.bet?.baseBet ?? 1;
const layout = config.layout;
const rowsPerCol = layout.rowsPerCol; // [3,3,1,3,3]
const cols = layout.cols;
const totalReels = rowsPerCol.reduce((a, b) => a + b, 0);

const symbolsConfig = config.symbols;
const middleReelCfg = config.middleReel;
const fsCfg = config.freeSpins ?? { enabled: false };

const SIM_SPINS = config.simulation?.spins ?? 200000;

// -----------------------------
// 2) RAKENNA PAINOT
//    - Peruspelin painot
//    - Vapaapelien painot (korvaussäännöt)
// -----------------------------

const baseWeights = {};
for (const [key, sym] of Object.entries(symbolsConfig)) {
  baseWeights[key] = sym.weight ?? 0;
}

// Kopioi free spin -painot
const fsWeights = { ...baseWeights };

if (fsCfg.symbolReplacements && Array.isArray(fsCfg.symbolReplacements)) {
  for (const repl of fsCfg.symbolReplacements) {
    const from = repl.from;
    const to = repl.to;
    if (!from || !to) continue;

    const w = fsWeights[from] ?? 0;
    fsWeights[from] = 0;
    fsWeights[to] = (fsWeights[to] ?? 0) + w;
  }
}

// Yleinen symbolilista
const SYMBOL_KEYS = Object.keys(symbolsConfig);

// -----------------------------
// 3) APUFUNKTIOT
// -----------------------------

function getReelPosition(reelIndex) {
  // Sama kuin HelloPixi.svelte
  if (reelIndex < 3) return { col: 0, row: reelIndex };
  if (reelIndex < 6) return { col: 1, row: reelIndex - 3 };
  if (reelIndex === 6) return { col: 2, row: 0 };
  if (reelIndex < 10) return { col: 3, row: reelIndex - 7 };
  return { col: 4, row: reelIndex - 10 };
}

function getReelIndex(col, row) {
  if (col === 0) return row;
  if (col === 1) return 3 + row;
  if (col === 2) return 6;
  if (col === 3) return 7 + row;
  if (col === 4) return 10 + row;
  return -1;
}

// Rakennetaan kaikki 81 polkua kerran
function buildAllPaths() {
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

const ALL_PATHS = buildAllPaths();

// Generoi satunnainen symboli tietyyn ruutuun (reelIndex)
function randomSymbol(reelIndex, mode) {
  const weights = mode === "fs" ? fsWeights : baseWeights;

  // Middle reel: wild / empty
  if (reelIndex === 6 && middleReelCfg) {
    const wildSym = middleReelCfg.wildSymbol;
    const emptySym = middleReelCfg.emptySymbol;
    const pWild = middleReelCfg.wildProbability ?? 0.5;
    return Math.random() < pWild ? wildSym : emptySym;
  }

  // Muut: kaikki symbolit paitsi wild (kuten HelloPixi)
  const available = SYMBOL_KEYS.filter((s) => s !== middleReelCfg.wildSymbol);
  let total = 0;
  for (const s of available) total += weights[s] ?? 0;

  const r = Math.random() * total;
  let acc = 0;
  for (const s of available) {
    acc += weights[s] ?? 0;
    if (r <= acc) return s;
  }
  return available[0]; // fallback
}

// Luo koko 13 symbolin ruudukko
function createReelData(mode) {
  const reelData = new Array(totalReels);
  for (let i = 0; i < totalReels; i++) {
    reelData[i] = randomSymbol(i, mode);
  }
  return reelData;
}

// -----------------------------
// 4) VOITTOTARKISTUS (81 WAYS)
// -----------------------------

function evaluateSpin(mode) {
  const reelData = createReelData(mode);
  const pays = {}; // symbol -> {3,4,5}
  for (const [sym, obj] of Object.entries(symbolsConfig)) {
    pays[sym] = obj.pays || {};
  }

  const scatterKey = Object.keys(symbolsConfig).find(
    (k) => symbolsConfig[k].special === "scatter"
  ) || "l";

  const wildKey = middleReelCfg?.wildSymbol || "h";

  // Lasketaan scatterit
  let scatterCount = 0;
  for (let i = 0; i < totalReels; i++) {
    if (reelData[i] === scatterKey) scatterCount++;
  }

  const allWins = [];

  // Käy läpi kaikki polut
  for (const path of ALL_PATHS) {
    const symbols = path.map((idx) => reelData[idx]);

    // Ohita jos eka on scatter tai emptyslot
    if (symbols[0] === scatterKey || symbols[0] === "emptyslot") continue;

    // Etsi varsinainen voittosymboli (eka ei-wild, ei scatter, ei emptyslot)
    let winSymbol = null;
    for (const s of symbols) {
      if (s !== wildKey && s !== scatterKey && s !== "emptyslot") {
        winSymbol = s;
        break;
      }
    }
    if (!winSymbol) continue;

    // Laske peräkkäiset symbolit vasemmalta (sama tai wild)
    let matchLength = 0;
    for (const s of symbols) {
      if (s === winSymbol || s === wildKey) matchLength++;
      else break;
    }

    if (matchLength >= 3) {
      // startRow vain debugia varten
      const startReelIndex = path[0];
      const startRow = startReelIndex % 3;
      allWins.push({
        symbol: winSymbol,
        length: matchLength,
        path: path.slice(0, matchLength),
        startRow
      });
    }
  }

  // Pidä vain pisin per polku (sym+path)
  const winsGroupedByPath = new Map();
  for (const win of allWins) {
    const key = `${win.symbol}-${win.path.join(",")}`;
    if (!winsGroupedByPath.has(key)) winsGroupedByPath.set(key, []);
    winsGroupedByPath.get(key).push(win);
  }

  const filteredWins = [];
  for (const [, arr] of winsGroupedByPath) {
    const maxLen = Math.max(...arr.map((w) => w.length));
    const longest = arr.find((w) => w.length === maxLen);
    if (longest) filteredWins.push(longest);
  }

  // Ryhmittele symbolin ja pituuden mukaan → laske ways
  const winsBySymbolLen = new Map();
  for (const win of filteredWins) {
    const key = `${win.symbol}-${win.length}`;
    if (!winsBySymbolLen.has(key)) winsBySymbolLen.set(key, []);
    winsBySymbolLen.get(key).push(win);
  }

  let totalPayout = 0;
  let hit = false;

  for (const [, winGroup] of winsBySymbolLen) {
    const first = winGroup[0];
    const payTable = pays[first.symbol] || {};
    const mult = payTable[String(first.length)];
    if (mult == null || mult <= 0) continue;

    // Laske ways: symbolCountsPerReel = Set absolute indices per "reel-spot" 0..length-1
    const symbolCountsPerReel = new Map(); // reelPos (0..len-1) -> Set(indices)

    for (const win of winGroup) {
      for (let r = 0; r < win.length; r++) {
        if (!symbolCountsPerReel.has(r)) symbolCountsPerReel.set(r, new Set());
        symbolCountsPerReel.get(r).add(win.path[r]);
      }
    }

    let ways = 1;
    for (let r = 0; r < first.length; r++) {
      ways *= (symbolCountsPerReel.get(r)?.size || 1);
    }

    const payout = mult * baseBet * ways;
    if (payout > 0) {
      totalPayout += payout;
      hit = true;
    }
  }

  return {
    reelData,
    winAmount: totalPayout,
    hasWin: hit,
    scatterCount
  };
}

// -----------------------------
// 5) SIMULAATIO
// -----------------------------

function simulate() {
  let baseSpins = SIM_SPINS;
  let baseWager = baseSpins * baseBet;

  let baseWinSum = 0;
  let baseHitSpins = 0;

  let fsWinSum = 0;
  let fsHitSpins = 0;
  let fsTriggers = 0;
  let fsTotalSpinsPlayed = 0;
  let fsRetriggers = 0;

  const spinsPerSc = fsCfg.spinsPerScatterCount || {};
  const maxSc = fsCfg.maxScattersCounted ?? 12;
  const allowRetriggers = !!fsCfg.allowRetriggers;
  const fsEnabled = !!fsCfg.enabled;

  for (let i = 0; i < baseSpins; i++) {
    // --- BASE SPIN ---
    const res = evaluateSpin("base");
    if (res.winAmount > 0) {
      baseWinSum += res.winAmount;
      baseHitSpins++;
    }

    // Tarkista freespinit scattereista
    let fsQueue = 0;
    if (fsEnabled && res.scatterCount >= 5) {
      const key = String(
        Math.min(res.scatterCount, maxSc)
      );
      const fsSpinsFromHit = spinsPerSc[key] ?? 0;
      if (fsSpinsFromHit > 0) {
        fsQueue += fsSpinsFromHit;
        fsTriggers++;
      }
    }

    // --- FREE SPINS JONO ---
    while (fsQueue > 0) {
      fsQueue--;
      fsTotalSpinsPlayed++;

      const fsRes = evaluateSpin("fs");
      if (fsRes.winAmount > 0) {
        fsWinSum += fsRes.winAmount;
        fsHitSpins++;
      }

      if (allowRetriggers && fsEnabled && fsRes.scatterCount >= 5) {
        const key = String(
          Math.min(fsRes.scatterCount, maxSc)
        );
        const extraFs = spinsPerSc[key] ?? 0;
        if (extraFs > 0) {
          fsQueue += extraFs;
          fsRetriggers++;
        }
      }
    }
  }

  const totalWin = baseWinSum + fsWinSum;

  const totalRTP = (totalWin / baseWager) * 100;
  const baseRTP = (baseWinSum / baseWager) * 100;
  const fsRTP = (fsWinSum / baseWager) * 100;

  const baseHitFreq = (baseHitSpins / baseSpins) * 100;
  const allSpinsCount = baseSpins + fsTotalSpinsPlayed;
  const allHitFreq =
    ((baseHitSpins + fsHitSpins) / allSpinsCount) * 100;

  const fsFreq = fsTriggers > 0 ? fsTriggers / baseSpins : 0;
  const fsOneIn = fsFreq > 0 ? baseSpins / fsTriggers : Infinity;
  const avgFsPerTrigger =
    fsTriggers > 0 ? fsTotalSpinsPlayed / fsTriggers : 0;

  console.log("==============================================");
  console.log(" ROCKABILLY REELS - MATH SIM RESULT");
  console.log(" Config:", config.meta?.name || "Unnamed");
  console.log("----------------------------------------------");
  console.log(` Base spins simulated : ${baseSpins.toLocaleString()}`);
  console.log(` Total base wager     : ${baseWager.toFixed(2)}`);
  console.log("");
  console.log(` Total RTP            : ${totalRTP.toFixed(4)} %`);
  console.log(`   - Base game RTP    : ${baseRTP.toFixed(4)} %`);
  console.log(`   - Free spins RTP   : ${fsRTP.toFixed(4)} %`);
  console.log("");
  console.log(` Base hit frequency   : ${baseHitFreq.toFixed(2)} %  (~1 in ${(1 / (baseHitFreq / 100)).toFixed(1)} spins)`);
  console.log(` Overall hit freq     : ${allHitFreq.toFixed(2)} %  (includes free spins)`);
  console.log("");
  console.log(` Free spin triggers   : ${fsTriggers}`);
  console.log(` Free spin retriggers : ${fsRetriggers}`);
  console.log(` Total FS spins       : ${fsTotalSpinsPlayed}`);
  console.log(
    ` FS trigger freq      : ${
      fsFreq > 0 ? (fsFreq * 100).toFixed(3) : "0.000"
    } %  (~1 in ${fsFreq > 0 ? fsOneIn.toFixed(0) : "∞"} base spins)`
  );
  console.log(
    ` Avg FS / trigger     : ${avgFsPerTrigger.toFixed(2)}`
  );
  console.log("==============================================");
}

simulate();
