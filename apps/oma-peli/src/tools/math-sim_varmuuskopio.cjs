/* eslint-disable no-console */
"use strict";

const fs = require("fs");
const path = require("path");

// ==========================================================
// Paths + Config resolving
// ==========================================================
const PROJECT_ROOT = path.resolve(__dirname, "../../"); // .../src/tools -> .../
const REPORTS_DIR = path.join(PROJECT_ROOT, "reports");
const REPORT_JSON_PATH = path.join(REPORTS_DIR, "latest-report.json");

function resolveConfigPath() {
  // 1) Allow override via env
  const envPath = process.env.MATH_CONFIG;
  if (envPath && fs.existsSync(envPath)) {
    return path.resolve(envPath);
  }

  // 2) Common candidate locations (relative to project root)
  const candidates = [
    path.join(PROJECT_ROOT, "src", "tools", "math-config.yml"),
    path.join(PROJECT_ROOT, "src", "tools", "math-config.yaml"),
    path.join(PROJECT_ROOT, "src", "tools", "math-config.yml.txt"),
    path.join(PROJECT_ROOT, "src", "tools", "math-config.yaml.txt"),

    path.join(PROJECT_ROOT, "math-config.yml"),
    path.join(PROJECT_ROOT, "math-config.yaml"),

    path.join(PROJECT_ROOT, "src", "math-config.yml"),
    path.join(PROJECT_ROOT, "src", "math-config.yaml"),

    path.join(PROJECT_ROOT, "tools", "math-config.yml"),
    path.join(PROJECT_ROOT, "tools", "math-config.yaml")
  ];

  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }

  return { notFound: true, candidates };
}

const CONFIG_RESOLVE = resolveConfigPath();

// ==========================================================
// Minimal YAML parser (subset used in config)
// PATCH: supports quoted keys, e.g. "3": 0.23
// ==========================================================
function parseYaml(yamlText) {
  const lines = yamlText
    .replace(/\r/g, "")
    .split("\n")
    .map((l) => l.replace(/\t/g, "  "));

  function stripComment(line) {
    const idx = line.indexOf("#");
    if (idx === -1) return line;
    return line.slice(0, idx);
  }

  function stripKeyQuotes(keyRaw) {
    const k = String(keyRaw).trim();
    if (
      (k.startsWith('"') && k.endsWith('"')) ||
      (k.startsWith("'") && k.endsWith("'"))
    ) {
      return k.slice(1, -1);
    }
    return k;
  }

  function parseScalar(raw) {
    const s = raw.trim();
    if (s === "") return "";
    if (s === "null" || s === "NULL") return null;
    if (s === "true" || s === "TRUE") return true;
    if (s === "false" || s === "FALSE") return false;
    if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
      return s.slice(1, -1);
    }
    if (s.startsWith("[") && s.endsWith("]")) {
      const inner = s.slice(1, -1).trim();
      if (!inner) return [];
      return inner.split(",").map((x) => parseScalar(x.trim()));
    }
    if (/^-?\d+(\.\d+)?$/.test(s)) return Number(s);
    return s;
  }

  function indentOf(line) {
    const m = line.match(/^ */);
    return m ? m[0].length : 0;
  }

  let i = 0;

  function parseBlock(baseIndent) {
    let obj = null;
    let arr = null;

    function ensureObj() {
      if (obj === null) obj = {};
      return obj;
    }
    function ensureArr() {
      if (arr === null) arr = [];
      return arr;
    }

    while (i < lines.length) {
      let line = stripComment(lines[i]);
      if (!line.trim()) {
        i++;
        continue;
      }

      const indent = indentOf(line);
      if (indent < baseIndent) break;
      if (indent > baseIndent) break;

      const trimmed = line.trim();

      if (trimmed.startsWith("- ")) {
        const a = ensureArr();
        const rest = trimmed.slice(2).trim();

        if (rest.includes(":")) {
          const itemObj = {};
          const [kPart, ...vParts] = rest.split(":");
          const k = stripKeyQuotes(kPart.trim());
          const vRaw = vParts.join(":").trim();
          if (vRaw === "") {
            i++;
            const child = parseBlock(baseIndent + 2);
            itemObj[k] = child;
          } else {
            itemObj[k] = parseScalar(vRaw);
            i++;
          }

          while (i < lines.length) {
            let next = stripComment(lines[i]);
            if (!next.trim()) { i++; continue; }
            const ind2 = indentOf(next);
            if (ind2 < baseIndent + 2) break;
            if (ind2 === baseIndent + 2) {
              const t2 = next.trim();
              if (t2.startsWith("- ")) break;
              const [k2, ...v2p] = t2.split(":");
              const key2 = stripKeyQuotes(k2.trim());
              const v2raw = v2p.join(":").trim();
              if (v2raw === "") {
                i++;
                itemObj[key2] = parseBlock(baseIndent + 4);
              } else {
                itemObj[key2] = parseScalar(v2raw);
                i++;
              }
              continue;
            }
            break;
          }

          a.push(itemObj);
          continue;
        }

        a.push(parseScalar(rest));
        i++;
        continue;
      }

      const colonIdx = trimmed.indexOf(":");
      if (colonIdx === -1) {
        i++;
        continue;
      }

      const keyRaw = trimmed.slice(0, colonIdx).trim();
      const key = stripKeyQuotes(keyRaw);
      const valRaw = trimmed.slice(colonIdx + 1).trim();

      const o = ensureObj();

      if (valRaw === "") {
        i++;
        o[key] = parseBlock(baseIndent + 2);
      } else if (valRaw === "{}") {
        i++;
        o[key] = {};
      } else if (valRaw === "[]") {
        i++;
        o[key] = [];
      } else {
        i++;
        o[key] = parseScalar(valRaw);
      }
    }

    if (arr !== null && obj !== null) return obj;
    if (arr !== null) return arr;
    if (obj !== null) return obj;
    return {};
  }

  i = 0;
  return parseBlock(0);
}

