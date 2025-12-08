# ROCKABILLY REELS - MATHEMATICS CONFIGURATION

## Game Architecture
- **Type**: 81 Ways-Paying Slot
- **Grid**: 3×3×1×3×3 (13 independent reels)
- **Min Win**: 3-of-a-kind (left-to-right)
- **Path Restriction**: NONE - All possible paths allowed
- **Current State**: TEST CONFIGURATION (535% RTP - NOT DEPLOYABLE)

---

## 1. SYMBOL DISTRIBUTION (Reel Weights)

### Current Test Configuration (Empty 20%, 535% RTP)

### Outer Reels (0, 1, 3, 4) - All symbols including Empty
| Symbol | Name | Tier | Weight | Notes |
|--------|------|------|--------|-------|
| emptyslot | Empty Slot | N/A | 20.0% | TEST - Far too low for 81 ways |
| k | Red_milkshake | Red | 25.0% | Most common paying symbol |
| j | Red_fries | Red | 15.0% | |
| i | Red_burger | Red | 15.0% | |
| c | Blue_rollers | Blue | 8.0% | |
| d | Blue_speakers | Blue | 8.0% | |
| b | Blue_jacket | Blue | 5.0% | |
| a | Blue_hotrod | Blue | 5.0% | |
| l | Scatter | Special | 3.0% | Free spin trigger (1/200k - too rare) |
| f | Premium_brunette | Premium | 4.0% | |
| e | Premium_blonde | Premium | 3.0% | |
| g | Premium_rocker | Premium | 2.0% | JACKPOT symbol |
| h | Wild | Special | 0.0% | Only on middle reel |

**Tier Totals (Outer Reels):**
- Empty: 20.0% ⚠️ TOO LOW
- Red Tier: 55.0% (k+j+i)
- Blue Tier: 26.0% (c+d+b+a)
- Premium Tier: 9.0% (f+e+g)
- Scatter: 3.0%
- **Total**: 100.0%

### Middle Reel (2) - Only 2 symbols
| Symbol | Name | Weight | Notes |
|--------|------|--------|-------|
| emptyslot | Empty Slot | 50.0% | No win potential |
| h | Wild (Red_bubblegum) | 50.0% | Substitutes any symbol except scatter |

---

## 2. PAYTABLE (Payout Multipliers × Bet)

Current values are **65% of user-specified design** (Test configuration).

### Red Tier - Low Value, High Frequency
| Symbol | 3-of-a-kind | 4-of-a-kind | 5-of-a-kind | Notes |
|--------|-------------|-------------|-------------|-------|
| k (Red_milkshake) | 0.13x | 0.39x | 1.3x | Most common win (1.5M hits/1M spins) |
| j (Red_fries) | 0.33x | 0.65x | 1.95x | |
| i (Red_burger) | 0.33x | 0.65x | 1.95x | |

### Blue Tier - Mid Value, Medium Frequency
| Symbol | 3-of-a-kind | 4-of-a-kind | 5-of-a-kind |
|--------|-------------|-------------|-------------|
| c (Blue_rollers) | 0.65x | 1.95x | 6.5x |
| d (Blue_speakers) | 0.65x | 1.95x | 6.5x |
| b (Blue_jacket) | 1.3x | 3.25x | 9.75x |
| a (Blue_hotrod) | 1.3x | 3.25x | 9.75x |

### Premium Tier - High Value, Moderate Frequency
| Symbol | 3-of-a-kind | 4-of-a-kind | 5-of-a-kind | Notes |
|--------|-------------|-------------|-------------|-------|
| f (Premium_brunette) | 1.95x | 6.5x | 13x | |
| e (Premium_blonde) | 3.25x | 9.75x | 16.25x | |
| g (Premium_rocker) | 6.5x | 16.25x | 32.5x | JACKPOT! |

### Special Symbols
| Symbol | Payout | Function |
|--------|--------|----------|
| h (Wild) | None | Substitutes any symbol except scatter |
| l (Scatter) | None | Triggers free spins (5-12 scatters = 8-15 free spins) |
| emptyslot | None | No win potential |

---

