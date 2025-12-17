import * as fs from "fs";
import * as path from "path";
import * as yaml from "js-yaml";

// -------------------------------------------------------------
// TYYPIT – vastaavat math-config.yaml -rakennetta
// -------------------------------------------------------------
type PaytableEntry = { [len: string]: number };

interface SymbolDef {
  id: string;
  name: string;
  category: "low" | "mid" | "premium" | "special" | string;
  type: "normal" | "wild" | "scatter" | "empty" | string;
}

interface MathConfig {
  game: {
    id: string;
    name: string;
    layout: {
      reels: number;
      grid: number[];      // esim. [3,3,1,3,3]
      total_stops: number; // 13
      ways: number;        // 81
    };
    bet: {
      base_bet: number;
    };
  };

  symbols: SymbolDef[];

  base_game: {
    symbol_weights_outer_reels: Record<string, number>;
    center_reel: {
      wild_probability: number;
      empty_probability: number;
    };
    paytable: Record<string, PaytableEntry>;
    ways: {
      enabled: boolean;
      min_symbols: number;
      max_symbols: number;
      wild_symbol: string;
      scatter_symbol: string;
      true_ways_mode: boolean;
    };
  };

  free_spins: {
    enabled: boolean;
    trigger_symbol: string;
    min_scatter_count: number;
    scatter_fs_awards: Record<string, number>;
    use_fs_symbol_weights: boolean;
    fs_outer_reels_weights?: Record<string, number>;
    fs_center_reel?: {
      wild_probability: number;
      empty_probability: number;
    };
    fs_symbol_replacements: {
      enabled: boolean;
      replacement_map: Record<string, string>;
    };
  };

  multipliers: {
    enabled: boolean;
    base_game: { distribution: Record<string, number> };
    free_spins: { distribution: Record<string, number> };
  };

  simulation: {
    default_spins: number;
    rng_seed: number | null;
    debug: {
      log_big_wins_over_x: number;
      track_max_win: boolean;
      track_hit_frequency: boolean;
      track_fs_frequency: boolean;
      track_symbol_win_stats: boolean;
    };
  };
}

