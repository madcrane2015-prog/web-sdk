<script lang="ts">
	import { onDestroy } from 'svelte';

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
	let displayedLevel = $state<'small' | 'medium' | 'jackpot'>('small');
	let displayedAmount = $state(0);
	let finishTimer: ReturnType<typeof setTimeout> | undefined;
	let hideTimer: ReturnType<typeof setTimeout> | undefined;
	function clearTimers() {
		clearTimeout(finishTimer);
		clearTimeout(hideTimer);
	}
	onDestroy(clearTimers);

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
		startX: number;
		startY: number;
		scale: number;
		delay: number;
		duration: number;
		rotation: number;
	};

	// Win level configurations (tighter spread to keep vinyls on screen)
	const config = {
		small: { vinyls: 5, sparkles: 8, maxRadius: 150 },
		medium: { vinyls: 12, sparkles: 48, maxRadius: 240 },
		jackpot: { vinyls: 24, sparkles: 96, maxRadius: 310 }
	};


	// Label colors for variety
	const labelColors = ['#f04e37', '#ffd966', '#ff8533', '#4ecdc4', '#ff6b9d'];

	let vinyls = $state<VinylPosition[]>([]);
	let sparkles = $state<SparklePosition[]>([]);

	// Build a stable record pile so the animation does not reshuffle during Svelte updates.
	function generateVinylPositions(count: number, maxRadius: number) {
		const positions: VinylPosition[] = [];
		const centerX = 512;
		const centerY = 512;

		for (let i = 0; i < count; i++) {
			const angle = i * Math.PI * (3 - Math.sqrt(5));
			const radius = maxRadius * Math.sqrt((i + 0.5) / count);

			positions.push({
				x: centerX + Math.cos(angle) * radius,
				y: centerY + Math.sin(angle) * radius * 0.7,
				rotation: ((i * 17) % 31) - 15,
				scale: vinylEndScale * (1 + (i % 4) * 0.08),
				delay: i * 0.035,
				color: labelColors[i % labelColors.length]
			});
		}

		return positions;
	}

	// Generate sparkle positions
	function generateSparklePositions(count: number, level: 'small' | 'medium' | 'jackpot') {
		const positions: SparklePosition[] = [];
		for (let i = 0; i < count; i++) {
			const angle = i * Math.PI * (3 - Math.sqrt(5));
			const intensity = level === 'jackpot' ? 2 : level === 'medium' ? 1 : 0;
			const radius = 240 + (i % 7) * (18 + intensity * 7);
			positions.push({
				x: 512 + Math.cos(angle) * radius,
				y: 512 + Math.sin(angle) * radius * 0.8,
				startX: 512 + Math.cos(angle) * radius * 0.35,
				startY: 512 + Math.sin(angle) * radius * 0.28,
				scale: 0.8 + intensity * 0.4 + (i % 4) * 0.3,
				delay: Math.floor(i / 12) * 0.1 + (i % 3) * 0.04,
				duration: 1.1 + (i % 5) * 0.12,
				rotation: (i * 31) % 360
			});
		}
		return positions;
	}

	export function show(level = winLevel, amount = winAmount, durationMs?: number) {
		clearTimers();
		displayedLevel = level;
		displayedAmount = amount;
		const currentConfig = config[level];
		animationKey += 1;
		vinyls = generateVinylPositions(currentConfig.vinyls, currentConfig.maxRadius);
		sparkles = generateSparklePositions(currentConfig.sparkles, level);
		visible = true;
		animating = true;

		// Hide after animation completes
		finishTimer = setTimeout(
			() => {
				animating = false;
				hideTimer = setTimeout(() => {
					visible = false;
					onComplete?.();
				}, 500);
			},
			durationMs ?? (level === 'jackpot' ? 4000 : level === 'medium' ? 3000 : 2500)
		);
	}

	export function hide() {
		clearTimers();
		animating = false;
		hideTimer = setTimeout(() => {
			visible = false;
		}, 500);
	}
</script>

