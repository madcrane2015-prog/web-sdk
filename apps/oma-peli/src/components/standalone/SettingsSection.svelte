<script lang="ts">
	import type { SpinSpeed } from '../../game-standalone/types';

	interface SettingsSectionProps {
		isAutoPlaying: boolean;
		autoPlayRoundsLeft: number;
		spinSpeed: SpinSpeed;
		onStopAutoplay: () => void;
		onOpenAutoplay: () => void;
		onSetSpinSpeed: (spinSpeed: SpinSpeed) => void;
	}

	const spinSpeedOptions: SpinSpeed[] = ['slow', 'medium', 'fast'];

	function getSpinSpeedLabel(speed: SpinSpeed) {
		return speed.toUpperCase();
	}

	let {
		isAutoPlaying,
		autoPlayRoundsLeft,
		spinSpeed,
		onStopAutoplay,
		onOpenAutoplay,
		onSetSpinSpeed,
	}: SettingsSectionProps = $props();
</script>

<section class="mobile-menu-controls" aria-labelledby="settings-section-title">
	<h3 id="settings-section-title">GAME CONTROLS</h3>

	<div class="control-group">
		<div class="control-row">
			<span>Autoplay:</span>
			<strong class:active={isAutoPlaying}
				>{isAutoPlaying ? `ON (${autoPlayRoundsLeft} left)` : 'OFF'}</strong
			>
		</div>

		{#if isAutoPlaying}
			<button type="button" class="stop-button" onclick={onStopAutoplay}>STOP AUTOPLAY</button>
		{:else}
			<button type="button" class="start-button" onclick={onOpenAutoplay}>START AUTOPLAY</button>
		{/if}
	</div>

	<div class="control-group compact">
		<div class="speed-label">
			<span>Spin Speed:</span>
			<strong>{getSpinSpeedLabel(spinSpeed)}</strong>
		</div>

		<div class="speed-options">
			{#each spinSpeedOptions as option}
				<button
					type="button"
					class:active={spinSpeed === option}
					onclick={() => onSetSpinSpeed(option)}
				>
					{option}
				</button>
			{/each}
		</div>
	</div>

	<div class="divider"></div>
</section>

<style>
	.mobile-menu-controls {
		display: none;
		margin-bottom: 20px;
		padding: 15px;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 10px;
	}

	h3 {
		margin: 0 0 15px;
		color: #ffd700;
		font-size: 1.2em;
	}

	.control-group {
		margin-bottom: 15px;
	}

	.control-group.compact {
		margin-bottom: 10px;
	}

	.control-row,
	.speed-label {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
		gap: 12px;
	}

	.control-row span,
	.speed-label span {
		font-size: 1.1em;
	}

	strong {
		color: #ff6666;
	}

	strong.active,
	.speed-label strong {
		color: #ffd700;
	}

	.start-button,
	.stop-button {
		width: 100%;
		padding: 12px;
		color: white;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		font-weight: bold;
		font-size: 1em;
	}

	.start-button {
		background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
	}

	.stop-button {
		background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
	}

	.speed-options {
		display: flex;
		gap: 10px;
	}

	.speed-options button {
		flex: 1;
		padding: 10px;
		background: rgba(255, 255, 255, 0.1);
		color: white;
		border: 1px solid #555;
		border-radius: 8px;
		cursor: pointer;
		font-size: 0.9em;
		text-transform: capitalize;
	}

	.speed-options button.active {
		background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
		border: 2px solid #ffd700;
	}

	.divider {
		border-top: 1px solid #555;
		margin: 20px 0;
	}

	@media (max-width: 768px) and (orientation: portrait),
		(max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.mobile-menu-controls {
			display: block;
		}
	}
</style>
