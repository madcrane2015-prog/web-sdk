import type { ViewportClass } from '../utils/layoutUtils';

export interface StandaloneUILayoutTokens {
	stageMaxWidth: number;
	stageMaxHeight: number;
	stagePortraitTop: number;
	boardScaleTarget: number;
	boardVerticalAnchor: 'top' | 'center' | 'compressed';
	bottomControlHeight: number;
	bottomSafeAreaGap: number;
	mobileStatusBottom: number;
	mobileStatusHorizontalMargin: number;
	topActionInset: number;
	topActionGap: number;
	topActionTextMinWidth: number;
	topActionTextMinHeight: number;
	topActionIconSize: number;
	spinButtonSize: number;
	modalViewportMargin: number;
	modalMaxWidth: number;
	modalMaxHeightVh: number;
	modalPadding: number;
	modalHeaderHeight: number;
	modalFontScale: number;
	minimumBackgroundMargin: number;
	statusDisplayMode: 'inline' | 'stacked' | 'menu';
}

const DEFAULT_TOKENS: StandaloneUILayoutTokens = {
	stageMaxWidth: 1445,
	stageMaxHeight: 1000,
	stagePortraitTop: 0,
	boardScaleTarget: 1,
	boardVerticalAnchor: 'center',
	bottomControlHeight: 88,
	bottomSafeAreaGap: 20,
	mobileStatusBottom: 104,
	mobileStatusHorizontalMargin: 12,
	topActionInset: 10,
	topActionGap: 10,
	topActionTextMinWidth: 180,
	topActionTextMinHeight: 42,
	topActionIconSize: 50,
	spinButtonSize: 110,
	modalViewportMargin: 48,
	modalMaxWidth: 665,
	modalMaxHeightVh: 80,
	modalPadding: 30,
	modalHeaderHeight: 56,
	modalFontScale: 1,
	minimumBackgroundMargin: 24,
	statusDisplayMode: 'inline',
};

export const UI_LAYOUT_TOKENS: Record<ViewportClass, StandaloneUILayoutTokens> = {
	phonePortraitCompact: {
		...DEFAULT_TOKENS,
		stagePortraitTop: -46,
		boardVerticalAnchor: 'compressed',
		bottomControlHeight: 56,
		bottomSafeAreaGap: 10,
		mobileStatusBottom: 92,
		mobileStatusHorizontalMargin: 10,
		topActionInset: 8,
		topActionGap: 6,
		topActionTextMinWidth: 64,
		topActionTextMinHeight: 40,
		topActionIconSize: 40,
		spinButtonSize: 72,
		modalViewportMargin: 12,
		modalMaxWidth: 420,
		modalMaxHeightVh: 96,
		modalPadding: 14,
		modalHeaderHeight: 52,
		modalFontScale: 0.9,
		minimumBackgroundMargin: 8,
		statusDisplayMode: 'menu',
	},
	phonePortrait: {
		...DEFAULT_TOKENS,
		stagePortraitTop: -58,
		boardVerticalAnchor: 'compressed',
		bottomControlHeight: 64,
		bottomSafeAreaGap: 12,
		mobileStatusBottom: 104,
		mobileStatusHorizontalMargin: 12,
		topActionInset: 8,
		topActionGap: 6,
		topActionTextMinWidth: 64,
		topActionTextMinHeight: 40,
		topActionIconSize: 40,
		spinButtonSize: 72,
		modalViewportMargin: 12,
		modalMaxWidth: 480,
		modalMaxHeightVh: 94,
		modalPadding: 14,
		modalHeaderHeight: 52,
		modalFontScale: 0.9,
		minimumBackgroundMargin: 8,
		statusDisplayMode: 'menu',
	},
	phoneLandscapeCompact: {
		...DEFAULT_TOKENS,
		boardVerticalAnchor: 'compressed',
		bottomControlHeight: 44,
		bottomSafeAreaGap: 8,
		topActionInset: 8,
		topActionGap: 6,
		topActionTextMinWidth: 64,
		topActionTextMinHeight: 40,
		topActionIconSize: 40,
		spinButtonSize: 56,
		modalViewportMargin: 10,
		modalMaxWidth: 920,
		modalMaxHeightVh: 96,
		modalPadding: 12,
		modalHeaderHeight: 48,
		modalFontScale: 0.82,
		minimumBackgroundMargin: 8,
		statusDisplayMode: 'menu',
	},
	tabletPortrait: {
		...DEFAULT_TOKENS,
		bottomControlHeight: 72,
		topActionInset: 8,
		topActionGap: 6,
		topActionTextMinWidth: 64,
		topActionTextMinHeight: 40,
		topActionIconSize: 40,
		spinButtonSize: 72,
		modalViewportMargin: 12,
		modalMaxWidth: 760,
		modalMaxHeightVh: 96,
		modalPadding: 16,
		modalFontScale: 0.92,
		statusDisplayMode: 'stacked',
	},
	tabletLandscape: {
		...DEFAULT_TOKENS,
		bottomControlHeight: 64,
		topActionInset: 8,
		topActionGap: 6,
		topActionTextMinWidth: 64,
		topActionTextMinHeight: 40,
		topActionIconSize: 40,
		spinButtonSize: 72,
		modalViewportMargin: 24,
		modalMaxWidth: 620,
		modalMaxHeightVh: 84,
		modalPadding: 18,
		modalFontScale: 0.92,
		statusDisplayMode: 'stacked',
	},
	desktopShort: {
		...DEFAULT_TOKENS,
		boardVerticalAnchor: 'compressed',
		bottomControlHeight: 56,
		bottomSafeAreaGap: 10,
		topActionInset: 8,
		topActionGap: 6,
		topActionTextMinWidth: 64,
		topActionTextMinHeight: 40,
		topActionIconSize: 40,
		spinButtonSize: 56,
		modalViewportMargin: 10,
		modalMaxWidth: 960,
		modalMaxHeightVh: 96,
		modalPadding: 12,
		modalHeaderHeight: 48,
		modalFontScale: 0.84,
		minimumBackgroundMargin: 8,
		statusDisplayMode: 'menu',
	},
	desktopStandard: DEFAULT_TOKENS,
	desktopWide: {
		...DEFAULT_TOKENS,
		stageMaxWidth: 1600,
		minimumBackgroundMargin: 80,
	},
};

