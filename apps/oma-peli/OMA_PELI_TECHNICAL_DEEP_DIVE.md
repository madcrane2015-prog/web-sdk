# Oma Peli Technical Deep Dive

Last investigated: 2026-07-05

Related agent/refactor documents:

- `OMA_PELI_REFACTOR_PLAN.yaml`: parseable step-by-step refactor plan for stabilizing and modularizing oma-peli.
- `AGENTS.md`: app-scoped coding-agent rules for future work inside `apps/oma-peli`.
- `UI_TEST_MATRIX.md`: repeatable deployed-route browser checks for desktop, mobile portrait, and mobile landscape.
- `agentic-refactor/`: guarded Copilot CLI runner and phase prompt template for executing the refactor plan one phase at a time.

This document describes how `apps/oma-peli` is actually set up today. The most important architectural fact is that the app contains two different implementation tracks:

1. The deployed SvelteKit route renders `PasswordProtection` and then `HelloPixi`. This is the active playable Rockabilly Reels implementation.
2. The app also contains a more standard Web SDK event-driven game shell in `Game.svelte`, `src/game/*`, and Storybook. That path follows the monorepo BookEvent -> EmitterEvent -> component model, but it is not the component rendered by `src/routes/+page.svelte`.

Because of that split, future changes should first decide whether they target the deployed standalone game or the SDK/storybook game shell.

## Architecture Decision: Standalone And SDK Paths

Decision date: 2026-07-05

Current decision: maintain both paths deliberately for now.

- The deployed playable route remains `src/routes/+page.svelte -> PasswordProtection.svelte -> HelloPixi.svelte`.
- The standalone `HelloPixi` path remains the current demo/playable implementation while stabilization, mobile layout repair, and modularization continue.
- The SDK/Storybook path in `Game.svelte`, `src/game/*`, and `src/stories/*` is retained and documented. It must not be deleted or treated as dead code without explicit maintainer approval.
- Storybook remains useful for SDK-shell development, but it still does not validate the deployed `HelloPixi` route.
- Production/RGS migration is deferred. If oma-peli should become RGS-authoritative, plan that as a separate migration from standalone state/math outputs into BookEvents and EmitterEvents instead of mixing it with UI stabilization.

Rationale: the standalone route is the current user-visible game, while the SDK path is structurally valuable for a possible future RGS migration. Removing either path during the current refactor would create unnecessary risk.

## Repository Position

`oma-peli` is one app inside the Web SDK TurboRepo monorepo.

- App root: `apps/oma-peli`
- Package name: `oma-peli`
- Runtime framework: SvelteKit 2, Svelte 5, Vite 6
- Graphics: PixiJS 8
- Package manager: pnpm 10.5.0
- Node requirement: Node >= 22.16.0
- Monorepo orchestration: Turbo 2
- Deployment target: static SvelteKit build, configured for GitHub Pages under `/web-sdk/oma-peli`

Root workspace wiring:

- `pnpm-workspace.yaml` includes `apps/*` and `packages/*`.
- `turbo.json` makes app tasks depend on dependency package builds through `dependsOn: ["^build"]`.
- Root scripts call Turbo globally. In normal development use filters, for example `pnpm run dev --filter=oma-peli`.

## App Package

`apps/oma-peli/package.json` defines these local scripts:

```bash
pnpm run dev --filter=oma-peli
pnpm run build --filter=oma-peli
pnpm run preview --filter=oma-peli
pnpm run storybook --filter=oma-peli
pnpm run lint --filter=oma-peli
pnpm run format --filter=oma-peli
```

The local scripts inside the app are:

- `dev`: `vite dev --host --port 3010`
- `build`: `vite build`
- `preview`: `vite preview`
- `storybook`: `PUBLIC_CHROMATIC=true storybook dev -p 6001 public`
- `lint`: `eslint "src"`
- `format`: `prettier --write --ignore-path=../../.prettierignore .`

Major direct dependencies include:

- SvelteKit, Svelte 5, Vite
- PixiJS 8 and `pixi-svelte`
- Web SDK packages: `components-layout`, `components-pixi`, `components-shared`, `components-storybook`, `components-ui-html`, `components-ui-pixi`, `state-shared`, `utils-book`, `utils-event-emitter`, `utils-layout`, `utils-slots`, `utils-sound`, `utils-xstate`, `rgs-requests`
- `@lingui/core` for i18n support
- `lodash`

## Build And Base Path Setup

The app is configured as a static SvelteKit site.

`svelte.config.js`:

- Uses `@sveltejs/adapter-static`.
- Sets `fallback: 'index.html'`.
- Sets `kit.paths.base` to `''` during dev and `/web-sdk/oma-peli` otherwise.
- Prerenders `entries: ['*']`.

`vite.config.js`:

- Uses `sveltekit()`.
- Sets Vite `base` to `''` during dev and `/web-sdk/oma-peli/` otherwise.

The double base-path setup matters because `HelloPixi` loads many images and sounds from SvelteKit's `$app/paths` `base`, while some GitHub Pages paths are also special-cased in the component.

## Runtime Route Flow

The active route is simple:

```text
src/routes/+layout.svelte
  -> GlobalStyle
  -> Authenticate
  -> LoadI18n
  -> route children

src/routes/+page.svelte
  -> PasswordProtection
  -> HelloPixi, only after local password auth
```

