<script lang="ts">
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	type Props = {
		onloaded: () => void;
	};

	const props: Props = $props();

	// Latausruudun tila
	let gameStarted = $state(false);
	let showSplashScreen = $state(false);
	let canStartGame = $state(false);
	let loadingProgress = $state(0);
	
	// Kun komponentti mountataan, aloita lataus-simulaatio
	onMount(() => {
		// Simuloi latauspalkin eteneminen 3 sekunnin aikana
		const loadingInterval = setInterval(() => {
			loadingProgress += 2; // 2% per 60ms = ~3 sekuntia 100%:iin
			
			if (loadingProgress >= 100) {
				clearInterval(loadingInterval);
				loadingProgress = 100;
				
				// Vaihda splash screeniin
				setTimeout(() => {
					showSplashScreen = true;
					
					// Anna splash screenin näkyä 3 sekuntia ennen kuin voi klikata
					setTimeout(() => {
						canStartGame = true;
					}, 3000);
				}, 500);
			}
		}, 60); // Päivitä 60ms välein
		
		return () => clearInterval(loadingInterval);
	});

	// Käynnistä peli kun splash screeniä klikataan
	function startGame() {
		if (showSplashScreen && canStartGame && !gameStarted) {
			gameStarted = true;
			setTimeout(() => props.onloaded(), 300);
		}
	}
</script>

<!-- Oma-peli loading screen -->
{#if !showSplashScreen}
	<!-- LATAUSRUUTU: Logo + loading bar -->
	<div style="
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background-color: #1a1a1a;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 10000;
	">
		<!-- MadCrane Logo -->
		<img 
			src="{base}/loading_screen/madcrane_loader.png" 
			alt="MadCrane Logo"
			style="
				max-width: 400px;
				width: 80%;
				height: auto;
				margin-bottom: 40px;
			"
		/>
		
		<!-- Loading Bar Container -->
		<div style="
			width: 400px;
			max-width: 80%;
			height: 30px;
			background-color: #222;
			border-radius: 15px;
			overflow: hidden;
			border: 2px solid #444;
		">
			<!-- Loading Bar Progress -->
			<div style="
				width: {loadingProgress}%;
				height: 100%;
				background: linear-gradient(90deg, #ff0000, #ff6600);
				transition: width 0.3s ease;
			"></div>
		</div>
		
		<!-- Loading percentage text -->
		<div style="
			color: #fff;
			font-family: Arial, sans-serif;
			font-size: 18px;
			margin-top: 20px;
		">
			Loading... {Math.round(loadingProgress)}%
		</div>
	</div>
{:else if showSplashScreen && !gameStarted}
	<!-- SPLASH SCREEN: Koko ruutu, klikkaa missä tahansa aloittaaksesi -->
	<div 
		on:click={startGame}
		on:keydown={(e) => e.key === 'Enter' && startGame()}
		role="button"
		tabindex="0"
		style="
			position: fixed;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;
			background-image: url('{base}/loading_screen/Splash_screen_RockabillyReels.jpeg');
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			cursor: {canStartGame ? 'pointer' : 'default'};
			z-index: 10000;
		"
	>
		<!-- Piilotettu teksti accessibility-syistä -->
		<span style="position: absolute; left: -9999px;">Click anywhere to continue</span>
		
		<!-- Näytä "Loading..." jos ei voi vielä klikata -->
		{#if !canStartGame}
			<div style="
				position: absolute;
				bottom: 40px;
				left: 50%;
				transform: translateX(-50%);
				color: #fff;
				font-family: Arial, sans-serif;
				font-size: 20px;
				text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
			">
				Please wait...
			</div>
		{/if}
	</div>
{/if}
