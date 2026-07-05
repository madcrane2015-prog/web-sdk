<script lang="ts">
	import BetControls from './BetControls.svelte';

	interface Props {
		controlsPath: string;
		gameScale: number;
		betAmount: number;
		onDecreaseBet: () => void;
		onIncreaseBet: () => void;
	}

	let props: Props = $props();
</script>

<BetControls {...props} />
