---
applyTo: 'apps/oma-peli/**'
---

# Oma Peli Agent Instructions

When working under `apps/oma-peli`, first read `apps/oma-peli/AGENTS.md`, `apps/oma-peli/OMA_PELI_TECHNICAL_DEEP_DIVE.md`, and `apps/oma-peli/OMA_PELI_REFACTOR_PLAN.yaml`.

The deployed route is `src/routes/+page.svelte -> PasswordProtection.svelte -> HelloPixi.svelte`. Storybook renders the separate SDK-style `Game.svelte` path. Always state which path a change targets before editing.

Follow the refactor plan one phase and one step at a time. Update `OMA_PELI_REFACTOR_PLAN.yaml` with progress, blockers, validation results, and notes. Update `OMA_PELI_TECHNICAL_DEEP_DIVE.md` when architecture facts, commands, layout behavior, asset behavior, or known risks change.

For `HelloPixi` work, validate the deployed route with direct file diagnostics and, when behavior or layout changes, a dev-server browser check. Storybook is not sufficient for deployed `HelloPixi` UI/mobile changes.

Use Svelte 5 event attributes such as `onclick`, add `aria-label` to icon-only buttons, avoid mixing math changes with UI changes, and keep mobile portrait and mobile landscape as first-class validation targets.
