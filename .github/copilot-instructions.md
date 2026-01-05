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

**Apps** (`/apps`): Individual games (`lines`, `cluster`, `scatter`, `oma-peli`, etc.)
- Entry: `src/routes/+layout.svelte` (sets context, renders `<Game />`)
- Game logic: `src/game/` (bookEventHandlerMap, state, types, context)
- Components: `src/components/` (UI components with EmitterEvent handlers)
- Stories: `src/stories/` (Storybook testing - primary development/testing method)

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
``

**Testing in Storybook** (primary testing method):
- `COMPONENTS/<Component>/component`: Test individual components in isolation
- `COMPONENTS/<Component>/emitterEvent`: Test EmitterEvent handlers
- `MODE_BASE/bookEvent/<eventType>`: Test individual BookEvent handlers
- `MODE_BASE/book/random`: Test full game flow with random books from `src/stories/data/base_books.ts`

Storybook is the main testing frameworkalways create stories before integrating code into the game.

**Critical Build Dependencies**: Always rebuild `pixi-svelte` after changes since other packages depend on the built version at `dist/index.js` (not source). Build cascade: `pixi-svelte`  `components-*`  `apps/*`.

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
- **I18n**: `@lingui/core` with social casino support (`social=true` query param)
- **Build Target**: Static sites via `@sveltejs/adapter-static` for Stake Engine deployment
- **Event System**: All events flow through `utils-event-emitter` - components never communicate directly

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
