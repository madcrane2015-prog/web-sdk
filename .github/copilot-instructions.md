# Web SDK for Stake Engine Games

## Architecture Overview

This is a **TurboRepo monorepo** for building casino games using **Svelte 5**, **PixiJS 8**, and **TypeScript**. Games follow an **event-driven architecture** where game logic flows through BookEvents  EmitterEvents  UI Components.

### Core Concepts

**BookEvents**: JSON data from the RGS (Remote Game Server) containing game logic. Each BookEvent represents a game action (e.g., `reveal`, `setTotalWin`, `freeSpinTrigger`). Books from math packages contain arrays of BookEvents that determine game behaviorsequence matters critically (e.g., `spin` must precede `win`).

**EmitterEvents**: Internal events broadcast by BookEvent handlers to coordinate UI components. Created via `utils-event-emitter/createEventEmitter()`. Use `eventEmitter.broadcast()` for sync and `eventEmitter.broadcastAsync()` for async operations. When awaiting animations, always use `broadcastAsync()`.

**Context System**: Four main contexts set at app entry (`src/routes/+layout.svelte` or `src/game/context.ts`):
- `ContextEventEmitter`: Event communication system (`utils-event-emitter`)
- `ContextXstate`: Finite state machine for betting logic (`rendering`, `idle`, `betting`, `autobet`)
- `ContextLayout`: Responsive canvas sizing and layout types (`utils-layout`)
- `ContextApp`: PIXI application and asset management (`pixi-svelte`)

**Entry Point**: Standard pattern uses SvelteKit with `src/routes/+layout.svelte` that calls `setContext()` and renders `<Game />`. The context MUST be set before any component can access it via `getContext()`. See [apps/lines/src/routes/+layout.svelte](apps/lines/src/routes/+layout.svelte) for reference. Alternative pattern: `+page.svelte` renders custom components directly (see oma-peli app).

## Key Development Patterns

### Event-Driven Flow
``typescript
// BookEvent Handler (bookEventHandlerMap.ts)
reveal: async (bookEvent: BookEventOfType<'reveal'>) => {
  eventEmitter.broadcast({ type: 'boardShow' });
  await eventEmitter.broadcastAsync({ type: 'boardSpin', symbols: bookEvent.board });
}

// Component Response (Board.svelte)
context.eventEmitter.subscribeOnMount({
  boardShow: () => (visible = true),
  boardSpin: async (event) => { /* animation logic */ }
});
``

Components subscribe to EmitterEvents using `subscribeOnMount()` which automatically handles cleanup. Never call handlers directlyalways broadcast through `eventEmitter`.

### Task Breakdown Principle
Break complex BookEvents into atomic EmitterEvents. For example, `tumbleBoard` becomes:
- `tumbleBoardInit`  `tumbleBoardExplode`  `tumbleBoardRemoveExploded`  `tumbleBoardSlideDown`

Each EmitterEvent should follow Single Responsibility Principle.

## Monorepo Structure

**Apps** (`/apps`): Individual games (`lines`, `cluster`, `scatter`, `oma-peli`, `ways`, `number-picker`, `price`)
- Entry: `src/routes/+layout.svelte` (sets context, renders `<Game />`)
- Game logic: `src/game/` (bookEventHandlerMap, state, types, context)
  - `bookEventHandlerMap.ts`: Maps BookEvent types to handlers
  - `context.ts`: Exports `setContext()` and `getContext()` functions
  - `eventEmitter.ts`: Game-specific EmitterEvent type definitions
  - `stateGame.svelte.ts`: Game-specific state using Svelte 5 runes
  - `typesBookEvent.ts`: BookEvent type definitions and unions
  - `typesEmitterEvent.ts`: EmitterEvent type definitions and unions
- Components: `src/components/` (UI components with EmitterEvent handlers)
- Stories: `src/stories/` (Storybook testing - primary development/testing method)
  - `data/`: Sample BookEvents and Books for testing (`base_events.ts`, `base_books.ts`)
  - `Mode<GameMode>BookEvent.stories.svelte`: Individual BookEvent tests
  - `Mode<GameMode>Book.stories.svelte`: Full game flow tests with random books
- **Game-specific docs**: Some apps like `oma-peli` include additional documentation:
  - `LAYOUT_ARCHITECTURE.md`: Layout system configuration for different devices
  - `MATH_CONFIGURATION.md` / `MATEMATIIKKA_YHTEENVETO.md`: Math/paytable specifications
  - `README.md`: Game-specific setup and deployment instructions