`+layout.svelte` also sets the document body background on mount:

- Background color: black
- Background image: `${base}/symbols/bg_large.jpg?v=${timestamp}`
- Size: cover
- Position: center
- iOS-oriented CSS fallback for `-webkit-fill-available`

The layout imports `Authenticate` from `components-shared`, so the standard SDK authentication wrapper is still present. The page then applies its own separate password gate before rendering the local game.

## Password Protection

`PasswordProtection.svelte` is a client-only gate around the game.

- Password: `slot2024`
- Auth state is stored in `sessionStorage` as `gameAuthenticated=true`.
- The form is rendered as a full-screen overlay until authenticated.
- Failed attempts show a short error and clear the input.

This is not real security for a production gambling environment. It is a client-side access gate suitable for demos or private preview links only.

## Active Game: HelloPixi

`HelloPixi.svelte` is the active playable game. It is a large self-contained component that owns:

- PixiJS application creation
- Asset loading
- Symbol generation orchestration through `src/game-standalone/math.ts`
- Spin state and reel animation
- Ways win state transitions around the pure `calculateWins()` result
- Free spin triggering and retriggering
- Balance, bet levels, autoplay, stats, win log
- HTML overlays and controls
- Sound effects through `HTMLAudioElement`
- Music through Howler.js loaded from CDN
- Responsive layout handling through `src/config/layoutConfig.ts` and `src/utils/layoutUtils.ts`

It does not use the SDK BookEvent pipeline for the actual deployed play loop. All spin results are generated locally with `Math.random()`, now routed through pure helpers in `src/game-standalone/math.ts`.

Phase 03 introduced the standalone runtime math module set:

- `src/game-standalone/types.ts`: `SYMBOL_KEYS`, `SymbolKey`, `SpinSpeed`, `WinResult`, reel coordinate, and calculation result types.
- `src/game-standalone/mathConfig.ts`: active bet levels, base/free-spin symbol weights, paytable, and multiplier distributions.
- `src/game-standalone/math.ts`: `randomSymbol()`, `getReelPosition()`, `getReelIndex()`, `getWinMultiplier()`, and pure `calculateWins()`.

`HelloPixi` still owns state transitions and side effects: it increments free-spin counters, changes music when free spins start, records stats, highlights wins, and renders Pixi/HTML UI. The math module returns scatter trigger metadata separately from paying wins so those state transitions stay outside the pure calculation.

Phase 04 started the Pixi runtime split:

- `src/game-standalone/reel.ts`: owns the `Reel` class, reel state machine, bounce/slowdown behavior, and symbol sprite drawing. `HelloPixi` injects symbol getters/setters, random symbol generation, current spin speed, textures, and stop-sound callbacks.
- `src/game-standalone/pixiRuntime.ts`: owns Pixi application creation, reel mask creation, logo texture quality setup, and application destruction.

`HelloPixi` still creates the 13 reel containers and masks because their positions depend on component layout constants. It now returns teardown cleanup from `onMount`, removing resize and keydown listeners, removing the Pixi ticker callback, removing the canvas, and destroying the Pixi application.

Phase 05 started the standalone HTML UI split:

- `src/components/standalone/TopToggles.svelte`: owns the top paytable/debug/music/sound buttons and receives only display positions, asset path, toggle state, and callbacks from `HelloPixi`.
- `src/components/standalone/WinPopup.svelte` and `FreeSpinsEndPopup.svelte`: own the win and free-spin-end overlay markup while `HelloPixi` keeps payout/free-spin state transitions.
- `src/components/standalone/DebugPanel.svelte`: owns the RTP/statistics/debug monitor markup while `HelloPixi` keeps the counters and test actions.
- `src/components/standalone/BetControls.svelte`, `DesktopControlPanel.svelte`, and `MobileControlPanel.svelte`: remove duplicated bet-control markup for desktop and mobile branches without changing the surrounding control-panel chrome.
- `src/components/standalone/controlPanelApi.ts`: documents the intended control-panel state, visual, and callback API for later deeper extraction.

The surrounding control panel frame, play button, autoplay icon, spin speed icon, balance, win display, paytable menu content, and mobile menu content still live in `HelloPixi`; phase 05 only began componentizing the highest-duplication and overlay portions.

Phase 06 created `UI_TEST_MATRIX.md` and ran browser validation against the deployed standalone route at `http://localhost:3010/` after passing the local password gate. Desktop at 1440x1000 passed the smoke flow: canvas mounted, paytable opened/closed, audio toggles clicked, spin clicked, autoplay menu opened/cancelled, and speed clicked. Mobile portrait 390x844 and mobile landscape 844x390 still fail layout validation because the top paytable/debug/music/sound controls are positioned offscreen to the right. The bottom mobile menu, spin, and bet controls are visible, but the primary spin button measured about 30x30 px in portrait and 43x43 px in landscape, and the paytable/menu close button was below the viewport in both mobile checks.

Phase 07 centralized standalone asset and audio URLs in `src/game-standalone/assets.ts`:

