<script lang="ts">
	import { Rectangle } from 'pixi-svelte';
	import { getContext } from '../game/context';

	const context = getContext();
</script>

<!-- Transparent background - actual background is in HTML body -->
<Rectangle {...context.stateLayoutDerived.canvasSizes()} backgroundColor={0x000000} backgroundAlpha={0} zIndex={-3} />
