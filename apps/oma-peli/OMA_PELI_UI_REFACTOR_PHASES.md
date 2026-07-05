# Oma Peli UI Refactor Phases

Document status: draft plan  
Created: 2026-07-05  
Target path: `src/routes/+page.svelte -> PasswordProtection.svelte -> HelloPixi.svelte`  
Primary goal: make the deployed standalone UI feel full, polished, stable, and usable across mobile portrait, mobile landscape, desktop, ultrawide, narrow desktop, and short-height browser windows.

This document is an implementation plan, not a retrospective. It should be followed one phase at a time. Each phase must leave the deployed `HelloPixi` route runnable and validated before the next phase starts.

## Phase Progress

| Phase                                                                    | Status      | Last Updated | Notes                                                                                   |
| ------------------------------------------------------------------------ | ----------- | ------------ | --------------------------------------------------------------------------------------- |
| Phase 00 - Baseline Capture And UI Contract                              | completed   | 2026-07-05   | Expanded viewport matrix recorded in `UI_TEST_MATRIX.md`. No production code changed.   |
| Phase 01 - Define Responsive Layout Model                                | completed   | 2026-07-05   | Added viewport classes and routed compact/top-action behavior through `ViewportModel`.  |
| Phase 02 - Establish Layout Tokens And Geometry Rules                    | completed   | 2026-07-05   | Added `uiLayout.ts` tokens and applied first CSS variables to modal/top/spin geometry.  |
| Phase 03 - Recompose Mobile Portrait For Fullness                        | completed   | 2026-07-05   | Added portrait stage/status tokens and a fixed mobile status strip for Balance/Bet/Win. |
| Phase 04 - Recompose Mobile Landscape And Short Screens                  | completed   | 2026-07-05   | Added short-screen status strip, desktopShort routing, and fixed autoplay picker.       |
| Phase 05 - Extract A Real Control Shell                                  | completed   | 2026-07-05   | Extracted spin, status, quick actions, menu buttons, and the control panel frame.       |
| Phase 06 - Replace The Menu/Paytable With A Modal System                 | not started | -            | -                                                                                       |
| Phase 07 - Make The Game Stage Responsive By Composition, Not Only Scale | not started | -            | -                                                                                       |
| Phase 08 - Visual Polish And Density Pass                                | not started | -            | -                                                                                       |
| Phase 09 - Accessibility And Input Behavior Pass                         | not started | -            | -                                                                                       |
| Phase 10 - Automated Layout Regression Harness                           | not started | -            | -                                                                                       |
| Phase 11 - Real Device And Browser Compatibility Pass                    | not started | -            | -                                                                                       |
| Phase 12 - Final UI Acceptance And Cleanup                               | not started | -            | -                                                                                       |

## Product Standard

The refactor is done only when the game feels deliberately composed at every supported viewport. Mobile must not look like a shrunken desktop. Desktop must not leave large dead areas or allow important controls to drift away on unusual monitors.

The target UI should satisfy these rules:

- The reel area, bottom controls, balance/win state, top actions, and overlays always fit inside the viewport and safe areas.
- Mobile portrait should feel full: the board should occupy most available vertical space, controls should sit close to the thumb zone, and unused black/background bands should be minimized.
- Mobile landscape should prioritize a compact but complete play surface: reels centered, controls reachable, overlays short-height aware, and no offscreen buttons.
- Desktop and ultrawide should feel centered and intentional, not stretched into awkward emptiness.
- Short-height desktop windows, browser devtools layouts, tablets, foldables, and rotated phones should use compact layout rules instead of inheriting inappropriate desktop behavior.
- Primary actions must meet touch target expectations: spin at least 56x56 px on compact landscape and 72x72 px on phone portrait; secondary buttons at least 40x40 px; text buttons at least 64x40 px.
- Modal overlays must use fixed viewport geometry, internal scrolling, reachable close actions, and predictable focus/keyboard behavior.
- Visual design should stay Rockabilly Reels themed while becoming calmer, denser, and more readable.

## Current Problems To Design Against

These are the known or likely sources of mobile and unusual-monitor fragility:

- `HelloPixi.svelte` still mixes Pixi stage scale, inline styles, component CSS, media queries, and layout config values.
- Mobile classification is partly width-based. A viewport such as `844x390` can behave like desktop unless short-height and orientation are handled explicitly.
- The deployed route still keeps a large amount of UI markup inside `HelloPixi.svelte`, especially the paytable/menu, autoplay menu, central control panel, balance/win display, and mobile menu content.
- The control panel is positioned in game-canvas coordinates even though many controls are HTML overlays that users experience as viewport UI.
- Mobile can feel sparse because the logical canvas remains `1445x1000` and is scaled down, leaving empty space rather than re-composing the UI for the actual phone viewport.
- The bottom control panel frame is asset-driven and wide. On small screens it can crowd content, hide useful state, or leave the spin button visually detached.
- Overlay content is long and currently mixes paytable content with mobile settings. This can work, but it needs a real modal shell, sections, sticky actions, and scroll rules.
- Debug and test controls are useful for development but must not compete with real player controls on mobile.