**Packages** (`/packages`): Shared utilities by category
- `config-*`: Build configurations (TypeScript, Svelte, Storybook, Vite, Lingui)
- `utils-*`: Functional utilities (`utils-book`, `utils-xstate`, `utils-event-emitter`, `utils-layout`)
- `components-*`: Reusable components (`components-ui-pixi`, `components-shared`, `components-layout`)
- `pixi-svelte`: Core package combining PixiJS with Svelte (also published to npm at package.json `"main": "./dist/index.js"`)
- `rgs-*`: Remote Game Server integration (`rgs-fetcher`, `rgs-requests`)
- `state-shared`: Global state management

## Essential Commands

**Development**: Use TurboRepo filtering for all operations
``bash
# Development (starts dev server)
pnpm run dev --filter=<app-name>        # e.g., lines, cluster, oma-peli

# Storybook (primary testing environment)
pnpm run storybook --filter=<app-name>

# Building (note dependency chain)
pnpm run build --filter=<app-name>
pnpm run build --filter=pixi-svelte     # Required after pixi-svelte changes

# Preview built output (static site)
pnpm run preview --filter=<app-name>

# Other available commands
pnpm run lint --filter=<app-name>       # Run ESLint
pnpm run format --filter=<app-name>     # Run Prettier
pnpm run e2e --filter=<app-name>        # Run all E2E tests (Playwright)
pnpm run e2e-smoke --filter=<app-name>  # Run smoke tests only
pnpm run e2e-mobile --filter=<app-name> # Run mobile E2E tests
``

**Testing in Storybook** (primary testing method):
- `COMPONENTS/<Component>/component`: Test individual components in isolation
- `COMPONENTS/<Component>/emitterEvent`: Test EmitterEvent handlers
- `MODE_BASE/bookEvent/<eventType>`: Test individual BookEvent handlers
- `MODE_BASE/book/random`: Test full game flow with random books from `src/stories/data/base_books.ts`

Storybook is the main testing frameworkalways create stories before integrating code into the game.

**Critical Build Dependencies**: Always rebuild `pixi-svelte` after changes since other packages depend on the built version at `dist/index.js` (not source). Build cascade: `pixi-svelte`  `components-*`  `apps/*`. This is enforced by TurboRepo's `dependsOn: ["^build"]` configuration in `turbo.json`.

**Windows Specific**: Storybook initial load can take 15+ minutes on Windowsbe patient. Once loaded, hot reload works quickly. For storybook scripts, may need to add `cross-env`: `"storybook": "cross-env PUBLIC_CHROMATIC=true storybook dev -p 6001"`

## Critical Development Guidelines

1. **Always set context** before rendering components via `setContext()` in `src/routes/+layout.svelte` or `src/game/context.ts`
2. **Use TurboRepo filtering**: Always use `--filter=<package-name>` for targeted operations (never run global commands like `pnpm build`)
3. **Rebuild pixi-svelte** after any changes (other packages depend on built version: `dist/index.js`)
4. **Test atomically** in Storybook before integrating - create individual stories for each component/event
5. **Type safety**: Add BookEvent types to `typesBookEvent.ts`, EmitterEvent types to `typesEmitterEvent.ts`
6. **Event-driven flow**: BookEvent  EmitterEvent(s)  Component handlers (never direct prop passing between components)
7. **Task breakdown**: Split complex BookEvents into atomic EmitterEvents following Single Responsibility Principle
8. **BookEvent sequence matters**: Order determines game behavior (e.g., `spin` must precede `win`)
9. **Add new types to unions**: When creating new BookEvent/EmitterEvent types, add them to the union types in `typesBookEvent.ts` and `typesEmitterEvent.ts` for proper TypeScript intellisense
10. **Context pattern**: Always use `getContext()` in components to access shared state - never import state directly

## Working with State

State is managed through multiple systems depending on scope:

- **Game state**: `stateGame` and `stateGameDerived` (Svelte 5  runes) - game-specific state
- **XState**: Betting states via `stateXstate` (`isPlaying()`, `isIdle()`, `isBetting()`) for UI interactions
- **Layout state**: Responsive canvas sizing (`canvasSizes()`, `layoutType()`) via `stateLayout`
- **Global state**: `state-shared` package for cross-component data (bet amounts, win amounts, UI state)
- **Context retrieval**: Components access state via `getContext()` which returns all state objects

Example:
``typescript
const context = getContext();
context.stateGame.someValue;
context.stateXstateDerived.isPlaying();
``

## Integration Points

