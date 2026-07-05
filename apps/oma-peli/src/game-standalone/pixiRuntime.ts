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
		backgroundAlpha: 0,
		antialias: true,
		resolution: options.resolution,
		autoDensity: true,
	});
	return app;
}

export function createReelMask(symbolWidth: number, symbolHeight: number) {
	return new Graphics().rect(0, 0, symbolWidth, symbolHeight).fill(0xffffff);
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