// ==========================================================
// RNG (seeded optional)
// ==========================================================
function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// ==========================================================
// Helpers formatting + stats
// ==========================================================
function fmtPct01(x) { return (x * 100).toFixed(2) + "%"; }
function fmtX(x) { return (x).toFixed(2) + "x"; }
function mean(arr) { return arr.reduce((s, v) => s + v, 0) / Math.max(1, arr.length); }
function stddev(arr) {
  const m = mean(arr);
  const v = arr.reduce((s, x) => s + (x - m) ** 2, 0) / Math.max(1, arr.length);
  return Math.sqrt(v);
}
function percentile(arr, p) {
  if (!arr.length) return 0;
  const a = [...arr].sort((x, y) => x - y);
  const idx = (a.length - 1) * p;
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return a[lo];
  const w = idx - lo;
  return a[lo] * (1 - w) + a[hi] * w;
}
function classifyVolatility(stddevX) {
  if (stddevX < 4) return { label: "low", text: "matala" };
  if (stddevX < 8) return { label: "medium", text: "keskitaso" };
  if (stddevX < 15) return { label: "high", text: "korkea" };
  return { label: "very_high", text: "erittäin korkea" };
}

// ==========================================================
// Histogram
// ==========================================================
function printAsciiHistogram(values, opts = {}) {
  const width = opts.width ?? 42;
  const buckets = opts.buckets ?? [
    { label: "0x",      min: 0,    max: 0.0000001 },
    { label: "0-0.5x",  min: 0.0,  max: 0.5 },
    { label: "0.5-1x",  min: 0.5,  max: 1.0 },
    { label: "1-2x",    min: 1.0,  max: 2.0 },
    { label: "2-5x",    min: 2.0,  max: 5.0 },
    { label: "5-10x",   min: 5.0,  max: 10.0 },
    { label: "10-20x",  min: 10.0, max: 20.0 },
    { label: "20-50x",  min: 20.0, max: 50.0 },
    { label: "50-100x", min: 50.0, max: 100.0 },
    { label: "100x+",   min: 100.0, max: Infinity }
  ];

  const total = values.length || 1;
  const counts = buckets.map(() => 0);

  for (const v of values) {
    for (let i = 0; i < buckets.length; i++) {
      const b = buckets[i];
      const inBucket = (v >= b.min) && (v < b.max || b.max === Infinity);
      if (inBucket) { counts[i]++; break; }
    }
  }

  const maxCount = Math.max(...counts, 1);

  console.log("\n=== PAYOUT DISTRIBUTION (paid spins, X = win/bet incl. feature lumped) ===");
  for (let i = 0; i < buckets.length; i++) {
    const c = counts[i];
    const pct = c / total;
    const barLen = Math.round((c / maxCount) * width);
    const bar = "█".repeat(barLen).padEnd(width, " ");
    console.log(`${buckets[i].label.padEnd(8)} | ${bar} | ${String(c).padStart(8)}  (${(pct*100).toFixed(2)}%)`);
  }
  console.log("=======================================================================\n");
}

// ==========================================================
// Human summary + volatility explanation
// ==========================================================
function buildVolatilityExplanation() {
  return {
    unit: "X = (paid spin total return) / (base bet). Feature wins are lumped into the triggering paid spin X.",
    whatItMeans: [
      "Volatility describes how unevenly wins are distributed over time.",
      "Two games can have identical RTP but feel very different because volatility differs."
    ],
    howToRead: [
      "meanX tracks average return (close to RTP).",
      "stddevX is the primary volatility gauge: higher = wider spread (more 0x + occasional big hits).",
      "p50/p90/p95/p99 show how large wins are at different rarity levels."
    ],
    fields: {
      meanX: "Average return per paid spin (including feature wins attributed to the trigger spin).",
      stddevX: "Standard deviation of paid-spin returns. Higher = more volatile.",
      p50X: "Median return. 50% of paid spins return this X or less. If 0, more than half are complete losses.",
      p90X: "90th percentile. Only 10% of paid spins exceed this X.",
      p95X: "95th percentile. Only 1 in 20 paid spins exceed this X.",
      p99X: "99th percentile. Only 1 in 100 paid spins exceed this X.",
      maxX: "Largest paid-spin return observed in this run (not a guaranteed max)."
    },
    typicalRanges: {
      low: "stddev < 4",
      medium: "stddev 4–8",
      high: "stddev 8–15",
      very_high: "stddev > 15"
    }
  };
}