- **RGS Authentication**: See `packages/components-shared/src/components/Authenticate.svelte` for RGS integration
- **Asset Loading**: PIXI.Assets managed via `stateApp.assets` and `stateApp.loadedAssets`
- **I18n**: `@lingui/core` with social casino support (`social=true` query param). Message maps in `src/i18n/messagesMap`
- **Build Target**: Static sites via `@sveltejs/adapter-static` for Stake Engine deployment
- **Event System**: All events flow through `utils-event-emitter` - components never communicate directly
- **TurboRepo**: Workspace dependencies managed via `pnpm-workspace.yaml` and `turbo.json` for build orchestration
- **GitHub Actions**: Automated deployment via `.github/workflows/` (e.g., `deploy-oma-peli.yml` for GitHub Pages)

## Adding New BookEvents

When implementing a new BookEvent (e.g., `updateGlobalMult`):

1. **Add sample data** to `src/stories/data/<mode>_books.ts` and `src/stories/data/<mode>_events.ts`
2. **Create story** in `Mode<GameMode>BookEvent.stories.svelte` using `playBookEvent()`
3. **Add TypeScript type** to `src/game/typesBookEvent.ts` as union type:
   ``typescript
   export type BookEvent = 
     | BookEventReveal 
     | BookEventSetTotalWin
     | BookEventUpdateGlobalMult  // Add new type here
   ``
4. **Implement handler** in `src/game/bookEventHandlerMap.ts` with EmitterEvent broadcasts
5. **Create/update component** with EmitterEvent types in module script block
6. **Add EmitterEvent types** to `src/game/typesEmitterEvent.ts` as union type
7. **Implement EmitterEvent handlers** with `context.eventEmitter.subscribeOnMount()`
8. **Test individually** in `MODE_<GAMEMODE>/bookEvent/<eventType>` story
9. **Test in full flow** via `MODE_<GAMEMODE>/book/random` story

Always test in Storybook before integrating into the main game flow.

## Node & Package Management

- **Required versions**: Node 22.16.0, pnpm 10.5.0 (enforced via `packageManager` field in root package.json)
- **Install**: `pnpm install` at root (handles workspace linking automatically via `pnpm-workspace.yaml`)
- **Workspace protocol**: Use `workspace:*` in package.json dependencies for local packages
- **Never install globally**: All commands run through pnpm scripts using TurboRepo filtering

## Debugging & Troubleshooting

**Common Issues**:
- **Build failures**: Check if `pixi-svelte` needs rebuilding first (`pnpm run build --filter=pixi-svelte`)
- **Module not found**: Run `pnpm install` at workspace root to sync workspace dependencies
- **Storybook not loading**: On Windows, initial load takes 15+ minutes; wait for it
- **Type errors after changes**: Rebuild dependent packages in order: `pixi-svelte`  `components-*`  `apps/*`
- **Hot reload not working**: Restart dev server; ensure you're using `--filter=<app-name>` correctly

**Development workflow**:
1. Make changes to source files
2. If editing `pixi-svelte` or `components-*`, rebuild: `pnpm run build --filter=<package>`
3. Test in Storybook before integrating into main app
4. Use browser DevTools to inspect PIXI stage and Svelte component state

## Common Patterns

**Component Structure**:
``svelte
<script lang="ts">
  import { getContext } from '../game/context';
  
  const context = getContext();
  
  context.eventEmitter.subscribeOnMount({
    someEvent: (event) => { /* handle event */ }
  });
</script>
``

**Storybook Story Structure**:
``svelte
<script lang="ts" module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  const { Story } = defineMeta({ title: 'MODE_BASE/bookEvent' });
</script>

<script lang="ts">
  import { StoryGameTemplate } from 'components-storybook';
  import { setContext } from '../game/context';
  
  setContext();
</script>
``

The codebase prioritizes **testability through Storybook**, **type safety**, and **atomic development** patterns. All game logic flows through the event systemnever bypass it.

## Game Types & Templates

Each app in `/apps` represents a different slot game type with specific mechanics:

**lines** - Traditional payline-based slots:
- 5 reels × 3 rows with 20 paylines
- Wins calculated on specific line patterns (`paylines` config)
- Use as template for: Classic slots, line-based games
- Config key: `paylines: { '1': [0,0,0,0,0], '2': [1,1,1,1,1], ... }`

**ways** - Ways-to-win mechanics:
- 5 reels with any symbols on consecutive reels (e.g., 243 ways)
- Wins calculated by multiplying symbol counts per reel
- Use as template for: Ways games, oma-peli (81 ways = 3×3×1×3×3)
- Formula: `ways = reel0_count × reel1_count × ... × reel4_count`