- `createStandaloneAssetManifest()` builds symbol, control, sound, and music URLs from SvelteKit `base` while preserving the GitHub Pages `/web-sdk/oma-peli` path behavior.
- `BACKGROUND_MUSIC_LOOP_IDS` lists the real background loop files present in `static/music` and intentionally excludes missing loop `14`.
- `chooseBackgroundMusicLoop()` selects from the manifest list and avoids repeating the currently playing loop when possible.
- `HelloPixi` imports `Howl` from the direct `howler` package dependency instead of injecting Howler from a CDN script tag.
- HTMLAudioElement effects still handle `spin`, `stop`, and `win` from `static/sounds`; Howler handles background loops, free-spin music, drum hits, and win stingers.

The splash screen click remains the first user gesture. `HelloPixi` initializes Howler objects after Pixi setup, but playback still starts from user actions such as spin or toggling music, which keeps the mobile audio-unlock behavior gesture-driven.

Phase 08 started the standalone state-flow split:

- `src/game-standalone/state.ts`: defines `StandaloneGameState` and `createInitialStandaloneGameState()` for balance, bet index, free-spin counters, autoplay, stats, audio toggles, debug visibility, and spin speed defaults.
- `src/game-standalone/actions.ts`: owns small transition helpers for bet index changes, autoplay start/stop/decrement, spin-start accounting, win accounting, free-spin trigger/test grants, and spin result reset state.
- `HelloPixi` still keeps Svelte local `$state` variables and side effects, but those variables are initialized from `createInitialStandaloneGameState()` and several handlers now call named transition helpers instead of open-coding every mutation.
- `spin()` now explicitly ignores duplicate spin attempts while reels are in active states (`spinning`, `slowing`, or `bouncing`) or autoplay is processing. Fresh `idle` reels and completed `stopped` reels remain allowed.

### PixiJS Initialization

On mount, `HelloPixi`:

1. Creates a new `PIXI.Application`.
2. Initializes it with a transparent renderer.
3. Uses canvas dimensions from the current layout config.
4. Enables antialiasing, retina resolution, and `autoDensity`.
5. Appends the Pixi canvas to a bound container element.
6. Registers a resize handler that computes `gameScale` from the browser viewport.
7. Registers a spacebar handler for spin or skip-spin behavior.
8. Loads reel frames, logo, and all symbol textures with `PIXI.Assets.load`.
9. Creates HTML audio elements for spin, stop, and win effects.
10. Creates 13 Pixi reel containers and masks, then instantiates `StandaloneReel` from `src/game-standalone/reel.ts`.
11. Initializes music with Howler.js from the direct `howler` package dependency.
12. Starts `app.ticker.add(update)`.

The renderer keeps a fixed logical size from layout config, while `app.stage.scale` is changed for responsive display.

### Canvas And Game Dimensions

The nominal desktop game area is 1445 by 1000. The current layout system can override scale and offsets by device class.

Important constants in `HelloPixi`:

- `COLS = 5`
- `ROWS = 3`
- `TOTAL_REELS = 13`
- Layout shape: `3x3x1x3x3`
- Base symbol width: `100`
- `SCALE_MULTIPLIER = 1.75`
- Symbol width: `175`
- Symbol height keeps the source image ratio `700 / 760`
- Middle reel index: `6`
- Middle reel offset: `x = -5`, `y = 175`

The middle reel has special behavior because it represents the single row in the `3x3x1x3x3` layout.

### Symbol Set

The active standalone symbol keys are:

| Key         | Meaning          | Asset                                 |
| ----------- | ---------------- | ------------------------------------- |
| `a`         | Blue hotrod      | `static/symbols/Blue_hotrod.jpg`      |
| `b`         | Blue jacket      | `static/symbols/Blue_jacket.jpg`      |
| `c`         | Blue rollers     | `static/symbols/Blue_rollers.jpg`     |
| `d`         | Blue speakers    | `static/symbols/Blue_speakers.jpg`    |
| `e`         | Premium blonde   | `static/symbols/Premium_blonde.jpg`   |
| `f`         | Premium brunette | `static/symbols/Premium_brunette.jpg` |
| `g`         | Premium rocker   | `static/symbols/Premium_rocker.jpg`   |
| `h`         | Wild             | `static/symbols/New_Wild.jpg`         |
| `i`         | Red burger       | `static/symbols/Red_burger.jpg`       |
| `j`         | Red fries        | `static/symbols/Red_fries.jpg`        |
| `k`         | Red milkshake    | `static/symbols/Red_milkshake.jpg`    |
| `l`         | Scatter          | `static/symbols/Scatter.jpg`          |
| `emptyslot` | Empty slot       | `static/symbols/Emptyslot.jpg`        |

The `Reel` class in `src/game-standalone/reel.ts` models one visible slot position as one independently spinning reel. Drawing now reuses three `Sprite` instances per reel and swaps texture/position each frame. Before phase 04, drawing removed and recreated children every frame with `container.removeChildren()` and three new `Sprite` instances, which was a likely mobile performance risk.

Runtime weights now live in `src/game-standalone/mathConfig.ts`, which is the source of truth for the deployed local game.

Base game outer reels:

