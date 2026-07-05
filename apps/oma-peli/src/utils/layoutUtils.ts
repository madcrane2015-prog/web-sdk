/**
 * Layout Management Utilities
 *
 * Utility-funktiot ja state-hallinta layout-konfiguraatioiden käyttöön.
 * Tämä tiedosto tarjoaa työkalut laitteen tunnistamiseen ja layout-asetusten hallintaan.
 */

import {
	detectDeviceLayout,
	type LayoutConfig,
	ALL_LAYOUTS,
	type DeviceType,
} from '../config/layoutConfig';

export type ViewportClass =
	| 'phonePortraitCompact'
	| 'phonePortrait'
	| 'phoneLandscapeCompact'
	| 'tabletPortrait'
	| 'tabletLandscape'
	| 'desktopShort'
	| 'desktopStandard'
	| 'desktopWide';

export interface ViewportModel {
	width: number;
	height: number;
	usableWidth: number;
	usableHeight: number;
	isMobile: boolean;
	isTouchLayout: boolean;
	isPortrait: boolean;
	isCompactHeight: boolean;
	isWide: boolean;
	isCompactViewport: boolean;
	usesViewportAnchoredTopActions: boolean;
	viewportClass: ViewportClass;
	safeAreaInsets: {
		top: number;
		right: number;
		bottom: number;
		left: number;
	};
	deviceType: DeviceType;
	gameScale: number;
}

export interface CanvasSize {
	width: number;
	height: number;
}

export interface ControlPanelPosition {
	x: number;
	y: number;
	width: number;
	height: number;
}

export function createViewportModel(canvasSize: CanvasSize): ViewportModel {
	const width = typeof window === 'undefined' ? canvasSize.width : window.innerWidth;
	const height = typeof window === 'undefined' ? canvasSize.height : window.innerHeight;
	const safeAreaInsets = readSafeAreaInsets();
	const usableWidth = Math.max(0, width - safeAreaInsets.left - safeAreaInsets.right);
	const usableHeight = Math.max(0, height - safeAreaInsets.top - safeAreaInsets.bottom);
	const isPortrait = height > width;
	const viewportClass = getViewportClass({ width, height, usableWidth, usableHeight, isPortrait });
	const isTouchLayout = isTouchViewportClass(viewportClass);
	const isCompactHeight = usableHeight <= 500 || viewportClass === 'desktopShort';
	const isWide = viewportClass === 'desktopWide';
	const isCompactViewport = isCompactViewportClass(viewportClass);
	const isMobile = isPhoneViewportClass(viewportClass);
	const usesViewportAnchoredTopActions =
		isCompactViewport || viewportClass === 'tabletLandscape' || usableWidth < 1400;

	return {
		width,
		height,
		usableWidth,
		usableHeight,
		isMobile,
		isTouchLayout,
		isPortrait,
		isCompactHeight,
		isWide,
		isCompactViewport,
		usesViewportAnchoredTopActions,
		viewportClass,
		safeAreaInsets,
		deviceType: getDeviceType(),
		gameScale: calculateGameScale({ width, height, isMobile, isPortrait }, canvasSize),
	};
}

export function getViewportClass(viewport: {
	width: number;
	height: number;
	usableWidth?: number;
	usableHeight?: number;
	isPortrait?: boolean;
}): ViewportClass {
	const usableWidth = viewport.usableWidth ?? viewport.width;
	const usableHeight = viewport.usableHeight ?? viewport.height;
	const isPortrait = viewport.isPortrait ?? viewport.height > viewport.width;
	const aspectRatio = usableHeight > 0 ? usableWidth / usableHeight : 1;

	if (usableWidth <= 390 && isPortrait) {
		return usableHeight < 780 ? 'phonePortraitCompact' : 'phonePortrait';
	}

	if (usableWidth <= 480 && isPortrait) {
		return 'phonePortrait';
	}

	if (usableHeight <= 430 && usableWidth > usableHeight) {
		return 'phoneLandscapeCompact';
	}

	if (usableWidth >= 900 && usableHeight <= 700) {
		return 'desktopShort';
	}

	if (usableWidth <= 900 && isPortrait) {
		return 'tabletPortrait';
	}

	if (usableWidth <= 1200 && usableHeight <= 900) {
		return 'tabletLandscape';
	}

	if (aspectRatio >= 2) {
		return 'desktopWide';
	}

	return 'desktopStandard';
}

function isPhoneViewportClass(viewportClass: ViewportClass): boolean {
	return (
		viewportClass === 'phonePortraitCompact' ||
		viewportClass === 'phonePortrait' ||
		viewportClass === 'phoneLandscapeCompact'
	);
}

function isTouchViewportClass(viewportClass: ViewportClass): boolean {
	return isPhoneViewportClass(viewportClass) || viewportClass === 'tabletPortrait';
}

function isCompactViewportClass(viewportClass: ViewportClass): boolean {
	return (
		isPhoneViewportClass(viewportClass) ||
		viewportClass === 'tabletLandscape' ||
		viewportClass === 'desktopShort'
	);
}