<style>
	.vinyl-win-container {
		position: absolute;
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
			transform: translate(512px, 512px) scale(var(--start-scale, 0.01)) rotate(0deg);
			opacity: 0;
		}
		35% {
			opacity: 1;
		}
		78% {
			transform: translate(var(--tx), var(--ty)) scale(calc(var(--scale) * 1.12))
				rotate(var(--rotation));
			opacity: 1;
		}
		100% {
			transform: translate(var(--tx), var(--ty)) scale(var(--scale)) rotate(var(--rotation));
			opacity: 1;
		}
	}

	/* Sparkle twinkle animation */
	@keyframes sparkleTwinkle {
		0% {
			opacity: 0;
			transform: translate(var(--start-x), var(--start-y)) scale(0) rotate(0deg);
		}
		25% {
			opacity: 1;
		}
		65% {
			opacity: 1;
			transform: translate(var(--sx), var(--sy)) scale(var(--sparkle-scale, 1)) rotate(var(--star-rotation));
		}
		100% {
			opacity: 0;
			transform: translate(var(--sx), var(--sy)) scale(0.1) rotate(calc(var(--star-rotation) + 90deg));
		}
	}

	.vinyl-group {
		animation: vinylFlyToPile 0.95s cubic-bezier(0.18, 0.9, 0.22, 1) forwards;
		animation-delay: var(--delay);
		opacity: 0;
	}

	.sparkle {
		opacity: 0;
		animation: sparkleTwinkle var(--duration) ease-in-out infinite both;
		animation-delay: var(--sparkle-delay);
	}

	/* Win amount display */
	.svg-win-amount {
		font-size: 90px;
		font-weight: bold;
		fill: #ffd700;
		filter: drop-shadow(0 0 12px #caa500);
		font-family: 'Arial Black', sans-serif;
		pointer-events: none;
	}

	.svg-win-label {
		font-size: 64px;
		font-weight: bold;
		fill: #ffffff;
		filter: drop-shadow(0 0 8px #c6e0db);
		font-family: 'Arial Black', sans-serif;
		pointer-events: none;
	}
	@media (prefers-reduced-motion: reduce) {
		.vinyl-group, .sparkle {
			animation-duration: 1ms;
			animation-iteration-count: 1;
			animation-delay: 0s;
		}
	}
</style>

{#if visible}
	<div class="vinyl-win-container" class:visible={animating} class:hiding={!animating}>
		<svg
			class="vinyl-canvas"
			viewBox="0 0 1024 1024"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<!-- Define reusable vinyl record symbol -->
			<defs>
				<g id="vinyl">
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
				</g>

				<!-- Sparkle/star symbol -->
				<g id="sparkle">
					<polygon points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3" fill="#ffd966" />
					<circle cx="0" cy="0" r="2" fill="#ffffff" />
				</g>

				<!-- Small confetti dots -->
				<symbol id="confetti" viewBox="-3 -3 6 6">
					<circle cx="0" cy="0" r="2" fill="var(--confetti-color)" />
				</symbol>
			</defs>

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
			<!-- Stars sit above the records, below the readable win text. -->
			{#each sparkles as sparkle, i (`sparkle-${animationKey}-${i}`)}
				<use href="#sparkle" class="sparkle" style="
            --sx: {sparkle.x}px; --sy: {sparkle.y}px;
            --start-x: {sparkle.startX}px; --start-y: {sparkle.startY}px;
            --star-rotation: {sparkle.rotation}deg;
            --duration: {sparkle.duration}s; --sparkle-delay: {sparkle.delay}s;
            --sparkle-scale: {sparkleScale * sparkle.scale};
          " />
			{/each}
			{#if displayedAmount > 0}
				<text x="512" y="225" text-anchor="middle" class="svg-win-label">{displayedLevel === 'jackpot' ? 'JACKPOT!' : 'BIG WIN!'}</text>
				<text x="512" y="840" text-anchor="middle" class="svg-win-amount">{displayedAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</text>
			{/if}
		</svg>
	</div>
{/if}
