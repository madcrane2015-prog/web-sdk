<script lang="ts">
	import { type Snippet } from 'svelte';
	import { GlobalStyle } from 'components-ui-html';
	import { Authenticate, LoadI18n, AndroidLayoutFix } from 'components-shared';

	import messagesMap from '../i18n/messagesMap';

	type Props = { children: Snippet };

	const props: Props = $props();
</script>

<svelte:head>
	<style>
		html,
		body {
			width: 100%;
			height: 100%;
			min-height: 100vh;
			min-height: -webkit-fill-available;
			margin: 0;
			padding: 0;
			overflow: hidden;
			background: #000;
		}

		html {
			height: -webkit-fill-available;
		}

		body {
			position: fixed;
			inset: 0;
			touch-action: manipulation;
			overscroll-behavior: none;
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
