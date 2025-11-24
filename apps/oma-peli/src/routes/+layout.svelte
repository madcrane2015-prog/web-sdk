<script lang="ts">
	import { type Snippet } from 'svelte';
	import { GlobalStyle } from 'components-ui-html';
	import { Authenticate, LoaderStakeEngine, LoaderExample, LoadI18n, AndroidLayoutFix } from 'components-shared';
	import { setContext } from '../game/context';

	import messagesMap from '../i18n/messagesMap';

	type Props = { children: Snippet };

	const props: Props = $props();

	let showYourLoader = $state(false);

	const loaderUrlStakeEngine = new URL('../../stake-engine-loader.gif', import.meta.url).href;
	const loaderUrl = new URL('../../loader.gif', import.meta.url).href;

	setContext();
</script>

<AndroidLayoutFix />

<GlobalStyle>
	<Authenticate>
		<LoadI18n {messagesMap}>
			{@render props.children()}
		</LoadI18n>
	</Authenticate>
</GlobalStyle>

<LoaderStakeEngine src={loaderUrlStakeEngine} oncomplete={() => (showYourLoader = true)} />

{#if showYourLoader}
	<LoaderExample src={loaderUrl} />
	<!-- '/loader.gif' is served from static folder of sveltekit -->
	<!-- File location: apps/oma-peli/static/loader.gif -->
{/if}

