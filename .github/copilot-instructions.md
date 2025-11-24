# Web SDK for Stake Engine Games

## Architecture Overview

This is a **TurboRepo monorepo** for building casino games using **Svelte 5**, **PixiJS 8**, and **TypeScript**. Games follow an **event-driven architecture** where game logic flows through BookEvents → EmitterEvents → UI Components.

### Core Concepts

**BookEvents**: JSON data from the RGS (Remote Game Server) containing game logic. Each BookEvent represents a game action (e.g., `reveal`, `setTotalWin`, `freeSpinTrigger`).

**EmitterEvents**: Internal events broadcast by BookEvent handlers to coordinate UI components. Use `eventEmitter.broadcast()` for sync and `eventEmitter.broadcastAsync()` for async operations.

**Context System**: Four main contexts are set at app entry (`src/routes/+layout.svelte`):
- `ContextEventEmitter`: Event communication system
- `ContextXstate`: Finite state machine for betting logic (`rendering`, `idle`, `betting`, `autobet`)
- `ContextLayout`: Responsive canvas sizing and layout types
- `ContextApp`: PIXI application and asset management

**Entry Point**: Each game app uses SvelteKit with `src/routes/+layout.svelte` as the main entry that calls `setContext()` and renders `<Game />`.

## Key Development Patterns

### Event-Driven Flow
```typescript
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
```

### Task Breakdown Principle
Break complex BookEvents into atomic EmitterEvents. For example, `tumbleBoard` becomes:
- `tumbleBoardInit` → `tumbleBoardExplode` → `tumbleBoardRemoveExploded` → `tumbleBoardSlideDown`

Each EmitterEvent should follow Single Responsibility Principle.

## Monorepo Structure

**Apps** (`/apps`): Individual games (`lines`, `cluster`, `scatter`, etc.)
- Entry: `src/routes/+page.svelte` (sets context, renders `<Game />`)
- Game logic: `src/game/` (bookEventHandlerMap, state, types)
- Components: `src/components/` (UI components with EmitterEvent handlers)

**Packages** (`/packages`): Shared utilities by category
- `config-*`: Build configurations (TypeScript, Svelte, Storybook, etc.)
- `utils-*`: Functional utilities (`utils-book`, `utils-xstate`, `utils-event-emitter`)
- `components-*`: Reusable components (`components-ui-pixi`, `components-shared`)
- `pixi-svelte`: Core package combining PixiJS with Svelte (also published to npm)

## Essential Commands

**Development**: Use TurboRepo filtering for all operations
```bash
# Development
pnpm run dev --filter=lines
pnpm run storybook --filter=lines

# Building (note dependencies)
pnpm run build --filter=lines
pnpm run build --filter=pixi-svelte  # Required after pixi-svelte changes

# Testing in Storybook (primary testing method)
# - COMPONENTS/<Component>/component: Test individual components
# - COMPONENTS/<Component>/emitterEvent: Test EmitterEvent handlers
# - MODE_BASE/bookEvent/<eventType>: Test BookEvent handlers
# - MODE_BASE/book/random: Test full game flow with random books
```

**Critical Build Dependencies**: Always rebuild `pixi-svelte` after changes (uses built version per package.json main field). Build cascade: `pixi-svelte` → `components-*` → `apps/*`.

## Critical Development Guidelines

1. **Always set context** before rendering components via `setContext()` in `src/routes/+layout.svelte`
2. **Use TurboRepo filtering**: `--filter=<package-name>` for targeted operations (never run global commands)
3. **Rebuild pixi-svelte** after any changes (other packages depend on built version: `dist/index.js`)
4. **Test atomically** in Storybook before integrating - create individual stories for each component/event
5. **Type safety**: Add BookEvent types to `typesBookEvent.ts`, EmitterEvent types to component modules
6. **Event-driven flow**: BookEvent → EmitterEvent(s) → Component handlers (never direct prop passing)
7. **Task breakdown**: Split complex BookEvents into atomic EmitterEvents following Single Responsibility Principle

## Working with State

- **Game state**: Use `stateGame` and `stateGameDerived` (Svelte $state)
- **XState**: Betting states (`isPlaying()`, `isIdle()`, `isBetting()`) for UI interactions
- **Layout state**: Responsive canvas sizing (`canvasSizes()`, `layoutType()`)
- **Global state**: `state-shared` package for cross-component data

## Integration Points

- **RGS Authentication**: See `packages/components-shared/src/components/Authenticate.svelte`
- **Asset Loading**: PIXI.Assets managed via `stateApp.assets` and `stateApp.loadedAssets`
- **I18n**: `@lingui/core` with social casino support (`social=true` query param)
- **Build Target**: Static sites via `@sveltejs/adapter-static` for Stake Engine deployment

The codebase prioritizes **testability through Storybook**, **type safety**, and **atomic development** patterns.