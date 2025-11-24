import WebFont from 'webfontloader';

import type { PixiPoint, Sizes } from './types';

export const REM = 16;
export const MIN_CLICKABLE_SIZE = 3 * REM; // 44 x 44 is minimum clickable size

// Cross-platform font loading with fallbacks
export const loadWebFonts = (families: string[], options: Partial<WebFont.Config> = {}) => {
	const defaultConfig: WebFont.Config = {
		google: {
			families: families
		},
		timeout: 3000, // 3 second timeout
		loading: () => console.log('Fonts loading started'),
		active: () => console.log('All fonts loaded successfully'),
		inactive: () => console.warn('Font loading failed or timed out, using fallbacks'),
		fontloading: (familyName: string) => console.debug(`Loading font: ${familyName}`),
		fontactive: (familyName: string) => console.debug(`Font loaded: ${familyName}`),
		fontinactive: (familyName: string) => console.warn(`Font failed to load: ${familyName}`)
	};

	WebFont.load({ ...defaultConfig, ...options });
};

export const getPointValues = ({
	point,
	defaultValue,
}: {
	point: PixiPoint;
	defaultValue: number;
}) => {
	const finalDefaultValue = defaultValue === undefined ? 0 : defaultValue;
	if (typeof point === 'number') return [point, point];
	return [point?.x || finalDefaultValue, point?.y || finalDefaultValue];
};

export const anchorToPivot = ({ anchor, sizes }: { anchor: PixiPoint; sizes: Sizes }) => {
	const { width, height } = sizes;
	const [anchorX, anchorY] = getPointValues({ point: anchor, defaultValue: 0 });
	return { x: width * anchorX, y: height * anchorY };
};

/**
 * Detects if WebGL is enabled with enhanced cross-platform support.
 * Supports iOS, Android, macOS, Windows, and Linux
 * Inspired from http://www.browserleaks.com/webgl#howto-detect-webgl
 *
 * @return { number } -1 for not Supported,
 *										0 for disabled
 *										1 for enabled
 */
export function detectWebGL() {
	// Check for the WebGL rendering context
	if (typeof window !== 'undefined' && window.WebGLRenderingContext) {
		let canvas = document.createElement('canvas');
		let names = ['webgl2', 'webgl', 'experimental-webgl', 'moz-webgl', 'webkit-3d'];
		let context = false;

		for (const name of names) {
			try {
				// @ts-ignore - WebGL context types vary across browsers
				context = canvas.getContext(name, {
					failIfMajorPerformanceCaveat: false, // Allow software rendering as fallback
					alpha: false, // Better performance for games
					antialias: true,
					preserveDrawingBuffer: false,
					powerPreference: 'high-performance' // Prefer dedicated GPU on dual-GPU systems
				});
				
				// @ts-ignore
				if (context && typeof context.getParameter === 'function') {
					// Additional validation to ensure WebGL is truly working
					try {
						// @ts-ignore
						const vendor = context.getParameter(context.VENDOR);
						const renderer = context.getParameter(context.RENDERER);
						
						// Check for software rendering that might indicate issues
						if (renderer && renderer.toLowerCase().includes('software')) {
							console.warn('WebGL is using software rendering, performance may be limited');
						}
						
						// WebGL is enabled and working
						return 1;
					} catch (e) {
						// getParameter failed, context might be lost
						console.warn('WebGL context validation failed:', e);
						return 0;
					}
				}
			} catch (e) {
				// Context creation failed
				console.debug('WebGL context creation failed for:', name, e);
			}
		}

		// WebGL is supported, but disabled or failed to initialize
		return 0;
	}

	// WebGL not supported at all
	return -1;
}

export const preloadFont = () =>
	new Promise<void>((resolve) => {
		try {
			WebFont.load({
				typekit: {
					id: 'aba0ebl',
				},
				active: () => {
					resolve();
				},
				inactive: () => {
					console.error('Web font load inactive');
					resolve();
				},
			});
		} catch (error) {
			console.error(error);
			resolve();
		}
	});

export function propsSyncEffect<TProps extends object, TTarget>({
	props,
	target,
	ignore,
}: {
	props: TProps;
	target?: TTarget | (() => TTarget);
	ignore?: (keyof TProps)[];
}) {
	$effect(() => {
		// The whole thing is wrapped inside an $effect
		// and because of ”props[key]“，it will react with every single props updated.
		let targetInstance = target instanceof Function ? target() : target;
		if (targetInstance) {
			(Object.keys(props) as (keyof TProps)[])
				.filter((key) => (ignore ? !ignore.includes(key) : true))
				.forEach((key) => {
					if (props[key] !== undefined) {
						// @ts-ignore
						targetInstance[key] = props[key];
					}
				});
		}
	});
}
