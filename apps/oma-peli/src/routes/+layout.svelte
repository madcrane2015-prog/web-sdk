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
		// iPhone cache-busting ja !important flagit
		const timestamp = new Date().getTime();
		document.body.style.setProperty('background-image', `url('${base}/symbols/bg_large.jpg?v=${timestamp}')`, 'important');
		document.body.style.setProperty('background-size', 'cover', 'important');
		document.body.style.setProperty('background-position', 'center', 'important');
		document.body.style.setProperty('background-repeat', 'no-repeat', 'important');
	});
</script>

<svelte:head>
	<style>
		html, body {
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			background-attachment: fixed;
			margin: 0;
			padding: 0;
			width: 100%;
			height: 100%;
			overflow: hidden;
			min-height: 100vh;
			min-height: -webkit-fill-available;
		}
		
		html {
			height: -webkit-fill-available;
		}
		
		/* iOS Safari -webkit-fill-available tuki */
		@supports (-webkit-touch-callout: none) {
			body {
				min-height: -webkit-fill-available;
				background-attachment: scroll;
			}
		}
		
		/* Desktop landscape: peittää aina koko ruudun */
		@media (orientation: landscape) {
			body {
				background-size: cover;
				background-position: center;
			}
		}
		
		/* Mobile portrait: peittää aina koko ruudun */
		@media (orientation: portrait) {
			body {
				background-size: cover;
				background-position: center;
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