## 3. WIN MULTIPLIERS (Random per Spin)

### Base Game Multipliers
| Multiplier | Probability | Distribution |
|------------|-------------|--------------|
| 2x | 50% | Most common |
| 3x | 30% | |
| 5x | 20% | |

### Free Spins Multipliers
| Multiplier | Probability | Distribution |
|------------|-------------|--------------|
| 2x | 60% | More frequent 2x |
| 3x | 30% | |
| 5x | 10% | Reduced 5x |

---

## 4. FREE SPINS CONFIGURATION

### Trigger Mechanism
- **Requirement**: 5-12 scatter symbols (symbol 'l') on ANY positions across all 5 reels
- **Award Formula**: `Free Spins = Scatter Count + 3`

| Scatters | Free Spins Awarded |
|----------|-------------------|
| 5 | 8 free spins |
| 6 | 9 free spins |
| 7 | 10 free spins |
| 8 | 11 free spins |
| 9 | 12 free spins |
| 10 | 13 free spins |
| 11 | 14 free spins |
| 12 | 15 free spins |

### Free Spins Properties
- **Retriggerable**: Yes (can trigger additional free spins during free spins)
- **Symbol Distribution**: Same as base game
- **Multipliers**: Different distribution (60% 2x, 30% 3x, 10% 5x)
- **Bet**: Same as triggering bet

---

## 5. 81 WAYS-PAYING LOGIC

### Path Generation Rules
1. Grid layout: `3×3×1×3×3` (columns 0,1,2,3,4 with rows [0-2],[0-2],[0],[0-2],[0-2])
2. **Path Restriction**: NONE - All possible row combinations are valid
3. All paths valid:
   - `[0,2,0,2,0]` - Row changes: +2,-2,+2,-2 ✓
   - `[2,0,0,0,2]` - Row changes: -2,0,0,+2 ✓
   - `[0,1,0,1,2]` - Row changes: +1,-1,+1,+1 ✓
   - `[1,1,0,0,1]` - Row changes: 0,-1,0,+1 ✓

### Total Valid Paths
- **Total Paths**: 3×3×1×3×3 = **81 ways**
- **No restrictions applied**

### Win Calculation
1. Generate all 54 valid paths
2. For each path, check left-to-right symbol matches
3. Wild (h) substitutes any symbol except scatter
4. Find longest consecutive match (3, 4, or 5 symbols)
5. Apply: `Payout = Paytable Value × Bet × Multiplier`
6. Sum all path wins for total win

---

## 6. RTP ANALYSIS (1,000,000 Spin Simulation)

### Current Test Configuration Results

### Overall Statistics
- **Total RTP**: 534.87% ⚠️ **CRITICAL - NOT DEPLOYABLE**
- **Base Game RTP**: 28.01%
- **Free Spins RTP**: 506.86%
- **Hit Frequency**: 28.01% (280,156 wins in 1M spins)
- **Free Spin Trigger Rate**: 1 in 200,000 spins (too rare)
- **Max Win Observed**: 1,040x base bet

### Volatility Profile
- **Classification**: Extremely High Volatility
- **Characteristic**: Base game dominates due to 80% paying symbols
- **Base Game**: Very frequent wins (28% hit rate)
- **Free Spins**: Extremely rare but massive multiplier effect

### Top Performing Combinations (1M spins)
| Combination | Hit Count | % of Total Wins |
|-------------|-----------|-----------------|
| 3×k (Red_milkshake) | 1,544,250 | 55.1% |
| 3×i (Red_burger) | 620,490 | 22.1% |
| 3×j (Red_fries) | 613,479 | 21.9% |
| 4×k | 341,544 | 12.2% |
| 3×c (Blue_rollers) | 190,308 | 6.8% |
| 3×d (Blue_speakers) | 188,343 | 6.7% |
| 5×k | 96,384 | 3.4% |

---

## 7. THEORETICAL MAX WINS

### Single Path Maximum
| Combination | Base Payout | With 5x Multiplier | Notes |
|-------------|-------------|-------------------|-------|
| 5×g (Premium_rocker) | 94x | 470x | JACKPOT symbol |
| 5×e (Premium_blonde) | 70.5x | 352.5x | |
| 5×f (Premium_brunette) | 47x | 235x | |

