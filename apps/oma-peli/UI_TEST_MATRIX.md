# Oma Peli UI Test Matrix

Last run: 2026-07-05

This matrix validates the deployed standalone route: `src/routes/+page.svelte -> PasswordProtection.svelte -> HelloPixi.svelte`. Storybook is not a substitute for these checks.

The 2026-07-05 Phase 00 UI refactor baseline expanded the matrix from the original desktop/mobile trio to include small phones, tablets, compact desktop windows, and ultrawide monitors. It records hard fit failures separately from density/composition notes.

## Command

```bash
pnpm run dev --filter=oma-peli
```

Local URL used: `http://localhost:3010/`

Password used for the local gate: `slot2024`

## Results

| Viewport  | Result                  | Measured Controls And Modal                                                                                                                                           | Density / Follow-up Notes                                                                                                   |
| --------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| 390x844   | Pass                    | Top actions 226x40 visible, spin 72x72 visible, bottom panel 252x16 visible, menu modal 366x797 and close 64x40 visible.                                              | Current targeted mobile fix holds. Canvas visible area fills full width and about 66% of height.                            |
| 360x740   | Pass                    | Top actions 226x40 visible, spin 72x72 visible, bottom panel 233x15 visible, menu modal 336x716 and close 64x40 visible.                                              | Small phone remains usable. Bottom panel is visually very shallow and should be recomposed in later mobile fullness phases. |
| 430x932   | Pass                    | Top actions 226x40 visible, spin 72x72 visible, bottom panel 278x18 visible, menu modal 406x797 and close 64x40 visible.                                              | Large phone has no hard fit failure. Later pass should make the screen feel fuller rather than merely fitted.               |
| 844x390   | Pass                    | Top actions 226x40 visible, spin 56x56 visible, bottom panel 429x34 visible, menu modal 820x370 and close 64x40 visible.                                              | Compact landscape baseline holds. Modal scroll region measured 369/1018.                                                    |
| 740x360   | Pass with density notes | Top actions 226x40 visible, spin 56x56 visible, bottom panel 301x18 visible, menu modal 716x340 and close 64x40 visible.                                              | Short landscape technically fits, but the bottom panel is visually tiny. Needs compact landscape composition work.          |
| 768x1024  | Pass                    | Top actions 226x40 visible, spin 72x72 visible, bottom panel 497x32 visible, menu modal 744x1000 and close 64x40 visible.                                             | Tablet portrait fits. Modal is nearly full height, so later modal extraction should keep sticky header/close behavior.      |
| 1024x768  | Pass after Phase 01     | Spin 78x78 visible, bottom panel 780x62 visible, menu modal 471x613 and close 64x40 visible. Top actions now use the viewport-anchored compact row at x=790, 226x40.  | Phase 01 fixed the previous offscreen top-action hard failure by routing this shape through viewport-class behavior.        |
| 1366x768  | Pass after Phase 01     | Spin 84x84 visible, bottom panel 845x68 visible, menu modal 510x664 and close 64x40 visible. Top actions now use the viewport-anchored compact row at x=1132, 226x40. | Phase 01 fixed the previous common-laptop top-action hard failure.                                                          |
| 1440x1000 | Pass                    | Top actions 110x50 visible, spin 110x110 visible, bottom panel 1096x88 visible, menu modal 662x862 and close 64x40 visible.                                           | Existing desktop baseline still fits.                                                                                       |
| 1920x1080 | Pass with density notes | Top actions 110x50 visible, spin 110x110 visible, bottom panel 1100x88 visible, menu modal 665x865 and close 64x40 visible.                                           | Hard fit passes, but canvas uses about 75% of viewport width; wide screens need intentional side treatment.                 |
| 2560x1080 | Pass with density notes | Top actions 110x50 visible, spin 110x110 visible, bottom panel 1100x88 visible, menu modal 665x865 and close 64x40 visible.                                           | Hard fit passes, but canvas uses about 56% of viewport width; ultrawide currently feels empty at the sides.                 |
| 900x500   | Pass with density notes | Top actions 226x40 visible, spin 56x56 visible, bottom panel 550x44 visible, menu modal 876x480 and close 64x40 visible.                                              | Compact window fits, but it behaves like compact mobile in some control sizing. Needs explicit viewport class.              |

## Phase 00 Baseline Summary

- Hard failures after Phase 01: none in the targeted recheck. The previous top-action failures at `1024x768` and `1366x768` are fixed.
- Density issues: `740x360` bottom panel is visually tiny, `900x500` needs explicit compact-window rules, and `1920x1080` / `2560x1080` need intentional wide-screen composition.
- Preserved fixes: phone portrait and phone landscape top actions, spin sizing, and menu close visibility remain fixed.
- Modal status: paytable/menu and close action fit all measured browser viewports; short screens rely on internal modal scrolling.
- Phase 02 input: centralize viewport geometry values as tokens so compact rows, spin sizes, modal dimensions, and bottom-panel sizing are not scattered through `HelloPixi` and CSS media queries.

## Known Console Warning During Run

- One music loop decode warning appeared during desktop spin: `Failed to load loop #11: Decoding audio data failed.` This is separate from the already known missing/fragile music-loop manifest issue planned for phase 07.

## Recommended Follow-up

- Execute Phase 02 from `OMA_PELI_UI_REFACTOR_PHASES.md`: establish layout tokens and geometry rules.
- Preserve the Phase 01 fix for viewport-anchored top actions at `1024x768` and `1366x768`.
- Preserve the current fixed mobile wins while improving density and fullness in later phases.
- Validate on real iOS/Android hardware before production use; current checks are browser viewport automation.