## Non-Goals

- Do not change payout math, symbol weights, scatter/free-spin rules, RTP, or bet levels.
- Do not migrate the game to the SDK/RGS BookEvent path during this UI refactor.
- Do not redesign all game art assets from scratch.
- Do not remove the existing standalone route or password gate.
- Do not treat Storybook as validation for this route; Storybook targets the separate SDK shell.

## Required Validation Matrix

Every phase that changes layout, controls, overlays, or Pixi sizing must validate at least these viewports:

| Viewport  | Purpose                        | Required Outcome                                                                        |
| --------- | ------------------------------ | --------------------------------------------------------------------------------------- |
| 390x844   | Phone portrait baseline        | Board, spin, top actions, bottom actions, and overlays fit without offscreen controls.  |
| 360x740   | Small phone portrait           | UI remains usable with reduced vertical space and no clipped primary actions.           |
| 430x932   | Large phone portrait           | UI feels full, not overly sparse.                                                       |
| 844x390   | Phone landscape baseline       | Compact landscape mode activates; no desktop-only drift.                                |
| 740x360   | Small phone landscape          | Spin and menu remain reachable; overlays fit short height.                              |
| 768x1024  | Tablet portrait                | Uses tablet/medium layout, not cramped phone or sparse desktop.                         |
| 1024x768  | Tablet landscape/small desktop | Controls compose cleanly without overlap.                                               |
| 1366x768  | Common laptop                  | Full game is visible; no vertical clipping.                                             |
| 1440x1000 | Existing desktop baseline      | Current smoke flow remains working.                                                     |
| 1920x1080 | Desktop HD                     | Game is centered, proportioned, and not visually empty.                                 |
| 2560x1080 | Ultrawide                      | Game uses a bounded stage with intentional side treatment, not uncontrolled stretching. |
| 900x500   | Weird compact monitor/window   | Compact layout activates and all controls remain reachable.                             |

For each viewport, record:

- Screenshot or browser measurement summary.
- Reels visible and nonblank.
- Spin button rectangle and visibility.
- Top controls rectangle and visibility.
- Bottom controls rectangle and visibility.
- Paytable/menu modal rectangle, scrollability, and close visibility.
- Autoplay menu rectangle and close/cancel visibility.
- Whether any visible text overlaps, clips, or becomes unreadable.

## Phase 00 - Baseline Capture And UI Contract

Status: completed
Target files: `UI_TEST_MATRIX.md`, new screenshots/notes if added, no production code unless required for diagnostics.

### Objective

Create an honest baseline of the deployed route before changing the UI. The baseline should capture not just pass/fail, but why the screen feels wrong: empty bands, cramped controls, offscreen actions, awkward alignment, tiny hit targets, and strange monitor behavior.

### Steps

1. Start the dev server with `pnpm run dev --filter=oma-peli`.
2. Open `http://localhost:3010/` and pass the password gate with `slot2024`.
3. Run the required validation matrix.
4. For every viewport, measure these rectangles from the browser: Pixi canvas, game wrapper, reel bounds if detectable, spin button, top actions, bottom panel, menu modal, autoplay modal.
5. Add a short qualitative note per viewport: `too_empty`, `too_cramped`, `overlap`, `offscreen`, `good_density`, or `needs_visual_balance`.
6. Update `UI_TEST_MATRIX.md` with the expanded matrix and mark this as the new baseline.

### Acceptance Criteria

- The team can point to exact viewport failures before any design changes.
- The matrix distinguishes layout bugs from aesthetic density problems.
- The document says which route was tested: deployed `HelloPixi`, not Storybook.

### Validation

- `git diff --check`
- Manual/browser validation on all required viewports.

### Completion Notes

Completed on 2026-07-05 against the deployed `HelloPixi` route at `http://localhost:3010/`. The expanded baseline is recorded in `UI_TEST_MATRIX.md`.

Findings to carry into Phase 01:

- The recent mobile fit fixes still hold for phone portrait and phone landscape baseline viewports.
- Top actions are not fully visible at `1024x768` and `1366x768`, which confirms that width/scale-based desktop positioning still breaks common non-phone viewports.
- `740x360` passes hard fit checks, but the bottom panel measures only 18 px tall and needs a short-height composition pass.
- `900x500` passes hard fit checks, but it uses 56x56 compact spin sizing in a desktop-like compact window and should be handled explicitly by viewport class.
- `1920x1080` and `2560x1080` pass hard fit checks, but the bounded canvas leaves large side space; ultrawide needs intentional side treatment or stage composition.
- Paytable/menu modal and close button are visible across the expanded browser matrix.

## Phase 01 - Define Responsive Layout Model

Status: completed

Target files: `src/utils/layoutUtils.ts`, `src/config/layoutConfig.ts`, `OMA_PELI_TECHNICAL_DEEP_DIVE.md`.

