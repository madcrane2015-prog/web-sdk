# AGENTS.md

Scope: this file applies to work inside `apps/oma-peli`. It complements the repository-wide `.github/copilot-instructions.md`. When instructions conflict, follow the user prompt first, then this nearest `AGENTS.md`, then the repo-wide instructions.

## Start Here

Before changing oma-peli code, read these files in order:

1. `OMA_PELI_TECHNICAL_DEEP_DIVE.md`
2. `OMA_PELI_REFACTOR_PLAN.yaml`
3. The file you intend to edit and its nearest caller or consumer

The deployed app path is `src/routes/+page.svelte -> PasswordProtection.svelte -> HelloPixi.svelte`. Storybook renders `Game.svelte`, which is a separate SDK-style path. Do not assume Storybook validates deployed `HelloPixi` behavior.

## Current Architecture Facts

- `HelloPixi.svelte` is the active playable route and currently owns local math, PixiJS setup, UI, layout, sound, music, autoplay, stats, and debug tools.
- `Game.svelte` plus `src/game/*` is the Web SDK BookEvent/EmitterEvent shell used by Storybook.
- `layoutConfig.ts` and `layoutUtils.ts` are the intended custom layout system for mobile/desktop control positioning.
- Static assets for the active game live mainly in `static/symbols`, `static/controls`, `static/music`, `static/sounds`, and `static/loading_screen`.

## Required Agent Workflow

1. Pick one refactor phase from `OMA_PELI_REFACTOR_PLAN.yaml`.
2. Update `progress.active_phase`, `progress.active_step`, and `last_updated` in that YAML before substantial code edits.
3. Make the smallest change that completes the selected step.
4. Run the narrowest validation available, usually `get_errors` for touched Svelte/TypeScript files, then `pnpm run build --filter=oma-peli` when behavior or imports changed.
5. Update `OMA_PELI_REFACTOR_PLAN.yaml` with completed steps, notes, blockers, and validation results.
6. Update `OMA_PELI_TECHNICAL_DEEP_DIVE.md` whenever you discover or change architecture facts, commands, asset behavior, layout behavior, or known risks.
7. Update this `AGENTS.md` if you learn a new recurring workflow rule or pitfall.

A phase is not complete if the code changed but the plan and master document are stale.

The original phase sequence in `OMA_PELI_REFACTOR_PLAN.yaml` has now completed through phase 10. For any follow-up work, either add a new phase to the YAML first or treat the request as a new targeted task with its own docs/validation notes.

## Commands

Run commands from the repository root with Turbo filters:

```bash
pnpm run dev --filter=oma-peli
pnpm run build --filter=oma-peli
pnpm run lint --filter=oma-peli
pnpm run storybook --filter=oma-peli
```

Use `pnpm run storybook --filter=oma-peli` for SDK `Game.svelte` work. Use the dev server and browser checks for deployed `HelloPixi` work.

## Agentic Refactor Runner

The guarded phase runner lives in `agentic-refactor/Invoke-OmaPeliCopilotRefactor.ps1`. Use it only after reading `agentic-refactor/README.md`.

Dry-run from the repository root:

```powershell
./apps/oma-peli/agentic-refactor/Invoke-OmaPeliCopilotRefactor.ps1 -DryRun
```

Run one phase:

```powershell
./apps/oma-peli/agentic-refactor/Invoke-OmaPeliCopilotRefactor.ps1 -Execute -Phase phase_01_baseline_and_compile_hygiene
```

The runner targets `gh copilot -p`, generates one prompt per phase, and asks the phase agent to update the refactor plan, update the master document, commit, and push. Real execution refuses a dirty worktree unless `-AllowDirty` is supplied.

## Validation Expectations

- After Svelte/TypeScript edits, run `get_errors` on touched files.
- After import/module extraction, run `pnpm run build --filter=oma-peli`.
- For mobile UI work, manually check at least desktop, mobile portrait, and mobile landscape viewports.
- For Pixi changes, confirm the canvas is nonblank, one spin can complete, and controls still respond.
- For audio changes, confirm missing assets do not create repeated console warnings.

## Refactor Rules

- Stabilize and modularize `HelloPixi` before migrating to the SDK/RGS path.
- Do not mix math changes with UI layout changes in one step.
- Do not change payout weights, paytable, multipliers, or free-spin rules unless the task explicitly says math should change.
- Keep current visible behavior first when extracting modules. Simplify behavior only in a separate follow-up step.
- Prefer pure TypeScript modules for math and configuration.
- Prefer Svelte components with typed props for controls and overlays.
- Avoid adding global CSS or `!important` overrides unless there is no component-scoped alternative.
- Icon-only buttons must have `aria-label`.
- In Svelte 5 code, use event attributes such as `onclick` instead of deprecated `on:click`.
- Add cleanup for event listeners, timers, audio, and Pixi resources when touching lifecycle code.

## Mobile UI Rules

- Treat mobile portrait and mobile landscape as first-class layouts, not afterthoughts.
- Keep the spin button reachable and large enough for touch.
- Keep top toggles and debug/menu buttons away from iOS safe areas.
- Paytable/menu overlays must fit within the viewport and scroll internally.
- Debug UI must never cover critical game controls by default on mobile.
- Use a single responsive layout model instead of mixing CSS media queries, inline scale math, and stale device detection.

## Documentation Contract

When a refactor step changes the project:

- Update `OMA_PELI_TECHNICAL_DEEP_DIVE.md` with durable facts.
- Update `OMA_PELI_REFACTOR_PLAN.yaml` with progress and temporary notes.
- Keep the master document factual, not aspirational.
- Keep the refactor plan operational and parseable, with status fields a simpler model can update.

## Known Pitfalls

- Storybook uses the SDK shell and can pass while the deployed page remains broken.
- `HelloPixi` currently has many inline styles and duplicate desktop/mobile controls; avoid broad rewrites without validation between steps.
- Existing math documents do not all match current runtime constants. Use current source or extracted `mathConfig.ts` as truth.
- `static/music` is missing loop 14; the active standalone randomizer excludes it through `src/game-standalone/assets.ts`.
- The layout trigger pattern is now reactive, but mobile visual fit is still known-broken from `UI_TEST_MATRIX.md`.
- `gh copilot -p` can inspect the repo, but earlier non-interactive edit attempts were unreliable in this workflow. Prefer direct VS Code agent execution for scoped phase work.
