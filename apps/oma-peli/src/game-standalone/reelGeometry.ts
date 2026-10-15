import { getReelPosition } from './math';

export const REEL_GEOMETRY = {
	frameX: 250, frameY: 200,
	columnOffsets: [25, 215, 410, 600, 790],
	symbolWidth: 180, symbolHeight: 169, rowHeight: 173,
	bleedX: 12, bleedY: 14, yNudge: -4,
	center: { xOffset: 420, top: 207, width: 160, height: 158, radius: 10 },
} as const;

export function getReelGeometry(index: number, offsetY: number, compactLandscape: boolean) {
	const { col, row } = getReelPosition(index);
	const g = REEL_GEOMETRY;
	const center = index === 6;
	const x = center ? g.frameX + g.center.xOffset : g.frameX + g.columnOffsets[col];
	const y = center ? g.frameY + g.center.top : 250 + row * g.rowHeight + offsetY;
	return {
		x, y, center,
		dimensions: {
			symbolWidth: center ? g.center.width : g.symbolWidth,
			symbolHeight: center ? g.center.height : g.symbolHeight,
			rowHeight: center ? g.center.height : g.rowHeight,
			symbolBleedLeft: center ? 0 : compactLandscape ? 42 : g.bleedX,
			symbolBleedRight: center ? 0 : compactLandscape ? 16 : g.bleedX,
			symbolBleedTop: center ? 0 : g.bleedY,
			symbolBleedBottom: center ? 0 : g.bleedY,
			symbolYOffset: center ? 0 : g.yNudge,
		},
		maskInsets: { left: center ? 0 : -5, right: center ? 0 : -5,
			top: center ? 0 : g.bleedY - g.yNudge, bottom: center ? 0 : g.bleedY + g.yNudge },
	};
}