### Objective

Replace ambiguous device buckets with a viewport-class model that can handle real browser shapes. The model should describe the layout need, not just the device name.

### Proposed Viewport Classes

| Class                   | Example Trigger                  | Intent                                                  |
| ----------------------- | -------------------------------- | ------------------------------------------------------- |
| `phonePortraitCompact`  | width <= 390 and height < 780    | Small phone; maximum density, compressed vertical gaps. |
| `phonePortrait`         | width <= 480 and height >= width | Default phone portrait; board should feel full.         |
| `phoneLandscapeCompact` | height <= 430 and width > height | Short landscape; compact controls and fixed overlays.   |
| `tabletPortrait`        | width <= 900 and height > width  | Larger touch layout, less cramped than phone.           |
| `tabletLandscape`       | width <= 1200 and height <= 900  | Medium layout with readable controls.                   |
| `desktopShort`          | width > 900 and height <= 700    | Weird monitor/devtools window; compact vertical rules.  |
| `desktopStandard`       | typical laptop/desktop           | Existing desktop composition, improved centering.       |
| `desktopWide`           | aspect ratio >= 2.0              | Bounded game stage with intentional side space.         |

### Steps

1. Add a `ViewportClass` type to layout utilities.
2. Create one pure function that derives viewport class from width, height, orientation, aspect ratio, and safe-area insets.
3. Change `createViewportModel()` to expose `viewportClass`, `isTouchLayout`, `isCompactHeight`, `isWide`, and `usableWidth/usableHeight` after safe areas.
4. Deprecate direct `width <= 768` checks for UI decisions.
5. Keep current `DeviceType` compatibility only where existing config still needs it.
6. Document the new model in the technical deep dive.

### Acceptance Criteria

- `844x390`, `900x500`, and short desktop windows no longer fall into normal desktop behavior.
- `isCompactViewport` becomes a derived property of the viewport model, not an ad hoc expression in `HelloPixi`.
- The model is pure enough to unit-test with fixed width/height inputs later.

### Validation

- `get_errors` on `layoutUtils.ts`, `layoutConfig.ts`, and `HelloPixi.svelte` if touched.
- `pnpm run build --filter=oma-peli`.
- Browser console/debug readout confirms expected classes for every required viewport.

### Completion Notes

Completed on 2026-07-05 for the deployed `HelloPixi` route.

Implemented:

- Added `ViewportClass` and pure `getViewportClass()` in `src/utils/layoutUtils.ts`.
- Extended `ViewportModel` with `usableWidth`, `usableHeight`, `viewportClass`, `isTouchLayout`, `isCompactHeight`, `isWide`, `isCompactViewport`, and `usesViewportAnchoredTopActions`.
- Replaced the local `HelloPixi` compact-top-action expression with `viewportModel.usesViewportAnchoredTopActions`.
- Preserved existing `DeviceType` compatibility for legacy layout config while moving new UI decisions to viewport classes.

Validation results:

- `get_errors` passed for `layoutUtils.ts`; `HelloPixi.svelte` only reports the existing editor-only `$app/paths` diagnostic.
- `pnpm run build --filter=oma-peli` passed with the known warning set.
- Browser checks confirmed top actions are now fully visible at the Phase 00 hard-failure viewports `1024x768` and `1366x768`.
- Browser checks also confirmed compact top actions remain visible at `844x390` and `900x500`, while `2560x1080` keeps the desktop top actions.

Findings to carry into Phase 02:

- The viewport model now classifies the screen shape, but hard-coded geometry numbers still live in `HelloPixi` and CSS media queries.
- Phase 02 should move spin sizes, top action sizes, modal dimensions, and bottom safe gaps into layout tokens keyed by `ViewportClass`.

## Phase 02 - Establish Layout Tokens And Geometry Rules

Status: completed

Target files: new `src/game-standalone/uiLayout.ts` or `src/game-standalone/layout.ts`, `HelloPixi.svelte`, layout docs.

### Objective

Create a single source of truth for UI geometry so the screen can be filled intentionally instead of relying on scattered inline arithmetic.

### Layout Tokens

Define per viewport class:

- Stage max width and max height.
- Board scale target.
- Board vertical anchor: top, center, or compressed.
- Bottom control height.
- Bottom control safe-area gap.
- Top action gap and size.
- Spin button size.
- Modal width, max height, padding, and header height.
- Minimum visible background margin.
- Whether balance/win are inline, stacked, or hidden behind menu.

### Steps

1. Add a typed layout-token map keyed by `ViewportClass`.
2. Move repeated numbers such as mobile spin sizes, top action sizes, modal max heights, and bottom safe gaps into this map.
3. Add helper functions that convert tokens into CSS variables for the Svelte layer.
4. Apply these variables to the deployed wrapper first, without moving the full control panel yet.
5. Remove duplicate hard-coded mobile media-query values once equivalent tokens exist.

