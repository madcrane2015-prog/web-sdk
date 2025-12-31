<script lang="ts">
	import { Rectangle } from 'pixi-svelte';
	import { getContext } from '../game/context';

	const context = getContext();
</script>

<!-- Oma-peli background - transparent to show HTML background -->
<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x000000} backgroundAlpha={0} zIndex={-3} />