| Key         | Weight |
| ----------- | -----: |
| `k`         |   0.08 |
| `j`         |   0.07 |
| `i`         |   0.07 |
| `c`         |   0.07 |
| `d`         |   0.07 |
| `b`         |   0.07 |
| `a`         |   0.07 |
| `f`         |   0.06 |
| `e`         |   0.05 |
| `g`         |   0.04 |
| `l`         |   0.10 |
| `h`         |   0.00 |
| `emptyslot` |   0.25 |

Free spin outer reels:

| Key         | Weight |
| ----------- | -----: |
| `k`         |   0.00 |
| `j`         |   0.00 |
| `i`         |   0.00 |
| `c`         |   0.07 |
| `d`         |   0.07 |
| `b`         |   0.07 |
| `a`         |   0.07 |
| `f`         |   0.14 |
| `e`         |   0.12 |
| `g`         |   0.11 |
| `l`         |   0.10 |
| `h`         |   0.00 |
| `emptyslot` |   0.25 |

Middle reel behavior:

- Reel index `6` returns `h` with 55% probability.
- Otherwise it returns `emptyslot`.
- Wilds are therefore local to the middle reel in the active implementation.

### Paytable

Runtime paytable values now live in `src/game-standalone/mathConfig.ts`:

| Key | 3-kind | 4-kind | 5-kind |
| --- | -----: | -----: | -----: |
| `k` |   0.20 |   0.60 |   1.50 |
| `j` |   0.40 |   1.00 |   2.50 |
| `i` |   0.40 |   1.00 |   2.50 |
| `c` |   0.80 |   2.00 |   5.00 |
| `d` |   0.80 |   2.00 |   5.00 |
| `b` |   1.50 |   4.00 |   8.00 |
| `a` |   1.50 |   4.00 |   8.00 |
| `f` |   3.00 |   8.00 |  20.00 |
| `e` |   5.00 |  10.00 |  25.00 |
| `g` |   7.00 |  15.00 |  50.00 |

Wild, scatter, and empty do not directly pay.

### Multipliers

`getWinMultiplier()` in `src/game-standalone/math.ts` returns one multiplier per winning spin, not one multiplier per win line. Its distribution thresholds are configured in `src/game-standalone/mathConfig.ts`.

Base game:

- 1x at 70%
- 2x at 22%
- 3x at 8%

Free spins:

- 3x at 70%
- 5x at 22%
- 10x at 8%

Some existing markdown docs in the app mention older multiplier systems or removed multipliers. Those notes do not match the current `HelloPixi` source.

### Ways Win Logic

The game generates all possible row combinations through the shape `3x3x1x3x3`:

```text
column 0: rows 0,1,2
column 1: rows 0,1,2
column 2: row 0 only
column 3: rows 0,1,2
column 4: rows 0,1,2
```

That gives 81 paths.

For each path:

1. Read the symbols at the 5 reel positions.
2. Ignore paths that start with `emptyslot` or scatter.
3. Determine the winning symbol as the first non-wild, non-empty, non-scatter symbol on the path.
4. Count consecutive columns from the left that contain either the winning symbol or wild.
5. Record wins of length 3, 4, or 5.
6. Filter to the longest win per exact path.
7. Filter to the longest win length per symbol.
8. Group by `symbol-length`.
9. Count unique positions per reel in the group.
10. Compute ways by multiplying the unique position counts.
11. Compute payout as `paytable * betAmount * ways * winMultiplier`.

This is not an RGS-authoritative calculation. It is local simulation/math in the client.

### Scatter And Free Spins

Scatter symbol key: `l`.

`calculateWins()` counts scatter positions anywhere across the 13 visible reels and returns scatter trigger metadata. `HelloPixi.checkWins()` applies the resulting state changes.

- If scatter count is at least 5, free spins are triggered or retriggered.
- Awarded free spins equals the scatter count in current source.
- Scatters are pushed into the wins list with payout `0`.
- If this is the first trigger, `isFreeSpinMode` becomes true, `freeSpinsTotalWon` resets, and music switches.
- During free spins, each spin decrements `freeSpinsRemaining` instead of charging a bet.
- When free spins reach zero, the game schedules a free-spin-end popup after 2 seconds.

This differs from some older docs that mention `scatterCount + 3`, fixed 10 free spins, or removed multiplier behavior.

### Reel Animation

The `Reel` class in `src/game-standalone/reel.ts` models one visible slot position as one independently spinning reel.

State flow:

```text
idle -> spinning -> slowing -> bouncing -> stopped
```

Each reel:

- Starts with a synchronized delay based on reel index.
- Accelerates to a fixed target speed of 35 px/frame.
- Stops after `60 + index * SPIN_SPEED_CONFIG[spinSpeed]` frames.
- Uses spin speed config to change stop spacing, not the visual spin speed.
- Applies exponential slowdown.
- Plays stop sound and drum hit when entering bounce.
- Draws three stacked copies of the current symbol to fake a scrolling strip.

Drawing now reuses three `Sprite` instances per reel and swaps texture/position each frame. Before phase 04, drawing removed and recreated children every frame with `container.removeChildren()` and three new `Sprite` instances, which was a likely mobile performance risk.

Spin speed config:

- `fast: 3`
- `medium: 7`
- `slow: 18`

### Balance, Bet, Stats, And Autoplay

Starting balance: `1000`.

Bet levels:

```text
0.4, 0.8, 1, 1.6, 2, 3, 5, 8, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100
```