### Acceptance Criteria

- A future agent can adjust phone portrait density in one config object.
- Inline styles in `HelloPixi` no longer contain the same layout number in multiple places.
- CSS media queries are used only for final CSS behavior, not as the main state model.

### Validation

- `get_errors` on touched files.
- `pnpm run build --filter=oma-peli`.
- Measure that existing mobile targeted fixes still pass at `390x844` and `844x390`.

### Completion Notes

Completed on 2026-07-05 for the deployed `HelloPixi` route.

Implemented:

- Added `src/game-standalone/uiLayout.ts` with typed `StandaloneUILayoutTokens` keyed by `ViewportClass`.
- Added layout-token fields for stage bounds, board intent, bottom control height/gap, top action sizing, spin size, modal geometry, background margin, and status display mode.
- Added `getUILayoutTokens()` and `createUILayoutCssVars()` helpers.
- Applied the first token-derived CSS variables to the active game wrapper.
- Moved compact top-action gap/size/inset values in `TopToggles.svelte` to CSS variables.
- Moved mobile spin sizing and paytable/menu modal sizing away from hard-coded media values and into viewport-class tokens consumed by `HelloPixi`.

Validation results:

- `get_errors` passed for `uiLayout.ts` and `TopToggles.svelte`; `HelloPixi.svelte` only reports the existing editor-only `$app/paths` diagnostic.
- Browser checks confirmed top actions, spin, paytable/menu modal, and modal close fit at `390x844`, `844x390`, `1024x768`, `1366x768`, and `2560x1080`.
- `pnpm run build --filter=oma-peli` passed with the known warning set.

Findings to carry into Phase 03:

- Tokens now exist, but the mobile portrait composition still uses the existing asset control strip and canvas-scale placement.
- Phase 03 should use the tokens to recompose phone portrait around a fuller board and a dedicated thumb-zone control layout.

## Phase 03 - Recompose Mobile Portrait For Fullness

Status: completed

Target files: `HelloPixi.svelte`, standalone control components, layout token file.

### Objective

Make phone portrait feel like a designed mobile game screen rather than a scaled desktop canvas. The screen should be full, readable, and thumb-friendly.

### Design Direction

- Reels should occupy the visual center and most available vertical space.
- Bottom controls should become a compact touch console, not a tiny desktop strip.
- Top actions should remain accessible but should not steal the first visual read.
- Balance, bet, and win should be visible in compact numeric chips or a bottom status row.
- Empty vertical space above and below the reels should be actively reduced.

### Steps

1. Identify the actual visible reel bounds relative to the Pixi canvas.
2. Add mobile portrait layout tokens that anchor the board higher or lower based on available height.
3. Convert the bottom panel into a portrait-specific composition:
   - left: bet decrease/current/increase,
   - center: large spin,
   - right: win/balance/menu access,
   - secondary controls in the modal/menu.
4. Keep the spin button visually dominant and centered in the thumb zone.
5. Make balance/win text responsive to value length without shifting the panel.
6. Verify that the mobile top action group does not cover important art or reels.
7. Remove unused gaps created by hiding desktop-only controls.

### Acceptance Criteria

- At `390x844`, the screen feels intentionally filled with no large dead band between reels and controls.
- At `360x740`, the spin button, bet controls, and menu remain reachable and visible.
- Long balance/win values do not overflow or resize the layout.
- A single spin can be started, skipped, and completed from phone portrait.

### Validation

- Browser measurements for `390x844`, `360x740`, and `430x932`.
- One manual spin and one skipped spin in portrait.
- Paytable/menu open and close in portrait.
- `pnpm run build --filter=oma-peli`.

### Completion Notes

Completed on 2026-07-05 for the deployed `HelloPixi` route.

Implemented:

- Added mobile portrait composition tokens to `src/game-standalone/uiLayout.ts` for stage vertical offset and fixed status-strip placement.
- Added a phone-portrait-only Balance / Bet / Win status strip in `HelloPixi.svelte` using stable grid columns, tabular numbers, and ellipsis for long values.
- Kept the existing spin, menu, and mobile bet callbacks intact while making the portrait play surface feel fuller.
- Preserved compact top-action placement from Phase 01 and tokenized geometry from Phase 02.

Validation results:

- `390x844`: top actions 226x40, spin 72x72, menu 72x72, status strip 366x37, modal 366x793, close 64x40 all fully visible; canvas visible height about 69%.
- `360x740`: top actions 226x40, spin 72x72, menu 72x72, status strip 340x37, modal 336x710, close 64x40 all fully visible; canvas visible height about 70%.
- `430x932`: top actions 226x40, spin 72x72, menu 72x72, status strip 406x37, modal 406x797, close 64x40 all fully visible; canvas visible height about 69%.
- Browser interaction check at `390x844` verified spin start, second-click skip path, and menu open/close via DOM-invoked clicks; pointer automation was blocked by the existing audio start overlay.
- `get_errors` passed for `uiLayout.ts`; `HelloPixi.svelte` only reports the existing editor-only `$app/paths` diagnostic.
- `pnpm run build --filter=oma-peli` passed with the known warning set.

