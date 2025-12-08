// ============================================================================
// ROCKABILLY SLOT - MATH CONFIGURATION
// ============================================================================
// NOTE: This config is DEPRECATED for reference only
// Actual game math is implemented in HelloPixi.svelte
//
// GAME STRUCTURE:
// - 5-reel slot with 3×3×1×3×3 grid layout
// - 81 WAYS-PAYING system (all possible paths, no restrictions)
// - Left-to-right wins, minimum 3 matching symbols
//
// RTP BREAKDOWN (1M spin simulation):
// - Total RTP: 94.56%
// - Base Game: 6.81% (contributes 7.2% to total RTP)
// - Free Spins: 87.75% (contributes 92.8% to total RTP)
// - Hit Frequency: 6.81% (1 in 14.7 spins)
// - Free Spins Trigger: 1 in ~2,900 spins (scatter on all 5 reels)
//
// VOLATILITY: High (free spins dominate RTP, infrequent but powerful)
// MAX WIN: ~554x observed (theoretical much higher with 5-of-a-kind premiums + 5x multiplier)
//
// ============================================================================
export default {
	providerName: 'stake_engine',
	gameName: 'oma_peli_rockabilly',
	gameID: '0_0_oma_peli',
	rtp: 0.9456,
	gameType: 'ways',
	numReels: 5,
	numRows: [3, 3, 1, 3, 3],
	minMatchingSymbols: 3,
	betModes: {
		base: {
			cost: 1.0,
			feature: true,
			buyBonus: false,
			rtp: 0.9456,
			max_win: 10000.0,
			hitFrequency: 0.0681,
			baseGameRTP: 0.0681,
			freeSpinsRTP: 0.8775,
		},
		bonus: {
			cost: 50.0,
			feature: false,
			buyBonus: true,
			rtp: 0.9456,
			max_win: 10000.0,
		},
	},
	// ============================================================================
	// SYMBOL CONFIGURATION
	// ============================================================================
	// PAYTABLE: All values are 94% of original design (balanced for 54 ways)
	// 
	// SYMBOL DISTRIBUTION (Outer reels: 0,1,3,4):
	// - Empty: 44.0%
	// - Red_milkshake (k): 18.0%  } Low tier: 44%
	// - Red_fries (j): 13.0%       }
	// - Red_burger (i): 13.0%      }
	// - Blue_rollers (c): 6.5%     } Mid tier: 18.9%
	// - Blue_speakers (d): 6.5%    }
	// - Blue_jacket (b): 4.7%      }
	// - Blue_hotrod (a): 4.7%      }
	// - Premium_brunette (f): 2.2% } High tier: 4.4%
	// - Premium_blonde (e): 1.3%   }
	// - Premium_rocker (g): 0.9%   } JACKPOT!
	// - Scatter: 7.1%
	//
	// MIDDLE REEL (reel 2):
	// - Empty: 70.0%
	// - Wild (h - Red_bubblegum): 30.0%
	//
	// MULTIPLIERS:
	// Base Game: 2x@50%, 3x@30%, 5x@20%
	// Free Spins: 2x@60%, 3x@30%, 5x@10%
	//
	// FREE SPINS:
	// - Trigger: 5-12 scatter symbols (all 5 reels)
	// - Awards: 8-15 free spins (1 spin per scatter, +3 bonus)
	// - Can retrigger during free spins
	// ============================================================================
	symbols: {
		// Blue series (low value) - a,b,c,d
		a: { // Blue_hotrod (weight: 4.7% outer reels)
			paytable: [
				{ '3': 1.88 },  // 94% of 2
				{ '4': 6.58 },  // 94% of 7
				{ '5': 23.5 },  // 94% of 25
			],
		},
		b: { // Blue_jacket (weight: 4.7% outer reels)
			paytable: [
				{ '3': 1.88 },
				{ '4': 6.58 },
				{ '5': 23.5 },
			],
		},
		c: { // Blue_rollers (weight: 6.5% outer reels)
			paytable: [
				{ '3': 1.41 },  // 94% of 1.5
				{ '4': 4.7 },   // 94% of 5
				{ '5': 18.8 },  // 94% of 20
			],
		},
		d: { // Blue_speakers (weight: 6.5% outer reels)
			paytable: [
				{ '3': 1.41 },
				{ '4': 4.7 },
				{ '5': 18.8 },
			],
		},
		e: { // Premium_blonde (weight: 1.3% outer reels)
			paytable: [
				{ '3': 4.7 },   // 94% of 5
				{ '4': 18.8 },  // 94% of 20
				{ '5': 70.5 },  // 94% of 75
			],
		},
		f: { // Premium_brunette (weight: 2.2% outer reels)
			paytable: [
				{ '3': 2.82 },  // 94% of 3
				{ '4': 14.1 },  // 94% of 15
				{ '5': 47 },    // 94% of 50
			],
		},
		g: { // Premium_rocker - JACKPOT! (weight: 0.9% outer reels)
			paytable: [
				{ '3': 4.7 },   // 94% of 5
				{ '4': 23.5 },  // 94% of 25
				{ '5': 94 },    // 94% of 100
			],
		},
		h: { // WILD - Red_bubblegum (30% on middle reel, substitutes any symbol)
			paytable: [],
			special_properties: ['wild'],
		},
		i: { // Red_burger (weight: 13% outer reels)
			paytable: [
				{ '3': 0.47 },  // 94% of 0.5
				{ '4': 1.88 },  // 94% of 2
				{ '5': 9.4 },   // 94% of 10
			],
		},
		j: { // Red_fries (weight: 13% outer reels)
			paytable: [
				{ '3': 0.47 },
				{ '4': 1.88 },
				{ '5': 9.4 },
			],
		},
		k: { // Red_milkshake (weight: 18% outer reels)
			paytable: [
				{ '3': 0.282 }, // 94% of 0.3
				{ '4': 0.94 },  // 94% of 1
				{ '5': 4.7 },   // 94% of 5
			],
		},
		emptyslot: { // Empty slots (44% on outer reels, 70% on middle reel)
			paytable: [],
			special_properties: [],
		},
		scatter: { // Scatter symbol (7.1% on ALL reels including middle)
			paytable: [],
			special_properties: ['scatter', 'free_spins_trigger'],
			// 5-12 scatters = 8-15 free spins
			// Free spins: 2x@60%, 3x@30%, 5x@10% multipliers
		},
	},
	// ============================================================================
	// REEL CONFIGURATION
	// ============================================================================
	// Reels are DYNAMICALLY GENERATED in HelloPixi.svelte using weighted randomization
	// Below data is DEPRECATED and kept for reference only
	//
	// WAYS-PAYING LOGIC:
	// - 54 unique paths through 3×3×1×3×3 grid
	// - Path restriction: Adjacent reels can only change by ±1 row
	// - Example valid path: [0,1,0,1,2] ✓
	// - Example invalid path: [0,2,0,2,0] ✗ (jumps by 2)
	// - Each qualifying path pays independently
	//
	// WIN CALCULATION:
	// 1. Generate all 54 valid paths
	// 2. For each path, check left-to-right matching symbols
	// 3. Wild (h) substitutes for any symbol
	// 4. Find longest match (3, 4, or 5 symbols)
	// 5. Apply paytable value × bet × random multiplier
	// 6. Sum all path wins for total win
	//
	// TOP PERFORMING SYMBOLS (1M spins):
	// - 3×k (Red_milkshake): 141,362 hits (most frequent)
	// - 3×i (Red_burger): 76,960 hits
	// - 3×j (Red_fries): 76,138 hits
	// - 4×k: 20,780 hits (4-of-a-kind pays significantly more)
	// ============================================================================
	paddingReels: {
		basegame: [
			// DEPRECATED - See HelloPixi.svelte randomSymbol() function
			// Reel 0
			[
				{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' },
				{ name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' }, { name: 'j' },
				{ name: 'k' }, { name: 'l' }, { name: 'm' },
				{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' },
				{ name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' }, { name: 'j' },
				{ name: 'k' }, { name: 'l' },
				{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' },
				{ name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' }, { name: 'j' },
			],
			// Reel 1
			[
				{ name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' },
				{ name: 'g' }, { name: 'h' }, { name: 'i' }, { name: 'j' }, { name: 'k' },
				{ name: 'l' }, { name: 'm' }, { name: 'a' },
				{ name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' },
				{ name: 'g' }, { name: 'h' }, { name: 'i' }, { name: 'j' }, { name: 'k' },
				{ name: 'l' }, { name: 'a' },
				{ name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' },
				{ name: 'g' }, { name: 'h' }, { name: 'i' }, { name: 'j' }, { name: 'k' },
			],
			// Reel 2
			[
				{ name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' },
				{ name: 'h' }, { name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' },
				{ name: 'm' }, { name: 'a' }, { name: 'b' },
				{ name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' },
				{ name: 'h' }, { name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' },
				{ name: 'a' }, { name: 'b' },
				{ name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' },
				{ name: 'h' }, { name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' },
			],
			// Reel 3
			[
				{ name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' },
				{ name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'm' },
				{ name: 'a' }, { name: 'b' }, { name: 'c' },
				{ name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' },
				{ name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'a' },
				{ name: 'b' }, { name: 'c' },
				{ name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' },
				{ name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'm' },
			],
			// Reel 4
			[
				{ name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' },
				{ name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'm' }, { name: 'a' },
				{ name: 'b' }, { name: 'c' }, { name: 'd' },
				{ name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' },
				{ name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'a' }, { name: 'b' },
				{ name: 'c' }, { name: 'd' },
				{ name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' },
				{ name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'm' }, { name: 'a' },
			],
			// Reel 5
			[
				{ name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' }, { name: 'j' },
				{ name: 'k' }, { name: 'l' }, { name: 'm' }, { name: 'a' }, { name: 'b' },
				{ name: 'c' }, { name: 'd' }, { name: 'e' },
				{ name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' }, { name: 'j' },
				{ name: 'k' }, { name: 'l' }, { name: 'a' }, { name: 'b' }, { name: 'c' },
				{ name: 'd' }, { name: 'e' },
				{ name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' }, { name: 'j' },
				{ name: 'k' }, { name: 'l' }, { name: 'm' }, { name: 'a' }, { name: 'b' },
			],
			// Reel 6 (middle reel) - ONLY emptyslot and h (Red_bubblegum)
			[
				{ name: 'emptyslot' }, { name: 'h' }, { name: 'emptyslot' }, { name: 'h' },
				{ name: 'emptyslot' }, { name: 'h' }, { name: 'emptyslot' }, { name: 'h' },
				{ name: 'emptyslot' }, { name: 'h' }, { name: 'emptyslot' }, { name: 'h' },
				{ name: 'emptyslot' }, { name: 'h' }, { name: 'emptyslot' }, { name: 'h' },
				{ name: 'emptyslot' }, { name: 'h' }, { name: 'emptyslot' }, { name: 'h' },
				{ name: 'emptyslot' }, { name: 'h' }, { name: 'emptyslot' }, { name: 'h' },
				{ name: 'emptyslot' }, { name: 'h' }, { name: 'emptyslot' }, { name: 'h' },
				{ name: 'emptyslot' }, { name: 'h' }, { name: 'emptyslot' }, { name: 'h' },
				{ name: 'emptyslot' }, { name: 'h' }, { name: 'emptyslot' },
			],
			// Reel 7
			[
				{ name: 'h' }, { name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' },
				{ name: 'm' }, { name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' },
				{ name: 'e' }, { name: 'f' }, { name: 'g' },
				{ name: 'h' }, { name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' },
				{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' },
				{ name: 'f' }, { name: 'g' },
				{ name: 'h' }, { name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' },
				{ name: 'm' }, { name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' },
			],
			// Reel 8
			[
				{ name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'm' },
				{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' },
				{ name: 'f' }, { name: 'g' }, { name: 'h' },
				{ name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'a' },
				{ name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' },
				{ name: 'g' }, { name: 'h' },
				{ name: 'i' }, { name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'm' },
				{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' },
			],
			// Reel 9
			[
				{ name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'm' }, { name: 'a' },
				{ name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' },
				{ name: 'g' }, { name: 'h' }, { name: 'i' },
				{ name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'a' }, { name: 'b' },
				{ name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' },
				{ name: 'h' }, { name: 'i' },
				{ name: 'j' }, { name: 'k' }, { name: 'l' }, { name: 'm' }, { name: 'a' },
				{ name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' },
			],
			// Reel 10
			[
				{ name: 'k' }, { name: 'l' }, { name: 'm' }, { name: 'a' }, { name: 'b' },
				{ name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' },
				{ name: 'h' }, { name: 'i' }, { name: 'j' },
				{ name: 'k' }, { name: 'l' }, { name: 'a' }, { name: 'b' }, { name: 'c' },
				{ name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' },
				{ name: 'i' }, { name: 'j' },
				{ name: 'k' }, { name: 'l' }, { name: 'm' }, { name: 'a' }, { name: 'b' },
				{ name: 'c' }, { name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' },
			],
			// Reel 11
			[
				{ name: 'l' }, { name: 'm' }, { name: 'a' }, { name: 'b' }, { name: 'c' },
				{ name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' },
				{ name: 'i' }, { name: 'j' }, { name: 'k' },
				{ name: 'l' }, { name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' },
				{ name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' },
				{ name: 'j' }, { name: 'k' },
				{ name: 'l' }, { name: 'm' }, { name: 'a' }, { name: 'b' }, { name: 'c' },
				{ name: 'd' }, { name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' },
			],
			// Reel 12
			[
				{ name: 'm' }, { name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' },
				{ name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' },
				{ name: 'j' }, { name: 'k' }, { name: 'l' },
				{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' },
				{ name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' }, { name: 'j' },
				{ name: 'k' }, { name: 'l' },
				{ name: 'm' }, { name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' },
				{ name: 'e' }, { name: 'f' }, { name: 'g' }, { name: 'h' }, { name: 'i' },
			],
		],
	},
};
