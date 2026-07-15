<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		winLevel: 'small' | 'medium' | 'jackpot';
		winAmount?: number;
		onComplete?: () => void;
		vinylStartScale?: number;
		vinylEndScale?: number;
		sparkleScale?: number;
	}

	let { 
		winLevel = 'small', 
		winAmount = 0, 
		onComplete,
		vinylStartScale = 0.01,
		vinylEndScale = 0.15,
		sparkleScale = 0.6
	}: Props = $props();

	let visible = $state(false);
	let animating = $state(false);
	let animationKey = $state(0);

	type VinylPosition = {
		x: number;
		y: number;
		rotation: number;
		scale: number;
		delay: number;
		color: string;
	};

	type SparklePosition = {
		x: number;
		y: number;
		delay: number;
		duration: number;
		rotation: number;
	};

	// Win level configurations (tighter spread to keep vinyls on screen)
	const config = {
		small: { vinyls: 5, sparkles: 8, maxRadius: 70 },
		medium: { vinyls: 12, sparkles: 16, maxRadius: 100 },
		jackpot: { vinyls: 24, sparkles: 30, maxRadius: 130 }
	};

	const currentConfig = $derived(config[winLevel]);

	// Label colors for variety
	const labelColors = ['#f04e37', '#ffd966', '#ff8533', '#4ecdc4', '#ff6b9d'];

	let vinyls = $state<VinylPosition[]>([]);
	let sparkles = $state<SparklePosition[]>([]);

	// Build a stable record pile so the animation does not reshuffle during Svelte updates.
	function generateVinylPositions(count: number, maxRadius: number) {
		const positions: VinylPosition[] = [];
		const centerX = 512;
		const centerY = 430;

		for (let i = 0; i < count; i++) {
			const ring = Math.floor(i / 7);
			const angle = (Math.PI * 2 * i) / Math.min(count, 7) + ring * 0.42;
			const radius = Math.min(maxRadius, 22 + ring * 26 + (i % 3) * 5);

			positions.push({
				x: centerX + Math.cos(angle) * radius,
				y: centerY + Math.sin(angle) * radius * 0.55,
				rotation: ((i * 37) % 60) - 30,
				scale: vinylEndScale * (1.75 + (i % 4) * 0.12),
				delay: i * 0.035,
				color: labelColors[i % labelColors.length]
			});
		}

		return positions;
	}

	// Generate sparkle positions
	function generateSparklePositions(count: number) {
		const positions: SparklePosition[] = [];
		for (let i = 0; i < count; i++) {
			const angle = (Math.PI * 2 * i) / count;
			const radius = 120 + (i % 5) * 34;
			positions.push({
				x: 512 + Math.cos(angle) * radius,
				y: 390 + Math.sin(angle) * radius * 0.62,
				delay: (i % 8) * 0.08,
				duration: 0.7 + (i % 4) * 0.08,
				rotation: (i * 31) % 360
			});
		}
		return positions;
	}

	export function show() {
		animationKey += 1;
		vinyls = generateVinylPositions(currentConfig.vinyls, currentConfig.maxRadius);
		sparkles = generateSparklePositions(currentConfig.sparkles);
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
		z-index: 9999;
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

	/* Vinyl fly-in animation - records start from center and form a controlled pile. */
	@keyframes vinylFlyToPile {
		0% {
			transform: translate(512px, 400px) scale(var(--start-scale, 0.01)) rotate(0deg);
			opacity: 0;
		}
		35% {
			opacity: 1;
		}
		78% {
			transform: translate(var(--tx), var(--ty)) scale(calc(var(--scale) * 1.12))
				rotate(calc(var(--rotation) + 16deg));
			opacity: 1;
		}
		100% {
			transform: translate(var(--tx), var(--ty)) scale(var(--scale)) rotate(var(--rotation));
			opacity: 1;
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
			transform: translate(var(--sx), var(--sy)) scale(var(--sparkle-scale, 1)) rotate(180deg);
		}
	}

	.vinyl-group {
		animation: vinylFlyToPile 0.95s cubic-bezier(0.18, 0.9, 0.22, 1) forwards;
		animation-delay: var(--delay);
		opacity: 0;
	}

	.sparkle {
		animation: sparkleTwinkle var(--duration) ease-in-out infinite;
		animation-delay: var(--sparkle-delay);
	}

	/* Win amount display */
	.win-amount-display {
		position: absolute;
		top: 53%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: clamp(54px, 9vw, 116px);
		font-weight: bold;
		color: #ffd700;
		text-shadow: 0 0 20px rgba(255, 215, 0, 0.8), 0 0 40px rgba(255, 215, 0, 0.6),
			0 4px 8px rgba(0, 0, 0, 0.8);
		font-family: 'Arial Black', sans-serif;
		z-index: 10;
		animation: winAmountPulse 1s ease-in-out infinite;
		pointer-events: none;
	}

	@keyframes winAmountPulse {
		0%,
		100% {
			transform: translate(-50%, -50%) scale(1);
		}
		50% {
			transform: translate(-50%, -50%) scale(1.1);
		}
	}

	.win-label {
		position: absolute;
		top: 38%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: clamp(26px, 4vw, 48px);
		font-weight: bold;
		color: #ffffff;
		text-shadow: 0 0 15px rgba(255, 255, 255, 0.8), 0 4px 8px rgba(0, 0, 0, 0.8);
		font-family: 'Arial Black', sans-serif;
		z-index: 10;
		pointer-events: none;
	}
</style>

{#if visible}
	<div class="vinyl-win-container" class:visible={animating} class:hiding={!animating}>
		<!-- Win amount display -->
		{#if winAmount > 0}
			<div class="win-label">BIG WIN!</div>
			<div class="win-amount-display">
				{winAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
			</div>
		{/if}

		<svg
			class="vinyl-canvas"
			viewBox="0 0 1024 800"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
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
			{#each sparkles as sparkle, i (`sparkle-${animationKey}-${i}`)}
				<use
					href="#sparkle"
					class="sparkle"
					style="
            --sx: {sparkle.x}px;
            --sy: {sparkle.y}px;
            --duration: {sparkle.duration}s;
            --sparkle-delay: {sparkle.delay}s;
            --sparkle-scale: {sparkleScale};
          "
				/>
			{/each}

			<!-- Render vinyl records -->
			{#each vinyls as vinyl, i (`vinyl-${animationKey}-${i}`)}
				<use
					href="#vinyl"
					class="vinyl-group"
					style="
            --tx: {vinyl.x}px;
            --ty: {vinyl.y}px;
            --scale: {vinyl.scale};
            --rotation: {vinyl.rotation}deg;
            --delay: {vinyl.delay}s;
            --label-color: {vinyl.color};
            --start-scale: {vinylStartScale};
          "
				/>
			{/each}
		</svg>
	</div>
{/if}
