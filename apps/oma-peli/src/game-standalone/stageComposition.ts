import type { ViewportModel } from '../utils/layoutUtils';

export interface StageRect {
	x: number;
	y: number;
	width: number;
	height: number;
}

export interface StageComposition {
	logicalCanvas: StageRect;
	reelFrame: StageRect;
	reelViewport: StageRect;
}

export interface PixiStageTransform {
	scale: number;
	x: number;
	y: number;
}

export const STAGE_COMPOSITION: StageComposition = {
	logicalCanvas: {
		x: 0,
		y: 0,
		width: 1445,
		height: 1000,
	},
	reelFrame: {
		x: 250,
		y: 0,
		width: 1100,
		height: 1000,
	},
	reelViewport: {
		x: 250,
		y: 210,
		width: 1100,
		height: 520,
	},
};

export function createStageCompositionCssVars(composition: StageComposition): string {
	return [
		`--oma-logical-canvas-width: ${composition.logicalCanvas.width}px`,
		`--oma-logical-canvas-height: ${composition.logicalCanvas.height}px`,
		`--oma-reel-frame-x: ${composition.reelFrame.x}px`,
		`--oma-reel-frame-y: ${composition.reelFrame.y}px`,
		`--oma-reel-frame-width: ${composition.reelFrame.width}px`,
		`--oma-reel-frame-height: ${composition.reelFrame.height}px`,
		`--oma-reel-viewport-x: ${composition.reelViewport.x}px`,
		`--oma-reel-viewport-y: ${composition.reelViewport.y}px`,
		`--oma-reel-viewport-width: ${composition.reelViewport.width}px`,
		`--oma-reel-viewport-height: ${composition.reelViewport.height}px`,
	].join('; ');
}

export function createPixiStageTransform(
	viewportModel: Pick<ViewportModel, 'usableWidth' | 'usableHeight' | 'viewportClass'>,
	baseScale: number,
	composition: StageComposition = STAGE_COMPOSITION,
): PixiStageTransform {
	if (viewportModel.viewportClass === 'phoneLandscapeCompact') {
		const targetWidth = Math.max(0, viewportModel.usableWidth * 0.76);
		const targetHeight = Math.max(0, viewportModel.usableHeight * 0.68);
		const scale = Math.min(
			targetWidth / composition.reelViewport.width,
			targetHeight / composition.reelViewport.height,
			0.5,
		);
		const reelViewportWidth = composition.reelViewport.width * scale;
		const reelViewportTop = composition.reelViewport.y * scale;
		const targetReelTop = 38;

		return {
			scale,
			x: (viewportModel.usableWidth - reelViewportWidth) / 2 - composition.reelViewport.x * scale,
			y: targetReelTop - reelViewportTop,
		};
	}

	if (viewportModel.viewportClass !== 'phonePortrait' && viewportModel.viewportClass !== 'phonePortraitCompact') {
		return { scale: baseScale, x: 0, y: 0 };
	}

	const targetWidth = Math.max(0, viewportModel.usableWidth * 1.06);
	const targetHeightRatio = viewportModel.viewportClass === 'phonePortraitCompact' ? 0.36 : 0.38;
	const targetHeight = Math.max(0, viewportModel.usableHeight * targetHeightRatio);
	const scale = Math.min(
		targetWidth / composition.reelViewport.width,
		targetHeight / composition.reelViewport.height,
		0.47,
	);
	const reelViewportWidth = composition.reelViewport.width * scale;
	const reelViewportTop = composition.reelViewport.y * scale;
	const targetReelTop = viewportModel.viewportClass === 'phonePortraitCompact' ? 218 : 238;

	return {
		scale,
		x: (viewportModel.usableWidth - reelViewportWidth) / 2 - composition.reelViewport.x * scale + 8,
		y: targetReelTop - reelViewportTop,
	};
}