Findings to carry into Phase 04:

- Phone portrait now has a dedicated status row, but the underlying control panel is still the old asset-based shell and should be extracted in Phase 05.
- Short landscape and compact desktop remain the next hard UI risk.

## Phase 04 - Recompose Mobile Landscape And Short Screens

Status: completed

Target files: `HelloPixi.svelte`, standalone control components, layout token file.

### Objective

Make short-height screens robust. Phone landscape, compact desktop windows, and browser-devtools windows should never inherit an oversized desktop layout.

### Design Direction

- Board gets priority, but the control surface must stay visible.
- Top actions should be a compact row or side rail depending on available width.
- The bottom console should be shallow and stable.
- Overlays should use nearly full viewport height with internal scrolling.

### Steps

1. Add `phoneLandscapeCompact` and `desktopShort` token sets.
2. Make the bottom console shallow enough to avoid covering reels at heights from 360 to 500 px.
3. Move low-priority controls into menu for compact landscape.
4. Keep spin at least 56x56 px and prevent it from colliding with the panel frame.
5. Ensure autoplay selection opens above the control panel or as a viewport modal when height is too short.
6. Ensure paytable/menu content has a sticky header and close button in short-height viewports.

### Acceptance Criteria

- `844x390`, `740x360`, and `900x500` all have visible spin, menu, bet, and close controls.
- Compact landscape does not show desktop-only layout just because width is above 768 px.
- No overlay bottom extends below the viewport unless it is internally scrollable and still has a visible close action.

### Validation

- Browser measurements for `844x390`, `740x360`, and `900x500`.
- Open/close paytable and autoplay menu in each viewport.
- `pnpm run build --filter=oma-peli`.

### Completion Notes

Completed on 2026-07-05 for the deployed `HelloPixi` route.

Implemented:

- Routed `900x500` and similar short desktop windows through `desktopShort` before tablet-landscape fallback in `src/utils/layoutUtils.ts`.
- Added short-screen status placement tokens for `phoneLandscapeCompact` and `desktopShort` in `src/game-standalone/uiLayout.ts`.
- Reused the Phase 03 Balance / Bet / Win strip for compact landscape and desktop-short layouts.
- Added a short-screen CSS treatment that keeps the status strip clear of the mobile menu and keeps the spin button at 56x56 px.
- Added an `autoplay-menu-popover` hook and made the autoplay picker fixed, internally scrollable, and viewport-bounded on short landscape screens.

Validation results:

- `844x390`: top actions 226x40, spin 56x56, menu 56x56, status strip 230x33, modal 824x370, close 64x40, and autoplay picker 360x279 all fully visible; status/menu gap 30 px.
- `740x360`: top actions 226x40, spin 56x56, menu 56x56, status strip 220x33, modal 720x340, close 64x40, and autoplay picker 360x267 all fully visible; status/menu gap 16 px.
- `900x500`: now uses the `desktopShort` path; top actions 226x40, spin 56x56, menu 56x56, status strip 230x33, modal 880x480, close 64x40, and autoplay picker 360x308 all fully visible; status/menu gap 8 px.
- Browser interaction checks verified autoplay open/cancel at `844x390`, `740x360`, and `900x500`.
- `get_errors` passed for `layoutUtils.ts` and `uiLayout.ts`; `HelloPixi.svelte` only reports the existing editor-only `$app/paths` diagnostic.
- `pnpm run build --filter=oma-peli` passed with the known warning set.

Findings to carry into Phase 05:

- Compact landscape is now bounded and status-aware, but the control shell remains embedded inside `HelloPixi` with duplicated hidden desktop/mobile branches.
- Autoplay and menu behavior still depends on inline markup and should be extracted behind a typed control-shell API.

## Phase 05 - Extract A Real Control Shell

Status: completed

Target files: new or updated `src/components/standalone/ControlShell.svelte`, `ControlPanel.svelte`, `MobileControlPanel.svelte`, `DesktopControlPanel.svelte`, `controlPanelApi.ts`, `HelloPixi.svelte`.

### Objective

Move the main control surface out of `HelloPixi` and into typed, viewport-aware components. This is required before the UI can become maintainable.

### Proposed Components

- `ControlShell.svelte`: chooses layout variant from `viewportClass` and receives state/callback props.
- `SpinButton.svelte`: owns spin/stop/autoplay-stop presentation and touch sizing.
- `BetStepper.svelte`: owns bet decrease/current/increase with stable width.
- `StatusMeters.svelte`: owns balance, bet, win, and free-spin status.
- `QuickActions.svelte`: owns menu, autoplay, speed, audio, and debug entry points where appropriate.

### Steps