function buildHumanSummary(stats) {
  const vol = stats.volatility || {};
  const volClass = classifyVolatility(vol.stddevX ?? 0);

  const fsTrig = stats.freeSpinsTriggerRatePaid > 0 ? Math.round(1 / stats.freeSpinsTriggerRatePaid) : null;

  const p1 =
    `Arvioitu RTP on ${fmtPct01(stats.rtp)} ` +
    `(base ${fmtPct01(stats.baseRtp)} + free spins ${fmtPct01(stats.freeSpinsRtp)}). ` +
    `Osumataajuus (paid spins) on ${fmtPct01(stats.hitRatePaid)} ` +
    (fsTrig ? `ja free spins -triggeri noin 1 / ${fsTrig} maksettua spinniä. ` : "") +
    `Volatiliteetti luokitellaan: ${volClass.text} (stddev ${fmtX(vol.stddevX ?? 0)}).`;

  const p50 = vol.p50X ?? 0;
  const feel = (p50 <= 0.000001)
    ? `Mediaani (p50) on ${fmtX(p50)}, eli yli puolet maksetuista spinnauksista on 0x-häviöitä.`
    : `Mediaani (p50) on ${fmtX(p50)}.`;

  const p2 =
    `${feel} p95 on ${fmtX(vol.p95X ?? 0)} (vain 1/20 ylittää tämän), ` +
    `p99 on ${fmtX(vol.p99X ?? 0)} (vain 1/100 ylittää tämän), ` +
    `ja suurin havaittu oli ${fmtX(vol.maxX ?? 0)}.`;

  return [p1, p2];
}

// ==========================================================
// Weighted pick
// ==========================================================
function buildWeightedPicker(weightMap) {
  const entries = Object.entries(weightMap)
    .filter(([_, w]) => typeof w === "number" && w > 0);

  const total = entries.reduce((s, [_, w]) => s + w, 0);
  const cum = [];
  let c = 0;
  for (const [k, w] of entries) {
    c += w / total;
    cum.push([k, c]);
  }

  return function pick(rng) {
    const r = rng();
    for (const [k, t] of cum) {
      if (r < t) return k;
    }
    return cum.length ? cum[cum.length - 1][0] : null;
  };
}

// ==========================================================
// Multiplier picker (base per paid spin, FS per free spin)
// ==========================================================
function normalizeDistribution(dist) {
  const out = {};
  for (const [k, v] of Object.entries(dist || {})) {
    const n = Number(v);
    const key = String(k);
    if (Number.isFinite(n) && n > 0) out[key] = n;
  }
  return out;
}

function makeMultiplierPicker(dist, fallback = 1) {
  const norm = normalizeDistribution(dist);
  const pickKey = buildWeightedPicker(norm);
  return function pickMultiplier(rng) {
    const k = pickKey(rng);
    const m = Number(k);
    if (Number.isFinite(m) && m > 0) return m;
    return fallback;
  };
}

// ==========================================================
// Layout mapping + paths
// ==========================================================
function getReelIndex(col, row) {
  if (col === 0) return row;
  if (col === 1) return 3 + row;
  if (col === 2) return 6;
  if (col === 3) return 7 + row;
  if (col === 4) return 10 + row;
  return -1;
}

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

// ==========================================================
// Win evaluation (ways, before multipliers)
// ==========================================================
function checkWaysWins(reelData, paytable, bet, wildSymbol, scatterSymbol) {
  const allPaths = generateAllPaths();
  const allWins = [];

  for (const path of allPaths) {
    const symbols = path.map((idx) => reelData[idx]);

    if (symbols[0] === "emptyslot" || symbols[0] === scatterSymbol) continue;

    let winSymbol = null;
    for (let i = 0; i < symbols.length; i++) {
      const s = symbols[i];
      if (s !== wildSymbol && s !== "emptyslot" && s !== scatterSymbol) {
        winSymbol = s;
        break;
      }
    }
    if (!winSymbol) continue;

    let matchLength = 0;
    for (let i = 0; i < symbols.length; i++) {
      const s = symbols[i];
      if (s === winSymbol || s === wildSymbol) matchLength++;
      else break;
    }

    if (matchLength >= 3) {
      allWins.push({ symbol: winSymbol, length: matchLength, path: path.slice(0, matchLength) });
    }
  }

  // Keep longest per unique (symbol + exact path slice)
  const groupedByPath = new Map();
  for (const w of allWins) {
    const k = `${w.symbol}-${w.path.join(",")}`;
    if (!groupedByPath.has(k)) groupedByPath.set(k, []);
    groupedByPath.get(k).push(w);
  }

  const filtered = [];
  for (const group of groupedByPath.values()) {
    const maxLen = Math.max(...group.map((x) => x.length));
    const longest = group.find((x) => x.length === maxLen);
    if (longest) filtered.push(longest);
  }

  // Group by symbol-length
  const bySymbolLen = new Map();
  for (const w of filtered) {
    const k = `${w.symbol}-${w.length}`;
    if (!bySymbolLen.has(k)) bySymbolLen.set(k, []);
    bySymbolLen.get(k).push(w);
  }

  let totalPayout = 0;
  const winBreakdown = [];

  for (const group of bySymbolLen.values()) {
    const first = group[0];
    const sym = first.symbol;
    const len = first.length;

    const ptRow = paytable[sym];
    const pt = ptRow ? ptRow[String(len)] : undefined;

    if (!(typeof pt === "number" && pt > 0)) continue;

    const positionsPerReel = new Map();
    for (const w of group) {
      for (let i = 0; i < len; i++) {
        if (!positionsPerReel.has(i)) positionsPerReel.set(i, new Set());
        positionsPerReel.get(i).add(w.path[i]);
      }
    }

    let ways = 1;
    for (let i = 0; i < len; i++) {
      const s = positionsPerReel.get(i);
      ways *= s ? s.size : 1;
    }

    const payout = pt * bet * ways;
    totalPayout += payout;

    winBreakdown.push({ symbol: sym, length: len, paytable: pt, ways, payout });
  }

  return { totalPayout, winBreakdown };
}

