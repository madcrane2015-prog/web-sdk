<script lang="ts">
	import type { ControlPanelPosition } from '../../game-standalone/uiLayout';

	interface AutoplayMenuProps {
		visible: boolean;
		gameScale: number;
		controlPanelPos: ControlPanelPosition;
		onSelectRounds: (rounds: number) => void;
		onCancel: () => void;
	}

	const roundOptions = [10, 25, 50, 100, 200, 500, 1000, 5000] as const;

	function getRoundClass(rounds: number) {
		if (rounds >= 5000) return 'danger';
		if (rounds >= 500) return 'warm';
		if (rounds >= 100) return 'cool';
		return 'go';
	}

	let { visible, gameScale, controlPanelPos, onSelectRounds, onCancel }: AutoplayMenuProps =
		$props();
</script>

{#if visible}
	<div
		class="autoplay-menu-popover"
		style="
			bottom: {(controlPanelPos.height / gameScale + 20) * gameScale}px;
			padding: {20 * gameScale}px;
			border-radius: {15 * gameScale}px;
			border-width: {3 * gameScale}px;
			box-shadow: 0 {8 * gameScale}px {30 * gameScale}px rgba(0, 136, 255, 0.6);
			min-width: {250 * gameScale}px;
		"
	>
		<div
			class="autoplay-title"
			style="margin-bottom: {15 * gameScale}px; font-size: {18 * gameScale}px;"
		>
			Select Rounds
		</div>

		{#each roundOptions as rounds}
			<button
				type="button"
				class="round-button {getRoundClass(rounds)}"
				style="
					padding: {12 * gameScale}px;
					margin-bottom: {rounds === 5000 ? 15 * gameScale : 8 * gameScale}px;
					border-radius: {8 * gameScale}px;
					font-size: {16 * gameScale}px;
					box-shadow: 0 {4 * gameScale}px {10 * gameScale}px var(--round-shadow);
				"
				onclick={() => onSelectRounds(rounds)}
			>
				{rounds.toLocaleString()} Rounds
			</button>
		{/each}

		<button
			type="button"
			class="cancel-button"
			style="
				padding: {10 * gameScale}px;
				border-width: {1 * gameScale}px;
				border-radius: {8 * gameScale}px;
				font-size: {14 * gameScale}px;
			"
			onclick={onCancel}
		>
			Cancel
		</button>
	</div>
{/if}

<style>
	.autoplay-menu-popover {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		background: rgba(0, 0, 0, 0.95);
		border-style: solid;
		border-color: #0088ff;
		box-sizing: border-box;
		z-index: 2000;
	}

	.autoplay-title {
		color: white;
		font-weight: bold;
		text-align: center;
	}

	.round-button,
	.cancel-button {
		width: 100%;
		color: white;
		cursor: pointer;
		font-weight: bold;
	}

	.round-button {
		border: none;
	}

	.round-button.go {
		--round-shadow: rgba(68, 170, 68, 0.4);
		background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
	}

	.round-button.cool {
		--round-shadow: rgba(68, 136, 255, 0.4);
		background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
	}

	.round-button.warm {
		--round-shadow: rgba(255, 136, 68, 0.4);
		background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
	}

	.round-button.danger {
		--round-shadow: rgba(255, 68, 68, 0.4);
		background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
	}

	.cancel-button {
		background: rgba(255, 255, 255, 0.1);
		color: #aaa;
		border-style: solid;
		border-color: #555;
		font-weight: normal;
	}

	@media (max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.autoplay-menu-popover {
			position: fixed;
			left: 50%;
			top: max(8px, env(safe-area-inset-top));
			bottom: auto !important;
			width: min(360px, calc(100vw - 24px));
			min-width: 0 !important;
			max-height: calc(100dvh - 16px);
			overflow-y: auto;
			padding: 12px !important;
			border-radius: 10px !important;
			z-index: 2400;
		}
	}
</style>
