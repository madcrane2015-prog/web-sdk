<script lang="ts">
	interface Props {
		controlsPath: string;
		gameScale: number;
		betAmount: number;
		onDecreaseBet: () => void;
		onIncreaseBet: () => void;
	}

	let { controlsPath, gameScale, betAmount, onDecreaseBet, onIncreaseBet }: Props = $props();
</script>

<div class="bet-controls">
	<div class="label" style:font-size="{12 * gameScale}px" style:height="{16 * gameScale}px">
		BET
	</div>
	<div class="row" style:gap="{5 * gameScale}px" style:height="{44 * gameScale}px">
		<button
			onclick={onDecreaseBet}
			class="bet-button"
			style:width="{40 * gameScale}px"
			style:height="{40 * gameScale}px"
			style:background-image="url('{controlsPath}/Control_lowerbet_select.png')"
			title="Decrease Bet"
			aria-label="Decrease bet"
		></button>
		<div class="amount" style:font-size="{18 * gameScale}px" style:min-width="{80 * gameScale}px">
			{betAmount.toFixed(2)}
		</div>
		<button
			onclick={onIncreaseBet}
			class="bet-button"
			style:width="{40 * gameScale}px"
			style:height="{40 * gameScale}px"
			style:background-image="url('{controlsPath}/Control_upperbet_select.png')"
			title="Increase Bet"
			aria-label="Increase bet"
		></button>
	</div>
</div>

<style>
	.bet-controls {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.label {
		color: #00ff00;
		font-weight: bold;
		line-height: 1;
		display: flex;
		align-items: flex-end;
		padding-bottom: 2px;
	}

	.row {
		display: flex;
		align-items: center;
	}

	.bet-button {
		background-size: contain;
		background-repeat: no-repeat;
		border: none;
		cursor: pointer;
		background-color: transparent;
	}

	.amount {
		color: #fff;
		font-weight: bold;
		text-align: center;
		font-family: 'Courier New', monospace;
	}
</style>
