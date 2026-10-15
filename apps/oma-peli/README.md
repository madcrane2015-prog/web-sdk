# Oma Peli - Custom HelloPixi Slot Game

Custom 5-reel slot game built with Svelte 5 and PixiJS 8.

## Features
- PixiJS 8 rendering
- Custom Finnish symbols
- Password protection (slot2024)
- GitHub Pages deployment

## Deployment
Automatically deployed to GitHub Pages via GitHub Actions workflow.

## Active math audit

Run `pnpm --filter=oma-peli audit:math 1000000` from the repository root.
The count is paid rounds per seed (three seeds); each includes the complete
bonus chain. Use a safe integer of at least two for finite variance estimates.
The audit compares 20,000 boards against the runtime calculator and writes
`reports/active-rtp-audit.json`. Its theoretical calculation reads the active
symbol weights, paytable, Wild probability, scatter threshold and multipliers.
Version 1.7.0 uses the audited balanced-96-v1 demo model: 66% base plus 30%
complete free-spin contribution, before currency rounding. `audit:math` now
audits this active model; use `audit:baseline` for the archived 80.6792% model.
The comparison report is `EXPERIMENTAL_96_SIMULATION_30M.md`.

## Shared test release 1.7.0

Public responsive test link: https://madcrane2015-prog.github.io/web-sdk/oma-peli/test/
No password is required on that test route. Desktop and mobile use the same build.
All balances are fictional. Full-precision accounting is displayed rounded to
two decimals; this is a demo test release, not a real-money/RGS package.
The normal root route retains its existing password gate.

Pre-promotion backup: Git tag `backup/rockabilly-pre-96-2026-10-15`.
See `TEST_RELEASE_1_7_0.md` for testing and rollback details.

Run `pnpm --filter=oma-peli test:domain` and
`pnpm --filter=oma-peli test:reel-stop` for round and reel regressions.

Access at: https://madcrane2015-prog.github.io/web-sdk/oma-peli/
