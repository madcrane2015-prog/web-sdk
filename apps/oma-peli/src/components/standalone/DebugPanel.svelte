<script lang="ts">
	interface Props {
		visible: boolean;
		gameVersion: string;
		totalRounds: number;
		totalWagered: number;
		totalWon: number;
		currentRTP: string;
		hitFrequency: string;
		freeSpinsTriggerCount: number;
		freeSpinsPlayedCount: number;
		emptySlotPercentage: string;
		winLogCount: number;
		isFreeSpinMode: boolean;
		onResetStats: () => void;
		onDownloadWinLog: () => void;
		onClearWinLog: () => void;
		onTriggerTestFreeSpins: () => void;
	}

	let {
		visible,
		gameVersion,
		totalRounds,
		totalWagered,
		totalWon,
		currentRTP,
		hitFrequency,
		freeSpinsTriggerCount,
		freeSpinsPlayedCount,
		emptySlotPercentage,
		winLogCount,
		isFreeSpinMode,
		onResetStats,
		onDownloadWinLog,
		onClearWinLog,
		onTriggerTestFreeSpins,
	}: Props = $props();
</script>

{#if visible}
	<div class="debug-panel">
		<div class="title">RTP MONITOR</div>
		<div class="version">v{gameVersion}</div>
		<div class="row"><span>Rounds:</span><strong>{totalRounds.toLocaleString()}</strong></div>
		<div class="row">
			<span>Wagered:</span><strong class="bad">{totalWagered.toLocaleString()}</strong>
		</div>
		<div class="row">
			<span>Won:</span><strong class="good">{totalWon.toLocaleString()}</strong>
		</div>
		<div class="row prominent"><span>RTP:</span><strong>{currentRTP}%</strong></div>
		<div class="row"><span>Hit Freq:</span><strong>{hitFrequency}%</strong></div>
		<div class="row">
			<span>Free Spins Triggered:</span><strong>{freeSpinsTriggerCount}</strong>
		</div>
		<div class="row"><span>Free Spins Played:</span><strong>{freeSpinsPlayedCount}</strong></div>
		<div class="row"><span>Empty Slots:</span><strong>{emptySlotPercentage}%</strong></div>

		<button onclick={onResetStats}>Reset Stats</button>
		<button onclick={onDownloadWinLog} disabled={winLogCount === 0}
			>Download Win Log ({winLogCount})</button
		>
		<button onclick={onClearWinLog} disabled={winLogCount === 0}>Clear Win Log</button>
		<button onclick={onTriggerTestFreeSpins} disabled={isFreeSpinMode}>Test Free Spins</button>
	</div>
{/if}

<style>
	.debug-panel {
		position: absolute;
		top: 20px;
		left: 20px;
		background: rgba(0, 0, 0, 0.9);
		color: #00ff00;
		padding: 15px 20px;
		border-radius: 10px;
		font-family: 'Courier New', monospace;
		font-size: 14px;
		border: 2px solid #00ff00;
		box-shadow: 0 4px 15px rgba(0, 255, 0, 0.3);
		z-index: 1500;
		min-width: 220px;
	}

	.title,
	.version {
		font-weight: bold;
		color: #ffd700;
		text-align: center;
	}

	.title {
		font-size: 16px;
		margin-bottom: 5px;
	}

	.version {
		font-size: 14px;
		margin-bottom: 10px;
	}

	.row {
		display: flex;
		justify-content: space-between;
		gap: 16px;
		margin-bottom: 5px;
	}

	.row span {
		color: #aaa;
	}

	.good {
		color: #66ff66;
	}

	.bad {
		color: #ff6666;
	}

	.prominent {
		margin-top: 10px;
		padding-top: 10px;
		border-top: 1px solid #555;
		font-size: 18px;
		font-weight: bold;
	}

	button {
		width: 100%;
		margin-top: 6px;
		padding: 5px;
		background: rgba(100, 255, 100, 0.25);
		color: #fff;
		border: 1px solid #66ff66;
		border-radius: 5px;
		cursor: pointer;
		font-size: 11px;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		border-color: #666;
		background: rgba(100, 100, 100, 0.3);
	}
</style>