// ==========================================================
// Spin generation
// ==========================================================
function generateReelData(rng, cfg, isFreeSpin) {
  const totalStops = cfg.game.layout.total_stops;

  const baseWeights = cfg.base_game.symbol_weights_outer_reels;
  const fsWeightsEnabled = cfg.free_spins.enabled && cfg.free_spins.use_fs_symbol_weights === true;
  const fsWeights = (fsWeightsEnabled && cfg.free_spins.fs_outer_reels_weights && Object.keys(cfg.free_spins.fs_outer_reels_weights).length)
    ? cfg.free_spins.fs_outer_reels_weights
    : baseWeights;

  function weightsNoWild(weights) {
    const out = {};
    for (const [k, v] of Object.entries(weights)) {
      if (k === "h") continue;
      out[k] = v;
    }
    return out;
  }

  const pickOuter = buildWeightedPicker(weightsNoWild(isFreeSpin ? fsWeights : baseWeights));

  const centerCfg = isFreeSpin && fsWeightsEnabled
    ? (cfg.free_spins.fs_center_reel || cfg.base_game.center_reel)
    : cfg.base_game.center_reel;

  const reelData = new Array(totalStops);

  for (let i = 0; i < totalStops; i++) {
    if (i === 6) {
      const w = centerCfg.wild_probability ?? 0.5;
      reelData[i] = rng() < w ? "h" : "emptyslot";
    } else {
      reelData[i] = pickOuter(rng) || "k";
    }
  }

  if (isFreeSpin && cfg.free_spins.enabled && cfg.free_spins.fs_symbol_replacements?.enabled) {
    const map = cfg.free_spins.fs_symbol_replacements.replacement_map || {};
    for (let i = 0; i < reelData.length; i++) {
      const s = reelData[i];
      if (map[s]) reelData[i] = map[s];
    }
  }

  return reelData;
}

// ==========================================================
// Free spins award lookup
// ==========================================================
function freeSpinsAward(cfg, scatterCount) {
  const awards = cfg.free_spins.scatter_fs_awards || {};
  const key = String(scatterCount);
  if (awards[key] != null) return Number(awards[key]) || 0;

  const keys = Object.keys(awards).map((k) => Number(k)).filter((n) => !Number.isNaN(n));
  if (!keys.length) return 0;
  const maxK = Math.max(...keys);
  if (scatterCount > maxK) return Number(awards[String(maxK)]) || 0;
  return 0;
}

// ==========================================================
// Theoretical max win multiplier (per single SPIN)
// NOTE: FS retrigger unbounded, so "true max incl FS" is unbounded.
// We report max for a single base spin payout and a single FS spin payout.
// ==========================================================
function computeTheoreticalMax(cfg) {
  const bet = Number(cfg.game?.bet?.base_bet ?? 1.0);
  const paytable = cfg.base_game.paytable || {};
  const grid = cfg.game?.layout?.grid || [3, 3, 1, 3, 3];

  const maxWays5 = (grid[0] ?? 3) * (grid[1] ?? 3) * (grid[2] ?? 1) * (grid[3] ?? 3) * (grid[4] ?? 3);

  let best = { symbol: null, length: 0, ways: 0, pay: 0, maxX: 0 };
  for (const [sym, pt] of Object.entries(paytable)) {
    if (!pt || typeof pt !== "object") continue;

    const p5 = Number(pt["5"] ?? 0);
    if (p5 > 0) {
      const x = p5 * maxWays5;
      if (x > best.maxX) best = { symbol: sym, length: 5, ways: maxWays5, pay: p5, maxX: x };
    }
  }

  const multEnabled = !!cfg.multipliers?.enabled;
  const baseDist = normalizeDistribution(cfg.multipliers?.base_game?.distribution);
  const fsDist = normalizeDistribution(cfg.multipliers?.free_spins?.distribution);

  const baseMaxMult = multEnabled && Object.keys(baseDist).length
    ? Math.max(...Object.keys(baseDist).map((k) => Number(k)).filter((n) => Number.isFinite(n) && n > 0))
    : 1;

  const fsMaxMult = multEnabled && Object.keys(fsDist).length
    ? Math.max(...Object.keys(fsDist).map((k) => Number(k)).filter((n) => Number.isFinite(n) && n > 0))
    : 1;

  return {
    perSpinMaxWithoutMultiplierX: best.maxX,
    baseMaxMultiplier: baseMaxMult,
    freeSpinsMaxMultiplier: fsMaxMult,
    perPaidSpinMaxX: best.maxX * baseMaxMult,
    perFreeSpinMaxX: best.maxX * fsMaxMult,
    bestCase: best,
    assumesCenterIsWild: true,
    freeSpinsRetriggerUnboundedInTheory: !!cfg.free_spins?.enabled,
    perPaidSpinMaxPayoutAtBaseBet: best.maxX * baseMaxMult * bet
  };
}

