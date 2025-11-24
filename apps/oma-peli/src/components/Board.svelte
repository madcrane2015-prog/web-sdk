<script lang="ts" module>
	export type EmitterEventBoard = { type: 'boardShow' } | { type: 'boardHide' };
</script>

<script lang="ts">
	import { Container, Rectangle } from 'pixi-svelte';
	import { getContext } from '../game/context';

	const context = getContext();
	const canvasSizes = context.stateLayoutDerived.canvasSizes;

	let show = $state(true);

	context.eventEmitter.subscribeOnMount({
		boardShow: () => (show = true),
		boardHide: () => (show = false),
	});
</script>

{#if show}
	<Container x={canvasSizes().width / 2} y={canvasSizes().height / 2}>
		<!-- Simple placeholder for your game -->
		<Rectangle
			width={400}
			height={300}
			tint={0x444444}
			anchor={{ x: 0.5, y: 0.5 }}
		/>
	</Container>
{/if}
