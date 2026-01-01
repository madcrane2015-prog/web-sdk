<script lang="ts">
	import { type Snippet } from 'svelte';
	import { onMount } from 'svelte';
	import { GlobalStyle } from 'components-ui-html';
	import { Authenticate, LoadI18n, AndroidLayoutFix } from 'components-shared';
	import { base } from '$app/paths';

	import messagesMap from '../i18n/messagesMap';

	type Props = { children: Snippet };

	const props: Props = $props();
	
	// Aseta taustakuva JavaScriptillä, jotta polku toimii sekä localhostissa että GitHub Pagesissa
	onMount(() => {
		document.body.style.backgroundImage = `url('${base}/symbols/bg_large.jpg')`;
	});
</script>

<svelte:head>
	<style>
		body {
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			background-attachment: fixed;
			margin: 0;
			padding: 0;
			width: 100vw;
			height: 100vh;
			overflow: hidden;
		}
		
		/* Desktop landscape: täytä leveys, leikkaa alhaalta */
		@media (orientation: landscape) {
			body {
				background-size: 100% auto;
				background-position: top center;
			}
		}
		
		/* Mobile portrait: täytä korkeus, leikkaa oikealta */
		@media (orientation: portrait) {
			body {
				background-size: auto 100%;
				background-position: top left;
			}
		}
	</style>
</svelte:head>

<AndroidLayoutFix />

<GlobalStyle>
	<Authenticate>
		<LoadI18n {messagesMap}>
			{@render props.children()}
		</LoadI18n>
	</Authenticate>
</GlobalStyle>

