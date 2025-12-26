<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		winLevel: 'small' | 'medium' | 'jackpot';
		onComplete?: () => void;
	}

	let { winLevel = 'small', onComplete }: Props = $props();

	let visible = $state(false);
	let animating = $state(false);

	// Win level configurations
	const config = {
		small: { vinyls: 5, sparkles: 8 },
		medium: { vinyls: 12, sparkles: 16 },
		jackpot: { vinyls: 24, sparkles: 30 }
	};

	const currentConfig = $derived(config[winLevel]);

	// Label colors for variety
	const labelColors = ['#f04e37', '#ffd966', '#ff8533', '#4ecdc4', '#ff6b9d'];

	// Generate vinyl positions (center-weighted)
	function generateVinylPositions(count: number) {
		const positions = [];
		const centerX = 512;
		const centerY = 400;

		for (let i = 0; i < count; i++) {
			// More vinyls = wider spread
			const maxRadius = winLevel === 'jackpot' ? 350 : winLevel === 'medium' ? 280 : 220;
			const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
			const radius = Math.random() * maxRadius * 0.7 + maxRadius * 0.3;

			positions.push({
				x: centerX + Math.cos(angle) * radius,
				y: centerY + Math.sin(angle) * radius,
				rotation: Math.random() * 30 - 15,
				scale: 0.6 + Math.random() * 0.6,
				delay: i * 0.05,
				color: labelColors[i % labelColors.length]
			});
		}

		return positions;
	}

	// Generate sparkle positions
	function generateSparklePositions(count: number) {
		const positions = [];
		for (let i = 0; i < count; i++) {
			positions.push({
				x: 100 + Math.random() * 824,
				y: 50 + Math.random() * 700,
				delay: Math.random() * 0.8,
				duration: 0.6 + Math.random() * 0.4,
				rotation: Math.random() * 360
			});
		}
		return positions;
	}

	const vinyls = $derived(generateVinylPositions(currentConfig.vinyls));
	const sparkles = $derived(generateSparklePositions(currentConfig.sparkles));

	export function show() {
		visible = true;
		animating = true;

		// Hide after animation completes
		setTimeout(
			() => {
				animating = false;
				setTimeout(() => {
					visible = false;
					onComplete?.();
				}, 500);
			},
			winLevel === 'jackpot' ? 4000 : winLevel === 'medium' ? 3000 : 2500
		);
	}

	export function hide() {
		animating = false;
		setTimeout(() => {
			visible = false;
		}, 500);
	}
</script>

<style>
	.vinyl-win-container {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		pointer-events: none;
		z-index: 1000;
		opacity: 0;
		transition: opacity 0.5s ease-out;
	}

	.vinyl-win-container.visible {
		opacity: 1;
	}

	.vinyl-win-container.hiding {
		opacity: 0;
	}

	.vinyl-canvas {
		width: 100%;
		height: 100%;
	}

	/* Vinyl zoom-in animation */
	@keyframes vinylZoomIn {
		0% {
			transform: translate(var(--tx), var(--ty)) scale(0) rotate(0deg);
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		100% {
			transform: translate(var(--tx), var(--ty)) scale(var(--scale)) rotate(var(--rotation));
			opacity: 1;
		}
	}

	/* Vinyl floating animation */
	@keyframes vinylFloat {
		0%,
		100% {
			transform: translate(var(--tx), var(--ty)) scale(var(--scale)) rotate(var(--rotation))
				translateY(0px);
		}
		50% {
			transform: translate(var(--tx), var(--ty)) scale(var(--scale)) rotate(var(--rotation))
				translateY(-15px);
		}
	}

	/* Sparkle twinkle animation */
	@keyframes sparkleTwinkle {
		0%,
		100% {
			opacity: 0;
			transform: translate(var(--sx), var(--sy)) scale(0) rotate(0deg);
		}
		50% {
			opacity: 1;
			transform: translate(var(--sx), var(--sy)) scale(1) rotate(180deg);
		}
	}

	.vinyl-group {
		animation: vinylZoomIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
		animation-delay: var(--delay);
		opacity: 0;
	}

	.vinyl-group.floating {
		animation: vinylFloat 2s ease-in-out infinite;
		animation-delay: var(--delay);
		opacity: 1;
	}

	.sparkle {
		animation: sparkleTwinkle var(--duration) ease-in-out infinite;
		animation-delay: var(--sparkle-delay);
	}
</style>

{#if visible}
	<div class="vinyl-win-container" class:visible={animating} class:hiding={!animating}>
		<svg class="vinyl-canvas" viewBox="0 0 1024 800" xmlns="http://www.w3.org/2000/svg">
			<!-- Define reusable vinyl record symbol -->
			<defs>
				<symbol id="vinyl" viewBox="-200 -200 400 400">
					<!-- Outer vinyl disc -->
					<circle cx="0" cy="0" r="180" fill="#0b0b0b" />

					<!-- Groove rings for realism -->
					<circle
						cx="0"
						cy="0"
						r="150"
						fill="none"
						stroke="#1a1a1a"
						stroke-width="2"
						opacity="0.3"
					/>
					<circle
						cx="0"
						cy="0"
						r="120"
						fill="none"
						stroke="#1a1a1a"
						stroke-width="2"
						opacity="0.25"
					/>
					<circle
						cx="0"
						cy="0"
						r="90"
						fill="none"
						stroke="#1a1a1a"
						stroke-width="1.5"
						opacity="0.2"
					/>

					<!-- Center label (color controlled by CSS var) -->
					<circle cx="0" cy="0" r="55" fill="var(--label-color)" />

					<!-- Spindle hole -->
					<circle cx="0" cy="0" r="6" fill="#ffffff" />

					<!-- Subtle highlight on label -->
					<ellipse
						cx="-15"
						cy="-15"
						rx="20"
						ry="15"
						fill="#ffffff"
						opacity="0.3"
						transform="rotate(-30)"
					/>
				</symbol>

				<!-- Sparkle/star symbol -->
				<symbol id="sparkle" viewBox="-12 -12 24 24">
					<polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" />
					<circle cx="0" cy="0" r="2" fill="#ffffff" />
				</symbol>

				<!-- Small confetti dots -->
				<symbol id="confetti" viewBox="-3 -3 6 6">
					<circle cx="0" cy="0" r="2" fill="var(--confetti-color)" />
				</symbol>
			</defs>

			<!-- Render sparkles/stars -->
			{#each sparkles as sparkle, i}
				<use
					href="#sparkle"
					class="sparkle"
					style="
            --sx: {sparkle.x}px;
            --sy: {sparkle.y}px;
            --duration: {sparkle.duration}s;
            --sparkle-delay: {sparkle.delay}s;
          "
				/>
			{/each}

			<!-- Render vinyl records -->
			{#each vinyls as vinyl, i}
				<use
					href="#vinyl"
					class="vinyl-group"
					class:floating={animating}
					style="
            --tx: {vinyl.x}px;
            --ty: {vinyl.y}px;
            --scale: {vinyl.scale};
            --rotation: {vinyl.rotation}deg;
            --delay: {vinyl.delay}s;
            --label-color: {vinyl.color};
          "
				/>
			{/each}
		</svg>
	</div>
{/if}