Default bet index is `5`, so the default bet is `3`.

Tracked stats include:

- Total rounds
- Total wagered
- Total won
- Total wins
- Current RTP
- Hit frequency
- Free spin trigger count
- Free spins played
- Visible symbols
- Empty slots
- Empty slot percentage

Autoplay state includes:

- `isAutoPlaying`
- `autoPlayRoundsLeft`
- `isProcessingAutoPlay`
- `autoPlayTimeoutId`

Autoplay menu options in the HTML include 10, 25, 50, 100, 200, 500, 1000, and 5000 rounds.

### Win Presentation

The active standalone game uses HTML overlays and Pixi highlights.

- Winning symbols get a gold `Graphics` rectangle highlight.
- Win popup appears on the right side of the viewport.
- Win label rollup uses `requestAnimationFrame` and cubic easing.
- Wins at 10x bet or higher can play win-theme music.
- `VinylWinAnimation` can be triggered for larger wins.
- A downloadable win log is maintained in memory as text entries.

### Loading Screen

`LoadingScreen.svelte` is used by both `HelloPixi` and the SDK `Game.svelte` path.

Standalone behavior:

1. Simulated loading bar increments 2% every 60 ms.
2. After reaching 100%, it switches to a splash screen.
3. The splash screen waits 3 seconds before clicks can start the game.
4. Clicking or pressing Enter calls the supplied `onloaded` callback.

Assets:

- `static/loading_screen/madcrane_loader.png`
- `static/loading_screen/Splash_screen_RockabillyReels.jpeg`

### Sound And Music In HelloPixi

`HelloPixi` has a local audio setup independent of `src/game/sound.ts`.

Sound effects use HTML audio elements:

- `static/sounds/spin.mp3`
- `static/sounds/stop.mp3`
- `static/sounds/win.mp3`

Music uses Howler.js from the direct `howler` package dependency declared by `apps/oma-peli/package.json`.

Music assets:

- Base loops: `static/music/rockabilly reels loop 1.mp3` through numbered loop files.
- Free spin loop: `static/music/rockabilly-loop_long.mp3`.
- Drum hit: `static/music/drum-hit.mp3`.
- Win stinger: `static/music/win-stinger.mp3`.

Current source selects base loops from the explicit `BACKGROUND_MUSIC_LOOP_IDS` manifest in `src/game-standalone/assets.ts`. The static folder is missing `rockabilly reels loop 14.mp3`, so loop `14` is intentionally excluded from random selection.

Music toggles and sound toggles use control images from `static/controls`.

## Layout System

The custom layout system is in:

- `src/config/layoutConfig.ts`
- `src/utils/layoutUtils.ts`
- `src/components/GameBackground.svelte`

`HelloPixi` currently imports `getCurrentLayout`, `getCurrentDeviceType`, `calculateControlPanelPosition`, `createViewportModel`, and safe-area helpers from `layoutUtils`. It does not render `GameBackground.svelte`; the actual page background is handled in `+layout.svelte` and the Pixi canvas remains transparent.

Device types:

- `desktop`
- `android-portrait`
- `android-landscape`
- `iphone-portrait`
- `iphone-landscape`

Device detection:

- SSR returns desktop.
- Width greater than 768 means desktop.
- Mobile orientation is based on `window.innerWidth` and `window.innerHeight`.
- iOS is detected with `/iPhone|iPad|iPod/i.test(navigator.userAgent)`.

Each layout config controls:

- Game area width, height, scale, offset
- Control panel position, size, scale, offset
- Play button scale and offsets
- Background y-shift, scale, and fit mode

`layoutUtils` now owns the deployed route viewport model. `createViewportModel()` returns viewport width, height, mobile/portrait flags, safe-area insets, detected device type, and the current game scale. The game scale formula was moved out of `HelloPixi` while preserving the existing numeric behavior: mobile portrait uses `min(scaleX * 1.0, scaleY * 0.95, 1.2)`, mobile landscape uses `min(scaleX * 0.98, scaleY * 0.95, 1.1)`, desktop portrait uses `min(scaleX * 0.95, scaleY * 0.85, 1)`, and desktop landscape uses `min(scaleX, scaleY, 1)`.

`calculateControlPanelPosition(layout, gameScale)` multiplies configured control-panel coordinates and dimensions by the current Pixi game scale. `applyControlPanelSafeArea()` can shift that position upward when a bottom safe-area inset is present. `getSafeTopPosition()` and `getSafeRightPosition()` offset the top-right HTML controls away from notches and rounded/safe-area edges.

`HelloPixi` updates a `viewportModel` and increments `layoutUpdateTrigger` inside the resize listener before applying `viewportModel.gameScale` to the Pixi stage. That makes `currentLayout()` and `deviceType()` recompute on resize/orientation changes instead of relying only on local canvas scaling.

## Static Assets

Important active folders under `apps/oma-peli/static`:

- `symbols`: active standalone slot symbols, background images, reel frames, logo
- `controls`: control panel image slices, play button, toggles, sound/music icons
- `sounds`: spin, stop, win effects
- `music`: rockabilly loop files and stingers
- `loading_screen`: loader logo and splash screen
- `assets`: SDK-style assets under `audio`, `fonts`, `spines`, `sprites`
- `background`, `svg`: supporting/legacy asset folders