// ==========================================================
// Symbol breakdown collector
// (NOTE: breakdown includes multipliers because we multiply winBreakdown payouts)
// ==========================================================
function ensureSym(stats, sym) {
  if (!stats[sym]) {
    stats[sym] = {
      winEvents: 0,
      totalPayout: 0,
      byLength: {
        3: { winEvents: 0, totalPayout: 0 },
        4: { winEvents: 0, totalPayout: 0 },
        5: { winEvents: 0, totalPayout: 0 }
      },
      paidSpinsWithWin: 0,
      freeSpinsWinEvents: 0,
      freeSpinsPayout: 0,
      baseWinEvents: 0,
      basePayout: 0
    };
  }
  return stats[sym];
}

function printSymbolBreakdown(symbolStats, totalWagered) {
  const rows = Object.entries(symbolStats)
    .map(([sym, s]) => ({
      sym,
      totalPayout: s.totalPayout,
      rtpPct: totalWagered > 0 ? (s.totalPayout / totalWagered) * 100 : 0,
      winEvents: s.winEvents,
      paidSpinsWithWin: s.paidSpinsWithWin,
      basePayout: s.basePayout,
      fsPayout: s.freeSpinsPayout
    }))
    .sort((a, b) => b.totalPayout - a.totalPayout);

  console.log("\n=== SYMBOL RTP CONTRIBUTION (base+FS lumped, ordered by payout) ===");
  console.log("Symbol | RTP%   | Payout    | WinEvents | PaidSpinsWithWin | BasePayout | FSPayout");
  console.log("------ | ------ | --------- | --------- | --------------- | ---------- | --------");

  for (const r of rows) {
    console.log(
      `${String(r.sym).padEnd(6)} | ` +
      `${r.rtpPct.toFixed(2).padStart(6)} | ` +
      `${r.totalPayout.toFixed(2).padStart(9)} | ` +
      `${String(r.winEvents).padStart(9)} | ` +
      `${String(r.paidSpinsWithWin).padStart(15)} | ` +
      `${r.basePayout.toFixed(2).padStart(10)} | ` +
      `${r.fsPayout.toFixed(2).padStart(8)}`
    );
  }

  console.log("\n=== SYMBOL BREAKDOWN BY LENGTH (3/4/5) ===");
  for (const [sym, s] of Object.entries(symbolStats)) {
    const b3 = s.byLength[3], b4 = s.byLength[4], b5 = s.byLength[5];
    console.log(
      `${sym}: ` +
      `3OAK events=${String(b3.winEvents).padStart(6)} payout=${b3.totalPayout.toFixed(2).padStart(10)} | ` +
      `4OAK events=${String(b4.winEvents).padStart(6)} payout=${b4.totalPayout.toFixed(2).padStart(10)} | ` +
      `5OAK events=${String(b5.winEvents).padStart(6)} payout=${b5.totalPayout.toFixed(2).padStart(10)}`
    );
  }
  console.log("============================================================\n");
}

// ==========================================================
// Tuning helper (optional block in config)
// ==========================================================
function printTuningAdvice(cfg, volStats) {
  const tgt = cfg.simulation?.targets?.volatility;
  if (!tgt) return;

  const stddevX = volStats.stddevX;
  const p95X = volStats.p95X;

  const stdOk = stddevX >= tgt.stddev_min && stddevX <= tgt.stddev_max;
  const p95Ok = Math.abs(p95X - tgt.p95_target) <= (tgt.p95_tolerance ?? 0);

  console.log("=== VOLATILITY TARGET CHECK ===");
  console.log(`Target stddev: ${tgt.stddev_min}..${tgt.stddev_max} | current ${stddevX.toFixed(2)} => ${stdOk ? "✅" : "⚠️"}`);
  console.log(`Target p95:    ${tgt.p95_target} ± ${tgt.p95_tolerance} | current ${p95X.toFixed(2)} => ${p95Ok ? "✅" : "⚠️"}`);
  console.log("--------------------------------");

  if (!stdOk || !p95Ok) {
    console.log("Tuning suggestions (rule-of-thumb):");

    if (p95X < tgt.p95_target - (tgt.p95_tolerance ?? 0)) {
      console.log("- p95 liian matala => nosta “isojen” osumien mahdollisuutta:");
      console.log("  • Laske emptyslot hieman outer-reels weightissä (esim. 0.165 -> 0.145).");
      console.log("  • Tai nosta premium symbolien weightsejä pienesti (+0.005…+0.01).");
      console.log("  • Tai lisää FS-spikeyyttä (use_fs_symbol_weights=true tai lisää replacements).");
      console.log("  • Tai nosta FS multiplierien painoa (esim. 20x weight ylös).");
    } else if (p95X > tgt.p95_target + (tgt.p95_tolerance ?? 0)) {
      console.log("- p95 liian korkea => pehmennä jakaumaa:");
      console.log("  • Nosta emptyslot weightiä (esim. 0.165 -> 0.185).");
      console.log("  • Tai laske premium paytable arvoja (esim. kerro g/e/f rivit 0.9:llä).");
      console.log("  • Tai harvenna FS triggeriä (laske scatter weight 0.115 -> 0.08…0.10).");
      console.log("  • Tai laske FS multiplierien painoa (esim. 20x weight alas).");
    }

    if (stddevX < tgt.stddev_min) {
      console.log("- stddev liian matala => peli tuntuu liian tasaiselta:");
      console.log("  • Lisää feature-volaa: vahvemmat FS-replacements / FS-weightit.");
      console.log("  • Nosta isoja FS multipliereita hieman (esim. 20x).");
    } else if (stddevX > tgt.stddev_max) {
      console.log("- stddev liian korkea => peli liian räjähtävä:");
      console.log("  • Harvenna free spins -triggeriä (scatter weight alas).");
      console.log("  • Vähennä FS-replacements (poista yksi korvaus tai tee vähemmän aggressiiviseksi).");
      console.log("  • Lisää emptyslot tai laske premium payout.");
      console.log("  • Laske isoja FS multipliereita (20x) tai nosta 10x osuutta.");
    }
  } else {
    console.log("Within target. ✅");
  }

  console.log("================================\n");
}

