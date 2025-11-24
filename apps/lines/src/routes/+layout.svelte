<script lang="ts">
	import { type Snippet } from 'svelte';
	import { GlobalStyle } from 'components-ui-html';
	import { Authenticate, LoadI18n, AndroidLayoutFix } from 'components-shared';
	import Game from '../components/Game.svelte';
	import { setContext } from '../game/context';

	import messagesMap from '../i18n/messagesMap';

	type Props = { children: Snippet };

	const props: Props = $props();

	setContext();
</script>

<AndroidLayoutFix />

<GlobalStyle>
	<Authenticate>
		<LoadI18n {messagesMap}>
			<Game />
		</LoadI18n>
	</Authenticate>
</GlobalStyle>

<!-- 
<LoaderStakeEngine src={loaderUrlStakeEngine} oncomplete={() => (showYourLoader = true)} />

{#if showYourLoader}
	<LoaderExample src={loaderUrl} />
{/if}
-->

{@render props.children()}