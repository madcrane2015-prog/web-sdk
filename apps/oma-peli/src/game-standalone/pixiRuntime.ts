import { Application, Graphics, type Texture } from 'pixi.js';

export interface CreatePixiApplicationOptions {
	width: number;
	height: number;
	resolution: number;
}

export async function createPixiApplication(options: CreatePixiApplicationOptions) {
	const app = new Application();
	await app.init({
		width: options.width,
		height: options.height,
		backgroundColor: 0x000000,
		backgroundAlpha: 1,
		antialias: true,
		resolution: options.resolution,
		autoDensity: true,
	});
	return app;
}

export function createReelMask(
	symbolWidth: number,
	symbolHeight: number,
	insets: { left?: number; right?: number } = {},
) {
	const left = insets.left ?? 0;
	const right = insets.right ?? 0;
	return new Graphics().rect(left, 0, symbolWidth - left - right, symbolHeight).fill(0xffffff);
}

export function configureLogoTexture(texture: Texture) {
	if (!texture.source) return;

	texture.source.scaleMode = 'linear';
	// @ts-expect-error PixiJS 8 exposes this at runtime but not in this source type.
	texture.source.antialias = true;
	texture.source.autoGenerateMipmaps = true;
	texture.source.update();
}

export function destroyPixiApplication(app: Application | undefined) {
	if (!app) return;
	app.destroy(true, { children: true, texture: false });
}
