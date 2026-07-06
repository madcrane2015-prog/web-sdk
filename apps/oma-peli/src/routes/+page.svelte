<script lang="ts">
	import { browser } from '$app/environment';
	import HelloPixi from '../components/HelloPixi.svelte';
	import PasswordProtection from '../components/PasswordProtection.svelte';

	const auditEnabled = browser
		? new URLSearchParams(window.location.search).get('audit') !== null ||
			new URLSearchParams(window.location.search).get('skipIntro') === '1'
		: false;

	let isAuthenticated = $state(auditEnabled);
</script>

{#if !auditEnabled}
	<PasswordProtection bind:isAuthenticated />
{/if}

{#if isAuthenticated}
	<HelloPixi />
{/if}