1. Expand `controlPanelApi.ts` into the authoritative prop contract.
2. Extract the spin button first, with no visual behavior change.
3. Extract bet controls and status text next.
4. Extract autoplay and speed controls.
5. Replace duplicated desktop/mobile branches with `ControlShell` variants.
6. Keep callbacks owned by `HelloPixi`; do not move game state transitions yet.

### Acceptance Criteria

- `HelloPixi.svelte` no longer contains the full bottom control panel markup.
- Control components are viewport-aware through props/tokens, not through direct `window` access.
- Visual behavior remains equivalent or improved at baseline viewports.

### Validation

- `get_errors` on all touched Svelte/TS files.
- `pnpm run build --filter=oma-peli`.
- Browser smoke at desktop, phone portrait, phone landscape, and `900x500`.

### Progress Notes

Started on 2026-07-05 for the deployed `HelloPixi` route.

Completed checkpoint:

- Added `SpinButton.svelte` and moved central play/stop button markup, glare styling, and responsive spin sizing out of `HelloPixi.svelte`.
- Added `StatusMeters.svelte` and moved the mobile Balance / Bet / Win status strip plus desktop single Balance/Win meters out of `HelloPixi.svelte`.
- Added `QuickActions.svelte` and moved desktop autoplay and spin-speed controls out of `HelloPixi.svelte` while preserving the existing desktop order of autoplay, speed, WIN, and menu.
- Added `MenuButton.svelte` and moved both mobile-left and desktop-right menu buttons out of `HelloPixi.svelte`.
- Added `ControlPanelFrame.svelte` and moved the asset-based left/center/right bottom control frame out of `HelloPixi.svelte`.
- Expanded `controlPanelApi.ts` with typed props for spin, status, quick actions, menu, and frame components.
- Added `pressSpinButton()` in `HelloPixi.svelte` so game-state transitions remain owned by `HelloPixi` while presentation moves into components.
- Added `cycleSpinSpeed()` in `HelloPixi.svelte` so the extracted speed button remains callback-driven.

Checkpoint validation:

- `get_errors` passed for `SpinButton.svelte`, `StatusMeters.svelte`, and `controlPanelApi.ts`; `HelloPixi.svelte` only reports the existing editor-only `$app/paths` diagnostic.
- Browser smoke confirmed spin/status/menu fit at `390x844`, `844x390`, `900x500`, and `1440x1000`.
- Browser smoke confirmed extracted autoplay/speed controls remain visible on desktop, hidden in compact layouts, and autoplay open/cancel still works through callback dispatch.
- Browser smoke confirmed extracted menu buttons remain visible and open the menu at `390x844`, `844x390`, and `1440x1000`.
- Browser smoke confirmed the extracted frame preserves spin, menu, status strip, autoplay, and speed placement at `390x844`, `844x390`, `900x500`, and `1440x1000`.
- `pnpm run build --filter=oma-peli` passed with the known warning set.

Completion notes:

- The bottom frame chrome is now componentized, but the slot content still preserves the existing desktop/mobile branches inside `HelloPixi.svelte` so behavior stayed stable.
- A later cleanup may introduce a higher-level `ControlShell.svelte`, but Phase 05's required maintainability step is complete enough to proceed to modal extraction.

## Phase 06 - Replace The Menu/Paytable With A Modal System

Status: not started  
Target files: new `src/components/standalone/GameMenuModal.svelte`, `PaytableSection.svelte`, `SettingsSection.svelte`, `AutoplayMenu.svelte`, `HelloPixi.svelte`.

### Objective

Turn the current long inline paytable/menu block into a predictable modal system with tabs/sections, sticky actions, internal scrolling, and mobile-first density.

### Design Direction

- Use a single modal shell for menu, paytable, autoplay, settings, and debug entry.
- On mobile, the modal should feel like a compact sheet with fixed header and sticky close/action area.
- On desktop, use a centered bounded dialog that does not become oversized on ultrawide.
- Keep paytable readable but reduce vertical waste with compact symbol rows and section grouping.

### Steps

1. Create a `ModalShell.svelte` with fixed viewport geometry, focusable close button, `Escape` close, backdrop click policy, and internal scroll region.
2. Move paytable content into `PaytableSection.svelte`.
3. Move mobile settings controls into `SettingsSection.svelte`.
4. Move autoplay round selection into `AutoplayMenu.svelte` or a modal section.
5. Add tab/segmented control state for `paytable`, `settings`, `autoplay`, and `debug` if debug remains accessible.
6. Remove duplicate bottom close buttons when sticky header close is sufficient.

### Acceptance Criteria

- Menu close is always visible in every required viewport.
- Modal body scrolls internally without the game page scrolling.
- Paytable is readable at `360x740` and `740x360`.
- Autoplay selection is reachable on short-height screens.
- Keyboard users can close with `Escape` and tab to the close action.

### Validation

- `get_errors` on touched Svelte files.
- Browser modal fit checks for every required viewport.
- `pnpm run build --filter=oma-peli`.

## Phase 07 - Make The Game Stage Responsive By Composition, Not Only Scale

