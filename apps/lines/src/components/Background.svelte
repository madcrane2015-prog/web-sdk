<script lang="ts">
	import { Rectangle } from 'pixi-svelte';
	import { getContext } from '../game/context';

	const context = getContext();
</script>

<!-- Simple dark background for Lines game -->
<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x1a1a2e} zIndex={-3} />
