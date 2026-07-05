# Oma Peli UI Test Matrix

Last run: 2026-07-05

This matrix validates the deployed standalone route: `src/routes/+page.svelte -> PasswordProtection.svelte -> HelloPixi.svelte`. Storybook is not a substitute for these checks.

## Command

```bash
pnpm run dev --filter=oma-peli
```

Local URL used: `http://localhost:3010/`

Password used for the local gate: `slot2024`

## Results

| Viewport                 | Result             | Notes                                                                                                                                                                                                                                                                        |
| ------------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop 1440x1000        | Pass with warnings | Password gate cleared, canvas mounted with WebGL context, paytable opened/closed, music and sound toggles clicked, spin clicked, autoplay menu opened/cancelled, spin speed clicked. No measured button overlaps or offscreen desktop buttons.                               |
| Mobile portrait 390x844  | Pass targeted fix  | Follow-up validation confirmed top MENU/DEBUG/music/sound controls are viewport-visible at the top right, spin is 72x72 px, and the paytable/menu modal fits inside the viewport with a visible top close button. Full gameplay smoke was not repeated in this targeted run. |
| Mobile landscape 844x390 | Pass targeted fix  | Follow-up validation confirmed top MENU/DEBUG/music/sound controls are viewport-visible at the top right, spin is 56x56 px, and the paytable/menu modal fits inside the viewport with a visible top close button. Full gameplay smoke was not repeated in this targeted run. |

## Known Console Warning During Run

- One music loop decode warning appeared during desktop spin: `Failed to load loop #11: Decoding audio data failed.` This is separate from the already known missing/fragile music-loop manifest issue planned for phase 07.

## Recommended Follow-up

- Re-run the full desktop, mobile portrait, and mobile landscape smoke flow after larger gameplay or layout changes.
- Continue checking that mobile overlays remain internally scrollable when paytable/menu content changes.
- Validate on real iOS/Android hardware before production use; current checks are browser viewport automation.
