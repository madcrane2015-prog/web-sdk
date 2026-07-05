<script lang="ts">
	import type { WinResult } from '../../game-standalone/types';

	interface Props {
		totalWin: number;
		wins: WinResult[];
		symbolNames: Record<string, string>;
		onClose: () => void;
	}

	let { totalWin, wins, symbolNames, onClose }: Props = $props();
</script>

<div class="win-popup">
	<h2>VOITTO!</h2>
	<div class="amount">{totalWin.toFixed(2)} pistettä</div>

	{#each wins as win}
		<div class="line">
			{win.count} x {symbolNames[win.symbol]} = {win.payout.toFixed(2)} pistettä
		</div>
	{/each}

	{#if wins.length > 0 && wins[0].multiplier > 1}
		<div class="multiplier">{wins[0].multiplier}x WIN MULTIPLIER!</div>
	{/if}

	<button onclick={onClose}>Jatka pelaamista</button>
</div>

<style>
	.win-popup {
		position: fixed;
		top: 50%;
		right: 30px;
		transform: translateY(-50%);
		background: linear-gradient(45deg, #ffd700, #ffed4a);
		color: #333;
		padding: 20px;
		border-radius: 15px;
		font-family: Arial, sans-serif;
		text-align: center;
		z-index: 3000;
		border: 3px solid #ffb700;
		box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
		animation: winPulse 2s infinite;
		max-width: 350px;
	}

	h2 {
		margin: 0 0 10px 0;
		font-size: 2em;
	}

	.amount {
		font-size: 1.5em;
		font-weight: bold;
		margin: 10px 0;
	}

	.line {
		margin: 5px 0;
		font-size: 1.1em;
	}

	.multiplier {
		margin: 10px 0;
		padding: 8px;
		background: rgba(255, 0, 255, 0.2);
		border-radius: 8px;
		border: 2px solid #ff00ff;
		font-size: 1.3em;
		font-weight: bold;
		color: #ff00ff;
	}

	button {
		margin-top: 15px;
		padding: 8px 16px;
		background: #333;
		color: white;
		border: none;
		border-radius: 5px;
		cursor: pointer;
		font-size: 1em;
	}
</style>