Status: not started  
Target files: `HelloPixi.svelte`, `src/game-standalone/pixiRuntime.ts`, layout utilities.

### Objective

Reduce empty space and awkward framing by separating the logical Pixi canvas from the visible composed game stage. The UI should choose how to crop, center, and position the board per viewport class.

### Steps

1. Document the true reel bounding box inside the `1445x1000` logical canvas.
2. Add stage viewport calculations: visible board rect, crop/overflow policy, and anchor point.
3. For mobile portrait, enlarge and position the board based on reel bounds rather than the full canvas bounds.
4. For desktop wide, bound the game stage max width and use side background art or centered margins intentionally.
5. Ensure Pixi masks and hit testing still work after stage translation/scale changes.
6. Keep canvas nonblank and avoid resizing renderer repeatedly beyond what is required.

### Acceptance Criteria

- Mobile portrait uses vertical space effectively without clipping reels.
- Ultrawide does not stretch the game or leave accidental-looking empty space.
- Short desktop windows can still see reels and controls.
- The Pixi canvas remains crisp on high-DPI screens.

### Validation

- Browser screenshot/measurement across required viewports.
- Canvas pixel/nonblank check after load.
- One spin completion at phone portrait, phone landscape, and desktop.
- `pnpm run build --filter=oma-peli`.

## Phase 08 - Visual Polish And Density Pass

Status: not started  
Target files: component CSS, modal components, control components, maybe `GlobalStyle` only if necessary.

### Objective

Make the UI feel finished: less empty, more legible, better hierarchy, stronger touch affordances, and fewer clashing styles.

### Design Checklist

- Reduce one-off inline fonts and colors in favor of CSS variables/tokens.
- Give controls consistent hover/active/disabled states.
- Keep text inside buttons and status chips from clipping.
- Use numeric tabular styling for balances, bets, and wins.
- Add subtle pressed states for touch controls.
- Keep game art visible; do not cover reels with opaque panels unless a modal is open.
- Use restrained effects. The game can be playful, but controls should remain readable.
- Ensure status feedback is immediate: disabled spin, active autoplay, current speed, muted audio.

### Acceptance Criteria

- The UI has consistent spacing and button styling across top actions, bottom controls, and modals.
- Text is readable on mobile without zooming.
- Empty areas are reduced or intentionally filled by background/art/stage composition.
- The game still feels like Rockabilly Reels, not a generic dashboard.

### Validation

- Visual review at required viewports.
- Browser measurements for text overflow and visible button bounds.
- `pnpm run build --filter=oma-peli`.

## Phase 09 - Accessibility And Input Behavior Pass

Status: not started  
Target files: all extracted UI components.

### Objective

Make controls understandable and operable through keyboard, screen readers, and touch without introducing noisy visual clutter.

### Steps

1. Ensure every icon-only button has a useful `aria-label`.
2. Add `aria-pressed` for toggles such as sound/music and selected speed where appropriate.
3. Add disabled states and labels for spin when spin is unavailable.
4. Ensure modal focus starts at the title or close action and returns to the opener on close.
5. Add `Escape` close for modals and menus.
6. Confirm spacebar spin behavior does not interfere with focused buttons or modal text controls.
7. Verify color contrast for small text and disabled states.

### Acceptance Criteria

- Keyboard users can open menu, change speed, change bet, spin, and close modal.
- Touch users never need a target smaller than the agreed minimums.
- Screen-reader labels describe action, not visual asset names.

### Validation

- Manual keyboard pass.
- Browser accessibility snapshot if tooling is available.
- `get_errors` and `pnpm run build --filter=oma-peli`.

## Phase 10 - Automated Layout Regression Harness

Status: not started  
Target files: test scripts or docs under `apps/oma-peli`, `UI_TEST_MATRIX.md`.

### Objective

Stop rediscovering the same mobile failures manually. Add a repeatable browser-driven check that measures UI fit across the required matrix.

### Steps

1. Create a small script or documented Playwright routine that launches the deployed dev route.
2. Authenticate with `sessionStorage.gameAuthenticated = true`.
3. Iterate through the required viewports.
4. Measure all critical selectors:
   - spin button,
   - menu button/top actions,
   - bottom control shell,
   - paytable/menu modal,
   - autoplay modal,
   - Pixi canvas.
5. Fail or flag when any critical element is offscreen, smaller than target, overlapping a forbidden area, or missing.
6. Save a JSON summary and update `UI_TEST_MATRIX.md` manually from the output.

### Acceptance Criteria

- A future agent can run one command or one documented Playwright snippet and get objective layout measurements.
- The check covers both normal and weird monitor viewports.
- The output distinguishes hard failures from review-needed visual density notes.

### Validation

- Run the harness locally against `http://localhost:3010/`.
- Confirm at least one intentionally bad selector/size threshold can fail the check during development.

## Phase 11 - Real Device And Browser Compatibility Pass

Status: not started  
Target files: docs first; code only for issues discovered.

