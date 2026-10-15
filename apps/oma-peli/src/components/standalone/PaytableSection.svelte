<script lang="ts">
	import { SYMBOL_PAYTABLE, PAYTABLE_GROUPS, CENTER_WILD_PROBABILITY, MIN_SCATTERS } from '../../game-standalone/mathConfig';
	import { ACTIVE_MATH } from '../../game-standalone/activeMath';
	let { payoutMode = 'balanced96' }: { payoutMode?: 'balanced96' | 'legacy' } = $props();
	const baseScale = $derived(payoutMode === 'balanced96' ? ACTIVE_MATH.baseScale : 1);
	const freeScale = $derived(payoutMode === 'balanced96' ? ACTIVE_MATH.freeScale : 1);
</script>

<section class="paytable-section" aria-labelledby="paytable-section-title">
	<h3 id="paytable-section-title">PAYTABLE (81 WAYS)</h3>
	{#if payoutMode === 'balanced96'}<p class="summary">TESTIVERSIO 1.7.0 · Teoreettinen RTP 96 %<br />Leikkisaldo, ei oikeaa rahaa.</p>{/if}
	<p class="summary">Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br />Vähintään 3 symbolia tarvitaan voittoon</p>
	<div class="symbol-groups">
		{#each PAYTABLE_GROUPS as group}
			<div class="symbol-group" class:premium={group.title === 'PREMIUM SYMBOLS'} class:blue={group.title === 'BLUE SYMBOLS'} class:red={group.title === 'RED SYMBOLS'}>
				<h4>{group.title}</h4>
				{#each group.symbols as [key, name]}
					<p>{name} · Peruspeli: 3x={((SYMBOL_PAYTABLE[key][3] ?? 0) * baseScale).toFixed(4)} | 4x={((SYMBOL_PAYTABLE[key][4] ?? 0) * baseScale).toFixed(4)} | 5x={((SYMBOL_PAYTABLE[key][5] ?? 0) * baseScale).toFixed(4)}</p>
					{#if payoutMode === 'balanced96'}<p>Vapaapelit: 3x={((SYMBOL_PAYTABLE[key][3] ?? 0) * freeScale).toFixed(4)} | 4x={((SYMBOL_PAYTABLE[key][4] ?? 0) * freeScale).toFixed(4)} | 5x={((SYMBOL_PAYTABLE[key][5] ?? 0) * freeScale).toFixed(4)}</p>{/if}
				{/each}
			</div>
		{/each}
		<div class="symbol-group special">
			<h4>SPECIAL SYMBOLS</h4>
			<p>WILD - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla ({(CENTER_WILD_PROBABILITY * 100).toFixed(0)}%).</p>
			<p>SCATTER - Triggeröi {MIN_SCATTERS}-12 FREE SPINS ({MIN_SCATTERS}-12 scatteria)</p>
			<p>Vapaapeleissä punaisia symboleja ei arvota; premium-symbolien paino kasvaa. Samat scatter-säännöt voivat antaa lisävapaapelejä.</p>
		</div>
	</div>
	<p class="note">Maksuarvot × panos × ways × kierroksen satunnaiskerroin.<br />Peruspelin kerroin 1× / 2× / 3×, vapaapelien 3× / 5× / 10×.<br /><span>Ways = Symbolien määrä per kela kerrottuna. Symbolista maksetaan vain pisin osuma.</span><br />Taulukon arvot ovat näyttöpyöristettyjä; laskenta käyttää täyttä tarkkuutta. Sama koskee kahden desimaalin saldonäyttöä.</p>
</section>

<style>
	.paytable-section h3 {
		margin: 0 0 15px;
		color: #ffd700;
		font-size: 1.2em;
		letter-spacing: 0;
	}

	.summary {
		margin: 0 0 15px;
		text-align: center;
		color: #aaa;
		font-size: 0.9em;
		line-height: 1.4;
	}

	.symbol-groups {
		display: grid;
		gap: 10px;
	}

	@media (min-width: 620px) {
		.symbol-groups {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.symbol-group {
		background: rgba(255, 255, 255, 0.1);
		padding: 10px;
		border-radius: 8px;
		border-left: 4px solid var(--accent);
		line-height: 1.38;
	}

	.symbol-group h4 {
		margin: 0 0 5px;
		font-size: 1.08em;
		font-weight: bold;
		color: var(--accent);
	}

	.symbol-group p {
		margin: 5px 0;
		font-size: 0.92em;
		font-variant-numeric: tabular-nums;
	}

	.premium {
		--accent: #ffd700;
	}

	.blue {
		--accent: #00bfff;
	}

	.red {
		--accent: #ff6666;
	}

	.special {
		--accent: #ff00ff;
	}

	.note {
		margin: 20px 0 0;
		text-align: center;
		font-size: 0.9em;
		color: #aaa;
	}

	.note span {
		color: #ffd700;
	}
</style>
