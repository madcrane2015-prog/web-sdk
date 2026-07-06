<script lang="ts">
	import type { MenuButtonProps } from './controlPanelApi';

	let { controlsPath, gameScale, onTogglePaytable, className = '' }: MenuButtonProps = $props();
</script>

<button
	class="play-button {className}"
	onclick={onTogglePaytable}
	style="
		width: {50 * gameScale}px;
		height: {50 * gameScale}px;
		background-image: url('{controlsPath}/Control_menubar.png');
	"
	title="Menu"
	aria-label="Toggle menu"
></button>

<style>
	.play-button {
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

	.play-button:hover,
	.play-button:focus-visible {
		filter: brightness(1.1) drop-shadow(0 0 8px rgba(255, 215, 0, 0.32));
		outline: 2px solid rgba(255, 215, 0, 0.78);
		outline-offset: 2px;
	}

	.play-button:active {
		transform: translateY(1px) scale(0.97);
	}

	@media (max-width: 768px) and (orientation: portrait),
		(max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.play-button {
			width: 54px !important;
			height: 54px !important;
			min-width: 54px;
			min-height: 54px;
		}
	}

	@media (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.play-button {
			width: 42px !important;
			height: 42px !important;
			min-width: 42px;
			min-height: 42px;
		}
	}
</style>