export function calculateGameScale(
	viewport: Pick<ViewportModel, 'width' | 'height' | 'isMobile' | 'isPortrait'>,
	canvasSize: CanvasSize,
): number {
	const scaleX = viewport.width / canvasSize.width;
	const scaleY = viewport.height / canvasSize.height;

	if (viewport.isMobile && viewport.isPortrait) {
		return Math.min(scaleX * 1.0, scaleY * 0.95, 1.2);
	}

	if (viewport.isMobile) {
		return Math.min(scaleX * 0.98, scaleY * 0.95, 1.1);
	}

	if (viewport.isPortrait) {
		return Math.min(scaleX * 0.95, scaleY * 0.85, 1);
	}

	return Math.min(scaleX, scaleY, 1);
}

function readSafeAreaInsets() {
	if (typeof window === 'undefined') {
		return { top: 0, right: 0, bottom: 0, left: 0 };
	}

	const styles = getComputedStyle(document.documentElement);
	return {
		top: parseCssPixelValue(styles.getPropertyValue('--safe-area-inset-top')),
		right: parseCssPixelValue(styles.getPropertyValue('--safe-area-inset-right')),
		bottom: parseCssPixelValue(styles.getPropertyValue('--safe-area-inset-bottom')),
		left: parseCssPixelValue(styles.getPropertyValue('--safe-area-inset-left')),
	};
}

function parseCssPixelValue(value: string): number {
	const parsed = Number.parseFloat(value);
	return Number.isFinite(parsed) ? parsed : 0;
}

/**
 * Hae nykyinen layout-konfiguraatio
 * Tämä funktio kutsutaan komponentin puolelta $state/$derived -runejen kanssa
 */
export function getCurrentLayout(): LayoutConfig {
	return detectDeviceLayout();
}

/**
 * Hae nykyinen laitetyyppi
 */
export function getCurrentDeviceType(): DeviceType {
	return getDeviceType();
}

/**
 * Tunnista nykyinen laitteen tyyppi
 */
function getDeviceType(): DeviceType {
	if (typeof window === 'undefined') {
		return 'desktop';
	}

	const width = window.innerWidth;
	const height = window.innerHeight;
	const isPortrait = height > width;
	const isMobile = width <= 768;
	const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

	if (!isMobile) {
		return 'desktop';
	}

	if (isIOS) {
		return isPortrait ? 'iphone-portrait' : 'iphone-landscape';
	} else {
		return isPortrait ? 'android-portrait' : 'android-landscape';
	}
}

/**
 * Laske control panelin absoluuttinen sijainti gameScale-kertoimen kanssa
 */
export function calculateControlPanelPosition(
	layout: LayoutConfig,
	gameScale: number = 1,
): ControlPanelPosition {
	return {
		x: (layout.controlPanel.x + layout.controlPanel.offsetX) * gameScale,
		y: (layout.controlPanel.y + layout.controlPanel.offsetY) * gameScale,
		width: layout.controlPanel.width * gameScale * layout.controlPanel.scaleX,
		height: layout.controlPanel.height * gameScale * layout.controlPanel.scaleY,
	};
}

export function applyControlPanelSafeArea(
	position: ControlPanelPosition,
	viewport: ViewportModel,
	canvasHeight: number,
	gameScale: number = 1,
): ControlPanelPosition {
	const safeBottom = viewport.safeAreaInsets.bottom;
	if (safeBottom <= 0) {
		return position;
	}

	const maxY = canvasHeight * gameScale - position.height - safeBottom - 8 * gameScale;
	return {
		...position,
		y: Math.min(position.y, maxY),
	};
}

export function getSafeTopPosition(baseTop: number, viewport: ViewportModel): number {
	return Math.max(baseTop, viewport.safeAreaInsets.top + baseTop);
}

export function getSafeRightPosition(baseRight: number, viewport: ViewportModel): number {
	return Math.max(baseRight, viewport.safeAreaInsets.right + baseRight);
}

/**
 * Laske Play-napin koko control paneliin nähden
 */
export function calculatePlayButtonSize(layout: LayoutConfig, baseSize: number) {
	return baseSize * layout.playButton.scale;
}

/**
 * Laske pelialueen koko ja skaalaus
 */
export function calculateGameAreaDimensions(layout: LayoutConfig, gameScale: number) {
	return {
		width: layout.gameArea.width * gameScale * layout.gameArea.scale,
		height: layout.gameArea.height * gameScale * layout.gameArea.scale,
		offsetX: layout.gameArea.offsetX * gameScale,
		offsetY: layout.gameArea.offsetY * gameScale,
	};
}

/**
 * Debug-funktio: Tulosta nykyinen layout-konfiguraatio konsoliin
 */
export function debugLayout(layout: LayoutConfig, deviceType: DeviceType) {
	console.log('=== LAYOUT DEBUG ===');
	console.log('Device Type:', deviceType);
	console.log('Game Area:', layout.gameArea);
	console.log('Control Panel:', layout.controlPanel);
	console.log('Play Button:', layout.playButton);
	console.log('Background:', layout.background);
	console.log('===================');
}

/**
 * Hae layout tietyn laitteen tyypille (testaamista varten)
 */
export function getLayoutForDevice(deviceType: DeviceType): LayoutConfig {
	return ALL_LAYOUTS[deviceType];
}