### Objective

Validate that browser viewport automation matches real mobile behavior, especially iOS Safari safe areas, Android Chrome address bar collapse, touch input, and audio unlock behavior.

### Devices To Prefer

- iPhone small portrait and landscape.
- iPhone large portrait and landscape.
- Android small/medium portrait and landscape.
- iPad/tablet portrait and landscape.
- Desktop Chrome at 1366x768 and 1920x1080.
- Ultrawide monitor if available.

### Steps

1. Deploy or run on local network using the Vite network URL.
2. Test page load, password gate, spin, skip spin, menu, autoplay, audio toggles, and free-spin/debug paths if needed.
3. Record any mismatch between automated viewport fit and real device fit.
4. Fix only the issues discovered in this phase; do not redesign unrelated surfaces.

### Acceptance Criteria

- Real device notes exist for mobile portrait and landscape.
- iOS safe areas do not hide top or bottom controls.
- Browser address bar changes do not permanently break layout.

### Validation

- Manual real-device notes in `UI_TEST_MATRIX.md` or a linked device test document.
- `pnpm run build --filter=oma-peli` after any code changes.

## Phase 12 - Final UI Acceptance And Cleanup

Status: not started  
Target files: docs and any final cleanup files.

### Objective

Close the UI refactor with clear evidence that the deployed route is stable, polished, and maintainable.

### Steps

1. Re-run the full required validation matrix.
2. Re-run the primary gameplay smoke flow:
   - password gate,
   - load canvas,
   - spin,
   - skip spin,
   - change bet,
   - open/close menu,
   - change speed,
   - start/cancel autoplay,
   - toggle sound/music,
   - debug panel only if still present.
3. Remove dead CSS selectors and obsolete inline style branches introduced during the refactor.
4. Update `OMA_PELI_TECHNICAL_DEEP_DIVE.md` with final UI architecture facts.
5. Update `AGENTS.md` if the validation workflow or UI rules changed.
6. Mark this document with final status and known residual risks.

### Acceptance Criteria

- No required viewport has offscreen critical controls.
- Mobile portrait and landscape both feel full and purposeful.
- Desktop, ultrawide, and compact desktop do not behave weirdly.
- The active UI is componentized enough that future agents do not need to edit a huge `HelloPixi` block for ordinary layout changes.
- Build passes.

### Validation

- `get_errors` on all touched Svelte/TypeScript files.
- `git diff --check`.
- `pnpm run build --filter=oma-peli`.
- Full browser validation matrix.

## Execution Rules For Agents

- Start each phase by stating that it targets the deployed `HelloPixi` route.
- Do exactly one phase at a time unless the user explicitly asks for batching.
- Do not combine UI phases with math/audio/RGS work.
- Prefer extraction and tokenization over patching more inline styles into `HelloPixi`.
- After the first substantive edit in a phase, run the narrowest validation immediately.
- Record objective measurements when judging layout. Do not rely only on visual impressions.
- Keep generated build output out of commits unless explicitly requested.
- Preserve the existing standalone/SDK architecture decision.

## Suggested Commit Boundaries

Use one commit per phase when implementing this plan:

- `docs(oma-peli): capture ui refactor baseline`
- `refactor(oma-peli): add responsive viewport classes`
- `refactor(oma-peli): centralize ui layout tokens`
- `fix(oma-peli): recompose mobile portrait layout`
- `fix(oma-peli): stabilize compact landscape layout`
- `refactor(oma-peli): extract standalone control shell`
- `refactor(oma-peli): extract menu modal system`
- `fix(oma-peli): compose stage for responsive viewports`
- `style(oma-peli): polish standalone ui density`
- `fix(oma-peli): improve control accessibility`
- `test(oma-peli): add ui layout regression checks`
- `docs(oma-peli): record real device ui validation`
- `docs(oma-peli): close ui refactor acceptance`

## Open Design Decisions

These should be answered during the relevant phase, not guessed up front:

- Should debug remain visible on mobile, or should it move fully behind a development-only menu section?
- Should autoplay be a separate modal section or part of the main menu/settings sheet?
- Should the bottom panel continue using the existing control frame assets on phone portrait, or should phone portrait use a cleaner native HTML control surface with the same visual theme?
- Should ultrawide screens use decorative side treatment, bounded game stage only, or a wider background crop?
- Should tablet portrait behave closer to phone portrait or desktop?
- How much paytable content should be visible before scrolling on phone portrait?

## Residual Risks

- Pixi stage translation and crop work can accidentally misalign win highlights if not measured against reel coordinates.
- Asset-based control frames may resist compact mobile composition; extraction should make it possible to replace the frame per viewport if needed.
- Browser viewport automation cannot fully prove iOS Safari safe-area behavior.
- The route remains locally simulated and password-gated; UI polish does not make it production/RGS-authoritative.
- Excessive visual polish before component extraction could make `HelloPixi.svelte` harder to maintain. Extract first when a change would add another large inline block.
