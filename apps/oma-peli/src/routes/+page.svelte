<script lang="ts">
	import { browser } from '$app/environment';
	import HelloPixi from '../components/HelloPixi.svelte';
	import PasswordProtection from '../components/PasswordProtection.svelte';
	import { getLaunchMode } from '../game-standalone/launchMode';
	let stakeLaunch = $state(false);
	if (browser) {
		try { stakeLaunch = getLaunchMode(window.location.search) === 'stake'; }
		catch { stakeLaunch = true; }
	}

	const auditEnabled = browser
		? new URLSearchParams(window.location.search).get('audit') !== null ||
			new URLSearchParams(window.location.search).get('skipIntro') === '1'
		: false;

	let isAuthenticated = $state(auditEnabled);
</script>

{#if stakeLaunch}
	<p role="alert">Peli ei ole vielä saatavilla tässä ympäristössä.</p>
{:else if !auditEnabled}
	<PasswordProtection bind:isAuthenticated />
{/if}

{#if isAuthenticated && !stakeLaunch}
	<HelloPixi />
{/if}