export function getUILayoutTokens(viewportClass: ViewportClass): StandaloneUILayoutTokens {
	return UI_LAYOUT_TOKENS[viewportClass];
}

export function createUILayoutCssVars(tokens: StandaloneUILayoutTokens): string {
	return [
		`--oma-stage-max-width: ${tokens.stageMaxWidth}px`,
		`--oma-stage-max-height: ${tokens.stageMaxHeight}px`,
		`--oma-stage-portrait-top: ${tokens.stagePortraitTop}px`,
		`--oma-board-scale-target: ${tokens.boardScaleTarget}`,
		`--oma-bottom-control-height: ${tokens.bottomControlHeight}px`,
		`--oma-bottom-safe-area-gap: ${tokens.bottomSafeAreaGap}px`,
		`--oma-mobile-status-bottom: ${tokens.mobileStatusBottom}px`,
		`--oma-mobile-status-horizontal-margin: ${tokens.mobileStatusHorizontalMargin}px`,
		`--oma-top-action-inset: ${tokens.topActionInset}px`,
		`--oma-top-action-gap: ${tokens.topActionGap}px`,
		`--oma-top-action-text-min-width: ${tokens.topActionTextMinWidth}px`,
		`--oma-top-action-text-min-height: ${tokens.topActionTextMinHeight}px`,
		`--oma-top-action-icon-size: ${tokens.topActionIconSize}px`,
		`--oma-spin-button-size: ${tokens.spinButtonSize}px`,
		`--oma-modal-viewport-margin: ${tokens.modalViewportMargin}px`,
		`--oma-modal-max-width: ${tokens.modalMaxWidth}px`,
		`--oma-modal-max-height-vh: ${tokens.modalMaxHeightVh}dvh`,
		`--oma-modal-padding: ${tokens.modalPadding}px`,
		`--oma-modal-header-height: ${tokens.modalHeaderHeight}px`,
		`--oma-modal-font-scale: ${tokens.modalFontScale}`,
		`--oma-minimum-background-margin: ${tokens.minimumBackgroundMargin}px`,
	].join('; ');
}