// ==========================================================
// Fail-fast config validation
// ==========================================================
function validateConfigOrExit(cfg) {
  const problems = [];

  if (!cfg?.base_game?.ways) problems.push("Missing cfg.base_game.ways");
  if (!cfg?.base_game?.paytable || typeof cfg.base_game.paytable !== "object") problems.push("Missing cfg.base_game.paytable");
  if (!cfg?.game?.layout?.total_stops) problems.push("Missing cfg.game.layout.total_stops");

  // Paytable must have at least one numeric row["3"/"4"/"5"]
  {
    let ok = false;
    const pt = cfg?.base_game?.paytable || {};
    for (const row of Object.values(pt)) {
      if (!row || typeof row !== "object") continue;
      if (typeof row["3"] === "number" || typeof row["4"] === "number" || typeof row["5"] === "number") { ok = true; break; }
    }
    if (!ok) problems.push("Paytable parsed, but no numeric keys found (row[\"3\"/\"4\"/\"5\"]).");
  }

  if (cfg?.free_spins?.enabled) {
    const awards = cfg?.free_spins?.scatter_fs_awards;
    if (!awards || typeof awards !== "object") problems.push("free_spins.enabled=true but missing free_spins.scatter_fs_awards");
  }

  if (cfg?.multipliers?.enabled) {
    const bd = normalizeDistribution(cfg.multipliers?.base_game?.distribution);
    const fd = normalizeDistribution(cfg.multipliers?.free_spins?.distribution);
    if (!Object.keys(bd).length) problems.push("multipliers.enabled=true but base_game.distribution is empty/invalid");
    if (cfg?.free_spins?.enabled && !Object.keys(fd).length) problems.push("multipliers.enabled=true but free_spins.distribution is empty/invalid");
  }

  if (problems.length) {
    console.error("\nCONFIG VALIDATION FAILED:");
    for (const p of problems) console.error(" -", p);
    console.error("\nConfig path:", CONFIG_RESOLVE);
    console.error("Fix your math-config.yml and rerun.\n");
    process.exit(1);
  }
}

