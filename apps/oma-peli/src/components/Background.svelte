<script lang="ts">
	import { Rectangle } from 'pixi-svelte';
	import { getContext } from '../game/context';

	const context = getContext();
</script>

<!-- Oma-peli background - deep purple -->
<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x2e1a4a} zIndex={-3} />
