<script lang="ts">
	import type { ControlPanelFrameProps } from './controlPanelApi';

	let { controlsPath, gameScale, controlPanelPos }: ControlPanelFrameProps = $props();
</script>

<div
	class="control-panel-mobile"
	style="
		position: absolute;
		left: {controlPanelPos.x}px;
		top: {controlPanelPos.y}px;
		width: {controlPanelPos.width}px;
		height: {controlPanelPos.height}px;
		display: flex;
		align-items: center;
		z-index: 1000;
	"
>
	<slot name="overlay"></slot>
	<slot name="status"></slot>

	<img
		src="{controlsPath}/Control_leftend.png"
		alt="Left End"
		style="height: {controlPanelPos.height}px; flex-shrink: 0;"
	/>

	<div
		class="control-panel-center"
		style="
			height: {controlPanelPos.height}px;
			background-image: url('{controlsPath}/Control_scalablebg.png');
			padding: 0 {20 * gameScale}px;
			gap: {20 * gameScale}px;
		"
	>
		<slot></slot>
	</div>

	<img
		src="{controlsPath}/Control_rightend.png"
		alt="Right End"
		style="height: {controlPanelPos.height}px; flex-shrink: 0;"
	/>
</div>

<style>
	.control-panel-center {
		flex-grow: 1;
		background-size: 100% 100%;
		background-repeat: no-repeat;
		display: flex;
		align-items: center;
		position: relative;
	}

	@media (max-width: 768px) and (orientation: portrait) {
		.control-panel-mobile {
			position: fixed !important;
			left: 0 !important;
			right: 0 !important;
			top: clamp(470px, 60dvh, 610px) !important;
			bottom: auto !important;
			width: 100vw !important;
			height: 58px !important;
			justify-content: center;
		}

		.control-panel-center {
			height: 58px !important;
			padding: 0 8px !important;
			gap: 6px !important;
			justify-content: center;
		}

		.control-panel-mobile > img {
			height: 58px !important;
		}
	}

	@media (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.control-panel-mobile {
			display: none !important;
		}
	}
</style>