**cluster** - Cluster/cascade mechanics:
- 7×7 grid with tumbling/cascading symbols
- Wins require adjacent symbol clusters (5+ matching)
- Use as template for: Match-3 style, tumble mechanics
- Features: Tumble animations, multiplier wilds, cluster detection

**scatter** - Scatter-based mechanics:
- 6 reels × 5 rows, wins anywhere on grid
- Requires minimum symbol count (e.g., 8+ symbols)
- Use as template for: Scatter pays, bonus trigger games
- Paytable based on total symbol count, not positions

**number-picker** / **price** - Special game modes:
- Custom mechanics beyond traditional slots
- Reference for: Unique bonus games, alternative bet modes

When creating a new game, copy the app that matches your mechanics and modify `src/game/config.ts` for symbols, paytables, and game-specific rules.

## Package Deep Dive

### pixi-svelte
Core integration of PixiJS with Svelte 5. Provides declarative PIXI components.

**Key exports** (`packages/pixi-svelte/src/lib/index.ts`):
- `createApp()` - Initialize PIXI application with asset management
- `setContextApp()` / `getContextApp()` - Context for PIXI state
- Components: `<App>`, `<Container>`, `<Sprite>`, `<Text>`, `<Graphics>`, `<Rectangle>`
- `stateApp` - Contains: `pixiApplication`, `assets`, `loadedAssets`, `loadingProgress`

**Critical pattern**: Always call `createApp()` and `setContextApp()` before rendering PIXI components. Asset loading is managed through `stateApp.assets` configuration.

**Build requirement**: Published package uses `dist/index.js` (built output), not source. After changes: `pnpm run build --filter=pixi-svelte` before testing in apps.

### utils-event-emitter
Event system for decoupled component communication.

**API** (`packages/utils-event-emitter/src/createEventEmitter.ts`):
- `createEventEmitter<TEmitterEvent>()` - Create typed event emitter
- `eventEmitter.broadcast(event)` - Synchronous event dispatch
- `eventEmitter.broadcastAsync(event)` - Async dispatch, returns Promise (use for animations)
- `eventEmitter.subscribeOnMount(handlerMap)` - Auto-cleanup subscription in Svelte components

**Type pattern**: Define game-specific types in `src/game/typesEmitterEvent.ts`:
```typescript
export type EmitterEventBoardSpin = { type: 'boardSpin'; symbols: string[][] };
export type EmitterEvent = EmitterEventBoardSpin | EmitterEventBoardShow | ...;
```

**When to use async**: Use `broadcastAsync()` when EmitterEvent handlers perform animations or async work. Await the broadcast to ensure completion before proceeding.

### utils-xstate
Finite state machine for bet flow management.

**States**: `rendering` → `idle` → `betting` → `autobet`
- `rendering`: Initial asset loading
- `idle`: Ready for user input
- `betting`: Processing single bet
- `autobet`: Auto-play mode

**Derived state checks** (via `stateXstateDerived`):
- `isPlaying()` - True during `betting` or `autobet`
- `isIdle()` - True when `idle`
- `isBetting()` - True during active bet

Use these to enable/disable UI controls (spin button, bet adjustments).

### utils-layout
Responsive canvas sizing and device detection.

**Key exports**:
- `createLayout()` - Initialize layout system
- `stateLayout` - Contains: `canvasWidth`, `canvasHeight`, `deviceType`
- `stateLayoutDerived` - Contains: `canvasSizes()`, `layoutType()`
- Device types: `desktop`, `android-portrait`, `android-landscape`, `iphone-portrait`, `iphone-landscape`

**Game-specific config**: Some games (like oma-peli) have `src/config/layoutConfig.ts` defining layout parameters per device for gameArea, controlPanel, playButton, and background positioning.

### utils-book
BookEvent processing utilities.

**Key functions**:
- `recordBookEvent(bookEvent)` - Log events for debugging
- `checkIsMultipleRevealEvents(bookEvents)` - Detect bonus game scenarios
- Type: `BookEventHandlerMap<BookEvent, Context>` - Handler map signature

### state-shared
Global state accessible across all components.

**Key state objects**:
- `stateBet` - Bet amounts, active bet mode, currency
- `stateUi` - UI visibility, modal states
- `stateWin` - Win amounts, win levels

Import directly: `import { stateBet, stateUi } from 'state-shared';`

## E2E Testing

E2E tests use Playwright (when configured). Commands available:
- `pnpm run e2e --filter=<app>` - Full E2E test suite
- `pnpm run e2e-smoke --filter=<app>` - Smoke tests (critical paths only)
- `pnpm run e2e-mobile --filter=<app>` - Mobile-specific tests

