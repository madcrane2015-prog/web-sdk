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

| Viewport  | Result                  | Measured Controls And Modal                                                                                                                                           | Density / Follow-up Notes                                                                                              |
| --------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| 390x844   | Pass after Phase 03     | Top actions 226x40 visible, spin 72x72 visible, menu 72x72 visible, status strip 366x37 visible, menu modal 366x793 and close 64x40 visible.                          | Phase 03 added a fixed Balance/Bet/Win status strip and raised visible canvas height to about 69%.                     |
| 360x740   | Pass after Phase 03     | Top actions 226x40 visible, spin 72x72 visible, menu 72x72 visible, status strip 340x37 visible, menu modal 336x710 and close 64x40 visible.                          | Small phone portrait keeps primary controls and status visible; canvas visible height about 70%.                       |
| 430x932   | Pass after Phase 03     | Top actions 226x40 visible, spin 72x72 visible, menu 72x72 visible, status strip 406x37 visible, menu modal 406x797 and close 64x40 visible.                          | Large phone portrait now has explicit status density; canvas visible height about 69%.                                 |
| 844x390   | Pass after Phase 04     | Top actions 226x40 visible, spin 56x56 visible, menu 56x56 visible, status strip 230x33 visible, menu modal 824x370 and close 64x40 visible.                          | Phase 04 added compact landscape status density; autoplay picker 360x279 fits.                                         |
| 740x360   | Pass after Phase 04     | Top actions 226x40 visible, spin 56x56 visible, menu 56x56 visible, status strip 220x33 visible, menu modal 720x340 and close 64x40 visible.                          | Short landscape now has visible status without overlapping the menu; autoplay picker 360x267 fits.                     |
| 768x1024  | Pass                    | Top actions 226x40 visible, spin 72x72 visible, bottom panel 497x32 visible, menu modal 744x1000 and close 64x40 visible.                                             | Tablet portrait fits. Modal is nearly full height, so later modal extraction should keep sticky header/close behavior. |
| 1024x768  | Pass after Phase 01     | Spin 78x78 visible, bottom panel 780x62 visible, menu modal 471x613 and close 64x40 visible. Top actions now use the viewport-anchored compact row at x=790, 226x40.  | Phase 01 fixed the previous offscreen top-action hard failure by routing this shape through viewport-class behavior.   |
| 1366x768  | Pass after Phase 01     | Spin 84x84 visible, bottom panel 845x68 visible, menu modal 510x664 and close 64x40 visible. Top actions now use the viewport-anchored compact row at x=1132, 226x40. | Phase 01 fixed the previous common-laptop top-action hard failure.                                                     |
| 1440x1000 | Pass                    | Top actions 110x50 visible, spin 110x110 visible, bottom panel 1096x88 visible, menu modal 662x862 and close 64x40 visible.                                           | Existing desktop baseline still fits.                                                                                  |
| 1920x1080 | Pass with density notes | Top actions 110x50 visible, spin 110x110 visible, bottom panel 1100x88 visible, menu modal 665x865 and close 64x40 visible.                                           | Hard fit passes, but canvas uses about 75% of viewport width; wide screens need intentional side treatment.            |
| 2560x1080 | Pass with density notes | Top actions 110x50 visible, spin 110x110 visible, bottom panel 1100x88 visible, menu modal 665x865 and close 64x40 visible.                                           | Hard fit passes, but canvas uses about 56% of viewport width; ultrawide currently feels empty at the sides.            |
| 900x500   | Pass after Phase 04     | Top actions 226x40 visible, spin 56x56 visible, menu 56x56 visible, status strip 230x33 visible, menu modal 880x480 and close 64x40 visible.                          | Now routes through `desktopShort`; autoplay picker 360x308 fits.                                                       |

## Phase 00 Baseline Summary