### Multiple Paths
Since each of the 54 paths pays independently, theoretical maximum occurs when:
- All 54 paths show same 5-of-a-kind premium symbol
- 5x multiplier applied
- **Theoretical Max**: `54 × 94x × 5 = 25,380x base bet`
- **Note**: Astronomically unlikely due to symbol distribution

### Practical Maximum
Based on 1M spin simulation:
- **Observed Max**: 554x base bet
- Likely scenario: Premium 5-of-a-kind + multiple qualifying paths + high multiplier

---

## 8. CONFIGURATION CONSTANTS

### Bet Limits
```typescript
const MIN_BET = 1;
const MAX_BET = 100;
```

### Starting Balance
```typescript
let balance = 1000; // Initial credits
```

### Free Spin Formula
```typescript
freeSpins = scatterCount + 3; // Where scatterCount ∈ [5,12]
```

### Multiplier Selection
```typescript
// Base Game
if (rand < 0.5) return 2;
if (rand < 0.8) return 3;
return 5;

// Free Spins
if (rand < 0.6) return 2;
if (rand < 0.9) return 3;
return 5;
```

---

## 9. IMPLEMENTATION NOTES

### Symbol Weight Verification
```typescript
// Outer reels total (excluding wild):
44.0 + 18.0 + 13.0 + 13.0 + 6.5 + 6.5 + 4.7 + 4.7 + 7.1 + 2.2 + 1.3 + 0.9 = 100.0% ✓

// Middle reel total:
70.0 + 30.0 = 100.0% ✓
```

### Paytable Scaling
All values are **94% of original**, calculated as:
```
New Value = Original Value × 0.94
Example: k (5-of-a-kind) = 5 × 0.94 = 4.7
```

### Path Generation Algorithm
```typescript
validPaths = 0;
for r0 in [0,1,2]:
  for r1 in [0,1,2]:
    for r2 in [0]:  // Middle reel always row 0
      for r3 in [0,1,2]:
        for r4 in [0,1,2]:
          validPaths += 1

Result: validPaths = 81
```

---

## SUMMARY

**Current State**: 81-ways TEST CONFIGURATION - **NOT DEPLOYABLE**

### Test Results (Empty 20%, Paytable 65%)
- **RTP**: 534.87% (5.6× target of 96%)
- **Hit Frequency**: 28.01% (target 15-22%)
- **Free Spins**: 1/200,000 (target 1/75-175)
- **Biggest Win**: 1,040x base bet

### Key Findings
1. **81 ways is EXTREMELY sensitive to Empty slot percentage**
   - At 20% Empty: RTP = 535%
   - At 68% Empty: RTP = 131%
   - At 75% Empty: RTP = 90%
   
2. **Paytable scaling is critical**
   - User values (100%): Would produce ~800%+ RTP
   - 65% of user values: Produces 535% RTP at 20% Empty
   - 50% of user values: Produces 65% RTP at 68% Empty

3. **Free spins are too rare** (Scatter 3%)
   - Need 5-6% Scatter for 1/75-175 trigger rate
   - But this increases RTP significantly

### Mathematical Relationship (81 Ways)
```
RTP ≈ (1 - Empty%) × Paytable% × 81 paths × Wild% × Multipliers
```

For 96% target RTP with current paytable (65%):
- **Required Empty slots**: ~69-72%
- **Required Scatter**: ~5-6% (for 1/100-150 free spins)
- **Expected hit frequency**: 15-18%

### Recommendations for Deployment
1. **Option A - Balanced**: Empty 70%, Paytable 65%, Scatter 5.5%
2. **Option B - Lower Paytable**: Empty 65%, Paytable 50%, Scatter 6%
3. **Option C - Revert to 54 ways**: Proven 94.56% RTP configuration

**Next Steps**:
1. Choose target configuration
2. Run simulator until RTP stabilizes at ~96%
3. Verify free spin trigger rate 1/75-175
4. Test hit frequency 15-22%
5. Deploy when all metrics in range