// ==========================================================
// Main
// ==========================================================
function main() {
  if (!fs.existsSync(REPORTS_DIR)) fs.mkdirSync(REPORTS_DIR, { recursive: true });

  if (CONFIG_RESOLVE && CONFIG_RESOLVE.notFound) {
    console.error("Config not found.");
    console.error("Tried these paths:");
    for (const c of CONFIG_RESOLVE.candidates) console.error("  -", c);
    console.error("\nFix:");
    console.error("  Put math-config.yml into one of the paths above, OR run with:");
    console.error('    $env:MATH_CONFIG="C:\\\\path\\\\to\\\\math-config.yml"');
    process.exit(1);
  }

  const CONFIG_PATH = CONFIG_RESOLVE;
  const cfg = parseYaml(fs.readFileSync(CONFIG_PATH, "utf8"));

  validateConfigOrExit(cfg);

  const spins = Number(process.env.SIM_SPINS ?? cfg.simulation?.default_spins ?? 100000);
  const bet = Number(cfg.game?.bet?.base_bet ?? 1.0);

  const seed = cfg.simulation?.rng_seed;
  const rng = (seed == null) ? Math.random : mulberry32(Number(seed));

  const waysCfg = cfg.base_game.ways;
  const wildSymbol = waysCfg.wild_symbol;
  const scatterSymbol = waysCfg.scatter_symbol;

  const paytable = cfg.base_game.paytable;

  // multipliers
  const multEnabled = !!cfg.multipliers?.enabled;
  const pickBaseMult = multEnabled
    ? makeMultiplierPicker(cfg.multipliers?.base_game?.distribution, 1)
    : (() => 1);

  const pickFsMult = (multEnabled && cfg.free_spins?.enabled)
    ? makeMultiplierPicker(cfg.multipliers?.free_spins?.distribution, 1)
    : (() => 1);

  let paidSpins = 0;
  let totalWagered = 0;
  let totalWon = 0;
  let baseWon = 0;
  let fsWon = 0;

  let hitCountPaid = 0;
  let fsTriggerCountPaid = 0;

  let fsSpinsPlayed = 0;
  let fsSessionsTriggered = 0;

  const paidReturnsX = [];
  const symbolStats = {};

  const bigWinLogOverX = Number(cfg.simulation?.debug?.log_big_wins_over_x ?? 0);

  // optional multiplier stats
  let baseMultSum = 0;
  let baseMultCount = 0;
  let fsMultSum = 0;
  let fsMultCount = 0;

  for (let n = 0; n < spins; n++) {
    paidSpins++;
    totalWagered += bet;

    const paidSpinSymbolsWon = new Set();

    // draw base multiplier PER PAID SPIN
    const baseMult = pickBaseMult(rng);
    baseMultSum += baseMult;
    baseMultCount++;

    const baseReelData = generateReelData(rng, cfg, false);
    const scatterCount = baseReelData.filter((s) => s === scatterSymbol).length;

    const baseEval = checkWaysWins(baseReelData, paytable, bet, wildSymbol, scatterSymbol);

    // apply base multiplier to base payouts (total + breakdown)
    for (const w of baseEval.winBreakdown) {
      w.payout *= baseMult;
    }
    const basePayout = baseEval.winBreakdown.reduce((s, w) => s + w.payout, 0);

    let spinTotalPayout = basePayout;
    baseWon += basePayout;

    if (basePayout > 0) hitCountPaid++;

    for (const w of baseEval.winBreakdown) {
      const s = ensureSym(symbolStats, w.symbol);
      s.winEvents += 1;
      s.totalPayout += w.payout;
      s.baseWinEvents += 1;
      s.basePayout += w.payout;

      if (w.length === 3 || w.length === 4 || w.length === 5) {
        s.byLength[w.length].winEvents += 1;
        s.byLength[w.length].totalPayout += w.payout;
      }
      paidSpinSymbolsWon.add(w.symbol);
    }

    let fsToPlay = 0;
    if (cfg.free_spins.enabled && scatterCount >= Number(cfg.free_spins.min_scatter_count ?? 5)) {
      fsToPlay = freeSpinsAward(cfg, scatterCount);
      if (fsToPlay > 0) {
        fsTriggerCountPaid++;
        fsSessionsTriggered++;
      }
    }

    let fsSessionWin = 0;
    while (fsToPlay > 0) {
      fsToPlay--;
      fsSpinsPlayed++;

      // draw multiplier PER FREE SPIN
      const fsMult = pickFsMult(rng);
      fsMultSum += fsMult;
      fsMultCount++;

      const fsReelData = generateReelData(rng, cfg, true);
      const fsScatterCount = fsReelData.filter((s) => s === scatterSymbol).length;

      if (cfg.free_spins.enabled && fsScatterCount >= Number(cfg.free_spins.min_scatter_count ?? 5)) {
        const add = freeSpinsAward(cfg, fsScatterCount);
        if (add > 0) fsToPlay += add;
      }

      const fsEval = checkWaysWins(fsReelData, paytable, bet, wildSymbol, scatterSymbol);

      // apply FS multiplier to FS payouts
      for (const w of fsEval.winBreakdown) {
        w.payout *= fsMult;
      }
      const fsPayout = fsEval.winBreakdown.reduce((s, w) => s + w.payout, 0);

      fsSessionWin += fsPayout;
      fsWon += fsPayout;

      for (const w of fsEval.winBreakdown) {
        const s = ensureSym(symbolStats, w.symbol);
        s.winEvents += 1;
        s.totalPayout += w.payout;
        s.freeSpinsWinEvents += 1;
        s.freeSpinsPayout += w.payout;

        if (w.length === 3 || w.length === 4 || w.length === 5) {
          s.byLength[w.length].winEvents += 1;
          s.byLength[w.length].totalPayout += w.payout;
        }
        paidSpinSymbolsWon.add(w.symbol);
      }
    }

    spinTotalPayout += fsSessionWin;
    totalWon += spinTotalPayout;

    for (const sym of paidSpinSymbolsWon) {
      const s = ensureSym(symbolStats, sym);
      s.paidSpinsWithWin += 1;
    }

    const x = spinTotalPayout / bet;
    paidReturnsX.push(x);

    if (bigWinLogOverX > 0 && x >= bigWinLogOverX) {
      console.log(`[BIG WIN] paid spin #${paidSpins} => ${fmtX(x)} (includes feature lumped)`);
    }
  }

  const vol = {
    meanX: mean(paidReturnsX),
    stddevX: stddev(paidReturnsX),
    p50X: percentile(paidReturnsX, 0.50),
    p90X: percentile(paidReturnsX, 0.90),
    p95X: percentile(paidReturnsX, 0.95),
    p99X: percentile(paidReturnsX, 0.99),
    maxX: paidReturnsX.length ? Math.max(...paidReturnsX) : 0
  };

  const rtp = totalWon / Math.max(1e-9, totalWagered);
  const baseRtp = baseWon / Math.max(1e-9, totalWagered);
  const freeSpinsRtp = fsWon / Math.max(1e-9, totalWagered);

  const hitRatePaid = hitCountPaid / Math.max(1, paidSpins);
  const freeSpinsTriggerRatePaid = fsTriggerCountPaid / Math.max(1, paidSpins);

  const theoreticalMax = computeTheoreticalMax(cfg);

  const report = {
    meta: {
      generatedAt: new Date().toISOString(),
      configPath: CONFIG_PATH,
      projectRoot: PROJECT_ROOT
    },
    game: cfg.game,
    simulation: {
      paidSpins,
      totalWagered,
      totalWon,
      baseWon,
      freeSpinsWon: fsWon,
      freeSpinsSpinsPlayed: fsSpinsPlayed,
      freeSpinsSessionsTriggered: fsSessionsTriggered
    },
    rtp,
    baseRtp,
    freeSpinsRtp,
    hitRatePaid,
    freeSpinsTriggerRatePaid,
    volatility: vol,
    volatilityExplanation: buildVolatilityExplanation(),
    theoreticalMax,
    multipliers: {
      enabled: multEnabled,
      baseGameDistribution: cfg.multipliers?.base_game?.distribution || {},
      freeSpinsDistribution: cfg.multipliers?.free_spins?.distribution || {},
      avgBaseMultiplier: baseMultCount ? (baseMultSum / baseMultCount) : 1,
      avgFreeSpinMultiplier: fsMultCount ? (fsMultSum / fsMultCount) : 1
    }
  };

  report.humanSummary = buildHumanSummary(report);

  const symbolBreakdown = {};
  for (const [sym, s] of Object.entries(symbolStats)) {
    symbolBreakdown[sym] = {
      ...s,
      rtpContributionPct: totalWagered > 0 ? (s.totalPayout / totalWagered) * 100 : 0
    };
  }
  report.symbolBreakdown = symbolBreakdown;

  console.log("\n=== ROCKABILLY REELS MATH SIMULATOR (CJS) ===");
  console.log("Project:", PROJECT_ROOT);
  console.log("Config:", CONFIG_PATH);
  console.log("Node:", process.version);
  console.log("Paid spins:", paidSpins.toLocaleString());
  console.log("FS sessions triggered:", fsSessionsTriggered.toLocaleString());
  console.log("FS spins played:", fsSpinsPlayed.toLocaleString());

  console.log("\n--- Multipliers ---");
  if (multEnabled) {
    console.log("Base avg multiplier:", (report.multipliers.avgBaseMultiplier).toFixed(3) + "x");
    console.log("FS avg multiplier:  ", (report.multipliers.avgFreeSpinMultiplier).toFixed(3) + "x");
  } else {
    console.log("Multipliers: disabled (always 1x)");
  }

  console.log("\n--- RTP ---");
  console.log("Total RTP:      ", fmtPct01(rtp));
  console.log("Base RTP:       ", fmtPct01(baseRtp));
  console.log("Free Spins RTP: ", fmtPct01(freeSpinsRtp));

  console.log("\n--- Frequency ---");
  console.log("Hit rate (paid):", fmtPct01(hitRatePaid), `(~1/${hitRatePaid > 0 ? Math.round(1 / hitRatePaid) : "∞"})`);
  console.log("FS trigger rate:", fmtPct01(freeSpinsTriggerRatePaid), `(~1/${freeSpinsTriggerRatePaid > 0 ? Math.round(1 / freeSpinsTriggerRatePaid) : "∞"})`);

  console.log("\n--- Volatility (paid spin returns, feature lumped) ---");
  console.log("meanX: ", fmtX(vol.meanX));
  console.log("stddev:", fmtX(vol.stddevX));
  console.log("p50:   ", fmtX(vol.p50X));
  console.log("p90:   ", fmtX(vol.p90X));
  console.log("p95:   ", fmtX(vol.p95X));
  console.log("p99:   ", fmtX(vol.p99X));
  console.log("max:   ", fmtX(vol.maxX));

  console.log("\n--- Theoretical maximum ---");
  console.log(
    `Max single BASE spin: ${fmtX(theoreticalMax.perPaidSpinMaxX)} (includes base max multiplier ${theoreticalMax.baseMaxMultiplier}x)`
  );
  console.log(
    `Max single FS spin:   ${fmtX(theoreticalMax.perFreeSpinMaxX)} (includes FS max multiplier ${theoreticalMax.freeSpinsMaxMultiplier}x)`
  );
  console.log(
    `NOTE: FS retrigger exists. Without a hard cap, total return including all retriggers is theoretically unbounded.`
  );

  console.log("\n--- Human summary ---");
  for (const para of report.humanSummary) {
    console.log(para);
    console.log("");
  }

  printSymbolBreakdown(symbolStats, totalWagered);
  printAsciiHistogram(paidReturnsX);
  printTuningAdvice(cfg, vol);

  fs.writeFileSync(REPORT_JSON_PATH, JSON.stringify(report, null, 2), "utf8");
  console.log("Report written:", REPORT_JSON_PATH);
  console.log("======================================\n");
}

main();