SvelteKit copies `static` assets to the site root at build time, which is why code references paths like `${base}/symbols/...` and `${base}/music/...`.

## SDK Game Shell

The SDK path is the standard architecture used elsewhere in the monorepo. It lives beside `HelloPixi`, but is mostly used by Storybook in this app.

Main files:

- `src/components/Game.svelte`
- `src/game/context.ts`
- `src/game/eventEmitter.ts`
- `src/game/bookEventHandlerMap.ts`
- `src/game/typesBookEvent.ts`
- `src/game/typesEmitterEvent.ts`
- `src/game/stateGame.svelte.ts`
- `src/game/actor.ts`
- `src/game/utils.ts`
- `src/stories/*`

### Context Setup

`src/game/context.ts` defines `setContext()` and `getContext()`.

`setContext()` registers four shared contexts:

- Event emitter from `utils-event-emitter`
- XState state from `utils-xstate`
- Layout state from `utils-layout`
- Pixi app state from `pixi-svelte`

`getContext()` returns those contexts plus:

- `stateGame`
- `stateGameDerived`
- `i18nDerived`

This context setup is used by Storybook stories before rendering `Game.svelte`.

### Game.svelte

`Game.svelte` is the normal SDK shell:

- Renders `<App>` from `pixi-svelte`.
- Enables sound, hotkeys, game actor, and Pixi extensions.
- Shows `LoadingScreen` first.
- After loading, renders `ResumeBet`, `Sound`, background, board frame, board, anticipations, UI, win overlays, free-spin intro/counter/outro, transition, and i18n test.
- Subscribes to `buyBonusConfirm` to open the shared modal.

This component is not rendered by `src/routes/+page.svelte`.

### BookEvent Pipeline

The SDK path follows:

```text
BookEvent -> bookEventHandlerMap -> EmitterEvent broadcasts -> component subscribers
```

Supported BookEvent types in `typesBookEvent.ts` include:

- `reveal`
- `winInfo`
- `setTotalWin`
- `freeSpinTrigger`
- `updateFreeSpin`
- `createBonusSnapshot`
- `finalWin`
- `setWin`
- `freeSpinEnd`

Handlers in `bookEventHandlerMap.ts` perform actions such as:

- Spinning or settling the enhanced board.
- Updating `stateBet.winBookEventAmount`.
- Animating scatter and win symbols.
- Showing free-spin intro/outro.
- Updating free-spin counter state.
- Switching music between base and free spins.
- Showing win count-up panels.
- Replaying snapshot events when resuming a bonus.

### SDK Board State

`stateGame.svelte.ts` uses `utils-slots`:

- Builds a board from `INITIAL_BOARD` in `constants.ts`.
- Creates reels with `createReelForSpinning`.
- Wraps them with `createEnhanceBoard`.
- Broadcasts reel-stop and symbol-land sounds.
- Tracks SDK game type, multiplier board, and scatter counter.

The SDK board dimensions come from `INITIAL_BOARD`, which is a 5-reel padded board. This is different from the standalone `HelloPixi` 13-independent-reel layout.

### SDK Components

Notable event subscribers:

- `Board.svelte`: responds to `boardShow` and `boardHide`, currently renders a placeholder rectangle.
- `BoardFrame.svelte`: responds to `boardFrameGlowShow` and `boardFrameGlowHide`, renders frame sprites and optional glow spine.
- `Win.svelte`: responds to `winShow`, `winUpdate`, `winHide`, performs count-up and press-to-continue flow.
- `FreeSpinIntro.svelte`: responds to intro show/hide/update and waits for user continue.
- `FreeSpinCounter.svelte`: displays free-spin progress.
- `FreeSpinOutro.svelte`: count-up outro for free-spin total win.
- `Transition.svelte`: handles screen transitions.
- `Sound.svelte`: maps sound emitter events to `utils-sound` players.

### SDK Sound

`src/game/sound.ts` creates a typed sound controller with `utils-sound`.

Names are typed as `MusicName`, `SoundEffectName`, and `SoundName`. These are used by `Sound.svelte` emitter handlers.

This SDK sound system is separate from the standalone `HelloPixi` audio and Howler setup.

## Storybook

Storybook config is inherited from `config-storybook`:

- `.storybook/main.ts` re-exports `main` from `config-storybook`.
- `.storybook/preview.ts` exports `preview` from `config-storybook`.

Stories render the SDK `Game.svelte`, not `HelloPixi`.

Story groups:

- `ComponentsGame.stories.svelte`
- `ComponentsSymbol.stories.svelte`
- `ModeBaseBookEvent.stories.svelte`
- `ModeBaseBook.stories.svelte`
- `ModeBonusBookEvent.stories.svelte`
- `ModeBonusBook.stories.svelte`

Story data:

- `src/stories/data/base_events.ts`
- `src/stories/data/base_books.ts`
- `src/stories/data/bonus_events.ts`
- `src/stories/data/bonus_books.ts`

Mode stories call `setContext()` and then use `playBookEvent()` or `playBet()` from `src/game/utils.ts`.

## Math And Simulation Files

There are several math documents and simulator scripts:

- `MATH_CONFIGURATION.md`
- `MATEMATIIKKA_YHTEENVETO.md`
- `math-simulator.js`
- `rtp-calculator.js`
- `rtp-simulator.js`
- `rtp-simulator-v2.js`
- `rtp-simulator-new.js`
- `src/tools/tuhottavat/math-sim.ts`
- `src/game/math-config.json`
- `src/game/math-config.yaml`
- `src/game/math_varmuuskopio/*`

These files reflect multiple iterations. They do not all agree with the current standalone runtime modules. When investigating deployed runtime behavior, treat `src/game-standalone/mathConfig.ts` and `src/game-standalone/math.ts` as the current math source of truth unless the task explicitly concerns the simulator or legacy SDK math config files.

Known mismatches found during this investigation:

- Some docs describe fixed 10 free spins, while current source awards scatter count free spins.
- Some docs describe `scatterCount + 3`, while current source uses exactly `scatterPositions.length`.
- Some docs say multipliers were removed, while current source still uses base 1x/2x/3x and free-spin 3x/5x/10x.
- Some docs mention 50% middle wild, while current source uses 55%.
- Some docs mention different paytable and symbol-weight values than current source.

## i18n

Lingui configuration is inherited through `config-lingui`.

Runtime route layout uses:

- `LoadI18n` from `components-shared`
- `src/i18n/messagesMap`

The SDK overlays use some localized sprite keys such as `freespins_{lang}.png`. The standalone `HelloPixi` UI is mostly inline Finnish/English text and image-based controls.

## Versioning

`src/version.ts` currently exports:

```ts
export const VERSION = '1.5.2';
```

This matches `apps/oma-peli/package.json` version `1.5.2`. `Game.svelte` displays it through `GameVersion`; `HelloPixi` uses it for the debug button label.

## Deployment Folders In Workspace

The workspace also contains top-level generated/deployment-like folders such as:

- `oma-peli/`
- `temp-deploy/`
- `web-sdk/oma-peli/`

Those appear to be build/deploy artifacts or copied static outputs. The maintainable app source is `apps/oma-peli`.

## Risks And Maintenance Notes

### Agentic Refactor Tracking

Future agents should treat this document as the factual master document and `OMA_PELI_REFACTOR_PLAN.yaml` as the operational plan. When code changes reveal new facts or invalidate old notes, update this document in the same change. When a refactor step is started, completed, blocked, or re-scoped, update the YAML plan. App-specific agent rules live in `AGENTS.md`.

The initial refactor plan was created from this investigation, direct `HelloPixi.svelte` UI inspection, current Svelte diagnostics, and online guidance from VS Code Copilot customization docs, GitHub Copilot custom instructions docs, and the AGENTS.md convention.

The phase automation system lives under `agentic-refactor/`. It uses `gh copilot -p` rather than the plain `copilot` shim because the local `copilot` shim prompted for installation and did not complete during validation. The runner defaults to dry-run, generates one prompt per phase, and requires `-Execute` for real Copilot CLI execution.

Validation note from runner setup: dry-run prompt generation works, including an all-phase dry-run from `phase_00_workflow_and_docs` through `phase_10_final_cleanup_and_agent_hardening`. Real push-enabled execution also requires `gh auth login` and a reviewed worktree baseline. At setup time, `gh auth status` reported no GitHub login, and the repository had unrelated dirty/untracked files, so full autonomous execution was not started.

Follow-up workflow finding: after GitHub CLI authentication, `gh copilot -p` could install and run the Copilot CLI, read/search project files, and inspect the refactor plan, but non-interactive file-edit operations were denied in this VS Code workflow. The reliable queued execution path is to run each phase directly through the VS Code agent using the next-`not_started` prompt, then validate, commit, and report.

### 1. Two Game Architectures

The active page and Storybook validate different game implementations. A change can pass Storybook while not affecting the deployed game, or change the deployed game while Storybook remains unchanged.

Recommendation: decide whether `oma-peli` should continue as a standalone local Pixi game or be migrated fully into the Web SDK BookEvent pipeline. Until then, document every change as targeting either `HelloPixi` or the SDK shell.

### 2. Client-Side Math

The active playable route generates outcomes locally with `Math.random()`. There is no RGS authority in `HelloPixi`.

Recommendation: for production Stake Engine integration, move outcome generation to RGS/BookEvents and render outcomes through the SDK flow.

### 3. Stale Documentation

Existing math documents represent different historical states. Phase 03 centralized current runtime symbol weights, paytable, bet levels, and multiplier distribution in `src/game-standalone/mathConfig.ts`.

Recommendation: update simulator scripts to consume the standalone math/config modules before treating simulator output as authoritative.

### 4. Large Monolithic Component

Phase 01 baseline hygiene was completed on 2026-07-05 for the deployed `HelloPixi` path. The phase converted remaining Svelte event directives in `HelloPixi.svelte` and `LoadingScreen.svelte` to Svelte 5 event attributes, added accessible labels to icon-only controls, fixed the mobile autoplay status display to use `autoPlayRoundsLeft`, and resolved local nullability and unused CSS diagnostics without changing game math.

The current build baseline passes with `pnpm run build --filter=oma-peli`. The build still reports existing warnings about `tsconfig.json` not extending SvelteKit's generated config, missing virtual public env exports for `PUBLIC_SITE_MODE`, `PUBLIC_SENTRY_DSN`, and `PUBLIC_CHROMATIC`, plus an unused `TextStyle` import in the bundle graph.

