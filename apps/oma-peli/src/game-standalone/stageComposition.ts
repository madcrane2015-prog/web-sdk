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
