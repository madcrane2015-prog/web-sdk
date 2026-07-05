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
</style>