- Hard failures after Phase 01: none in the targeted recheck. The previous top-action failures at `1024x768` and `1366x768` are fixed.
- Density issues: `740x360` bottom panel is visually tiny, `900x500` needs explicit compact-window rules, and `1920x1080` / `2560x1080` need intentional wide-screen composition.
- Preserved fixes: phone portrait and phone landscape top actions, spin sizing, and menu close visibility remain fixed.
- Modal status: paytable/menu and close action fit all measured browser viewports; short screens rely on internal modal scrolling.
- Phase 02 status: completed. Viewport-class UI layout tokens now drive the first top-action, spin, and paytable/menu modal geometry values.
- Phase 03 status: completed. Phone portrait now has tokenized stage/status placement and a fixed Balance/Bet/Win status strip.
- Phase 04 status: completed. Compact landscape and `900x500` desktop-short screens now have a bounded status strip and fixed autoplay picker.

## Phase 02 Targeted Recheck

| Viewport  | Result | Notes                                                                                                     |
| --------- | ------ | --------------------------------------------------------------------------------------------------------- |
| 390x844   | Pass   | Tokenized top actions 226x40, spin 72x72, modal 366x793, and close 64x40 all fully visible.               |
| 844x390   | Pass   | Tokenized compact top actions 226x40, spin 56x56, modal 824x370, and close 64x40 all fully visible.       |
| 1024x768  | Pass   | Tokenized compact top actions remain visible; modal 620x645 and close are fully visible.                  |
| 1366x768  | Pass   | Desktop sizing remains visible; modal 665x614 and close are fully visible.                                |
| 2560x1080 | Pass   | Desktop-wide top actions, spin, modal 665x864, and close remain visible. Wide-side density issue remains. |

## Phase 03 Phone Portrait Recheck

| Viewport | Result | Notes                                                                                                       |
| -------- | ------ | ----------------------------------------------------------------------------------------------------------- |
| 390x844  | Pass   | Top actions 226x40, spin/menu 72x72, status strip 366x37, modal 366x793, and close 64x40 all fully visible. |
| 360x740  | Pass   | Top actions 226x40, spin/menu 72x72, status strip 340x37, modal 336x710, and close 64x40 all fully visible. |
| 430x932  | Pass   | Top actions 226x40, spin/menu 72x72, status strip 406x37, modal 406x797, and close 64x40 all fully visible. |

Interaction check: at `390x844`, DOM-invoked browser clicks verified spin start, second-click skip path, and menu open/close. Pointer automation was blocked by the existing audio start overlay, so real-device validation remains required.

## Phase 04 Compact Landscape / Short-Screen Recheck

| Viewport | Result | Notes                                                                                                                                         |
| -------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 844x390  | Pass   | Top actions 226x40, spin/menu 56x56, status strip 230x33, modal 824x370, close 64x40, and autoplay picker 360x279 all fully visible.          |
| 740x360  | Pass   | Top actions 226x40, spin/menu 56x56, status strip 220x33, modal 720x340, close 64x40, and autoplay picker 360x267 all fully visible.          |
| 900x500  | Pass   | Routed through `desktopShort`; top actions 226x40, spin/menu 56x56, status strip 230x33, modal 880x480, close 64x40, and autoplay picker fit. |

Interaction check: DOM-invoked browser clicks verified autoplay open/cancel at `844x390`, `740x360`, and `900x500`.

## Known Console Warning During Run

- One music loop decode warning appeared during desktop spin: `Failed to load loop #11: Decoding audio data failed.` This is separate from the already known missing/fragile music-loop manifest issue planned for phase 07.

## Recommended Follow-up

- Execute Phase 05 from `OMA_PELI_UI_REFACTOR_PHASES.md`: extract a real control shell.
- Preserve the tokenized modal/top/spin behavior introduced in Phase 02.
- Preserve the Phase 03 portrait status strip and Phase 04 short-screen status/autoplay behavior during extraction.
- Validate on real iOS/Android hardware before production use; current checks are browser viewport automation.
