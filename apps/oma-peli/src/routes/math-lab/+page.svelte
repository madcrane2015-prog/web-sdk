<script lang="ts">
	import { dev } from '$app/environment';
	import HelloPixi from '../../components/HelloPixi.svelte';
	import { EXPERIMENTAL_MATH as model, ExperimentalRoundProvider } from '../../game-standalone/experimentalMath';
	const provider = new ExperimentalRoundProvider();
</script>

{#if dev}
	<aside aria-label="Kokeilumallin säännöt">
		<strong>KOKEILUMALLI · 96 % teoreettinen RTP</strong>
		<span>Peruspeli 66 % + vapaapelit 30 %. Nykyiset osumatiheydet säilyvät.</span>
		<details><summary>Kokeilun voittotaulu</summary>
			<p>Vanhan mallin maksuarvoihin verrattuna korotus on peruspelissä {model.baseScale.toFixed(6)}× ja vapaapeleissä {model.freeScale.toFixed(6)}×. Pelin voittotaulu näyttää jo korotetut maksuarvot. Näytön summat ovat pyöristettyjä; malli laskee täydellä tarkkuudella.</p>
			<p>Ei oikeaa rahaa. Ei uusi bonusmekaniikka: ensimmäinen versio vertaa voitonjaon painotusta.</p>
		</details>
	</aside>
	<HelloPixi roundProvider={provider} />
{:else}
	<p>Kokeilumalli on käytettävissä vain paikallisessa kehitysversiossa.</p>
{/if}

<style>
	aside { position: relative; z-index: 10000; padding: 10px 16px; background: #182b30; color: #fff; font: 14px/1.5 sans-serif; }
	strong, span { display: block; }
	details { max-width: 900px; }
	summary { cursor: pointer; color: #ffd966; }
</style>
