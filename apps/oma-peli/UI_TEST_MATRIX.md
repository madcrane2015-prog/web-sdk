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

| Viewport                 | Result             | Notes                                                                                                                                                                                                                                                                                                         |
| ------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Desktop 1440x1000        | Pass with warnings | Password gate cleared, canvas mounted with WebGL context, paytable opened/closed, music and sound toggles clicked, spin clicked, autoplay menu opened/cancelled, spin speed clicked. No measured button overlaps or offscreen desktop buttons.                                                                |
| Mobile portrait 390x844  | Fail               | Bottom menu, spin, and bet controls are visible. Top paytable/debug/music/sound controls are offscreen to the right. Spin button measured about 30x30 px, below comfortable touch target size. Paytable/menu opens through bottom menu, but the close button measured below the viewport around y=1038.       |
| Mobile landscape 844x390 | Fail               | Bottom controls are visible and do not overlap. Top paytable/debug/music/sound controls are offscreen to the right. Spin button measured about 43x43 px, near but under the common 44px touch target. Paytable/menu opens through bottom menu, but the close button measured below the viewport around y=509. |

## Known Console Warning During Run

- One music loop decode warning appeared during desktop spin: `Failed to load loop #11: Decoding audio data failed.` This is separate from the already known missing/fragile music-loop manifest issue planned for phase 07.

## Recommended Follow-up

- Anchor top toggles to the viewport or scaled wrapper consistently on mobile.
- Make the mobile paytable/menu overlay internally scrollable with the close action always reachable.
- Increase mobile spin button size to at least 44x44 px, preferably larger for a primary action.
- Re-run this matrix after phase 07 and any additional mobile layout fixes.
