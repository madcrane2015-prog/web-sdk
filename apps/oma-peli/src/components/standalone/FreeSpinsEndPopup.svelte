<script lang="ts">
	interface Props {
		amount: number;
		onContinue: () => void;
	}

	let { amount, onContinue }: Props = $props();
</script>

<div class="overlay">
	<div class="dialog">
		<h1>VAPAAPELIT PÄÄTTYIVÄT!</h1>
		<div class="label">Voitit yhteensä:</div>
		<div class="amount">{amount.toFixed(2)}</div>
		<button onclick={onContinue}>JATKA PERUSPELIIN</button>
	</div>
</div>

<style>
	.overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 5000;
	}

	.dialog {
		background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
		color: white;
		padding: 40px;
		border-radius: 20px;
		text-align: center;
		border: 3px solid #ffd700;
		box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
		max-width: 500px;
		font-family: Arial, sans-serif;
	}

	h1 {
		margin: 0 0 20px 0;
		font-size: 2.5em;
		color: #ffd700;
		text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
	}

	.label {
		font-size: 1.2em;
		margin: 20px 0;
		color: #aaa;
	}

	.amount {
		font-size: 3em;
		font-weight: bold;
		color: #00ff00;
		text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
		margin: 20px 0;
	}

	button {
		margin-top: 30px;
		padding: 15px 40px;
		background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
		color: #000;
		border: none;
		border-radius: 10px;
		cursor: pointer;
		font-size: 1.3em;
		font-weight: bold;
		box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
		transition:
			transform 0.2s,
			box-shadow 0.2s;
	}

	button:hover {
		transform: scale(1.05);
		box-shadow: 0 6px 20px rgba(255, 215, 0, 0.6);
	}
</style>