**Note**: Not all apps have E2E tests configured. Primary testing is through Storybook. E2E tests, when present, validate full game flows including RGS integration.

## Deployment & Build Process

**Build output structure**:
```
apps/<app-name>/.svelte-kit/output/
├── prerendered/pages/index.html  (Entry point)
└── client/
    ├── _app/                     (Svelte app bundle)
    ├── assets/                   (Game assets: sprites, audio, fonts)
    └── favicon.svg, loader.gif
```

**Deployment steps**:
1. Build: `pnpm run build --filter=<app-name>`
2. Copy `index.html` from `prerendered/pages/`
3. Copy entire `client/` directory contents alongside `index.html`
4. Upload to Stake Engine Files page or deploy via GitHub Actions

**Environment variables** (from `turbo.json`):
- `NODE_ENV` - Development/production mode
- `PUBLIC_CHROMATIC` - Enable Chromatic visual testing (Storybook)
- `PUBLIC_SITE_MODE` - Site mode configuration
- `PUBLIC_SENTRY_DSN` - Sentry error tracking (optional)

Variables prefixed with `PUBLIC_` are exposed to client-side code.

**GitHub Actions example** (`.github/workflows/deploy-oma-peli.yml`):
- Triggers on push to `main` when `apps/oma-peli/**` changes
- Steps: Setup Node/pnpm → Install deps → Build pixi-svelte → Build app → Deploy to GitHub Pages
- **Critical**: Always build `pixi-svelte` first before building apps
- Deploys to `gh-pages` branch with base path `/oma-peli`

**Static site adapter**: All apps use `@sveltejs/adapter-static` (configured in `svelte.config.js` via `config-svelte` package). This produces a static site with no server-side rendering (SSR disabled).

**Asset management**: Static assets in `apps/<app>/static/` are copied to build output. Ensure all sprites, audio, fonts, and spines are in `static/` directory.

## Advanced Development Patterns

**Svelte 5 runes**: State management uses `$state`, `$derived`, `$effect` runes (not Svelte 4 stores).
```typescript
// stateGame.svelte.ts
export const stateGame = $state({
  currentWin: 0,
  board: []
});

export const stateGameDerived = {
  hasWin: () => stateGame.currentWin > 0
};
```

**Asset preloading**: Define assets in `src/game/assets.ts`:
```typescript
export const assets = {
  sprites: { symbol_a: '/assets/sprites/symbol_a.png' },
  audio: { spin: '/assets/audio/spin.mp3' }
};
```
Access loaded assets via `context.stateApp.loadedAssets`.

**Sound management**: Use EmitterEvents for sound control:
- `{ type: 'soundOnce', name: 'sfx_win' }` - Play once
- `{ type: 'soundLoop', name: 'bgm_main' }` - Loop background music
- `{ type: 'soundStop', name: 'sfx_loop' }` - Stop specific sound
- `{ type: 'soundMusic', name: 'bgm_freespin' }` - Switch music track

**Win levels**: Define in `src/game/winLevelMap.ts` to trigger different animations/sounds based on win amount (e.g., 'normal', 'big', 'mega', 'max').

**I18n with Lingui**: Message catalogs in `src/i18n/messagesMap`. Social casino mode enabled via `?social=true` query param (uses special currency handling in `utils-shared/amount.ts`).

**Multi-mode games**: Games can have multiple modes (base, bonus, freespin) with separate BookEvent handling. Mode-specific stories: `ModeBaseBookEvent.stories.svelte`, `ModeBonusBookEvent.stories.svelte`.

## Development Best Practices

1. **Context initialization**: Always set all four contexts (`EventEmitter`, `Xstate`, `Layout`, `App`) in `+layout.svelte` before rendering game components
2. **Type unions**: Add new types to union exports for IntelliSense: `export type BookEvent = TypeA | TypeB | TypeC`
3. **Story-driven development**: Create stories in order: Component → EmitterEvent → BookEvent → Book (full flow)
4. **Atomic commits**: When adding BookEvents, commit each atomic piece (type → handler → component → story)
5. **Package changes**: Test in Storybook immediately after rebuilding packages to catch integration issues early
6. **Windows optimization**: First Storybook load is slow (15+ min); keep it running and use hot reload
7. **Math verification**: For games with math requirements, document in `MATH_CONFIGURATION.md` and create simulator scripts (see `oma-peli/rtp-simulator.js`)
8. **Layout testing**: Test all device types via Storybook controls or layout config to ensure responsive design
9. **Asset organization**: Keep `static/` mirrored structure: `symbols/`, `audio/`, `fonts/`, `spines/`
10. **Error handling**: Use Sentry DSN (optional) for production error tracking
