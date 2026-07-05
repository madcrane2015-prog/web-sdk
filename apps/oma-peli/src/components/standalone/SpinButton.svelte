<script lang="ts">
	import type { SpinButtonProps } from './controlPanelApi';

	let { controlsPath, gameScale, isAutoPlaying, playButtonGlareActive, onPress }: SpinButtonProps =
		$props();
</script>

<div class="play-button-wrapper" class:glare-animate={playButtonGlareActive}>
	<button
		class="play-button"
		onclick={onPress}
		style="
			width: {110 * gameScale}px;
			height: {110 * gameScale}px;
			background-image: url('{controlsPath}/{isAutoPlaying
			? 'Control_playbutton_stop.png'
			: 'Control_playbutton.png'}');
		"
		title={isAutoPlaying ? 'STOP AUTOPLAY' : 'SPIN'}
		aria-label={isAutoPlaying ? 'Stop autoplay' : 'Spin'}
	></button>
</div>

<style>
	.play-button-wrapper {
		position: relative;
		display: inline-block;
		overflow: hidden;
		border-radius: 50%;
	}

	.play-button-wrapper::after {
		content: '';
		position: absolute;
		top: -150%;
		left: -150%;
		width: 300%;
		height: 300%;
		background: linear-gradient(
			45deg,
			rgba(255, 255, 255, 0) 40%,
			rgba(255, 255, 255, 0.55) 50%,
			rgba(255, 255, 255, 0) 60%
		);
		transform: translateX(-100%) translateY(-100%);
		pointer-events: none;
		opacity: 0;
		filter: blur(2px);
	}

	.play-button-wrapper.glare-animate::after {
		animation: glareSweep 1.2s ease-out forwards;
		opacity: 1;
	}

	.play-button {
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		border: none;
		cursor: pointer;
		background-color: transparent;
		opacity: 1;
		position: relative;
		z-index: 10;
		border-radius: 50%;
		transition:
			filter 120ms ease,
			transform 120ms ease;
	}

	.play-button:hover,
	.play-button:focus-visible {
		filter: brightness(1.08) drop-shadow(0 0 10px rgba(255, 215, 0, 0.32));
		outline: 2px solid rgba(255, 215, 0, 0.82);
		outline-offset: 2px;
	}

	.play-button:active {
		transform: scale(0.97);
	}

	@media (max-width: 768px) and (orientation: portrait),
		(max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.play-button {
			width: var(--oma-spin-button-size) !important;
			height: var(--oma-spin-button-size) !important;
			min-width: var(--oma-spin-button-size);
			min-height: var(--oma-spin-button-size);
		}
	}

	@keyframes glareSweep {
		0% {
			transform: translate(-120%, -120%);
			opacity: 0;
		}
		15% {
			opacity: 1;
		}
		100% {
			transform: translate(120%, 120%);
			opacity: 0;
		}
	}
</style>
