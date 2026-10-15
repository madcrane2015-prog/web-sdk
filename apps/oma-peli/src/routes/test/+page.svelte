<script lang="ts">
	import HelloPixi from '../../components/HelloPixi.svelte';
	import { VERSION } from '../../version';
</script>

<aside>TESTI {VERSION} · RTP 96 % · Leikkisaldo, ei oikeaa rahaa</aside>
<HelloPixi />

<style>
	aside { position: fixed; top: max(4px, env(safe-area-inset-top)); left: 8px; max-width: calc(100% - 110px); z-index: 10000; padding: 4px 8px; border-radius: 4px; background: #182b30; color: #fff; font: 11px/1.4 sans-serif; pointer-events: none; box-sizing: border-box; }
</style>
