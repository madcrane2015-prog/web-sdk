/**
 * ROCKABILLY REELS - MATH CONFIG (CJS)
 * Versio: 1.0
 *
 * Tämä tiedosto on tarkoitettu PELIMATEMATIIKAN konfigurointiin.
 * - Muuta vain numeroarvoja (todennäköisyydet, kertoimet, FS-määrät jne.)
 * - Rakenne pyritään pitämään vakiona, jotta simulaattori voi lukea sen.
 */

module.exports = {
  game: {
    id: "rockabilly_reels",
    name: "Rockabilly Reels",

    layout: {
      reels: 5,
      grid: [3, 3, 1, 3, 3], // 3×3×1×3×3
      total_stops: 13,       // jokainen ruutu = yksi stoppikohta
      ways: 81               // 3×3×1×3×3 = 81 ways
    },

    bet: {
      base_bet: 1.0
    }
  },

  // =====================================================================
  // SYMBOLIT
  // =====================================================================
  symbols: [
    // LOW (RED)
    { id: "k", name: "Milkshake", category: "low", type: "normal" },
    { id: "j", name: "Fries", category: "low", type: "normal" },
    { id: "i", name: "Burger", category: "low", type: "normal" },

    // MID (BLUE)
    { id: "c", name: "Roller Skates", category: "mid", type: "normal" },
    { id: "d", name: "Microphone", category: "mid", type: "normal" },
    { id: "b", name: "Jacket", category: "mid", type: "normal" },
    { id: "a", name: "Hot Rod", category: "mid", type: "normal" },

    // PREMIUM
    { id: "f", name: "Brunette", category: "premium", type: "normal" },
    { id: "e", name: "Blonde", category: "premium", type: "normal" },
    { id: "g", name: "Rockabilly", category: "premium", type: "normal" }, // jackpot-ish

    // SPECIAL
    { id: "h", name: "Wild", category: "special", type: "wild" },
    { id: "l", name: "Scatter", category: "special", type: "scatter" },
    { id: "emptyslot", name: "Empty", category: "special", type: "empty" }
  ],

  // =====================================================================
  // BASE GAME - MATEMATIIKKA
  // =====================================================================
  base_game: {
    // Ulommat stoppikohdat (12 kpl) arvotaan näillä suhteellisilla painoilla.
    // Wild (h) ei ole mukana ulommissa, kuten HelloPixissä.
    symbol_weights_outer_reels: {
      // LOW (RED)
      k: 0.25,  // Milkshake
      j: 0.15,  // Fries
      i: 0.15,  // Burger

      // MID (BLUE)
      c: 0.08,  // Roller Skates
      d: 0.08,  // Microphone
      b: 0.05,  // Jacket
      a: 0.05,  // Hot Rod

      // PREMIUM
      f: 0.04,  // Brunette
      e: 0.03,  // Blonde
      g: 0.02,  // Rockabilly

      // SPECIAL
      l: 0.115,      // Scatter
      h: 0.0,        // Wild not used here
      emptyslot: 0.165
    },

    // Keskikela (indeksi 6): 50/50 emptyslot vs wild
    center_reel: {
      wild_probability: 0.50,
      empty_probability: 0.50
    },

    // PAYTABLE: kertoimet per ways-kombinaatio, lopullinen payout = paytable * bet * ways
    paytable: {
      // LOW (RED)
      k: { "3": 0.23, "4": 0.76, "5": 3.77 },  // Milkshake
      j: { "3": 0.38, "4": 1.51, "5": 7.53 },  // Fries
      i: { "3": 0.38, "4": 1.51, "5": 7.53 },  // Burger

      // MID (BLUE)
      c: { "3": 1.13, "4": 3.77, "5": 15.07 }, // Roller Skates
      d: { "3": 1.13, "4": 3.77, "5": 15.07 }, // Microphone
      b: { "3": 1.51, "4": 5.28, "5": 18.83 }, // Jacket
      a: { "3": 1.51, "4": 5.28, "5": 18.83 }, // Hot Rod

      // PREMIUM
      f: { "3": 2.26, "4": 11.30, "5": 37.66 }, // Brunette
      e: { "3": 3.77, "4": 15.07, "5": 56.49 }, // Blonde
      g: { "3": 3.77, "4": 18.83, "5": 75.32 }, // Rockabilly

      // SPECIALS (no direct pays)
      h: {},
      l: {},
      emptyslot: {}
    },

    ways: {
      enabled: true,
      min_symbols: 3,
      max_symbols: 5,
      wild_symbol: "h",
      scatter_symbol: "l",
      true_ways_mode: true
    }
  },

  // =====================================================================
  // FREE SPINS
  // =====================================================================
  free_spins: {
    enabled: true,

    trigger_symbol: "l",
    min_scatter_count: 5,

    // Jokaiselle scatter-määrälle oma FS-määrä:
    scatter_fs_awards: {
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "10": 10,
      "11": 11,
      "12": 12
    },

    // Jos true, käytä FS:lle omia symboleiden painoja
    use_fs_symbol_weights: false,

    // Vain jos use_fs_symbol_weights: true
    fs_outer_reels_weights: {},

    fs_center_reel: {
      wild_probability: 0.50,
      empty_probability: 0.50
    },

    // Symbolikorvaukset FS:ssä
    fs_symbol_replacements: {
      enabled: true,
      replacement_map: {
        k: "g", // Milkshake -> Rockabilly
        i: "f"  // Burger -> Brunette
      }
    }
  },

  // =====================================================================
  // MULTIPLIERS (pois päältä tässä pelissä)
  // =====================================================================
  multipliers: {
    enabled: false,
    base_game: { distribution: {} },
    free_spins: { distribution: {} }
  },

  // =====================================================================
  // SIMULAATIO
  // =====================================================================
  simulation: {
    default_spins: 200000, // vaihda esim. 1000000 jos haluat
    rng_seed: null,        // esim. 1234 toistettavaan ajoon

    debug: {
      log_big_wins_over_x: 50.0,
      track_max_win: true
    },

    // TUNING TARGETS (valinnainen mutta hyödyllinen)
    targets: {
      volatility: {
        stddev_min: 8,         // medium-high haarukka
        stddev_max: 12,
        p95_target: 20,        // haluan p95 ≈ 20x
        p95_tolerance: 5       // ok jos 15..25
      }
    }
  }
};
