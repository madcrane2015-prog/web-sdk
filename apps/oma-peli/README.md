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
The current theoretical demo RTP is 80.6792%; the 95% scale is a proposal only.

Run `pnpm --filter=oma-peli test:domain` and
`pnpm --filter=oma-peli test:reel-stop` for round and reel regressions.

Access at: https://madcrane2015-prog.github.io/web-sdk/oma-peli/