`HelloPixi.svelte` still mixes renderer setup, state transitions, layout, audio, and UI overlays in one file, but phase 03 extracted standalone types, config, random symbol selection, coordinate helpers, multiplier selection, and pure win calculation.

Recommendation: continue splitting it into modules only when making behavior changes. Remaining natural boundaries are `reel.ts`, `audio.ts`, additional layout orchestration, and presentational control components.

### 5. Asset Path Special Cases

`HelloPixi` uses both `$app/paths` and a direct GitHub Pages hostname check.

Recommendation: prefer one path strategy based on SvelteKit `base`, unless there is a documented deployment case that requires hostname branching.

### 6. Missing Music Loop Number

The source randomly selects loop numbers 1 through 20, but `static/music` does not contain loop 14.

Recommendation: add the missing file, adjust the random set to actual files, or create a manifest.

### 7. SDK Type Inconsistencies

`typesBookEvent.ts` includes `BookEventCreateBonusSnapshot` twice in the union. `bookEventHandlerMap.ts` and `utils.ts` reference `updateGlobalMult` in snapshot handling, but that event type is not present in the local union.

Recommendation: clean these when the SDK path is next touched.

### 8. Layout Reactivity Status

Phase 02 fixed the stale standalone layout trigger. `HelloPixi` now refreshes `viewportModel`, increments `layoutUpdateTrigger`, and applies the centralized `viewportModel.gameScale` during resize. Safe-area-aware offsets are applied to top-right controls and the bottom control panel when safe-area inset values are available.

Recommendation: manually validate desktop resize, mobile portrait, and mobile landscape in a browser before larger mobile UI refactors. The code path is now reactive, but visual fit still depends on the existing layout constants.

## Practical Change Guide

For deployed-game changes:

1. Start in `src/routes/+page.svelte` and `src/components/HelloPixi.svelte`.
2. If the change touches assets, inspect `static/symbols`, `static/controls`, `static/music`, or `static/sounds`.
3. If the change touches layout, inspect `src/config/layoutConfig.ts` and `src/utils/layoutUtils.ts`.
4. Validate with `pnpm run dev --filter=oma-peli` or `pnpm run build --filter=oma-peli`.

For SDK/storybook changes:

1. Start in `src/components/Game.svelte` and `src/game/bookEventHandlerMap.ts`.
2. Add or update BookEvent types in `src/game/typesBookEvent.ts`.
3. Add or update EmitterEvent types in `src/game/typesEmitterEvent.ts` and component module scripts.
4. Add story data in `src/stories/data`.
5. Validate with `pnpm run storybook --filter=oma-peli` or `pnpm run build --filter=oma-peli`.

For math changes:

1. Treat `src/game-standalone/mathConfig.ts` and `src/game-standalone/math.ts` as current deployed runtime math truth.
2. Keep `HelloPixi.svelte` responsible for Svelte state transitions around pure math results.
3. Update simulator scripts or legacy math docs only after deciding which model is canonical for that tool.

## Quick File Map

| Area                     | Files                                                                                                            |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| Active route             | `src/routes/+layout.svelte`, `src/routes/+page.svelte`                                                           |
| Active standalone game   | `src/components/HelloPixi.svelte`                                                                                |
| Password gate            | `src/components/PasswordProtection.svelte`                                                                       |
| Loading/splash           | `src/components/LoadingScreen.svelte`                                                                            |
| Standalone win animation | `src/components/VinylWinAnimation.svelte`                                                                        |
| Standalone math/config   | `src/game-standalone/types.ts`, `src/game-standalone/mathConfig.ts`, `src/game-standalone/math.ts`               |
| Standalone Pixi runtime  | `src/game-standalone/reel.ts`, `src/game-standalone/pixiRuntime.ts`                                              |
| Standalone layout config | `src/config/layoutConfig.ts`, `src/utils/layoutUtils.ts`                                                         |
| SDK shell                | `src/components/Game.svelte`                                                                                     |
| SDK context              | `src/game/context.ts`                                                                                            |
| SDK events               | `src/game/eventEmitter.ts`, `src/game/typesEmitterEvent.ts`                                                      |
| SDK BookEvents           | `src/game/typesBookEvent.ts`, `src/game/bookEventHandlerMap.ts`, `src/game/utils.ts`                             |
| SDK state                | `src/game/stateGame.svelte.ts`, `src/game/stateLayout.ts`, `src/game/stateApp.ts`, `src/game/stateXstate.ts`     |
| SDK actor                | `src/game/actor.ts`, `src/components/EnableGameActor.svelte`                                                     |
| SDK sound                | `src/game/sound.ts`, `src/components/Sound.svelte`                                                               |
| Storybook                | `.storybook/*`, `src/stories/*`                                                                                  |
| Static assets            | `static/symbols`, `static/controls`, `static/music`, `static/sounds`, `static/loading_screen`, `static/assets`   |
| Existing math docs/tools | `MATH_CONFIGURATION.md`, `MATEMATIIKKA_YHTEENVETO.md`, `rtp-*.js`, `math-simulator.js`, `src/game/math-config.*` |
