<script lang="ts">
	import type { QuickActionsProps } from './controlPanelApi';

	let {
		controlsPath,
		gameScale,
		isAutoPlaying,
		spinSpeed,
		onToggleAutoplayMenu,
		onStopAutoplay,
		onCycleSpinSpeed,
	}: QuickActionsProps = $props();

	const spinSpeedTitle = $derived(
		spinSpeed === 'slow' ? 'Slow' : spinSpeed === 'medium' ? 'Medium' : 'Fast',
	);
	const speedBarAsset = $derived(
		spinSpeed === 'slow'
			? 'Control_bar_deselect.png'
			: spinSpeed === 'medium'
				? 'Control_half_bar_select.png'
				: 'Control_bar_select.png',
	);
</script>

<div class="quick-action hide-on-mobile">
	<button
		onclick={() => {
			if (isAutoPlaying) {
				onStopAutoplay();
			} else {
				onToggleAutoplayMenu();
			}
		}}
		style="
			width: {50 * gameScale}px;
			height: {50 * gameScale}px;
			background-image: url('{controlsPath}/{isAutoPlaying
			? 'Control_autoplay_stop.png'
			: 'Control_autoplay_select.png'}');
		"
		title={isAutoPlaying ? 'Stop Autoplay' : 'Autoplay'}
		aria-label={isAutoPlaying ? 'Stop autoplay' : 'Open autoplay menu'}
	></button>
	<img
		src="{controlsPath}/{isAutoPlaying ? 'Control_bar_select.png' : 'Control_bar_deselect.png'}"
		alt="Status bar"
		style="height: {10 * gameScale}px;"
	/>
</div>

<slot name="afterAutoplay"></slot>

<div class="quick-action hide-on-mobile">
	<button
		onclick={onCycleSpinSpeed}
		style="
			width: {50 * gameScale}px;
			height: {50 * gameScale}px;
			background-image: url('{controlsPath}/Control_fastplay_select.png');
		"
		title="Spin Speed: {spinSpeedTitle}"
		aria-label="Change spin speed"
	></button>
	<img src="{controlsPath}/{speedBarAsset}" alt="Speed bar" style="height: {10 * gameScale}px;" />
</div>

<slot name="afterSpeed"></slot>

<style>
	.quick-action {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--oma-quick-action-gap, 5px);
	}

	button {
		background-size: contain;
		background-repeat: no-repeat;
		border: none;
		cursor: pointer;
		background-color: transparent;
		border-radius: 8px;
		transition:
			filter 120ms ease,
			transform 120ms ease;
	}

	button:hover,
	button:focus-visible {
		filter: brightness(1.1) drop-shadow(0 0 8px rgba(255, 215, 0, 0.32));
		outline: 2px solid rgba(255, 215, 0, 0.78);
		outline-offset: 2px;
	}

	button:active {
		transform: translateY(1px) scale(0.97);
	}

	img {
		width: auto;
		display: block;
	}

	@media (max-width: 768px) and (orientation: portrait),
		(max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.hide-on-mobile {
			display: none !important;
		}
	}
</style>
