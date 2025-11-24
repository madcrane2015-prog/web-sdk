/**
 * Cross-platform layout fixes for viewport and orientation handling
 * Supports Android, iOS, macOS, Windows, and Linux
 */

// Detect browser and platform
const getUserAgent = () => typeof navigator !== 'undefined' ? navigator.userAgent : '';
const isIOS = () => typeof navigator !== 'undefined' && (/iPad|iPhone|iPod/.test(getUserAgent()) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
const isAndroid = () => typeof navigator !== 'undefined' && /Android/.test(getUserAgent());
const isMacOS = () => typeof navigator !== 'undefined' && /Mac OS X/.test(getUserAgent()) && !isIOS();
const isSafari = () => typeof navigator !== 'undefined' && /Safari/.test(getUserAgent()) && !/Chrome/.test(getUserAgent());
const isWebKit = () => typeof navigator !== 'undefined' && /WebKit/.test(getUserAgent());
const isMobile = () => isIOS() || isAndroid();

export const applyCrossPlatformLayoutFixes = () => {
	// Only run in browser environment
	if (typeof window === 'undefined') return;
	// Fix for mobile viewport height issues (iOS Safari and Android Chrome)
	const setViewportHeight = () => {
		const vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
		
		// Additional fix for iOS Safari bottom safe area
		if (isIOS()) {
			const safeAreaBottom = parseInt(getComputedStyle(document.documentElement).getPropertyValue('env(safe-area-inset-bottom)') || '0');
			document.documentElement.style.setProperty('--safe-area-bottom', `${safeAreaBottom}px`);
		}
	};

	// Initial set
	setViewportHeight();

	// Update on resize and orientation change
	window.addEventListener('resize', setViewportHeight);
	window.addEventListener('orientationchange', () => {
		// iOS and Android need different delays after orientation change
		const delay = isIOS() ? 500 : 300;
		setTimeout(setViewportHeight, delay);
	});

	// Prevent zoom on double tap for game elements (mobile platforms)
	if (isMobile()) {
		let lastTouchEnd = 0;
		document.addEventListener('touchend', (event) => {
			const now = new Date().getTime();
			if (now - lastTouchEnd <= 300) {
				event.preventDefault();
			}
			lastTouchEnd = now;
		}, false);
	}

	// Prevent pull-to-refresh and overscroll behavior
	document.body.addEventListener('touchstart', (e) => {
		if (e.touches.length !== 1) return;
		
		const startY = e.touches[0].clientY;
		const element = e.target as HTMLElement;
		
		// If scrolled to top and pulling down, prevent default
		if (startY <= 10 && element.scrollTop <= 0) {
			e.preventDefault();
		}
	}, { passive: false });

	document.body.addEventListener('touchmove', (e) => {
		// Allow scrolling inside specific scrollable containers
		const target = e.target as HTMLElement;
		if (!target.closest('.scrollable')) {
			e.preventDefault();
		}
	}, { passive: false });

	// Fix for macOS Safari elastic scrolling
	if (isMacOS() && isSafari()) {
		document.body.style.overscrollBehavior = 'none';
	}

	// Linux-specific fixes for font rendering and scrolling
	if (typeof navigator !== 'undefined' && navigator.platform && navigator.platform.includes('Linux')) {
		document.body.style.setProperty('font-smooth', 'always');
		document.body.style.setProperty('-webkit-font-smoothing', 'antialiased');
		document.body.style.setProperty('-moz-osx-font-smoothing', 'grayscale');
	}

	// WebGL context lost handling for all platforms
	window.addEventListener('webglcontextlost', (event) => {
		console.warn('WebGL context lost. Preventing default to allow restoration.');
		event.preventDefault();
	});

	window.addEventListener('webglcontextrestored', () => {
		console.log('WebGL context restored.');
		// Trigger PIXI app re-initialization if needed
		window.dispatchEvent(new CustomEvent('pixi-context-restore'));
	});
};

// Cross-platform CSS custom properties for reliable viewport and safe areas
export const crossPlatformLayoutCSS = `
	:root {
		--vh: 1vh;
		--safe-area-top: env(safe-area-inset-top, 0px);
		--safe-area-bottom: env(safe-area-inset-bottom, 0px);
		--safe-area-left: env(safe-area-inset-left, 0px);
		--safe-area-right: env(safe-area-inset-right, 0px);
	}
	
	/* Cross-platform viewport fixes */
	html, body {
		height: 100vh;
		height: calc(var(--vh, 1vh) * 100);
		overflow: hidden;
		position: fixed;
		width: 100%;
		-webkit-overflow-scrolling: none;
		-webkit-user-select: none;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
		
		/* macOS Safari elastic scrolling fix */
		overscroll-behavior: none;
		-webkit-overscroll-behavior: none;
	}
	
	/* Prevent text selection and context menus in games */
	* {
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		-webkit-touch-callout: none;
	}
	
	/* iOS safe area support */
	@supports (padding: max(0px)) {
		.ios-safe-area-top {
			padding-top: max(var(--safe-area-top), 0px);
		}
		.ios-safe-area-bottom {
			padding-bottom: max(var(--safe-area-bottom), 0px);
		}
	}
	
	/* Mobile landscape optimizations */
	@media screen and (orientation: landscape) and (max-device-width: 1024px) {
		html, body {
			min-height: 100vh;
			min-height: calc(var(--vh, 1vh) * 100);
		}
	}
	
	/* iOS specific fixes */
	@media screen and (-webkit-min-device-pixel-ratio: 2) {
		body {
			-webkit-text-size-adjust: 100%;
		}
	}
	
	/* Linux font rendering improvements */
	@media screen and (platform: linux) {
		* {
			font-smooth: always;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}
	}
	
	/* High DPI display optimizations */
	@media screen and (-webkit-min-device-pixel-ratio: 2),
	       screen and (min-resolution: 192dpi) {
		canvas {
			image-rendering: -webkit-optimize-contrast;
			image-rendering: crisp-edges;
		}
	}
	
	/* Scrollable areas (for modal content etc.) */
	.scrollable {
		-webkit-overflow-scrolling: touch;
		overflow-scrolling: touch;
	}
	
	/* WebKit appearance fixes */
	input, button, textarea, select {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		border-radius: 0;
	}
	
	/* Focus outline improvements for keyboard navigation */
	button:focus-visible,
	input:focus-visible,
	[tabindex]:focus-visible {
		outline: 2px solid #4A90E2;
		outline-offset: 2px;
	}
`;

// Legacy export for backward compatibility
export const applyAndroidLayoutFixes = applyCrossPlatformLayoutFixes;
export const androidLayoutCSS = crossPlatformLayoutCSS;