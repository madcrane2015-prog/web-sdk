<script lang="ts">
	import { dev } from '$app/environment';
	import VinylWinAnimation from '../../components/VinylWinAnimation.svelte';
	let animation: { show: (level: 'small' | 'medium' | 'jackpot', amount: number, durationMs?: number) => void };
</script>

{#if dev}
	<div class="preview">
		<nav aria-label="Win animation preview">
			<button onclick={() => animation.show('small', 30, 15000)}>Small · 5 vinyls</button>
			<button onclick={() => animation.show('medium', 90, 15000)}>Medium · 12 vinyls</button>
			<button onclick={() => animation.show('jackpot', 300, 15000)}>Jackpot · 24 vinyls</button>
		</nav>
		<VinylWinAnimation bind:this={animation} winLevel="small" vinylEndScale={0.3} sparkleScale={1} />
	</div>
{:else}
	<p>Esikatselu on käytettävissä vain paikallisesti.</p>
{/if}

<style>
	.preview { position: relative; width: 100%; height: 100dvh; background: #163236; overflow: hidden; }
	nav { position: absolute; z-index: 10000; top: 16px; left: 16px; right: 16px; display: flex; flex-wrap: wrap; gap: 8px; }
	button { padding: 12px 16px; border: 1px solid #ffd966; border-radius: 8px; color: #ffd966; background: #102326; cursor: pointer; }
</style>