// -------------------------------------------------------------
// YKSINKERTAINEN SEEDETTY RNG (mulberry32)
// -------------------------------------------------------------
function makeRng(seed?: number | null): () => number {
  if (seed == null) {
    return Math.random;
  }
  let s = seed >>> 0;
  return function () {
    s |= 0;
    s = (s + 0x6D2B79F5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// -------------------------------------------------------------
// APU: painotettu arvonta
// -------------------------------------------------------------
type WeightedSymbolTable = { symbols: string[]; cumWeights: number[]; total: number };

function buildWeightedTable(weights: Record<string, number>, excludeZero = true): WeightedSymbolTable {
  const symbols: string[] = [];
  const cumWeights: number[] = [];
  let total = 0;

  for (const [sym, w] of Object.entries(weights)) {
    if (excludeZero && w <= 0) continue;
    total += w;
    symbols.push(sym);
    cumWeights.push(total);
  }

  if (total <= 0) {
    throw new Error("Weighted table: total weight <= 0");
  }

  return { symbols, cumWeights, total };
}

function pickWeighted(table: WeightedSymbolTable, rng: () => number): string {
  const r = rng() * table.total;
  const { symbols, cumWeights } = table;
  for (let i = 0; i < symbols.length; i++) {
    if (r < cumWeights[i]) return symbols[i];
  }
  return symbols[symbols.length - 1];
}

// -------------------------------------------------------------
// LAYOUT – 13 stoppipaikan kartoitus 3x3x1x3x3 -gridistä
// -------------------------------------------------------------
interface LayoutHelper {
  grid: number[];       // [3,3,1,3,3]
  colStarts: number[];  // [0,3,6,7,10]
  totalStops: number;   // 13
  centerIndex: number;  // esim. 6
}

function buildLayout(config: MathConfig): LayoutHelper {
  const grid = config.game.layout.grid;
  const colStarts: number[] = [];
  let running = 0;
  for (let i = 0; i < grid.length; i++) {
    colStarts.push(running);
    running += grid[i];
  }
  const totalStops = running;
  if (totalStops !== config.game.layout.total_stops) {
    console.warn(
      `⚠️ total_stops (${config.game.layout.total_stops}) != sum(grid) (${totalStops}) – käytetään sum(grid) simussa`
    );
  }

  // Keskisarakkeen indeksi = kolmas sarake (index 2) + sen ensimmäinen rivi (0)
  const centerIndex = colStarts[2]; // 3rd column start

  return { grid, colStarts, totalStops, centerIndex };
}

function getReelIndexFromColRow(layout: LayoutHelper, col: number, row: number): number {
  return layout.colStarts[col] + row;
}

// Precompute kaikki 81 polkua (paths) etukäteen
function buildAllPaths(layout: LayoutHelper): number[][] {
  const paths: number[][] = [];

  const recurse = (col: number, rowsSoFar: number[]) => {
    if (col === layout.grid.length) {
      // Muunna (col,row) -> lineaarinen stoppipaikka
      const indices = rowsSoFar.map((row, c) => getReelIndexFromColRow(layout, c, row));
      paths.push(indices);
      return;
    }
    const rowsInCol = layout.grid[col];
    for (let r = 0; r < rowsInCol; r++) {
      recurse(col + 1, [...rowsSoFar, r]);
    }
  };

  recurse(0, []);
  return paths;
}

// -------------------------------------------------------------
// EVALOINTI: ways-voitot
// -------------------------------------------------------------
interface SpinEvalResult {
  totalWin: number;
  isWin: boolean;
  scatterCount: number;
}

interface WinPath {
  symbol: string;
  length: number;
  path: number[];
}

function evaluateSpinWays(
  reelData: string[],
  config: MathConfig,
  layout: LayoutHelper,
  allPaths: number[]
[]): SpinEvalResult {
  const waysCfg = config.base_game.ways;
  const paytable = config.base_game.paytable;
  const wild = waysCfg.wild_symbol;
  const scatter = waysCfg.scatter_symbol;

  // 1) Lasketaan scatterit
  let scatterCount = 0;
  for (let i = 0; i < reelData.length; i++) {
    if (reelData[i] === scatter) scatterCount++;
  }

  const allWins: WinPath[] = [];

  // 2) Käy kaikki 81 polkua läpi
  for (const path of allPaths) {
    const symbols = path.map((idx) => reelData[idx]);

    // Jos eka symboli on tyhjä tai scatter => ei voittoa
    if (symbols[0] === "emptyslot" || symbols[0] === scatter) continue;

    // Etsi winSymbol: ensimmäinen ei-wild, ei-tyhjä, ei-scatter
    let winSymbol: string | null = null;
    for (const s of symbols) {
      if (s !== wild && s !== "emptyslot" && s !== scatter) {
        winSymbol = s;
        break;
      }
    }
    if (!winSymbol) continue;

    // Laske matchLength vasemmalta
    let matchLength = 0;
    for (const s of symbols) {
      if (s === winSymbol || s === wild) {
        matchLength++;
      } else {
        break;
      }
    }

    if (
      matchLength >= waysCfg.min_symbols &&
      matchLength <= waysCfg.max_symbols
    ) {
      allWins.push({
        symbol: winSymbol,
        length: matchLength,
        path: path.slice(0, matchLength),
      });
    }
  }

  if (allWins.length === 0) {
    return { totalWin: 0, isWin: false, scatterCount };
  }

  // 3) Suodata: pidä vain PISIN voitto per symboli+path
  const winsByPath = new Map<string, WinPath[]>();
  for (const win of allWins) {
    const key = `${win.symbol}-${win.path.join(",")}`;
    if (!winsByPath.has(key)) winsByPath.set(key, []);
    winsByPath.get(key)!.push(win);
  }

  const filteredWins: WinPath[] = [];
  for (const [, wins] of winsByPath) {
    const maxLen = Math.max(...wins.map((w) => w.length));
    const chosen = wins.find((w) => w.length === maxLen)!;
    filteredWins.push(chosen);
  }

  // 4) TRUE WAYS: ryhmittele symboli+length, laske ways
  const winsBySymLen = new Map<string, WinPath[]>();
  for (const win of filteredWins) {
    const key = `${win.symbol}-${win.length}`;
    if (!winsBySymLen.has(key)) winsBySymLen.set(key, []);
    winsBySymLen.get(key)!.push(win);
  }

  const bet = config.game.bet.base_bet;
  let totalWin = 0;

  for (const [, winsInGroup] of winsBySymLen) {
    const first = winsInGroup[0];
    const sym = first.symbol;
    const len = first.length.toString();

    const payEntry = paytable[sym];
    const payMult = payEntry ? payEntry[len] : undefined;
    if (payMult == null || payMult <= 0) continue;

    // Kerätään uniikit stoppipaikat per KELA-indeksi (0..len-1)
    const symbolCountsPerReel = new Map<number, Set<number>>();
    for (const w of winsInGroup) {
      for (let reelIdx = 0; reelIdx < w.length; reelIdx++) {
        if (!symbolCountsPerReel.has(reelIdx)) {
          symbolCountsPerReel.set(reelIdx, new Set<number>());
        }
        symbolCountsPerReel.get(reelIdx)!.add(w.path[reelIdx]);
      }
    }

    // ways = kertolasku uniikkien paikkojen lukumääristä
    let ways = 1;
    for (let reelIdx = 0; reelIdx < first.length; reelIdx++) {
      const count = symbolCountsPerReel.get(reelIdx)?.size ?? 0;
      // varotoimi – ei pitäisi ikinä olla 0
      ways *= count > 0 ? count : 1;
    }

    const spinWin = payMult * bet * ways; // multiplier aina 1x
    totalWin += spinWin;
  }

  return { totalWin, isWin: totalWin > 0, scatterCount };
}

// -------------------------------------------------------------
// SPIN-GENEROINTI
// -------------------------------------------------------------
function buildOuterWeightsForMode(config: MathConfig, isFreeSpin: boolean): WeightedSymbolTable {
  const { base_game, free_spins } = config;

  if (isFreeSpin && free_spins.enabled && free_spins.use_fs_symbol_weights) {
    const fsWeights = free_spins.fs_outer_reels_weights;
    if (fsWeights && Object.keys(fsWeights).length > 0) {
      return buildWeightedTable(fsWeights);
    }
  }

  // Oletus: käytetään base_game.weightsejä
  const weights = { ...base_game.symbol_weights_outer_reels };
  // HelloPixissä ei arvota wildia outer-reelsille -> varmista että h=0
  weights["h"] = 0;
  return buildWeightedTable(weights);
}

function generateReelData(
  config: MathConfig,
  layout: LayoutHelper,
  rng: () => number,
  isFreeSpin: boolean
): string[] {
  const { base_game, free_spins } = config;
  const reels: string[] = new Array(layout.totalStops);

  const outerTable = buildOuterWeightsForMode(config, isFreeSpin);

  // Keskikela – valitaan oikea config (FS / base)
  const centerCfg = (isFreeSpin &&
    free_spins.enabled &&
    free_spins.use_fs_symbol_weights &&
    free_spins.fs_center_reel) || base_game.center_reel;

  for (let i = 0; i < layout.totalStops; i++) {
    if (i === layout.centerIndex) {
      // Center reel: wild vs empty
      const r = rng();
      reels[i] = r < centerCfg.wild_probability ? "h" : "emptyslot";
    } else {
      reels[i] = pickWeighted(outerTable, rng);
    }
  }

  // Free spin -symbolikorvaukset
  if (isFreeSpin && free_spins.fs_symbol_replacements.enabled) {
    const map = free_spins.fs_symbol_replacements.replacement_map;
    for (let i = 0; i < reels.length; i++) {
      const s = reels[i];
      const rep = map[s];
      if (rep) reels[i] = rep;
    }
  }

  return reels;
}

// -------------------------------------------------------------
// VARSINAINEN SIMULAATIO
// -------------------------------------------------------------
interface SimStats {
  baseSpins: number;
  fsSpins: number;
  baseWagered: number;
  totalWon: number;
  baseWinsValue: number;
  fsWinsValue: number;
  baseWinningSpins: number;
  fsWinningSpins: number;
  fsTriggers: number;
  scatterHistogram: Record<number, number>;
  maxWinX: number;
}

function runSimulation(config: MathConfig): SimStats {
  const layout = buildLayout(config);
  const allPaths = buildAllPaths(layout);
  const rng = makeRng(config.simulation.rng_seed ?? null);

  const baseBet = config.game.bet.base_bet;
  const maxBaseSpins = config.simulation.default_spins;

  let baseSpins = 0;
  let fsSpins = 0;
  let baseWagered = 0;
  let totalWon = 0;
  let baseWinsValue = 0;
  let fsWinsValue = 0;
  let baseWinningSpins = 0;
  let fsWinningSpins = 0;
  let fsTriggers = 0;
  let maxWinX = 0;

  const scatterHist: Record<number, number> = {};

  const fsCfg = config.free_spins;
  const minScatter = fsCfg.min_scatter_count;
  const scatterAwards = fsCfg.scatter_fs_awards;

  let fsQueue = 0; // vapaapelien jonossa oleva määrä

  function playSingleSpin(isFreeSpin: boolean) {
    const reelData = generateReelData(config, layout, rng, isFreeSpin);
    const { totalWin: win, isWin, scatterCount } = evaluateSpinWays(
      reelData,
      config,
      layout,
      allPaths
    );

    // scatter-histogrammi
    if (scatterCount > 0) {
      scatterHist[scatterCount] = (scatterHist[scatterCount] ?? 0) + 1;
    }

    // FS-triggeri
    let fsAwarded = 0;
    if (fsCfg.enabled && scatterCount >= minScatter) {
      fsAwarded = scatterAwards[String(scatterCount)] ?? 0;
      if (fsAwarded > 0) {
        fsQueue += fsAwarded;
        if (!isFreeSpin) fsTriggers++;
      }
    }

    // Wagered (vain base)
    if (!isFreeSpin) {
      baseSpins++;
      baseWagered += baseBet;
    } else {
      fsSpins++;
    }

    totalWon += win;
    const winX = win / baseBet;
    if (winX > maxWinX) maxWinX = winX;

    if (isFreeSpin) {
      fsWinsValue += win;
      if (isWin) fsWinningSpins++;
    } else {
      baseWinsValue += win;
      if (isWin) baseWinningSpins++;
    }
  }

  // Aja N maksettua perusspinia + kaikki niiden mukana tulevat free spinit
  for (let i = 0; i < maxBaseSpins; i++) {
    playSingleSpin(false); // base spin

    // Pelaa vaparit jonosta
    while (fsQueue > 0) {
      fsQueue--;
      playSingleSpin(true);
    }
  }

  return {
    baseSpins,
    fsSpins,
    baseWagered,
    totalWon,
    baseWinsValue,
    fsWinsValue,
    baseWinningSpins,
    fsWinningSpins,
    fsTriggers,
    scatterHistogram: scatterHist,
    maxWinX,
  };
}

// -------------------------------------------------------------
// TULOSTUS
// -------------------------------------------------------------
function printStats(config: MathConfig, stats: SimStats) {
  const totalSpins = stats.baseSpins + stats.fsSpins;

  const totalRTP = stats.baseWagered > 0 ? (stats.totalWon / stats.baseWagered) * 100 : 0;
  const baseRTP = stats.baseWagered > 0 ? (stats.baseWinsValue / stats.baseWagered) * 100 : 0;
  const fsRTP =
    stats.baseWagered > 0 ? (stats.fsWinsValue / stats.baseWagered) * 100 : 0;

  const baseHitFreq =
    stats.baseSpins > 0 ? (stats.baseWinningSpins / stats.baseSpins) * 100 : 0;
  const overallHitFreq =
    totalSpins > 0
      ? ((stats.baseWinningSpins + stats.fsWinningSpins) / totalSpins) * 100
      : 0;

  const fsFreq =
    stats.baseSpins > 0 ? (stats.fsTriggers / stats.baseSpins) * 100 : 0;
  const fsOneIn = fsFreq > 0 ? 100 / fsFreq : Infinity;

  const avgFsPerTrigger =
    stats.fsTriggers > 0 ? stats.fsSpins / stats.fsTriggers : 0;

  console.log("=====================================================");
  console.log(`ROCKABILLY REELS – MATH SIM`);
  console.log("=====================================================");
  console.log(`Config game id:   ${config.game.id}`);
  console.log(`Game name:        ${config.game.name}`);
  console.log(`Base bet:         ${config.game.bet.base_bet}`);
  console.log("");
  console.log(`Base spins:       ${stats.baseSpins.toLocaleString()}`);
  console.log(
    `Free spins:       ${stats.fsSpins.toLocaleString()} (avg ${avgFsPerTrigger.toFixed(
      2
    )} FS / trigger)`
  );
  console.log("");
  console.log(`Total wagered:    ${stats.baseWagered.toFixed(2)}`);
  console.log(`Total won:        ${stats.totalWon.toFixed(2)}`);
  console.log("");
  console.log(`TOTAL RTP:        ${totalRTP.toFixed(2)} %`);
  console.log(`Base game RTP:    ${baseRTP.toFixed(2)} %`);
  console.log(`Free spins RTP:   ${fsRTP.toFixed(2)} %`);
  console.log("");
  console.log(
    `Base hit freq:    ${baseHitFreq.toFixed(2)} % (1 in ${(100 / baseHitFreq || 0).toFixed(2)})`
  );
  console.log(
    `Overall hit freq: ${overallHitFreq.toFixed(2)} % (base + FS)`
  );
  console.log(
    `FS trigger freq:  ${fsFreq.toFixed(3)} % (1 in ${fsOneIn.toFixed(1)} base spins)`
  );
  console.log("");
  console.log(`Max single spin win: ${stats.maxWinX.toFixed(2)} x bet`);
  console.log("");

  console.log("Scatter histogram (count : occurrences):");
  const sortedCounts = Object.keys(stats.scatterHistogram)
    .map((k) => parseInt(k, 10))
    .sort((a, b) => a - b);
  for (const c of sortedCounts) {
    console.log(
      `  ${c} : ${stats.scatterHistogram[c].toLocaleString()} times`
    );
  }
  console.log("=====================================================");
}

// -------------------------------------------------------------
// MAIN
// -------------------------------------------------------------
function main() {
  const configPath =
    process.argv[2] || path.join(process.cwd(), "src", "game", "math-config.yaml");

  if (!fs.existsSync(configPath)) {
    console.error(`Config file not found: ${configPath}`);
    console.error(`Usage: ts-node math-sim.ts path/to/math-config.yaml`);
    process.exit(1);
  }

  const raw = fs.readFileSync(configPath, "utf8");
  const cfg = yaml.load(raw) as MathConfig;

  const stats = runSimulation(cfg);
  printStats(cfg, stats);
}

if (require.main === module) {
  main();
}
