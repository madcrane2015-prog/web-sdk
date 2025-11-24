<script lang="ts">
	import { onMount } from 'svelte';
	import { crossPlatformLayoutCSS } from '../../../utils-layout/src/androidLayoutFix';

	onMount(() => {
		// Inject cross-platform layout fixes CSS
		const style = document.createElement('style');
		style.textContent = crossPlatformLayoutCSS;
		document.head.appendChild(style);

		return () => {
			// Cleanup on unmount
			if (document.head.contains(style)) {
				document.head.removeChild(style);
			}
		};
	});
</script>

<!-- This component automatically applies cross-platform layout fixes for iOS, Android, macOS, Linux -->