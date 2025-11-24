<script lang="ts">
	import { Text, Container } from 'pixi-svelte';
	import { FadeContainer } from 'components-pixi';
	import { MainContainer } from 'components-layout';

	import { getContext } from '../game/context';

	type Props = {
		onloaded: () => void;
	};

	const props: Props = $props();
	const context = getContext();

	// Wait for assets to actually load before proceeding
	let gameStarted = $state(false);
	
	$effect(() => {
		if (context.stateApp.loaded && !gameStarted) {
			gameStarted = true;
			setTimeout(() => props.onloaded(), 500);
		}
	});
</script>

<!-- Oma-peli loading screen -->
<FadeContainer show={!context.stateApp.loaded}>
	<MainContainer>
		<Container
			x={context.stateLayoutDerived.mainLayout().width * 0.5}
			y={context.stateLayoutDerived.mainLayout().height * 0.5}
		>
			<Text
				text="OMA-PELI LOADING..."
				style={{
					fontFamily: 'Arial',
					fontSize: 32,
					fill: 0xffffff,
					fontWeight: 'bold'
				}}
				anchor={{ x: 0.5, y: 0.5 }}
			/>
			{#if !context.stateApp.loaded}
				<Container y={80}>
					<Text
						text="Loading assets..."
						style={{
							fontFamily: 'Arial',
							fontSize: 16,
							fill: 0xcccccc
						}}
						anchor={{ x: 0.5, y: 0.5 }}
					/>
					<Text
						text={`${Math.round(context.stateApp.loadingProgress)}%`}
						style={{
							fontFamily: 'Arial',
							fontSize: 14,
							fill: 0x888888
						}}
						anchor={{ x: 0.5, y: 0.5 }}
						y={30}
					/>
				</Container>
			{/if}
		</Container>
	</MainContainer>
</FadeContainer>
