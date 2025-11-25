<script lang="ts">
	import { type Snippet } from 'svelte';
	import { GlobalStyle } from 'components-ui-html';
	import { Authenticate, LoadI18n, AndroidLayoutFix } from 'components-shared';

	import messagesMap from '../i18n/messagesMap';

	type Props = { children: Snippet };

	const props: Props = $props();
</script>

<AndroidLayoutFix />

<GlobalStyle>
	<Authenticate>
		<LoadI18n {messagesMap}>
			{@render props.children()}
		</LoadI18n>
	</Authenticate>
</GlobalStyle>

