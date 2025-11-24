import { innerWidth, innerHeight } from 'svelte/reactivity/window';
import { applyCrossPlatformLayoutFixes } from './androidLayoutFix';

type Sizes = { width: number; height: number };

const CANVAS_RATIO_TYPE_BREAK_POINTS = {
	wideSquare: 1.3, // Min ratio of long width canvas, used for position FS UI elements
	narrowSquare: 0.8, // GALAXY FOLD EXPAND RATIO IS 1.400390625
};

const CANVAS_SIZE_TYPE_BREAK_POINTS = {
	smallMobile: 375, // Max size of small mobile layouts e.g. iPhone SE
	mobile: 480, // Max size of common mobile layouts e.g. iPhone XR
	tablet: 820, // Max size of tablets layouts, e.g. iPad Air
	largeTablet: 1024, // Max size of large tablets layouts, e.g. iPad Pro
};

// Debounce canvas size updates to prevent rapid changes during orientation
let canvasSizeDebounce: ReturnType<typeof setTimeout> | null = null;
let stableCanvasSizes = $state({ width: 1, height: 1 });

const updateCanvasSizes = () => {
	if (canvasSizeDebounce) clearTimeout(canvasSizeDebounce);
	canvasSizeDebounce = setTimeout(() => {
		stableCanvasSizes = {
			width: innerWidth.current ?? 1,
			height: innerHeight.current ?? 1
		};
	}, 100); // 100ms debounce for Android orientation changes
};

const getRatio = (value: Sizes) => value.width / (value.height || 1);

const STANDARD_MAIN_SIZES_MAP = {
	desktop: { width: 1920, height: 1080 },
	tablet: { width: 1920, height: 1920 },
	landscape: { width: 1920, height: 1080 },
	portrait: { width: 1080, height: 1920 },
};

type MainSizesMap = typeof STANDARD_MAIN_SIZES_MAP;

export const createLayout = (layoutOptions: {
	backgroundRatio: {
		normal: number;
		portrait: number;
	};
	mainSizesMap: MainSizesMap;
}) => {
	// Apply cross-platform fixes on initialization
	if (typeof window !== 'undefined') {
		applyCrossPlatformLayoutFixes();
	}

	// Initialize stable canvas sizes and set up reactive updates
	$effect(() => {
		updateCanvasSizes();
	});

	const canvasSizes = () => stableCanvasSizes; // Use debounced stable sizes instead of direct window dimensions
	const canvasRatio = () => getRatio(canvasSizes());
	const canvasRatioType = () => {
		if (canvasRatio() >= CANVAS_RATIO_TYPE_BREAK_POINTS.wideSquare) return 'longWidth' as const;
		if (canvasRatio() <= CANVAS_RATIO_TYPE_BREAK_POINTS.narrowSquare) return 'longHeight' as const;
		return 'almostSquare' as const;
	};
	const canvasSizeType = () => {
		// Use the actual shorter dimension to better detect mobile devices
		const deviceWidth = Math.min(canvasSizes().width, canvasSizes().height);
		if (deviceWidth <= CANVAS_SIZE_TYPE_BREAK_POINTS.smallMobile) return 'smallMobile' as const;
		if (deviceWidth <= CANVAS_SIZE_TYPE_BREAK_POINTS.mobile) return 'mobile' as const;
		if (deviceWidth <= CANVAS_SIZE_TYPE_BREAK_POINTS.tablet) return 'tablet' as const;
		if (deviceWidth <= CANVAS_SIZE_TYPE_BREAK_POINTS.largeTablet) return 'largeTablet' as const;
		return 'desktop' as const;
	};
	const layoutType = () => {
		// Cross-platform mobile detection
		const ratio = canvasRatio();
		const width = canvasSizes().width;
		const height = canvasSizes().height;
		
		// Enhanced mobile device detection for iOS, Android, and other mobile platforms
		const isMobile = canvasSizeType() === 'mobile' || canvasSizeType() === 'smallMobile';
		const isTabletSize = canvasSizeType() === 'tablet';
		
		// Detect iOS devices (including iPad Pro which reports as desktop)
		const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
			(navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
		
		// For mobile devices (iOS, Android, etc.), be explicit about orientation
		if (isMobile || (isIOSDevice && isTabletSize)) {
			return height > width ? 'portrait' : 'landscape';
		}
		
		// For larger devices and desktops, use existing logic
		if (canvasRatioType() === 'almostSquare') return 'tablet' as const;
		if (canvasRatioType() === 'longHeight') return 'portrait' as const;
		if (canvasSizeType() === 'mobile' || canvasSizeType() === 'smallMobile')
			return 'landscape' as const;
		return 'desktop' as const;
	};
	const isStacked = () => ['portrait', 'almostSquare'].includes(layoutType());

	const createMainLayout = (mainSizesMap: MainSizesMap) => () => {
		const x = canvasSizes().width * 0.5;
		const y = canvasSizes().height * 0.5;
		const mainSizes = mainSizesMap[layoutType()];
		const widthScale = canvasSizes().width / mainSizes.width;
		const heightScale = canvasSizes().height / mainSizes.height;
		
		// Improved scaling for mobile devices - prevent over-scaling that causes elements to overflow
		let scale = Math.min(widthScale, heightScale);
		
		// On mobile, ensure we don't scale too aggressively
		if (canvasSizeType() === 'mobile' || canvasSizeType() === 'smallMobile') {
			scale = Math.min(scale, 1.0); // Never scale larger than 1x on mobile
		}
		
		// Safety bounds to prevent UI elements from becoming too large or small
		scale = Math.max(0.3, Math.min(scale, 2.0));

		return {
			x,
			y,
			scale,
			width: mainSizes.width,
			height: mainSizes.height,
			anchor: 0.5,
		};
	};

	const mainLayout = createMainLayout(layoutOptions.mainSizesMap);

	const mainLayoutStandard = createMainLayout(STANDARD_MAIN_SIZES_MAP);

	const createBackgroundLayout = ({ scale, ratio }: { scale: number; ratio: number }) => {
		const canvasRatio = getRatio(canvasSizes());
		const canvas = canvasSizes();

		// Ensure background always covers the screen, especially on Android devices
		if (canvasRatio < ratio) {
			// Canvas is taller than background ratio - fit by width
			const scaledHeight = canvas.height * scale;
			const minHeight = canvas.height * 1.1; // Add 10% buffer for Android viewport changes
			
			return {
				x: canvas.width / 2,
				y: canvas.height / 2,
				height: Math.max(scaledHeight, minHeight),
			};
		}

		// Canvas is wider than background ratio - fit by height
		const scaledWidth = canvas.width * scale;
		const minWidth = canvas.width * 1.1; // Add 10% buffer for Android viewport changes

		return {
			x: canvas.width / 2,
			y: canvas.height / 2,
			width: Math.max(scaledWidth, minWidth),
		};
	};

	const normalBackgroundLayout = ({ scale }: { scale: number }) =>
		createBackgroundLayout({ scale, ratio: layoutOptions.backgroundRatio.normal });
	const portraitBackgroundLayout = ({ scale }: { scale: number }) =>
		createBackgroundLayout({ scale, ratio: layoutOptions.backgroundRatio.portrait });

	const stateLayout = $state({
		showLoadingScreen: true,
	});

	const stateLayoutDerived = {
		canvasSizes,
		canvasRatio,
		canvasRatioType,
		canvasSizeType,
		layoutType,
		isStacked,
		mainLayout,
		mainLayoutStandard,
		normalBackgroundLayout,
		portraitBackgroundLayout,
	};

	return {
		stateLayout,
		stateLayoutDerived,
	};
};
