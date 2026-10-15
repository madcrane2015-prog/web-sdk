<script lang="ts">
	import type { SpinButtonProps } from './controlPanelApi';
	import { buttonGlare } from './buttonGlare';

	let {
		controlsPath,
		gameScale,
		isAutoPlaying,
		isSpinInProgress,
		disabled,
		playButtonGlareActive,
		onPress,
	}: SpinButtonProps = $props();

	let actionLabel = $derived(
		isAutoPlaying ? 'Stop autoplay' : isSpinInProgress ? 'Skip spin' : 'Spin',
	);
</script>

<div class="play-button-wrapper">
	<button
		use:buttonGlare={playButtonGlareActive}
		class="play-button"
		onclick={onPress}
		{disabled}
		style="
			width: {110 * gameScale}px;
			height: {110 * gameScale}px;
			background-image: url('{controlsPath}/{isAutoPlaying
			? 'Control_playbutton_stop.png'
			: 'Control_playbutton.png'}');
		"
		title={actionLabel.toUpperCase()}
		aria-label={actionLabel}
	></button>
</div>

<style>
	.play-button-wrapper {
		position: relative;
		display: inline-flex;
		overflow: hidden;
		border-radius: 50%;
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

	.play-button:disabled {
		cursor: not-allowed;
		filter: grayscale(0.75) brightness(0.62);
		opacity: 0.72;
	}

	@media (max-width: 768px) and (orientation: portrait),
		(max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.play-button {
			width: 72px !important;
			height: 72px !important;
			min-width: 72px;
			min-height: 72px;
		}
	}

	@media (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.play-button {
			width: 56px !important;
			height: 56px !important;
			min-width: 56px;
			min-height: 56px;
		}
	}

</style>
