<script lang="ts">
	// Svelte lifecycle ja routing
	import { onMount } from 'svelte';
	import { base } from '$app/paths';

	// Game version
	import { VERSION } from '../version';
	const GAME_VERSION = VERSION;

	// Win animation component
	import VinylWinAnimation from './VinylWinAnimation.svelte';

	// Loading screen component
	import LoadingScreen from './LoadingScreen.svelte';

	// Layout system - NEW!
	import {
		getCurrentLayout,
		getCurrentDeviceType,
		calculateControlPanelPosition,
		createViewportModel,
		applyControlPanelSafeArea,
		getSafeRightPosition,
		getSafeTopPosition,
	} from '../utils/layoutUtils';
	import { BET_LEVELS } from '../game-standalone/mathConfig';
	import {
		calculateWins,
		getReelIndex,
		getReelPosition,
		randomSymbol as getRandomSymbol,
	} from '../game-standalone/math';
	import {
		configureLogoTexture,
		createPixiApplication,
		createReelMask,
		destroyPixiApplication,
	} from '../game-standalone/pixiRuntime';
	import { Reel as StandaloneReel } from '../game-standalone/reel';
	import {
		SYMBOL_KEYS,
		type SpinSpeed,
		type SymbolKey,
		type WinResult,
	} from '../game-standalone/types';

	// ===== PIXIJS KIRJASTON KOMPONENTIT =====
	// PixiJS on 2D-grafiikkakirjasto joka käyttää WebGL:ää
	import {
		Graphics, // Geometristen muotojen piirtäminen (ympyrät, neliöt, viivat)
		Container, // Elementtien ryhmittely - toimii kuten HTML div
		Sprite, // Kuvien (tekstuurien) näyttäminen ruudulla
		Texture, // Kuvatekstuurit - lataa ja tallentaa kuvia muistiin
		Assets, // Modernit Asset lataukset (PixiJS v8)
		Text, // Tekstin näyttäminen pelissä
		TextStyle, // Tekstin tyyliasetukset (fontti, koko, väri jne.)
	} from 'pixi.js';

	// ===== PELIN PERUSKONFIGURAATIO =====
	// Tämä on WAYS-peli, ei perinteinen paylines-peli!
	const COLS = 5; // Sarakkeiden määrä vaakasuunnassa (5 pystyriviä symboleja)
	const ROWS = 3; // Rivien määrä per sarake (3 vaakarivi symboleja per sarake)
	const TOTAL_REELS = 13; // Yhteensä 13 erillistä kiekkoa:
	// Layout: 3×3×1×3×3 (vasen 3 riviä, keskellä 1 rivi, oikea 3 riviä)
	// Jokaisella ruudulla on oma kiekko joka pyörii itsenäisesti!

	// ===== LAYOUT JÄRJESTELMÄ (UUSI!) =====
	// Layout state - päivittyy ikkunan koon muuttuessa
	let layoutUpdateTrigger = $state(0);
	let viewportModel = $state(createViewportModel({ width: 1445, height: 1000 }));
	const currentLayout = $derived(() => {
		layoutUpdateTrigger;
		return getCurrentLayout();
	});
	const deviceType = $derived(() => {
		layoutUpdateTrigger;
		return getCurrentDeviceType();
	});

	// ===== SÄÄDETTÄVÄT PARAMETRIT =====
	// Canvas-mitat tulevat nyt layout-konfiguraatiosta (layoutConfig.ts)
	const CANVAS_WIDTH = $derived(currentLayout().gameArea.width);
	const CANVAS_HEIGHT = $derived(currentLayout().gameArea.height);

	// Kiekkojen koko ja sijainti - uudelle 1445x1000 taustalle
	const SCALE_MULTIPLIER = 1.75; // Symbolien koko kerroin (1.0 = normaali)
	const OFFSET_X = $derived(currentLayout().gameArea.offsetX); // Layout-järjestelmästä
	const OFFSET_Y = $derived(currentLayout().gameArea.offsetY); // Layout-järjestelmästä

	// KESKIKIEKON (indeksi 6) erikoiskohdistus
	const MIDDLE_REEL_Y_OFFSET = 175; // Keskikiekon Y-siirtymä (+ = alaspäin, - = ylöspäin)
	const MIDDLE_REEL_X_OFFSET = -5; // Keskikiekon X-siirtymä (+ = oikealle, - = vasemmalle)

	// SPIN-napin sijainti (uudelle 1445x1000 taustalle)
	const BUTTON_X = 720; // Napin X-koordinaatti
	const BUTTON_Y = 750; // Napin Y-koordinaatti

	// ===== CONTROL PANEL ASETUKSET =====
	// HUOM: Control panel -arvot tulevat nyt layout-järjestelmästä!
	// Säädä parametreja tiedostossa: src/config/layoutConfig.ts
	const REEL_FRAMES_X = 250; // Kehysten X-sijainti (sama kuin kehyksissä)
	const REEL_FRAMES_WIDTH = 1100; // Kehysten leveys (leveämpi mobiilia varten)

	// LOGO-asetukset (helppo säätää)
	const LOGO_SCALE = 0.5; // Logon koko kerroin (1.0 = alkuperäinen koko)
	const LOGO_X = 30; // Logon X-siirtymä keskikohdasta (+ = oikealle, - = vasemmalle)
	const LOGO_Y = -10; // Logon Y-koordinaatti (+ = alaspäin, - = ylöspäin)

	// HUOM: Tausta-asetukset tulevat nyt GameBackground-komponentista!
	// Säädä parametreja tiedostossa: src/config/layoutConfig.ts
	// =====================================

	// ===== SYMBOLIN MITAT =====
	// Nämä määrittävät kuinka isoja symbolit näyttävät pelissä
	const baseSymbolWidth = 100; // Perusleveys pikseleinä (ennen skaalaus-kerrointa)
	const symbolWidth = Math.round(baseSymbolWidth * SCALE_MULTIPLIER); // Lopullinen leveys (skaalattu)
	const symbolHeight = Math.round(symbolWidth * (700 / 760)); // Korkeus (sama suhde kuin alkuperäiset kuvat)
	const cellSize = symbolWidth; // Ruudun koko (käytetään vanhoissa laskuissa, säilytetty yhteensopivuuden takia)
	const gap = 10; // Väli symbolien välillä pikseleinä
	const ROW_HEIGHT = symbolHeight + gap; // Yhden rivin kokonaiskorkeus (symboli + väli)

	// URL jokaiselle symbolille (static/symbols/...)
	// GitHub Pages: käytä suoria polkuja, localhost: käytä base-polkuja
	const isGitHubPages =
		typeof window !== 'undefined' && window.location.hostname.includes('github.io');
	const symbolPath = isGitHubPages ? '/web-sdk/oma-peli/symbols' : `${base}/symbols`;
	const controlsPath = isGitHubPages ? '/web-sdk/oma-peli/controls' : `${base}/controls`;

	const SYMBOL_URLS: Record<SymbolKey, string> = {
		a: `${symbolPath}/Blue_hotrod.jpg`, // Sininen hotrod
		b: `${symbolPath}/Blue_jacket.jpg`, // Sininen takki
		c: `${symbolPath}/Blue_rollers.jpg`, // Siniset rullat
		d: `${symbolPath}/Blue_speakers.jpg`, // Siniset kaiuttimet
		e: `${symbolPath}/Premium_blonde.jpg`, // Premium blondi
		f: `${symbolPath}/Premium_brunette.jpg`, // Premium brunette
		g: `${symbolPath}/Premium_rocker.jpg`, // Premium rocker
		h: `${symbolPath}/New_Wild.jpg`, // WILD symbol
		i: `${symbolPath}/Red_burger.jpg`, // Punainen hampurilainen
		j: `${symbolPath}/Red_fries.jpg`, // Punaiset ranskalaiset
		k: `${symbolPath}/Red_milkshake.jpg`, // Punainen milkshake
		l: `${symbolPath}/Scatter.jpg`, // Scatter symboli
		emptyslot: `${symbolPath}/Emptyslot.jpg`, // Tyhjä ruutu - VAIN keskikiekolla!
	};

	// Uudet kuvien URLit
	const BACKGROUND_URL = `${symbolPath}/bg_base.jpg`; // Uusi taustakuva (1445x1000)
	const REEL_FRAMES_URL = `${symbolPath}/ReelFrames.png?v=${Date.now()}`; // Kiekkojen kehykset (cache busting)
	const LOGO_URL = `${symbolPath}/RockABillyReels_logo.png`; // Pelin logo

	// ===== ÄÄNIEFEKTIT =====
	// Äänitiedostojen URLit
	const SOUND_URLS = {
		spin: `${base}/sounds/spin.mp3`, // SPIN-napin ääni (whirr)
		stop: `${base}/sounds/stop.mp3`, // Kiekon pysähtymisääni (chunk)
		win: `${base}/sounds/win.mp3`, // Voittoääni (tulevaisuudessa)
	};

	// Äänien hallinta
	let soundEnabled = $state(true); // Voi käyttäjä halutessaan mykistää
	let audioElements: Record<string, HTMLAudioElement> = {};

	// ===== MUSIIKKIJÄRJESTELMÄ (v1.0.9) =====
	// Howler.js-pohjaiset musiikkisoittimet
	let backgroundMusic: any = null; // Taustamusiikki (rockabilly loop)
	let freeSpinsMusic: any = null; // Free spins musiikki
	let drumHitSound: any = null; // Rumpuisku kiekkojen pysähtyessä
	let winThemeSound: any = null; // Voittoteema

	// BPM-synkronointi
	const MUSIC_BPM = 130; // Rockabilly tempo (beats per minute)
	const BEAT_INTERVAL = 60 / MUSIC_BPM; // Sekunteja per tahti (~0.46s)
	const FRAMES_PER_BEAT = Math.round(BEAT_INTERVAL * 60); // Frameja per tahti (60 FPS)

	// Musiikin tilanhallinta
	let musicEnabled = $state(true); // Musiikin on/off toggle
	let musicLoaded = $state(false); // Onko musiikki ladattu

	// ===== CONTROL PANEL TILA (v1.1.0) =====
	let isFastPlayEnabled = $state(false); // Nopea pelitila
	let controlPanelWidth = $state(1100); // Paneelin leveys (päivittyy dynaamisesti)
	let reelFramesSpriteRef: any = null; // Viittaus reel frames spriteen

	// ===================================================================
	// SPIN SPEED KONFIGURAATIO
	// ===================================================================
	// Määrittää pelikierroksen kokonaisnopeuden (stop delay per kiekko)
	// Pienempi arvo = nopeampi kierros (kiekot pysähtyvät nopeammin)
	// Suurempi arvo = hitaampi kierros (kiekot pysähtyvät hitaammin)
	//
	// HUOM: Tämä EI muuta kiekkojen pyörimisnopeutta, vaan pysähtymisväliä!
	// Kiekkojen pyörimisnopeus on aina sama (medium = 35 px/frame)
	const SPIN_SPEED_CONFIG = {
		fast: 3, // Fast: ~3 sec (15 frames/kiekko * 13 kiekkoa = 195 frames = ~3.25s @ 60fps)
		medium: 7, // Medium: ~5 sec (23 frames/kiekko * 13 kiekkoa = 299 frames = ~5s @ 60fps)
		slow: 18, // Slow: ~7 sec (32 frames/kiekko * 13 kiekkoa = 416 frames = ~6.9s @ 60fps)
	};

	let spinSpeed = $state<SpinSpeed>('medium'); // Nykyinen spinninopeus
	let showSpinSpeedMenu = $state(false); // Näytetäänkö nopeusvalikko

	// Arvo satunnainen loop-tiedosto (1-20) peruspelille
	let randomLoopNumber = $state(Math.floor(Math.random() * 20) + 1);

	// Musiikkitiedostojen URLit
	const MUSIC_URLS = {
		background: () => `${base}/music/rockabilly reels loop ${randomLoopNumber}.mp3`, // Satunnainen loop peruspelille
		freeSpins: `${base}/music/rockabilly-loop_long.mp3`, // Free spins musiikki
		drumHit: `${base}/music/drum-hit.mp3`, // Rumpuisku
		winTheme: `${base}/music/win-stinger.mp3`, // Voittoteema
	};

	// Alusta musiikkijärjestelmä Howler.js:llä
	function initializeMusic() {
		if (typeof window === 'undefined' || !(window as any).Howl) {
			console.warn('Howler.js not loaded yet, retrying in 500ms...');
			setTimeout(initializeMusic, 500);
			return;
		}

		const Howl = (window as any).Howl;

		try {
			// Taustamusiikki peruspelille (looppaa jatkuvasti)
			backgroundMusic = new Howl({
				src: [MUSIC_URLS.background()],
				loop: true,
				volume: 0.3, // 30% volume
				onload: () => {
					console.log('✅ Background music loaded (loop #' + randomLoopNumber + ')');
					musicLoaded = true;
				},
				onloaderror: (id: any, error: any) => {
					console.warn('⚠️ Background music not found:', error);
				},
			});

			// Free spins musiikki
			freeSpinsMusic = new Howl({
				src: [MUSIC_URLS.freeSpins],
				loop: true,
				volume: 0.3,
				onload: () => console.log('✅ Free spins music loaded'),
				onloaderror: (id: any, error: any) => console.warn('⚠️ Free spins music not found:', error),
			});

			// Rumpuisku-efekti (soitetaan kiekkojen pysähtyessä)
			drumHitSound = new Howl({
				src: [MUSIC_URLS.drumHit],
				volume: 0.5,
				onload: () => console.log('✅ Drum hit sound loaded'),
				onloaderror: () => console.warn('⚠️ Drum hit sound not found'),
			});

			// Voittoteema (soitetaan isoille voitoille)
			winThemeSound = new Howl({
				src: [MUSIC_URLS.winTheme],
				volume: 0.6,
				onload: () => console.log('✅ Win theme loaded'),
				onloaderror: () => console.warn('⚠️ Win theme not found'),
			});

			console.log('🎵 Music system initialized (generate music with Suno AI)');
		} catch (error) {
			console.error('Failed to initialize music system:', error);
		}
	}

	// ===== MUSIIKKIHALLINTAFUNKTIOT =====
	// Nämä funktiot hallitsevat pelin taustamusiikkia Howler.js:n avulla

	// Käynnistä taustamusiikki (valitaan peruspeli tai free spins musiikki)
	function startBackgroundMusic() {
		const currentMusic = isFreeSpinMode ? freeSpinsMusic : backgroundMusic;
		if (currentMusic && musicEnabled && !currentMusic.playing()) {
			currentMusic.play();
			console.log('🎵 ' + (isFreeSpinMode ? 'Free spins' : 'Background') + ' music started');
		}
	}

	// Vaihda uusi satunnainen loop peruspelille
	// Tätä kutsutaan kun pelaaja aloittaa uuden kierroksen
	function changeBackgroundLoop() {
		if (isFreeSpinMode) return; // Ei vaihdeta free spins -tilassa

		// Valitse uusi satunnainen loop (1-20)
		const newLoopNumber = Math.floor(Math.random() * 20) + 1;

		// Jos sama kuin edellinen, arvo uusi (vältetään samaa kappaletta peräkkäin)
		if (newLoopNumber === randomLoopNumber) {
			randomLoopNumber = (newLoopNumber % 20) + 1;
		} else {
			randomLoopNumber = newLoopNumber;
		}

		console.log('🎵 Changing to loop #' + randomLoopNumber);

		// Pysäytä vanha musiikki (fade out 200ms)
		if (backgroundMusic) {
			if (backgroundMusic.playing()) {
				backgroundMusic.fade(backgroundMusic.volume(), 0, 200);
				setTimeout(() => {
					backgroundMusic.stop();
					backgroundMusic.unload();
				}, 200);
			} else {
				backgroundMusic.unload();
			}
		}

		// Lataa uusi loop Howler.js:llä
		const Howl = (window as any).Howl;
		if (Howl) {
			backgroundMusic = new Howl({
				src: [MUSIC_URLS.background()],
				loop: true,
				volume: 0.3,
				onload: () => {
					console.log('✅ New background music loop #' + randomLoopNumber + ' loaded');
					if (musicEnabled && !isFreeSpinMode) {
						// Käynnistä musiikki heti (300ms viive että fade out ehtii)
						setTimeout(() => {
							if (backgroundMusic && !backgroundMusic.playing()) {
								backgroundMusic.play();
							}
						}, 300);
					}
				},
				onloaderror: (id: any, error: any) => {
					console.warn('⚠️ Failed to load loop #' + randomLoopNumber + ':', error);
				},
			});
		}
	}

	// Pysäytä taustamusiikki
	function stopBackgroundMusic() {
		if (backgroundMusic && backgroundMusic.playing()) {
			backgroundMusic.fade(backgroundMusic.volume(), 0, 500); // Fade out 500ms
			setTimeout(() => backgroundMusic.stop(), 500);
		}
		if (freeSpinsMusic && freeSpinsMusic.playing()) {
			freeSpinsMusic.fade(freeSpinsMusic.volume(), 0, 500);
			setTimeout(() => freeSpinsMusic.stop(), 500);
		}
	}

	// Vaihda musiikkia free spins -tilan mukaan
	function switchMusic() {
		// Pysäytä nykyinen musiikki
		if (backgroundMusic && backgroundMusic.playing()) {
			backgroundMusic.fade(backgroundMusic.volume(), 0, 500);
			setTimeout(() => backgroundMusic.stop(), 500);
		}
		if (freeSpinsMusic && freeSpinsMusic.playing()) {
			freeSpinsMusic.fade(freeSpinsMusic.volume(), 0, 500);
			setTimeout(() => freeSpinsMusic.stop(), 500);
		}

		// Aloita uusi musiikki pienen viiveen jälkeen
		setTimeout(() => {
			if (musicEnabled) {
				startBackgroundMusic();
			}
		}, 600);
	}

	// Feidaa musiikki alas kierroksen lopussa
	function fadeOutMusicAfterSpin() {
		if (backgroundMusic && backgroundMusic.playing()) {
			const currentVolume = backgroundMusic.volume();
			backgroundMusic.fade(currentVolume, 0, 1000); // Fade out 1 second
			setTimeout(() => {
				backgroundMusic.stop();
				backgroundMusic.volume(0.3); // Reset volume for next spin
			}, 1000);
		}
	}

	// Glare effect for play button
	let playButtonGlareActive = $state(false);
	function triggerPlayButtonGlare() {
		playButtonGlareActive = false;
		setTimeout(() => {
			playButtonGlareActive = true;
		}, 10);
	}

	// Vinyl win animation reference
	let vinylWinAnimationRef: any = null;

	// Vinyl win animation configuration
	const vinylAnimationConfig = {
		vinylStartScale: 0.01, // Aloituskoko (0.01 = hyvin pieni keskipiste)
		vinylEndScale: 0.05, // Lopetuskoko (0.15 = pienempi loppukoko)
		sparkleScale: 0.1, // Tähtien koko (0.6 = pienempi)
	};

	// Toggle musiikin on/off
	function toggleMusic() {
		musicEnabled = !musicEnabled;
		if (musicEnabled) {
			startBackgroundMusic();
		} else {
			stopBackgroundMusic();
		}
	}

	// Toggle äänitehosteien on/off
	function toggleSound() {
		soundEnabled = !soundEnabled;
	}

	// Soita rumpuisku
	function playDrumHit() {
		if (drumHitSound && musicEnabled && soundEnabled) {
			drumHitSound.play();
		}
	}

	// Soita voittoteema
	function playWinTheme() {
		if (winThemeSound && musicEnabled && soundEnabled) {
			winThemeSound.play();
		}
	}

	// ===== PELIN TILA JA MUUTTUJAT =====
	// Nämä muuttujat hallitsevat pelin globaalia tilaa ja resursseja

	// Ladatut tekstuurit (kuvat muutettuna PixiJS Texture-muotoon)
	// Tekstuurit ladataan Assets.load():lla ja säilytetään muistissa
	let symbolTextures: Record<SymbolKey, Texture> | null = null; // Kaikki 13 symbolia
	let backgroundTexture: Texture | null = null; // Taustakuva (bg_base.jpg)
	let reelFramesTexture: Texture | null = null; // Kiekkojen kehykset (ReelFrames.png)
	let logoTexture: Texture | null = null; // Pelin logo (RockABillyReels_logo.png)

	// Debug tila - näyttää lataustilanteen ja mahdolliset virheet
	let loadingStatus = $state('Initializing...'); // Nykyinen latausvaihe
	let errorMessage = $state(''); // Virheviesti jos lataus epäonnistuu
	let debugInfo: string[] = []; // Kootut debug-tiedot
	let gameReady = $state(false); // Onko peli valmis aloitettavaksi (loading screen valmis)

	// ===== CREDIT JÄRJESTELMÄ =====
	// Pelaajan saldo ja panostus
	let balance = $state(1000); // Aloitussaldo (voi muuttaa)

	// Bet levels - ennalta määritellyt panostasot
	// Pelaaja voi valita näistä + ja - napeilla
	let currentBetIndex = $state(5); // Aloitetaan indeksistä 5 = 3.0 (default bet)
	let betAmount = $derived(BET_LEVELS[currentBetIndex]); // Panoksen määrä per spin (automaattisesti laskettu)
	let lastWin = $state(0); // Viimeisin voittosumma (näytetään UI:ssa)
	const MIN_BET = BET_LEVELS[0]; // Pienin mahdollinen panos (0.4)
	const MAX_BET = BET_LEVELS[BET_LEVELS.length - 1]; // Suurin mahdollinen panos (100)

	// Autoplay-toiminnallisuus
	let isAutoPlaying = $state(false);
	let autoPlayRoundsLeft = $state(0);
	let showAutoPlayMenu = $state(false);
	let showDebugPanel = $state(false); // Debug-paneelin näkyvyys
	let winPopupShownAt = $state(0); // Timestamp kun popup tuli näkyviin
	let isProcessingAutoPlay = false; // Lukko estää päällekkäiset kutsut
	let autoPlayTimeoutId: number | null = null; // Tallenna timeout ID
	let winsCheckedForCurrentSpin = false; // Estää voittojen tarkistuksen useaan kertaan

	// RTP-seuranta
	let totalRounds = $state(0);
	let totalWagered = $state(0);
	let totalWon = $state(0);
	let totalWins = $state(0); // Voittojen määrä
	let currentRTP = $derived(
		totalWagered > 0 ? ((totalWon / totalWagered) * 100).toFixed(2) : '0.00',
	);
	let hitFrequency = $derived(
		totalRounds > 0 ? ((totalWins / totalRounds) * 100).toFixed(2) : '0.00',
	);

	// Free spins state
	let isFreeSpinMode = $state(false);
	let freeSpinsRemaining = $state(0);
	let freeSpinsTotalWon = $state(0);
	let freeSpinsTriggerCount = $state(0); // Kuinka monta kertaa vapaapelit alkaneet
	let freeSpinsPlayedCount = $state(0); // Kuinka monta vapaapelikierrosta yhteensä pelattu

	// Emptyslot tracking
	let totalVisibleSymbols = $state(0); // Kaikki näkyvät symbolit yhteensä
	let totalEmptySlots = $state(0); // Emptyslot-symbolit yhteensä
	let emptySlotPercentage = $derived(
		totalVisibleSymbols > 0 ? ((totalEmptySlots / totalVisibleSymbols) * 100).toFixed(2) : '0.00',
	);

	// Win logging system (v1.0.5)
	// Logs all winning rounds with details: round number, timestamp, symbols, payouts
	// Can be downloaded as .txt file for analysis
	let winLog: string[] = $state([]);

	function logWin(roundNumber: number, wins: WinResult[], totalPayout: number) {
		const timestamp = new Date().toLocaleString('fi-FI');
		let logEntry = `\n${'='.repeat(60)}\n`;
		logEntry += `ROUND #${roundNumber} - ${timestamp}\n`;
		logEntry += `Mode: ${isFreeSpinMode ? 'FREE SPINS' : 'BASE GAME'}\n`;
		logEntry += `${'='.repeat(60)}\n`;

		wins.forEach((win, index) => {
			logEntry += `\nWin ${index + 1}:\n`;
			logEntry += `  Symbol: ${win.symbol} (${SYMBOL_NAMES[win.symbol]})\n`;
			logEntry += `  Count: ${win.count} symbols\n`;
			logEntry += `  Multiplier: ${win.multiplier}x\n`;
			logEntry += `  Payout: ${win.payout.toFixed(2)}\n`;
			logEntry += `  Positions: [${win.positions.join(', ')}]\n`;
		});

		logEntry += `\n${'─'.repeat(60)}\n`;
		logEntry += `TOTAL WIN: ${totalPayout.toFixed(2)}\n`;
		logEntry += `${'='.repeat(60)}\n`;

		winLog.push(logEntry);
	}

	function downloadWinLog() {
		const logContent = `SLOT GAME WIN LOG\nGenerated: ${new Date().toLocaleString('fi-FI')}\n${winLog.join('\n')}`;
		const blob = new Blob([logContent], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `win-log-${Date.now()}.txt`;
		a.click();
		URL.revokeObjectURL(url);
	}

	function clearWinLog() {
		winLog = [];
	}

	// Free spins test mode (v1.0.5)
	// Instantly grants 10 free spins without requiring scatter triggers
	// Useful for testing free spin mechanics and symbol replacements
	function triggerTestFreeSpins() {
		if (!isFreeSpinMode) {
			isFreeSpinMode = true;
			freeSpinsRemaining = 10; // Give 10 test spins
			freeSpinsTotalWon = 0;
			freeSpinsTriggerCount++;
			console.log('🎰 TEST MODE: Free spins activated! 10 spins granted.');

			// Vaihda musiikkia free spins -musiikiksi
			switchMusic();
		}
	}

	// ============================================================================
	// SYMBOLIEN JAKAUMA - Painotettu satunnaistaminen
	// ============================================================================
	// Tämä on 81 WAYS -peli + TRUE WAYS LOGIC + MULTIPLIERS
	// YAML config v1.0, Math v1.7 mukaan
	//
	// JAKAUMASTRATEGIA (PERUSPELI):
	// - Tyhjät ruudut (25%) tasapainottavat osumatiheystä
	// - Matala taso (k,j,i) tuottaa usein pieniä voittoja (8%+7%+7% = 22%)
	// - Keskitaso (c,d,b,a) luo keskikokoisia voittoja (28% yhteensä)
	// - Premium-taso (f,e,g) harvinaiset korkean arvon voitot (15% yhteensä)
	// - Scatter 10% käynnistää vapaapelit
	// - Wild VAIN keskikiekolla (55%) korvausmerkinä
	// - Kertoimet: peruspeli (1x/2x/3x jakaumalla 70/22/8), vapaapelit (3x/5x/10x jakaumalla 70/22/8)
	//
	// VAPAAIPELIEN JAKAUMA:
	// - Matala taso (k,j,i) POISTETTU (0% kukin)
	// - Premium-taso KOROTETTU: f=14%, e=12%, g=11% (peritty matalalta tasolta)
	// - Tulos: Enemmän premium-symboleja vapaan pelin aikana suurempaan voittoon
	// ============================================================================
	// ===== SATUNNAINEN SYMBOLI =====
	// Palauttaa satunnaisen symbolin tietylle kiekolle (painotettu jakauma)
	// @param reelIndex - Kiekon indeksi (0-12)
	// @returns SymbolKey - Valittu symboli
	function randomSymbol(reelIndex: number): SymbolKey {
		return getRandomSymbol(reelIndex, isFreeSpinMode);
	}

	// ===== KIEKKOJEN LUOMINEN =====
	// Luo 13 erillistä kiekkoa (jokaiselle ruudulle oma kiekko)
	// Grid-layout: 3×3×1×3×3 (vasen, vasenpuoli, keski, oikea, oikein)
	function createReelData(): SymbolKey[] {
		const reelData: SymbolKey[] = [];
		for (let i = 0; i < TOTAL_REELS; i++) {
			// randomSymbol() käyttää oikeita painoja isFreeSpinMode-tilan mukaan
			// Vapaan pelissä: k/j/i painot ovat 0, f/e/g painot ovat kasvaneet
			const symbol = randomSymbol(i);

			reelData.push(symbol);

			// Seuraa näkyviä symboleja ja tyhjiä ruutuja tilastojen takia
			totalVisibleSymbols++;
			if (symbol === 'emptyslot') {
				totalEmptySlots++;
			}
		}
		return reelData;
	}

	// Tarkista voitot 81-ways järjestelmällä
	function checkWins(): WinResult[] {
		const result = calculateWins(reelData, betAmount, isFreeSpinMode);

		if (result.scatterTrigger) {
			const { scatterPositions, freeSpinsTriggered } = result.scatterTrigger;
			freeSpinsRemaining += freeSpinsTriggered;

			if (!isFreeSpinMode) {
				isFreeSpinMode = true;
				freeSpinsTotalWon = 0;
				freeSpinsTriggerCount++;
				console.log(
					`🎰 FREE SPINS TRIGGERED! ${scatterPositions.length} scatters = ${freeSpinsTriggered} FREE SPINS!`,
				);
				switchMusic();
			} else {
				console.log(
					`🎰 FREE SPINS RETRIGGERED! +${freeSpinsTriggered} FREE SPINS! Total: ${freeSpinsRemaining}`,
				);
			}
		}

		return result.wins;
	}

	// Kokonaisvoitto
	let totalWin = $state(0);
	let currentWins = $state<WinResult[]>([]);
	let isShowingWin = $state(false);
	let showPaytable = $state(false); // Paytable-näkyvyys
	let showFreeSpinsEndPopup = $state(false); // Free spins end popup
	let freeSpinsEndAmount = $state(0); // Total won in free spins

	// Symbolin nimen muunnos näyttöä varten
	const SYMBOL_NAMES: Record<SymbolKey, string> = {
		a: 'Hot Rod',
		b: 'Jacket',
		c: 'Roller Skates',
		d: 'Microphone',
		e: 'Blonde',
		f: 'Brunette',
		g: 'Rockabilly',
		h: 'WILD',
		i: 'Burger',
		j: 'Fries',
		k: 'Milkshake',
		l: 'SCATTER',
		emptyslot: 'Empty',
	};

	// Äänen toisto (jos äänet on käytössä)
	function playSound(soundKey: keyof typeof SOUND_URLS) {
		if (!soundEnabled || !audioElements[soundKey]) return;

		const audio = audioElements[soundKey];
		audio.currentTime = 0; // Palaa alkuun (jos jo soittaa)
		audio.play().catch((err) => {
			console.warn('Äänen toisto epäonnistui:', soundKey, err);
		});
	}

	// Korostaa voittavat symbolit
	function highlightWinningSymbols(wins: WinResult[]) {
		// Poista vanhat korostukset
		winHighlights.forEach((h) => app.stage.removeChild(h));
		winHighlights = [];

		// Lisää uudet korostukset
		wins.forEach((win) => {
			win.positions.forEach((pos) => {
				const reel = reels[pos];
				const highlight = new Graphics()
					.rect(0, 0, symbolWidth, symbolHeight)
					.fill({ color: 0xffff00, alpha: 0 }) // Läpinäkyvä täyttö
					.stroke({ color: 0xffd700, width: 4 }); // Kultainen reunus

				highlight.x = reel.container.x;
				highlight.y = reel.container.y;
				app.stage.addChild(highlight);
				winHighlights.push(highlight);

				// Pulssi-animaatio
				let pulseAlpha = 0;
				let pulseDirection = 1;
				const pulseSpeed = 0.05;

				app.ticker.add(() => {
					pulseAlpha += pulseDirection * pulseSpeed;
					if (pulseAlpha >= 0.4) pulseDirection = -1;
					if (pulseAlpha <= 0) pulseDirection = 1;
					highlight.alpha = 0.5 + pulseAlpha;
				});
			});
		});
	}

	// Poista voittokorostukset
	function clearWinHighlights() {
		winHighlights.forEach((h) => app.stage.removeChild(h));
		winHighlights = [];
	}

	// Alkutilan pelidata (13 erillistä kiekkoa)
	let reelData: SymbolKey[] = createReelData();

	// PixiJS sovelluksen pääkomponentit
	let container: HTMLDivElement; // HTML-elementti johon peli sijoitetaan
	let app: Awaited<ReturnType<typeof createPixiApplication>>; // Pelin pääsovellus
	let reels: StandaloneReel[] = []; // Kaikki kiekot (13 kpl)
	let winHighlights: Graphics[] = []; // Voittavien symbolien korostukset

	// ===================================================================
	// PIXIJS ALUSTUS - Suoritetaan kun komponentti on ladattu
	// ===================================================================
	// Tämä funktio käynnistyy kun Svelte komponentti on valmis (onMount)
	// Vastaa koko pelin alustuksesta:
	// 1) PixiJS Application luonti ja canvas kiinnittäminen
	// 2) Responsiivinen skaalaus ikkunan koon mukaan
	// 3) Symbolien, taustakuvien ja äänien lataus
	// 4) Kiekkojen luonti ja maskien asetus
	// 5) Pelisilmukan käynnistys

	// Reactive skaalausmuuttuja - päivittyy automaattisesti kun ikkunan kokoa muutetaan
	let gameScale = $state(1);

	// Control panel position (lasketaan gameScalen kanssa)
	const controlPanelPos = $derived(
		applyControlPanelSafeArea(
			calculateControlPanelPosition(currentLayout(), gameScale),
			viewportModel,
			CANVAS_HEIGHT,
			gameScale,
		),
	);
	const topButtonRight = $derived(getSafeRightPosition(20 * gameScale, viewportModel));
	const paytableButtonTop = $derived(getSafeTopPosition(130 * gameScale, viewportModel));
	const debugButtonTop = $derived(getSafeTopPosition(190 * gameScale, viewportModel));
	const audioButtonTop = $derived(getSafeTopPosition(10 * gameScale, viewportModel));
	const audioButtonRight = $derived(getSafeRightPosition(10 * gameScale, viewportModel));

	onMount(() => {
		let destroyed = false;
		const cleanupCallbacks: Array<() => void> = [];

		const initialise = async () => {
			// ===== 1) PIXIJS SOVELLUKSEN LUONTI =====
			// Luo PixiJS Application joka hallinnoi koko peliä (stage, renderer, ticker)
			app = await createPixiApplication({
				width: CANVAS_WIDTH, // Canvas leveys pikseleinä (1445px)
				height: CANVAS_HEIGHT, // Canvas korkeus pikseleinä (1000px)
				resolution: window.devicePixelRatio || 1, // Käytä laitteen pixel ratiota (retina-tuki)
			});
			if (destroyed) {
				destroyPixiApplication(app);
				return;
			}

			// Liitä PixiJS canvas HTML-elementtiin (container-diviin)
			container.appendChild(app.canvas);
			cleanupCallbacks.push(() => app.canvas.remove());

			// ===== 2) RESPONSIIVINEN SKAALAUS =====
			// Skaalataan peliä ikkunan koon mukaan mutta ei koskaan suuremmaksi kuin 100%
			const resizeGame = () => {
				viewportModel = createViewportModel({ width: CANVAS_WIDTH, height: CANVAS_HEIGHT });
				layoutUpdateTrigger += 1;
				const newScale = viewportModel.gameScale;

				// Päivitä reactive skaalaus (käytetään UI-elementeissä)
				gameScale = newScale;

				// Skaalaa PixiJS stage vastaamaan uutta kokoa (kaikki näkyy)
				app.stage.scale.set(newScale);

				// Renderer pysyy kiinteässä koossa (1445x1000)
				app.renderer.resize(CANVAS_WIDTH, CANVAS_HEIGHT);
			};

			// Kutsu heti alussa (aseta oikea skaalaus)
			resizeGame();

			// Päivitä kun ikkunan kokoa muutetaan
			window.addEventListener('resize', resizeGame);
			cleanupCallbacks.push(() => window.removeEventListener('resize', resizeGame));

			// ===== VÄLILYÖNTI-NÄPPÄIN: SKIP SPIN =====
			// Jos kiekot pyörivät → pysäytä ne välittömästi
			// Jos kiekot ovat pysähtyneet → aloita uusi spin
			const handleKeyPress = (e: KeyboardEvent) => {
				if (e.code === 'Space' || e.key === ' ') {
					e.preventDefault(); // Estä sivun scrollaus

					// Tarkista ovatko kiekot pyörimässä
					const isAnyReelSpinning = reels.some(
						(r) => r.state === 'spinning' || r.state === 'slowing',
					);

					if (isAnyReelSpinning) {
						// Pysäytä kaikki kiekot välittömästi asettamalla stopDelay = 0
						// Tämä käynnistää hidastuksen välittömästi jokaiselle kiekolle
						reels.forEach((r) => {
							if (r.state === 'spinning') {
								r.stopDelay = 0; // Aloita hidastus heti
								r.state = 'slowing';
								r.speed = r.targetSpeed * 0.5; // Puolita nopeus nopeaa pysähtymistä varten
							} else if (r.state === 'slowing') {
								r.speed = r.speed * 0.3; // Kiihdytä hidastusta
							}
						});
						console.log('⚡ Skip spin - kiekot pysähtyvät nopeasti');
					} else {
						// Aloita uusi spin jos kiekot eivät pyöri
						spin();
					}
				}
			};

			window.addEventListener('keydown', handleKeyPress);
			cleanupCallbacks.push(() => window.removeEventListener('keydown', handleKeyPress));

			// ===== 2) KUVIEN LATAUS JA TEKSTUURIEN LUONTI =====
			// Käytetään PIXI.Assets.load modernin latauksen takaamiseksi
			const textures: Record<SymbolKey, Texture> = {} as any;

			try {
				loadingStatus = 'Loading UI images...';
				debugInfo.push(`Loading reel frames: ${REEL_FRAMES_URL}`);
				debugInfo.push(`Loading logo: ${LOGO_URL}`);

				// UI-KUVIEN LATAUS (taustakuva käyttää nyt GameBackground-komponenttia HTML-puolella)
				await Assets.load([
					{ alias: 'reelframes', src: REEL_FRAMES_URL },
					{ alias: 'logo', src: LOGO_URL },
				]);
				reelFramesTexture = Texture.from('reelframes');
				logoTexture = Texture.from('logo');

				// Aseta antialiasing ja korkea laatu UI-tekstuureille
				if (reelFramesTexture.source) {
					reelFramesTexture.source.scaleMode = 'linear';
					// @ts-ignore - PixiJS 8 antialias
					reelFramesTexture.source.antialias = true;
					reelFramesTexture.source.autoGenerateMipmaps = true;
				}
				if (logoTexture.source) {
					logoTexture.source.scaleMode = 'linear';
					// @ts-ignore - PixiJS 8 antialias
					logoTexture.source.antialias = true;
					logoTexture.source.autoGenerateMipmaps = true;
					// Käytä korkeampaa resoluutiota mobiilille
					if (window.devicePixelRatio > 1) {
						logoTexture.source.resolution = window.devicePixelRatio;
					}
				}

				console.log(
					'✅ Reel frames texture created:',
					reelFramesTexture.width,
					'x',
					reelFramesTexture.height,
				);
				console.log('✅ Logo texture created:', logoTexture.width, 'x', logoTexture.height);
				debugInfo.push('✅ All UI images loaded');

				loadingStatus = 'Loading symbols...';

				// SYMBOLIEN KUVIEN LATAUS - lataa ensin kaikki Assets.cache:een
				const assetManifest: Array<{ alias: string; src: string }> = [];
				for (const key of SYMBOL_KEYS) {
					assetManifest.push({ alias: key, src: SYMBOL_URLS[key] });
				}
				await Assets.load(assetManifest);

				// Luo tekstuurit cache:sta
				for (const key of SYMBOL_KEYS) {
					const url = SYMBOL_URLS[key];
					debugInfo.push(`Loading symbol ${key}: ${url}`);

					try {
						const texture = Texture.from(key); // Käytä aliasta

						// Aseta antialiasing päälle symbolitekstuureille
						if (texture.source) {
							texture.source.scaleMode = 'linear';
							texture.source.antialias = true;
						}

						textures[key] = texture;
						console.log(`✅ Symbol ${key} loaded:`, texture.width, 'x', texture.height);
						debugInfo.push(`✅ Symbol ${key} loaded`);
					} catch (error) {
						const errorMsg = `❌ Failed to load symbol ${key} from ${url}: ${error}`;
						debugInfo.push(errorMsg);
						console.error(errorMsg);
						throw new Error(errorMsg);
					}
				}

				// Tallenna ladatut tekstuurit muuttujaan (käytettävissä koko komponentissa)
				symbolTextures = textures;
				loadingStatus = 'Assets loaded successfully!';
			} catch (error) {
				errorMessage = `Asset loading failed: ${error}`;
				debugInfo.push(errorMessage);
				console.error(errorMessage);
				return; // Lopeta lataus jos virhe
			}

			// ===== 3) ÄÄNIEN LATAUS =====
			// Luodaan HTML5 Audio elementit ääniefektejä varten
			console.log('Ladataan ääniefektit...');

			// Luo Web Audio elementit (placeholder-tiedostoja ei ole vielä olemassa)
			for (const [key, url] of Object.entries(SOUND_URLS)) {
				const audio = new Audio();
				audio.src = url;
				audio.preload = 'auto';
				audio.volume = 0.7; // 70% äänenvoimakkuus

				// Yritä esikuormata (ei haittaa jos tiedosto ei ole olemassa)
				audio.load();

				// Käsittele latausvirheet hiljaa (placeholder-tilanne)
				audio.addEventListener('error', () => {
					console.log(`Äänitiedostoa ei löydy: ${url} (käytetään hiljaista placeholderia)`);
				});

				audioElements[key] = audio;
			}
			// ===== 4) TAUSTAKUVAN ASETTELU =====
			// KOMMENTOITU POIS - Taustakuva ei näy
			// Lisätään taustakuva ENSIMMÄISENÄ jotta se jää kaiken taakse
			/*
    console.log("Taustakuva ladattu, tekstuuri:", backgroundTexture);

    if (backgroundTexture) {
      const bgSprite = new Sprite(backgroundTexture);

      // Joustava taustakuvan skaalaus käyttäjän asetuksen mukaan
      const canvasAspect = app.renderer.width / app.renderer.height;   // Canvas kuvasuhde
      const imageAspect = bgSprite.texture.width / bgSprite.texture.height; // Kuvan kuvasuhde

      let scale; // Lopullinen skaalaukskerroin

      if (BACKGROUND_FIT_MODE === "width") {
        // Skaalaa täyttämään leveys (saattaa leikata ylä/alaosaa)
        scale = app.renderer.width / bgSprite.texture.width;
      } else if (BACKGROUND_FIT_MODE === "height") {
        // Skaalaa täyttämään korkeus (saattaa leikata sivuosia mutta näyttää koko pystysuunnan)
        scale = app.renderer.height / bgSprite.texture.height;
      } else {
        // Skaalaa mahtumaan kokonaan (pienin kerroin leveästä/korkeudesta)
        scale = Math.min(
          app.renderer.width / bgSprite.texture.width,
          app.renderer.height / bgSprite.texture.height
        );
      }

      // Käytä käyttäjän asettamaa koko-kerrointa
      scale *= BACKGROUND_SCALE;

      // Aseta lopullinen koko
      bgSprite.scale.set(scale);

      // Keskitä vaakasuunnassa, aseta pystysuunnassa Y-siirtymällä
      bgSprite.x = (app.renderer.width - bgSprite.width) / 2;  // Keskelle vaakasuunnassa
      bgSprite.y = (app.renderer.height - bgSprite.height) / 2 + BACKGROUND_Y_SHIFT; // Keskelle + siirtymä

      // Lisää taustakuva näytölle
      app.stage.addChild(bgSprite);

      console.log("Taustakuva lisätty:", BACKGROUND_FIT_MODE, "mode, size:",
                  bgSprite.width.toFixed(0), "x", bgSprite.height.toFixed(0),
                  "image aspect:", imageAspect.toFixed(2), "scale:", scale.toFixed(2),
                  "pos:", bgSprite.x.toFixed(0), bgSprite.y.toFixed(0));
    } else {
      console.error("Taustakuva ei ole saatavilla!");
    }
    */

			// ===== 5) KIEKKOJEN MITAT JA SIJAINNIT =====
			// Lasketaan kiekkojen mitat taustakuvan mukaan
			const REEL_WIDTH = symbolWidth; // Kiekon leveys = symbolien leveys

			// Eri korkeudet eri kiekoille - keskimmäinen kiekko on lyhyempi (1 symboli vs 3)
			const getReelHeight = (reelIndex: number) => {
				return reelIndex === 2 ? symbolHeight : ROWS * ROW_HEIGHT - gap;
			};

			// Keskimmäisen kiekon Y-korjaus: sijoitetaan samalle korkeudelle muiden kanssa
			const getAdjustedY = (reelIndex: number, baseY: number) => {
				if (reelIndex === 2) {
					// Keskimmäinen kiekko: siirretään ylöspäin niin että sen keskikohta
					// on samalla tasolla muiden kiekkojen keskikohdan kanssa
					const otherReelsCenter = (ROWS * ROW_HEIGHT - gap) / 2; // Muiden keskikohta
					const thisReelCenter = symbolHeight / 2; // Tämän keskikohta
					return baseY + otherReelsCenter - thisReelCenter; // Korjattu Y-sijainti
				}
				return baseY; // Muut kiekot käyttävät alkuperäistä sijaintia
			};

			// Kiekkojen perussijainnit (mitattu taustakuvan kiekkojen kohdilta)
			const baseReelPositions = [
				{ x: 70, y: 120 }, // 1. kiekko: vasen (siirretty hieman ulkospäin)
				{ x: 203, y: 120 }, // 2. kiekko: vasen-keski
				{ x: 345, y: 120 }, // 3. kiekko: keskimmäinen (pysyy keskellä)
				{ x: 487, y: 120 }, // 4. kiekko: oikea-keski
				{ x: 620, y: 120 }, // 5. kiekko: oikea (siirretty hieman ulkospäin)
			];

			// Lisätään käyttäjän asettamat offset-arvot
			const reelPositions = baseReelPositions.map((pos) => ({
				x: pos.x + OFFSET_X, // Lisää X-siirtymä
				y: pos.y + OFFSET_Y, // Lisää Y-siirtymä
			}));

			// ===== 5) KIEKKOJEN LUONTI JA MASKIEN ASETUS =====
			reels = []; // Tyhjennetään kiekko-array
			const reelDimensions = {
				symbolWidth,
				symbolHeight,
				rowHeight: ROW_HEIGHT,
			};
			const reelDependencies = {
				getSymbol: (reelIndex: number) => reelData[reelIndex],
				setSymbol: (reelIndex: number, symbol: SymbolKey) => (reelData[reelIndex] = symbol),
				randomSymbol,
				getSpinSpeed: () => spinSpeed,
				getSymbolTextures: () => symbolTextures,
				playStopSound: () => playSound('stop'),
				playDrumHit,
			};

			for (let reelIndex = 0; reelIndex < TOTAL_REELS; reelIndex++) {
				// Laske tämän kiekon sijainti ruudukossa
				const position = getReelPosition(reelIndex);
				const col = position.col;
				const row = position.row;

				// Laske ruudun sijainti näytöllä - uudet koordinaatit 1445x1000 taustalle
				const baseX = 300 + col * (symbolWidth + 20); // Keskemmälle uudella taustalla
				const baseY = 250 + row * (symbolHeight + 15); // Alemmas uudella taustalla

				// Keskikiekko (indeksi 6) erikoiskohdistus - käytä parametreja
				const adjustedX = reelIndex === 6 ? baseX + MIDDLE_REEL_X_OFFSET : baseX;
				const adjustedY = reelIndex === 6 ? baseY + MIDDLE_REEL_Y_OFFSET : baseY;

				// Luo PixiJS kontti tälle kiekolle
				const reelCont = new Container();
				reelCont.x = adjustedX + OFFSET_X;
				reelCont.y = adjustedY + OFFSET_Y;

				// *** POISTETTU: Värillinen tausta ja debug-numerot ***
				// const colors = [
				//   0xff0000, 0x00ff00, 0x0000ff,
				//   0xffff00, 0xff00ff, 0x00ffff,
				//   0xffa500,
				//   0x800080, 0x008000, 0x000080,
				//   0xff8000, 0x8000ff, 0x0080ff
				// ];
				// const reelBg = new Graphics()
				//   .rect(0, 0, symbolWidth, symbolHeight)
				//   .fill({ color: colors[reelIndex], alpha: 0.3 });
				// reelBg.x = reelCont.x;
				// reelBg.y = reelCont.y;
				// app.stage.addChild(reelBg);

				// const style = new TextStyle({
				//   fontFamily: 'Arial',
				//   fontSize: 20,
				//   fill: 0xffffff,
				//   fontWeight: 'bold',
				//   stroke: { color: 0x000000, width: 2 }
				// });
				// const reelText = new Text({ text: reelIndex.toString(), style });
				// reelText.x = reelCont.x + 5;
				// reelText.y = reelCont.y + 5;
				// app.stage.addChild(reelText);

				// Luo maski joka rajaa kiekon näkyvän alueen
				const mask = createReelMask(symbolWidth, symbolHeight);

				mask.x = reelCont.x; // Sama sijainti kuin kiekko
				mask.y = reelCont.y;

				reelCont.mask = mask; // Aseta maski kiekon kontille

				// Lisää maski ja kiekko näytölle
				app.stage.addChild(mask); // Maski ensin
				app.stage.addChild(reelCont); // Sitten kiekko

				// Luo Reel-olio ja lisää listaan
				reels.push(new StandaloneReel(reelIndex, reelCont, reelDimensions, reelDependencies));
			}

			// ===== 6) REEL KEHYKSET =====
			// Lisää kiekkojen kehykset kaikkien kiekkojen päälle
			if (reelFramesTexture) {
				const reelFramesSprite = new Sprite(reelFramesTexture);

				// Aseta kehysten koko ja sijainti
				const framesScale = 1.0; // Säädä tarpeen mukaan
				reelFramesSprite.scale.set(framesScale);

				// Keskitä kehykset kiekkojen päälle
				reelFramesSprite.x = 250; // Säädä kiekkojen mukaan
				reelFramesSprite.y = 200; // Säädä kiekkojen mukaan

				app.stage.addChild(reelFramesSprite);
				reelFramesSpriteRef = reelFramesSprite; // Tallenna viittaus control panelia varten
				controlPanelWidth = reelFramesSprite.width; // Päivitä paneelin leveys dynaamisesti
				console.log(
					'Reel frames lisätty:',
					reelFramesSprite.width.toFixed(0),
					'x',
					reelFramesSprite.height.toFixed(0),
				);
				console.log('Control panel leveys päivitetty:', controlPanelWidth.toFixed(0));
			}

			// ===== 7) PELIN LOGO (PÄÄLLIMMÄINEN LAYER) =====
			if (logoTexture) {
				// Varmista parhaat laatu-asetukset
				configureLogoTexture(logoTexture);

				const logoSprite = new Sprite(logoTexture);

				// Sileä skaalautuminen - roundPixels OFF estää pikselöitymisen
				logoSprite.roundPixels = false;

				// Parempi tekstuurin suodatus (bilinear interpolation)
				logoSprite.texture.source.scaleMode = 'linear';

				// Käytä määriteltyjä logo-asetuksia
				logoSprite.scale.set(LOGO_SCALE);

				// Sijoita logo käyttäjän asetusten mukaan
				logoSprite.x = (app.renderer.width - logoSprite.width) / 2 + LOGO_X; // Keskitetty + X-siirtymä
				logoSprite.y = LOGO_Y; // Käyttäjän määrittelemä Y-koordinaatti

				app.stage.addChild(logoSprite); // Päällimmäinen layer
				console.log(
					'Logo lisätty päällimmäiseen layeriin:',
					logoSprite.width.toFixed(0),
					'x',
					logoSprite.height.toFixed(0),
				);
			}

			// ===== 7) MUSIIKKIJÄRJESTELMÄN ALUSTUS (v1.0.9) =====
			initializeMusic();

			// ===== 8) PELISILMUKAN KÄYNNISTYS =====
			// PixiJS ticker kutsuu update-funktiota joka frame (yleensä 60 FPS)
			app.ticker.add(update);
			cleanupCallbacks.push(() => app.ticker.remove(update));
		};

		void initialise();

		return () => {
			destroyed = true;
			cleanupCallbacks.forEach((cleanup) => cleanup());
			destroyPixiApplication(app);
		};
	}); // onMount loppu

	// ===================================================================
	// PELISILMUKKA - Kutsutaan joka frame (60 FPS)
	// ===================================================================
	// Tämä on pelin "sydän" joka pyörii jatkuvasti
	// PixiJS ticker kutsuu tätä funktiota ~60 kertaa sekunnissa
	function update() {
		// Päivitä jokainen kiekko (liike, animaatiot)
		for (const r of reels) {
			r.update(); // Päivitä kiekon tila (spinning → slowing → bouncing → stopped)
			r.draw(); // Piirrä kiekko uudelleen (luo uuden Sprite-objektin)
		}

		// ===== VOITTOJEN TARKISTUS =====
		// Tarkistetaan voitot VAIN kerran per spin, kun kaikki kiekot ovat pysähtyneet
		// Ehdot:
		// 1) Voittoja ei ole vielä tarkistettu tälle spinille (winsCheckedForCurrentSpin === false)
		// 2) Voitto-popuppia ei näytetä (isShowingWin === false)
		// 3) Kaikki kiekot ovat tilassa "stopped"
		if (!isShowingWin && !winsCheckedForCurrentSpin && reels.every((r) => r.state === 'stopped')) {
			winsCheckedForCurrentSpin = true; // Merkitse että voitot on tarkistettu (estetaan duplikaattitarkistukset)

			// Feidaa musiikki alas kun kierros on ohi (v1.0.9)
			fadeOutMusicAfterSpin();

			// Kutsu checkWins() joka laskee 81 ways -voitot
			const wins = checkWins();
			console.log(`Checking wins, found ${wins.length} wins`);

			// ===== JOS VOITTOJA LÖYTYI =====
			if (wins.length > 0) {
				currentWins = wins; // Tallenna voitot (näytetään popupissa)
				totalWin = wins.reduce((sum, win) => sum + win.payout, 0); // Laske kokonaisvoitto

				// Kirjoita voitto lokitiedostoon (tilastoja varten)
				logWin(totalRounds, wins, totalWin);

				// Lisää voitto saldoon VAIN KERRAN
				addWinToBalance(totalWin);

				// Näytä voitto-popup
				isShowingWin = true;
				winPopupShownAt = Date.now(); // Merkitse aika kun popup tuli näkyviin

				console.log(`🎉 VOITTO! ${totalWin} pistettä! Uusi saldo: ${balance}`);
				console.log(`isShowingWin set to: ${isShowingWin}, totalWin: ${totalWin}`);
				wins.forEach((win) => {
					const multiplierText = win.multiplier ? ` (${win.multiplier}x multiplier)` : '';
					console.log(`${win.count}x ${win.symbol} = ${win.payout} pistettä${multiplierText}`);
				});

				// Korostaa voittavat symbolit (kultainen kehys + pulssi-animaatio)
				highlightWinningSymbols(wins);

				// Soita voittoääni
				playSound('win');

				// ===== AUTOPLAY-KÄSITTELY (VOITOT) =====
				// Jos autoplay on päällä, odota 1.5s ja sulje popup automaattisesti
				if (isAutoPlaying && !isProcessingAutoPlay) {
					isProcessingAutoPlay = true; // Lukitse (estää duplikaattispinit)
					autoPlayTimeoutId = window.setTimeout(() => {
						if (isShowingWin && isAutoPlaying) {
							console.log('Autoplay: Auto-closing win popup after 1.5s');
							isShowingWin = false;
							clearWinHighlights();
						}
						// Jatka seuraavaan kierrokseen 200ms kuluttua
						autoPlayTimeoutId = window.setTimeout(() => {
							isProcessingAutoPlay = false; // Vapauta lukko
							executeAutoPlay(); // Jatka seuraavaan spiniin
						}, 200);
					}, 1500);
				}
			} else {
				// ===== EI VOITTOJA =====
				console.log('No wins found this spin');
				// Jos autoplay on päällä ja ei voittoja, jatka seuraavaan kierrokseen
				// Lyhyempi odotus (500ms) kun ei ole voittoja
				if (isAutoPlaying && !isProcessingAutoPlay) {
					isProcessingAutoPlay = true; // Lukitse
					autoPlayTimeoutId = window.setTimeout(() => {
						isProcessingAutoPlay = false; // Vapauta lukko
						executeAutoPlay(); // Jatka seuraavaan spiniin
					}, 500);
				}
			}

			// ===== VAPAAEREIDEN LOPETUS =====
			// Tarkista onko vapaaerien tila päättynyt (riippumatta voitoista)
			if (isFreeSpinMode && freeSpinsRemaining === 0) {
				console.log(`🎰 FREE SPINS ENDED! Total won: ${freeSpinsTotalWon}`);
				// Näytä vapaaereiden lopetus-popup 2 sekunnin kuluttua
				setTimeout(() => {
					freeSpinsEndAmount = freeSpinsTotalWon;
					showFreeSpinsEndPopup = true;
					// ÄLÄ nollaa tilaa tässä - odotetaan että käyttäjä painaa "Jatka"
				}, 2000);
			}
		}
	} // update() loppu

	// ===================================================================
	// SPIN NAPPI - Käynnistää uuden pyöräytyksen
	// ===================================================================
	// Pelin päätoiminto joka käsittelee:
	// 1) Musiikin käynnistyksen
	// 2) Panoksen vähentämisen (peruspeli) TAI vapaaerän laskurin vähentämisen
	// 3) Kiekkojen pyörittämisen (BPM-synkronoitu)
	// 4) Tilastojen päivittämisen
	function spin() {
		// ===== MUSIIKIN KÄYNNISTYS JA VAIHTO =====
		// Vaihda uusi satunnainen rockabilly loop joka spinissä (1-20)
		if (!isFreeSpinMode) {
			changeBackgroundLoop();
		}

		// Laukaise "kiilto"-efekti Play-napissa (visuaalinen palaute)
		triggerPlayButtonGlare();

		// ===== VAPAAERÄT VS PERUSPELI =====
		if (isFreeSpinMode && freeSpinsRemaining > 0) {
			// VAPAAERÄT - Ei vähennetä saldoa, vain lasketaan vapaaeriä jäljellä
			freeSpinsRemaining--; // Vähennä jäljellä olevia vapaaeriä
			freeSpinsPlayedCount++; // Laske pelattu vapaaerä (tilastoihin)
			console.log(`🎰 FREE SPIN! Remaining: ${freeSpinsRemaining}`);

			// Huom: freeSpinsRemaining tarkistetaan update()-funktiossa spinin jälkeen
		} else if (!isFreeSpinMode) {
			// PERUSPELI - Tarkista saldo ja vähennä panos
			if (balance < betAmount) {
				alert(`Not enough credits! Balance: ${balance}, Bet: ${betAmount}`);
				stopAutoPlay(); // Pysäytä autoplay jos ei riitä krediittejä
				return; // Lopeta funktio (ei pyöritä)
			}

			// Vähennä panos saldosta
			balance -= betAmount;

			// Päivitä RTP-tilastot (vain maksetuille kierroksille, ei vapaaerille)
			totalRounds++; // Kasvata kierrosten määrää
			totalWagered += betAmount; // Kasvata panostettu määrää
		}

		// ===== TYHJENNETÄÄN AUTOPLAY TIMEOUT =====
		// Jos autoplay-ajastin on päällä, tyhjennä se (estetään duplikaattispinit)
		if (autoPlayTimeoutId !== null) {
			clearTimeout(autoPlayTimeoutId);
			autoPlayTimeoutId = null;
		}

		// ===== NOLLAA VOITTOTIEDOT =====
		// Poista edellisen kierroksen tiedot
		currentWins = []; // Tyhjennä voittolista
		totalWin = 0; // Nollaa kokonaisvoitto
		lastWin = 0; // Nollaa WIN-näyttö control panelissa
		console.log('🔄 lastWin nollattu: ' + lastWin);
		isShowingWin = false; // Sulje voitto-popup
		winsCheckedForCurrentSpin = false; // Salli voittojen tarkistus uudelle spinille
		clearWinHighlights(); // Poista kultaiset kehykset voittosymboleista

		// ===== LUO UUDET SYMBOLIT =====
		reelData = createReelData(); // Luo 13 uutta satunnaista symbolia (käyttää painotettua jakaumaa)

		// ===== KÄYNNISTÄ KIEKKOJEN PYÖRIMINEN =====
		// v1.0.9: BPM-synkronoitu pysähtyminen (130 BPM)
		// Kiekot pysähtyvät rytmisesti musiikin tahtiin
		// Jokainen ruutu pysähtyy yksi kerrallaan järjestyksessä: 0-1-2-3-4-5-6-7-8-9-10-11-12
		reels.forEach((r, i) => {
			r.startSynchronized(i, SPIN_SPEED_CONFIG[spinSpeed]); // Jokainen kiekko pysähtyy eri aikaan (i = beatIndex)
		});

		// Soita "whirr" SPIN-ääni
		playSound('spin');
	} // spin() loppu

	// ===================================================================
	// WIN ROLLUP ANIMATION (Retro 50s Diner Style)
	// ===================================================================
	// Animoi WIN-arvon nousun 0:sta lopulliseen arvoon
	// @param from - Alkuarvo
	// @param to - Loppuarvo
	// @param ms - Animaation kesto millisekunteina
	function rollupWinAmount(from: number, to: number, ms: number = 1400) {
		if (typeof window === 'undefined') return;

		const winLabel = document.getElementById('winLabel');
		if (!winLabel) return;

		winLabel.classList.add('rolling');
		const start = performance.now();
		const span = to - from;

		const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

		function tick(now: number) {
			const t = Math.min(1, (now - start) / ms);
			const v = from + span * easeOutCubic(t);
			lastWin = v; // Päivitä lastWin joka framella (Svelte päivittää UI automaattisesti)

			if (t < 1) {
				requestAnimationFrame(tick);
			} else {
				lastWin = to; // Varmista että lopullinen arvo on tarkka
				const resolvedWinLabel = document.getElementById('winLabel');
				if (!resolvedWinLabel) return;
				resolvedWinLabel.classList.remove('rolling');
				resolvedWinLabel.classList.add('winHit');
				setTimeout(() => resolvedWinLabel.classList.remove('winHit'), 450);
			}
		}
		requestAnimationFrame(tick);
	}

	// ===================================================================
	// LISÄÄ VOITTO SALDOON
	// ===================================================================
	// Käsittelee voiton lisäämisen saldoon ja tilastoihin
	// @param winAmount - Voiton määrä pistettä
	function addWinToBalance(winAmount: number) {
		balance += winAmount; // Lisää voitto pelaajan saldoon
		totalWon += winAmount; // Päivitä kokonaisvoitot (RTP-tilastot)

		// Animoi WIN-arvon nouseminen edellisestä arvosta uuteen
		const previousWin = lastWin;
		lastWin = winAmount; // Tallenna viimeisin voitto (näytetään UI:ssa)

		// Käynnistä rollup-animaatio (erilainen kesto riippuen voiton koosta)
		const rollupDuration = winAmount > betAmount * 50 ? 2000 : 1400;
		rollupWinAmount(previousWin, winAmount, rollupDuration);

		// Vapaaerille: Seuraa erikseen vapaaeriden yhteisvoittoa
		if (isFreeSpinMode) {
			freeSpinsTotalWon += winAmount; // Kumulatiivinen voitto koko vapaaeriäkaudelta
		}

		if (winAmount > 0) {
			totalWins++; // Kasvata voittojen määrää (tilastoihin)

			// ===== VOITTOTEEMAN SOITTO ISOILLE VOITOILLE =====
			// v1.0.9: Soita voittoteema isoille voitoille (yli 10x panos)
			const winMultiplier = winAmount / betAmount; // Laske voittokerroin
			if (winMultiplier >= 10) {
				playWinTheme(); // Soita dramaattinen voittoteema (Win Music)
			}

			// ===== VINYL-ANIMAATIO VOITON KOON MUKAAN =====
			// v1.1.6: Näytä vinyl-voittoanimaatio voiton koon mukaan
			if (vinylWinAnimationRef) {
				if (winMultiplier >= 50) {
					// JACKPOT-voitto (50x+) - Heti ilman viivettä
					vinylWinAnimationRef.show();
				} else if (winMultiplier >= 20) {
					// KESKISUURI voitto (20x-49x) - 200ms viive
					setTimeout(() => vinylWinAnimationRef.show(), 200);
				} else if (winMultiplier >= 10) {
					// PIENI voitto (10x-19x) - 400ms viive
					setTimeout(() => vinylWinAnimationRef.show(), 400);
				}
			}
		}
	}

	// ===================================================================
	// BET KONTROLLIT - Panoksen säätö
	// ===================================================================
	// Nämä funktiot muuttavat currentBetIndex-muuttujaa,
	// joka määrittää mikä BET_LEVELS-taulukon arvo on käytössä

	// Kasvata panosta seuraavaan tasoon (jos mahdollista)
	function increaseBet() {
		if (currentBetIndex < BET_LEVELS.length - 1) {
			currentBetIndex++; // Siirry seuraavaan panokseen (esim. 0.10 → 0.20)
		}
	}

	// Vähennä panosta edelliseen tasoon (jos mahdollista)
	function decreaseBet() {
		if (currentBetIndex > 0) {
			currentBetIndex--; // Siirry edelliseen panokseen (esim. 0.20 → 0.10)
		}
	}

	// Aseta panos maksimiin (viimeinen BET_LEVELS-arvo)
	function maxBet() {
		currentBetIndex = BET_LEVELS.length - 1; // Hyppää suoraan suurimpaan panokseen
	}

	// ===================================================================
	// AUTOPLAY FUNKTIOT - Automaattinen pelaus
	// ===================================================================
	// Autoplay-järjestelmä käyttää lukkomekanismia (isProcessingAutoPlay) estääkseen
	// duplikaattispinit. Jokainen spin-kutsu lukitsee tilan ja vapauttaa sen vasta
	// kun voitot on käsitelty.

	// Käynnistä autoplay tietyllä kierrosmäärällä
	// @param rounds - Kierrosten määrä (esim. 10, 25, 50, 100)
	function startAutoPlay(rounds: number) {
		isAutoPlaying = true; // Aktivoi autoplay-tila
		autoPlayRoundsLeft = rounds; // Aseta kierrosmäärä
		showAutoPlayMenu = false; // Sulje autoplay-valikko
		executeAutoPlay(); // Aloita ensimmäinen kierros
	}

	// Pysäytä autoplay kesken kaiken
	function stopAutoPlay() {
		isAutoPlaying = false; // Deaktivoi autoplay-tila
		autoPlayRoundsLeft = 0; // Nollaa jäljellä olevat kierrokset
		isProcessingAutoPlay = false; // Vapauta lukko (estää jumit)

		// Tyhjennä mahdolliset odottavat ajastimet
		if (autoPlayTimeoutId !== null) {
			clearTimeout(autoPlayTimeoutId);
			autoPlayTimeoutId = null;
		}
	}

	// Suorita yksi autoplay-kierros
	// Tämä funktio kutsuu itseään rekursiivisesti kunnes kierrokset loppuvat
	function executeAutoPlay() {
		// Lopeta jos autoplay on pysäytetty TAI kierrokset ovat loppuneet
		if (!isAutoPlaying || autoPlayRoundsLeft <= 0) {
			stopAutoPlay(); // Varmista että kaikki on nollattu
			return;
		}

		// Pyöräytä (update()-funktio jatkaa automaattisesti kun voitot on käsitelty)
		console.log(`Autoplay: Starting spin ${autoPlayRoundsLeft} rounds left`);
		spin(); // Käynnistä kiekkojen pyöriminen
		autoPlayRoundsLeft--; // Vähennä jäljellä olevia kierroksia

		// HUOM: ÄLÄ kutsu executeAutoPlay() täällä!
		// update()-funktio kutsuu sitä automaattisesti kun kaikki kiekot ovat pysähtyneet
		// ja voitot on käsitelty. Tämä estää liian nopeat spinit.
	}

	// ===================================================================
	// TILASTOFUNKTIOT
	// ===================================================================

	// Nollaa RTP-tilastot
	// Pyytää käyttäjältä vahvistuksen ennen kuin tyhjentää kaikki pelitilastot
	function resetStats() {
		if (confirm('Reset all statistics?')) {
			totalRounds = 0; // Nollaa pelatut kierrokset
			totalWagered = 0; // Nollaa panostettu määrä
			totalWon = 0; // Nollaa voitettu määrä
			totalWins = 0; // Nollaa voittojen määrä
			freeSpinsTriggerCount = 0; // Nollaa vapaaerätriggerit
			freeSpinsPlayedCount = 0; // Nollaa pelatut vapaapelit
			totalVisibleSymbols = 0; // Nollaa näkyvät symbolit
			totalEmptySlots = 0; // Nollaa tyhjät ruudut
		}
	}
</script>

<svelte:head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js"></script>
</svelte:head>

<!-- ================================================================ -->
<!-- HTML TEMPLATE - Pelin visuaalinen rakenne                        -->
<!-- ================================================================ -->
<!-- Tämä osio sisältää kaikki HTML-elementit joita peli käyttää:      -->
<!-- 0) LoadingScreen (overlay joka peittää pelin kunnes valmis)       -->
<!-- 1) Debug-paneeli (lataus/virhetilanteissa)                        -->
<!-- 2) Voitto-popup (näyttää voitot ja kertoimet)                     -->
<!-- 3) Paytable-popup (näyttää symbolien maksuarvot)                  -->
<!-- 4) Vapaaerä-lopetus-popup (vapaaerän yhteisvoitto)                -->
<!-- 5) Pääkontti (PixiJS canvas + UI-kontrollit)                      -->
<!-- 6) Control Panel (panos, autoplay, spin-nappi)                    -->
<!-- 7) Tilastopaneeli (RTP, voitot, kierrokset)                       -->
<!-- 8) Musiikkikontrollit (play/pause/volume)                         -->
<!-- ================================================================ -->

<!-- ===== 0) LOADING SCREEN ===== -->
<!-- Overlay joka piilottaa pelin kunnes gameReady === true -->
{#if !gameReady}
	<LoadingScreen onloaded={() => (gameReady = true)} />
{/if}

<!-- ===== 1) DEBUG-PANEELI ===== -->
<!-- Näytetään vain jos ladataan assetteja tai tapahtuu virhe -->
<!-- Näyttää latausstatuksen, virheilmoitukset ja debug-lokin -->
{#if loadingStatus !== 'Assets loaded successfully!' || errorMessage}
	<div
		style="
    position: fixed;
    top: 10px;
    left: 10px;
    background: rgba(0,0,0,0.8);
    color: white;
    padding: 10px;
    border-radius: 5px;
    font-family: monospace;
    font-size: 12px;
    z-index: 2000;
    max-width: 400px;
    max-height: 300px;
    overflow-y: auto;
  "
	>
		<h3>🎰 Oma-peli Debug</h3>
		<p><strong>Status:</strong> {loadingStatus}</p>
		{#if errorMessage}
			<p style="color: red;"><strong>Error:</strong> {errorMessage}</p>
		{/if}
		<p><strong>Base:</strong> {base}</p>
		<p><strong>BG URL:</strong> {BACKGROUND_URL}</p>
		<p><strong>Sample:</strong> {SYMBOL_URLS.a}</p>
		{#if debugInfo.length > 0}
			<details>
				<summary>Log ({debugInfo.length})</summary>
				{#each debugInfo as info}
					<div>{info}</div>
				{/each}
			</details>
		{/if}
	</div>
{/if}

<!-- ===== 2) VOITTO-POPUP ===== -->
<!-- Näytetään kun totalWin > 0 JA isShowingWin === true -->
<!-- Näyttää voiton määrän, voittoyhdistelmät ja mahdollisen kertoimet -->
<!-- Sulkeutuu automaattisesti autoplayn aikana (1.5s) tai manuaalisesti -->
{#if totalWin > 0 && isShowingWin}
	<div
		style="
    position: fixed;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);
    background: linear-gradient(45deg, #ffd700, #ffed4a);
    color: #333;
    padding: 20px;
    border-radius: 15px;
    font-family: Arial, sans-serif;
    text-align: center;
    z-index: 3000;
    border: 3px solid #ffb700;
    box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
    animation: winPulse 2s infinite;
    max-width: 350px;
  "
	>
		<h2 style="margin: 0 0 10px 0; font-size: 2em;">🎉 VOITTO! 🎉</h2>
		<div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;">
			{totalWin.toFixed(2)} pistettä
		</div>

		{#each currentWins as win}
			<div style="margin: 5px 0; font-size: 1.1em;">
				{win.count} × {SYMBOL_NAMES[win.symbol]} = {win.payout.toFixed(2)} pistettä
			</div>
		{/each}

		{#if currentWins.length > 0 && currentWins[0].multiplier > 1}
			<div
				style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;"
			>
				<span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;">
					✨ {currentWins[0].multiplier}x WIN MULTIPLIER! ✨
				</span>
			</div>
		{/if}

		<button
			onclick={() => {
				isShowingWin = false;
				clearWinHighlights();
				console.log('Win popup closed, ready for next spin');
			}}
			style="
        margin-top: 15px;
        padding: 8px 16px;
        background: #333;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1em;
      "
		>
			Jatka pelaamista
		</button>
	</div>
{/if}

<!-- ===== 3) PAYTABLE-POPUP ===== -->
<!-- Näyttää kaikkien symbolien maksuarvot ja erikoissymboleiden selitykset -->
<!-- Avataan "💰 PAYTABLE" -napista, suljetaan "Sulje"-napista -->
<!-- Skaalautuu automaattisesti gameScale-muuttujan mukaan -->
{#if showPaytable}
	<div
		style="
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: {30 * gameScale}px;
    border-radius: {15 * gameScale}px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: {3 * gameScale}px solid #ffd700;
    max-width: {600 * gameScale}px;
    max-height: {Math.min(CANVAS_HEIGHT * gameScale * 0.8, (80 * window.innerHeight) / 100)}px;
    overflow-y: auto;
    font-size: {gameScale}em;
  "
	>
		<h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;">💰 MENU</h2>

		<!-- GAME CONTROLS (Mobiilissa) -->
		<div
			class="mobile-menu-controls"
			style="display: none; margin-bottom: 20px; padding: 15px; background: rgba(255, 255, 255, 0.05); border-radius: 10px;"
		>
			<h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;">🎮 GAME CONTROLS</h3>

			<!-- Autoplay -->
			<div style="margin-bottom: 15px;">
				<div
					style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;"
				>
					<span style="font-size: 1.1em;">🔄 Autoplay:</span>
					<span style="color: {isAutoPlaying ? '#00ff00' : '#ff6666'}; font-weight: bold;">
						{isAutoPlaying ? `ON (${autoPlayRoundsLeft} left)` : 'OFF'}
					</span>
				</div>
				{#if isAutoPlaying}
					<button
						onclick={stopAutoPlay}
						style="width: 100%; padding: 12px; background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;"
					>
						🛑 STOP AUTOPLAY
					</button>
				{:else}
					<button
						onclick={() => {
							showAutoPlayMenu = true;
							showPaytable = false;
						}}
						style="width: 100%; padding: 12px; background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: bold; font-size: 1em;"
					>
						▶️ START AUTOPLAY
					</button>
				{/if}
			</div>

			<!-- Spin Speed -->
			<div style="margin-bottom: 10px;">
				<div style="margin-bottom: 10px;">
					<span style="font-size: 1.1em;">⚡ Spin Speed:</span>
					<span style="color: #ffd700; font-weight: bold; margin-left: 10px;">
						{spinSpeed === 'slow' ? '🐌 SLOW' : spinSpeed === 'medium' ? '🏃 MEDIUM' : '⚡ FAST'}
					</span>
				</div>
				<div style="display: flex; gap: 10px;">
					<button
						onclick={() => {
							spinSpeed = 'slow';
						}}
						style="flex: 1; padding: 10px; background: {spinSpeed === 'slow'
							? 'linear-gradient(135deg, #4488ff 0%, #66aaff 100%)'
							: 'rgba(255,255,255,0.1)'}; color: white; border: {spinSpeed === 'slow'
							? '2px solid #ffd700'
							: '1px solid #555'}; border-radius: 8px; cursor: pointer; font-size: 0.9em;"
					>
						🐌 Slow
					</button>
					<button
						onclick={() => {
							spinSpeed = 'medium';
						}}
						style="flex: 1; padding: 10px; background: {spinSpeed === 'medium'
							? 'linear-gradient(135deg, #4488ff 0%, #66aaff 100%)'
							: 'rgba(255,255,255,0.1)'}; color: white; border: {spinSpeed === 'medium'
							? '2px solid #ffd700'
							: '1px solid #555'}; border-radius: 8px; cursor: pointer; font-size: 0.9em;"
					>
						🏃 Medium
					</button>
					<button
						onclick={() => {
							spinSpeed = 'fast';
						}}
						style="flex: 1; padding: 10px; background: {spinSpeed === 'fast'
							? 'linear-gradient(135deg, #4488ff 0%, #66aaff 100%)'
							: 'rgba(255,255,255,0.1)'}; color: white; border: {spinSpeed === 'fast'
							? '2px solid #ffd700'
							: '1px solid #555'}; border-radius: 8px; cursor: pointer; font-size: 0.9em;"
					>
						⚡ Fast
					</button>
				</div>
			</div>

			<div style="border-top: 1px solid #555; margin: 20px 0;"></div>
		</div>

		<!-- PAYTABLE INFO -->
		<h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 1.2em;">💰 PAYTABLE (81 WAYS)</h3>

		<div style="margin-bottom: 15px; text-align: center; color: #aaa;">
			Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br />
			Vähintään 3 symbolia tarvitaan voittoon
		</div>

		<div style="display: grid; gap: 10px;">
			<!-- Premium Symbols -->
			<div
				style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;"
			>
				<div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;">
					👑 PREMIUM SYMBOLS
				</div>
				<div style="margin: 5px 0;">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div>
				<div style="margin: 5px 0;">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div>
				<div style="margin: 5px 0;">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div>
			</div>

			<!-- Blue Symbols -->
			<div
				style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;"
			>
				<div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;">
					💎 BLUE SYMBOLS
				</div>
				<div style="margin: 5px 0;">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div>
				<div style="margin: 5px 0;">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div>
				<div style="margin: 5px 0;">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div>
				<div style="margin: 5px 0;">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div>
			</div>

			<!-- Red Symbols -->
			<div
				style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;"
			>
				<div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;">
					🎵 RED SYMBOLS
				</div>
				<div style="margin: 5px 0;">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div>
				<div style="margin: 5px 0;">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div>
				<div style="margin: 5px 0;">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div>
			</div>

			<!-- Special Symbols -->
			<div
				style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;"
			>
				<div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;">
					⭐ SPECIAL SYMBOLS
				</div>
				<div style="margin: 5px 0;">
					WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).
				</div>
				<div style="margin: 5px 0;">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div>
			</div>
		</div>

		<div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;">
			Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br />
			<span style="color: #ffd700;">Ways = Symbolien määrä per kela kerrottuna</span>
		</div>

		<button
			onclick={() => {
				showPaytable = false;
			}}
			style="
        margin-top: 20px;
        width: 100%;
        padding: 10px;
        background: #ffd700;
        color: #333;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-size: 1em;
        font-weight: bold;
      "
		>
			Sulje
		</button>
	</div>
{/if}

<!-- ===== 4) VAPAAERÄ-LOPETUS-POPUP ===== -->
<!-- Näytetään kun vapaaeräjakso päättyy (freeSpinsRemaining === 0) -->
<!-- Näyttää vapaaerän aikana voitetun kokonaissumman -->
<!-- "JATKA PERUSPELIIN" -nappi palauttaa peruspelitilaan ja vaihtaa musiikin -->
{#if showFreeSpinsEndPopup}
	<div
		style="
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5000;
  "
	>
		<div
			style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    "
		>
			<h1
				style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      "
			>
				🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰
			</h1>

			<div
				style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      "
			>
				Voitit yhteensä:
			</div>

			<div
				style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      "
			>
				{freeSpinsEndAmount.toFixed(2)}
			</div>

			<button
				onclick={() => {
					showFreeSpinsEndPopup = false;
					isFreeSpinMode = false;
					freeSpinsTotalWon = 0;
					freeSpinsEndAmount = 0;

					// Palauta peruspelin musiikki
					switchMusic();
				}}
				onmouseenter={(e) => {
					e.currentTarget.style.transform = 'scale(1.05)';
					e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.6)';
				}}
				onmouseleave={(e) => {
					e.currentTarget.style.transform = 'scale(1)';
					e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.4)';
				}}
				style="
          margin-top: 30px;
          padding: 15px 40px;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
          color: #000;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 1.3em;
          font-weight: bold;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        "
			>
				JATKA PERUSPELIIN
			</button>
		</div>
	</div>
{/if}

<!-- ===== 5) PÄÄKONTTI ===== -->
<!-- Keskittää pelin näytöllä ja käsittelee responsiivisen skaalauksen -->
<!-- Sisältää PixiJS canvasin ja kaikki HTML-kontrollit -->
<div
	style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
"
>
	<div
		style="
    position: relative;
    width: {CANVAS_WIDTH * gameScale}px;
    height: {CANVAS_HEIGHT * gameScale}px;
  "
	>
		<!-- PixiJS canvas sijoitetaan tähän (container-div) -->
		<div
			bind:this={container}
			style="
        position: absolute;
        top: 0;
        left: 0;
        width: {CANVAS_WIDTH}px;
        height: {CANVAS_HEIGHT}px;
      "
		>
			<!-- Paytable-nappi oikeassa reunassa -->
			<button
				onclick={() => {
					showPaytable = !showPaytable;
				}}
				style="
          position: absolute;
						top: {paytableButtonTop}px;
						right: {topButtonRight}px;
          padding: {10 * gameScale}px {15 * gameScale}px;
          background-color: rgba(255, 215, 0, 0.3);
          border: {2 * gameScale}px solid rgba(255, 215, 0, 0.7);
          border-radius: {8 * gameScale}px;
          cursor: pointer;
          font-weight: bold;
          font-size: {16 * gameScale}px;
          color: white;
          text-shadow: 0 0 {5 * gameScale}px rgba(0,0,0,0.8);
          z-index: 1000;
          min-width: {180 * gameScale}px;
        "
			>
				💰 PAYTABLE
			</button>

			<!-- ===== 6) CONTROL PANEL (LAYOUT SYSTEM) ===== -->
			<!-- Pelin pääkontrollit näytön alareunassa -->
			<!-- Sisältää: Panos-kontrollit, Balance, Play-nappi, Autoplay, Spin Speed, Win-näyttö, Menu -->
			<!-- HUOM: Sijainti ja koko tulevat nyt layout-järjestelmästä! -->
			<div
				class="control-panel-mobile"
				style="
        position: absolute;
        left: {controlPanelPos.x}px;
        top: {controlPanelPos.y}px;
        width: {controlPanelPos.width}px;
        height: {controlPanelPos.height}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      "
			>
				<!-- Autoplay valikko (näkyy kun showAutoPlayMenu = true) -->
				{#if showAutoPlayMenu}
					<div
						style="
    position: absolute;
    bottom: {(controlPanelPos.height / gameScale + 20) * gameScale}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: {20 * gameScale}px;
    border-radius: {15 * gameScale}px;
    border: {3 * gameScale}px solid #0088ff;
    box-shadow: 0 {8 * gameScale}px {30 * gameScale}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: {250 * gameScale}px;
  "
					>
						<div
							style="color: white; font-weight: bold; margin-bottom: {15 *
								gameScale}px; text-align: center; font-size: {18 * gameScale}px;"
						>
							🔄 Select Rounds
						</div>
						<button
							onclick={() => {
								startAutoPlay(10);
								showAutoPlayMenu = false;
							}}
							style="
        width: 100%;
        padding: {12 * gameScale}px;
        margin-bottom: {8 * gameScale}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: {8 * gameScale}px;
        cursor: pointer;
        font-weight: bold;
        font-size: {16 * gameScale}px;
        box-shadow: 0 {4 * gameScale}px {10 * gameScale}px rgba(68, 170, 68, 0.4);
      "
						>
							10 Rounds
						</button>
						<button
							onclick={() => {
								startAutoPlay(25);
								showAutoPlayMenu = false;
							}}
							style="
        width: 100%;
        padding: {12 * gameScale}px;
        margin-bottom: {8 * gameScale}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: {8 * gameScale}px;
        cursor: pointer;
        font-weight: bold;
        font-size: {16 * gameScale}px;
        box-shadow: 0 {4 * gameScale}px {10 * gameScale}px rgba(68, 170, 68, 0.4);
      "
						>
							25 Rounds
						</button>
						<button
							onclick={() => {
								startAutoPlay(50);
								showAutoPlayMenu = false;
							}}
							style="
        width: 100%;
        padding: {12 * gameScale}px;
        margin-bottom: {8 * gameScale}px;
        background: linear-gradient(135deg, #44aa44 0%, #66cc66 100%);
        color: white;
        border: none;
        border-radius: {8 * gameScale}px;
        cursor: pointer;
        font-weight: bold;
        font-size: {16 * gameScale}px;
        box-shadow: 0 {4 * gameScale}px {10 * gameScale}px rgba(68, 170, 68, 0.4);
      "
						>
							50 Rounds
						</button>
						<button
							onclick={() => {
								startAutoPlay(100);
								showAutoPlayMenu = false;
							}}
							style="
        width: 100%;
        padding: {12 * gameScale}px;
        margin-bottom: {8 * gameScale}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: {8 * gameScale}px;
        cursor: pointer;
        font-weight: bold;
        font-size: {16 * gameScale}px;
        box-shadow: 0 {4 * gameScale}px {10 * gameScale}px rgba(68, 136, 255, 0.4);
      "
						>
							100 Rounds
						</button>
						<button
							onclick={() => {
								startAutoPlay(200);
								showAutoPlayMenu = false;
							}}
							style="
        width: 100%;
        padding: {12 * gameScale}px;
        margin-bottom: {8 * gameScale}px;
        background: linear-gradient(135deg, #4488ff 0%, #66aaff 100%);
        color: white;
        border: none;
        border-radius: {8 * gameScale}px;
        cursor: pointer;
        font-weight: bold;
        font-size: {16 * gameScale}px;
        box-shadow: 0 {4 * gameScale}px {10 * gameScale}px rgba(68, 136, 255, 0.4);
      "
						>
							200 Rounds
						</button>
						<button
							onclick={() => {
								startAutoPlay(500);
								showAutoPlayMenu = false;
							}}
							style="
        width: 100%;
        padding: {12 * gameScale}px;
        margin-bottom: {8 * gameScale}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: {8 * gameScale}px;
        cursor: pointer;
        font-weight: bold;
        font-size: {16 * gameScale}px;
        box-shadow: 0 {4 * gameScale}px {10 * gameScale}px rgba(255, 136, 68, 0.4);
      "
						>
							500 Rounds
						</button>
						<button
							onclick={() => {
								startAutoPlay(1000);
								showAutoPlayMenu = false;
							}}
							style="
        width: 100%;
        padding: {12 * gameScale}px;
        margin-bottom: {8 * gameScale}px;
        background: linear-gradient(135deg, #ff8844 0%, #ffaa66 100%);
        color: white;
        border: none;
        border-radius: {8 * gameScale}px;
        cursor: pointer;
        font-weight: bold;
        font-size: {16 * gameScale}px;
        box-shadow: 0 {4 * gameScale}px {10 * gameScale}px rgba(255, 136, 68, 0.4);
      "
						>
							1,000 Rounds
						</button>
						<button
							onclick={() => {
								startAutoPlay(5000);
								showAutoPlayMenu = false;
							}}
							style="
        width: 100%;
        padding: {12 * gameScale}px;
        margin-bottom: {15 * gameScale}px;
        background: linear-gradient(135deg, #ff4444 0%, #ff6666 100%);
        color: white;
        border: none;
        border-radius: {8 * gameScale}px;
        cursor: pointer;
        font-weight: bold;
        font-size: {16 * gameScale}px;
        box-shadow: 0 {4 * gameScale}px {10 * gameScale}px rgba(255, 68, 68, 0.4);
      "
						>
							5,000 Rounds
						</button>
						<button
							onclick={() => {
								showAutoPlayMenu = false;
							}}
							style="
        width: 100%;
        padding: {10 * gameScale}px;
        background: rgba(255, 255, 255, 0.1);
        color: #aaa;
        border: {1 * gameScale}px solid #555;
        border-radius: {8 * gameScale}px;
        cursor: pointer;
        font-size: {14 * gameScale}px;
      "
						>
							Cancel
						</button>
					</div>
				{/if}

				<!-- ===== CONTROL PANEL (v1.1.0) ===== -->
				<!--
  Moderni control panel joka skaalautuu reelien kehysten leveyteen.
  Koostuu kolmesta osasta:
  - Vasen pää (Control_leftend.png)
  - Keskikohta (Control_scalablebg.png - skaalautuva)
  - Oikea pää (Control_rightend.png)

  v1.1.4: Korjattu käyttämään pikselikoordinaatteja zoomin tukemiseksi
  v1.2.3: Siirretty canvas-kontin sisään oikean skaalauksen varmistamiseksi
-->
				<!-- Vasen pää -->
				<img
					src="{controlsPath}/Control_leftend.png"
					alt="Left End"
					style="height: {controlPanelPos.height}px; flex-shrink: 0;"
				/>

				<!-- Keskiosa (skaalautuva tausta) -->
				<div
					style="
    flex-grow: 1;
    height: {controlPanelPos.height}px;
    background-image: url('{controlsPath}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    padding: 0 {20 * gameScale}px;
    position: relative;
    gap: {20 * gameScale}px;
  "
				>
					<!-- Vasen puoli (BET desktop/landscape, BALANCE, tai Menu portrait) -->
					<div
						style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;"
					>
						<!-- Menu nappi (näkyy vain mobiilissa, vasemmalla) -->
						<div
							class="hide-on-desktop"
							style="display: none; align-items: center; justify-content: center; margin-right: {10 *
								gameScale}px;"
						>
							<button
								onclick={() => {
									showPaytable = !showPaytable;
								}}
								style="
            width: {50 * gameScale}px;
            height: {50 * gameScale}px;
            background-image: url('{controlsPath}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          "
								title="Menu"
								aria-label="Toggle menu"
							></button>
						</div>

						<!-- BET kontrollit (vain desktop) -->
						{#if deviceType() === 'desktop'}
							<div style="display: flex; flex-direction: column; align-items: center;">
								<div
									style="color: #00ff00; font-size: {12 *
										gameScale}px; font-weight: bold; line-height: 1; height: {16 *
										gameScale}px; display: flex; align-items: flex-end; padding-bottom: {2 *
										gameScale}px;"
								>
									BET
								</div>
								<div
									style="display: flex; gap: {5 * gameScale}px; align-items: center; height: {44 *
										gameScale}px;"
								>
									<button
										onclick={decreaseBet}
										style="
              width: {40 * gameScale}px;
              height: {40 * gameScale}px;
              background-image: url('{controlsPath}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            "
										title="Decrease Bet"
										aria-label="Decrease bet"
									></button>
									<div
										style="
            color: #fff;
            font-size: {18 * gameScale}px;
            font-weight: bold;
            min-width: {80 * gameScale}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          "
									>
										{betAmount.toFixed(2)}
									</div>
									<button
										onclick={increaseBet}
										style="
              width: {40 * gameScale}px;
              height: {40 * gameScale}px;
              background-image: url('{controlsPath}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            "
										title="Increase Bet"
										aria-label="Increase bet"
									></button>
								</div>
							</div>
						{/if}

						<!-- Divider -->
						<img
							class="hide-on-mobile"
							src="{controlsPath}/Control_divider.png"
							alt="Divider"
							style="height: {controlPanelPos.height * 0.8}px; flex-shrink: 0;"
						/>

						<!-- BALANCE näyttö -->
						<div
							class="hide-on-mobile"
							style="display: flex; flex-direction: column; align-items: center;"
						>
							<div
								style="color: #00ff00; font-size: {12 *
									gameScale}px; font-weight: bold; line-height: 1; height: {16 *
									gameScale}px; display: flex; align-items: flex-end; padding-bottom: {2 *
									gameScale}px;"
							>
								BALANCE
							</div>
							<div style="height: {44 * gameScale}px; display: flex; align-items: center;">
								<div
									style="
            color: #fff;
            font-size: {20 * gameScale}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          "
								>
									{balance.toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</div>
							</div>
						</div>

						<!-- Divider -->
						<img
							class="hide-on-mobile"
							src="{controlsPath}/Control_divider.png"
							alt="Divider"
							style="height: {controlPanelPos.height * 0.8}px; flex-shrink: 0;"
						/>
					</div>

					<!-- Keskiosan tyhjä tila Play-buttonille -->
					<div style="flex-shrink: 0; width: {130 * gameScale}px;"></div>

					<!-- PLAY nappi (keskellä, iso - tulee paneelin yli) -->
					<div
						style="position: absolute; left: 50%; transform: translateX(-50%); display: flex; align-items: center; justify-content: center; z-index: 10;"
					>
						<div class="play-button-wrapper {playButtonGlareActive ? 'glare-animate' : ''}">
							<button
								onclick={() => {
									if (isAutoPlaying) {
										stopAutoPlay();
									} else {
										// Tarkista ovatko kiekot pyörimässä
										const isAnyReelSpinning = reels.some(
											(r) => r.state === 'spinning' || r.state === 'slowing',
										);

										if (isAnyReelSpinning) {
											// Pysäytä kiekot nopeasti (skip spin)
											reels.forEach((r) => {
												if (r.state === 'spinning') {
													r.stopDelay = 0;
													r.state = 'slowing';
													r.speed = r.targetSpeed * 0.5;
												} else if (r.state === 'slowing') {
													r.speed = r.speed * 0.3;
												}
											});
										} else {
											// Aloita uusi spin jos kiekot eivät pyöri
											spin();
										}
									}
								}}
								style="
            width: {110 * gameScale}px;
            height: {110 * gameScale}px;
            background-image: url('{controlsPath}/{isAutoPlaying
									? 'Control_playbutton_stop.png'
									: 'Control_playbutton.png'}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
            opacity: 1;
            position: relative;
            z-index: 10;
            border-radius: 50%;
          "
								title={isAutoPlaying ? 'STOP AUTOPLAY' : 'SPIN'}
								aria-label={isAutoPlaying ? 'Stop autoplay' : 'Spin'}
							></button>
						</div>
					</div>

					<!-- Oikea puoli (BET mobiili, Autoplay, Spin Speed, WIN, Menu) -->
					<div
						style="flex: 1; display: flex; align-items: center; justify-content: space-around; min-width: 0;"
					>
						<!-- BET kontrollit (kaikki mobiilitilat) -->
						{#if deviceType() !== 'desktop'}
							<div style="display: flex; flex-direction: column; align-items: center;">
								<div
									style="color: #00ff00; font-size: {12 *
										gameScale}px; font-weight: bold; line-height: 1; height: {16 *
										gameScale}px; display: flex; align-items: flex-end; padding-bottom: {2 *
										gameScale}px;"
								>
									BET
								</div>
								<div
									style="display: flex; gap: {5 * gameScale}px; align-items: center; height: {44 *
										gameScale}px;"
								>
									<button
										onclick={decreaseBet}
										style="
              width: {40 * gameScale}px;
              height: {40 * gameScale}px;
              background-image: url('{controlsPath}/Control_lowerbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            "
										title="Decrease Bet"
										aria-label="Decrease bet"
									></button>
									<div
										style="
            color: #fff;
            font-size: {18 * gameScale}px;
            font-weight: bold;
            min-width: {80 * gameScale}px;
            text-align: center;
            font-family: 'Courier New', monospace;
          "
									>
										{betAmount.toFixed(2)}
									</div>
									<button
										onclick={increaseBet}
										style="
              width: {40 * gameScale}px;
              height: {40 * gameScale}px;
              background-image: url('{controlsPath}/Control_upperbet_select.png');
              background-size: contain;
              background-repeat: no-repeat;
              border: none;
              cursor: pointer;
              background-color: transparent;
            "
										title="Increase Bet"
										aria-label="Increase bet"
									></button>
								</div>
							</div>
						{/if}

						<!-- Autoplay nappi -->
						<div
							class="hide-on-mobile"
							style="display: flex; flex-direction: column; align-items: center; gap: {5 *
								gameScale}px;"
						>
							<button
								onclick={() => {
									if (isAutoPlaying) {
										stopAutoPlay();
									} else {
										showAutoPlayMenu = !showAutoPlayMenu;
									}
								}}
								style="
            width: {50 * gameScale}px;
            height: {50 * gameScale}px;
            background-image: url('{controlsPath}/{isAutoPlaying
									? 'Control_autoplay_stop.png'
									: 'Control_autoplay_select.png'}');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          "
								title={isAutoPlaying ? 'Stop Autoplay' : 'Autoplay'}
								aria-label={isAutoPlaying ? 'Stop autoplay' : 'Open autoplay menu'}
							></button>
							<img
								src="{controlsPath}/{isAutoPlaying
									? 'Control_bar_select.png'
									: 'Control_bar_deselect.png'}"
								alt="Status bar"
								style="height: {10 * gameScale}px; width: auto; display: block;"
							/>
						</div>

						<!-- Divider -->
						<img
							class="hide-on-mobile"
							src="{controlsPath}/Control_divider.png"
							alt="Divider"
							style="height: {controlPanelPos.height * 0.8}px; flex-shrink: 0;"
						/>

						<!-- Spin Speed nappi (3 tilaa: slow/medium/fast) -->
						<div
							class="hide-on-mobile"
							style="display: flex; flex-direction: column; align-items: center; gap: {5 *
								gameScale}px;"
						>
							<button
								onclick={() => {
									// Sykli: slow -> medium -> fast -> slow...
									if (spinSpeed === 'slow') {
										spinSpeed = 'medium';
									} else if (spinSpeed === 'medium') {
										spinSpeed = 'fast';
									} else {
										spinSpeed = 'slow';
									}
								}}
								style="
            width: {50 * gameScale}px;
            height: {50 * gameScale}px;
            background-image: url('{controlsPath}/Control_fastplay_select.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          "
								title="Spin Speed: {spinSpeed === 'slow'
									? 'Slow'
									: spinSpeed === 'medium'
										? 'Medium'
										: 'Fast'}"
								aria-label="Change spin speed"
							></button>
							<!-- Viiva: harmaa = slow, puolikas vihreä = medium, koko vihreä = fast -->
							<img
								src="{controlsPath}/{spinSpeed === 'slow'
									? 'Control_bar_deselect.png'
									: spinSpeed === 'medium'
										? 'Control_half_bar_select.png'
										: 'Control_bar_select.png'}"
								alt="Speed bar"
								style="height: {10 * gameScale}px; width: auto; display: block;"
							/>
						</div>

						<!-- Divider -->
						<img
							class="hide-on-mobile"
							src="{controlsPath}/Control_divider.png"
							alt="Divider"
							style="height: {controlPanelPos.height * 0.8}px; flex-shrink: 0;"
						/>

						<!-- WIN osio -->
						<div
							class="hide-on-mobile"
							style="display: flex; flex-direction: column; align-items: center;"
						>
							<div
								style="color: #00ff00; font-size: {12 *
									gameScale}px; font-weight: bold; line-height: 1; height: {16 *
									gameScale}px; display: flex; align-items: flex-end; padding-bottom: {2 *
									gameScale}px;"
							>
								WIN
							</div>
							<div style="height: {44 * gameScale}px; display: flex; align-items: center;">
								<div
									style="
            color: #fff;
            font-size: {20 * gameScale}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
          "
								>
									{lastWin.toLocaleString('en-US', {
										minimumFractionDigits: 2,
										maximumFractionDigits: 2,
									})}
								</div>
							</div>
						</div>

						<!-- Divider -->
						<img
							class="hide-on-mobile"
							src="{controlsPath}/Control_divider.png"
							alt="Divider"
							style="height: {controlPanelPos.height * 0.8}px; flex-shrink: 0;"
						/>

						<!-- Menu nappi -->
						<div
							class="hide-on-mobile"
							style="display: flex; align-items: center; justify-content: center;"
						>
							<button
								onclick={() => {
									showPaytable = !showPaytable;
								}}
								style="
            width: {50 * gameScale}px;
            height: {50 * gameScale}px;
            background-image: url('{controlsPath}/Control_menubar.png');
            background-size: contain;
            background-repeat: no-repeat;
            border: none;
            cursor: pointer;
            background-color: transparent;
          "
								title="Menu"
								aria-label="Toggle menu"
							></button>
						</div>
					</div>
				</div>

				<!-- Oikea pää -->
				<img
					src="{controlsPath}/Control_rightend.png"
					alt="Right End"
					style="height: {controlPanelPos.height}px; flex-shrink: 0;"
				/>
			</div>
			<!-- Suljetaan control panel -->
		</div>
		<!-- Suljetaan canvas-kontti -->

		<!-- Debug-nappi (ulomman wrapper-divin sisällä, canvas-kontin ulkopuolella) -->
		<button
			onclick={() => {
				showDebugPanel = !showDebugPanel;
			}}
			style="
    position: absolute;
	top: {debugButtonTop}px;
	right: {topButtonRight}px;
    padding: {10 * gameScale}px {15 * gameScale}px;
    background-color: rgba(0, 255, 0, 0.3);
    border: {2 * gameScale}px solid rgba(0, 255, 0, 0.7);
    border-radius: {8 * gameScale}px;
    cursor: pointer;
    font-weight: bold;
    font-size: {16 * gameScale}px;
    color: white;
    text-shadow: 0 0 {5 * gameScale}px rgba(0,0,0,0.8);
    z-index: 10000;
    min-width: {180 * gameScale}px;
    pointer-events: auto;
  "
		>
			🛠️ DEBUG v{GAME_VERSION}
		</button>

		<!-- VinylWinAnimation - Näyttää äänilevyt ja tähdet isojen voittojen yhteydessä -->
		<VinylWinAnimation
			bind:this={vinylWinAnimationRef}
			winLevel={totalWin / betAmount >= 50
				? 'jackpot'
				: totalWin / betAmount >= 20
					? 'medium'
					: 'small'}
			winAmount={totalWin}
			vinylStartScale={vinylAnimationConfig.vinylStartScale}
			vinylEndScale={vinylAnimationConfig.vinylEndScale}
			sparkleScale={vinylAnimationConfig.sparkleScale}
		/>

		<!-- ===== 7) DEBUG & TILASTOPANEELI ===== -->
		<!-- RTP-seuranta, tilastot, testaustyökalut -->
		<!-- Näkyy kun showDebugPanel === true (toglataan "🛠️ DEBUG" -napista) -->
		<!-- Näyttää: RTP%, hit frequency, vapaaperät, empty slot %, voittoloki -->
		<!-- RTP MONITOR (vasemmassa yläkulmassa) -->
		<div
			class="debug-panel"
			style="
  position: absolute;
  top: 20px;
  left: 20px;
  display: {showDebugPanel ? 'block' : 'none'};
  background: rgba(0, 0, 0, 0.9);
  color: #00ff00;
  padding: 15px 20px;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  font-size: 14px;
  border: 2px solid #00ff00;
  box-shadow: 0 4px 15px rgba(0, 255, 0, 0.3);
  z-index: 1500;
  min-width: 200px;
"
		>
			<div
				style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;"
			>
				📊 RTP MONITOR
			</div>
			<div
				style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;"
			>
				v{GAME_VERSION}
			</div>
			<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
				<span style="color: #aaa;">Rounds:</span>
				<span style="color: #fff;">{totalRounds.toLocaleString()}</span>
			</div>
			<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
				<span style="color: #aaa;">Wagered:</span>
				<span style="color: #ff6666;">{totalWagered.toLocaleString()}</span>
			</div>
			<div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
				<span style="color: #aaa;">Won:</span>
				<span style="color: #66ff66;">{totalWon.toLocaleString()}</span>
			</div>
			<div
				style="
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  "
			>
				<span style="color: #ffd700;">RTP:</span>
				<span
					style="color: {parseFloat(currentRTP) >= 95
						? '#00ff00'
						: parseFloat(currentRTP) >= 85
							? '#ffff00'
							: '#ff6666'};"
				>
					{currentRTP}%
				</span>
			</div>
			<div
				style="
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  "
			>
				<span style="color: #aaa;">Hit Freq:</span>
				<span
					style="color: {parseFloat(hitFrequency) >= 30
						? '#00ff00'
						: parseFloat(hitFrequency) >= 20
							? '#ffff00'
							: '#ff6666'};"
				>
					{hitFrequency}%
				</span>
			</div>
			<div
				style="
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 14px;
  "
			>
				<span style="color: #aaa;">Free Spins Triggered:</span>
				<span style="color: #66ccff;">{freeSpinsTriggerCount}</span>
			</div>
			<div
				style="
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    font-size: 14px;
  "
			>
				<span style="color: #aaa;">Free Spins Played:</span>
				<span style="color: #66ccff;">{freeSpinsPlayedCount}</span>
			</div>
			<div
				style="
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  "
			>
				<span style="color: #aaa;">Empty Slots:</span>
				<span style="color: #ff9900;">{emptySlotPercentage}%</span>
			</div>
			<button
				onclick={resetStats}
				style="
      margin-top: 10px;
      width: 100%;
      padding: 5px;
      background: rgba(255, 100, 100, 0.3);
      color: #fff;
      border: 1px solid #ff6666;
      border-radius: 5px;
      cursor: pointer;
      font-size: 11px;
    "
			>
				Reset Stats
			</button>

			<!-- Win Log Controls -->
			<div
				style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  "
			>
				<button
					onclick={downloadWinLog}
					disabled={winLog.length === 0}
					style="
        width: 100%;
        padding: 5px;
        background: {winLog.length > 0 ? 'rgba(100, 255, 100, 0.3)' : 'rgba(100, 100, 100, 0.3)'};
        color: #fff;
        border: 1px solid {winLog.length > 0 ? '#66ff66' : '#666'};
        border-radius: 5px;
        cursor: {winLog.length > 0 ? 'pointer' : 'not-allowed'};
        font-size: 11px;
        opacity: {winLog.length > 0 ? '1' : '0.5'};
      "
				>
					Download Win Log ({winLog.length})
				</button>

				<button
					onclick={clearWinLog}
					disabled={winLog.length === 0}
					style="
        width: 100%;
        padding: 5px;
        background: rgba(255, 150, 100, 0.3);
        color: #fff;
        border: 1px solid #ff9966;
        border-radius: 5px;
        cursor: {winLog.length > 0 ? 'pointer' : 'not-allowed'};
        font-size: 11px;
        opacity: {winLog.length > 0 ? '1' : '0.5'};
      "
				>
					Clear Win Log
				</button>

				<button
					onclick={triggerTestFreeSpins}
					disabled={isFreeSpinMode}
					style="
        width: 100%;
        padding: 5px;
        background: {isFreeSpinMode ? 'rgba(100, 100, 100, 0.3)' : 'rgba(100, 150, 255, 0.3)'};
        color: #fff;
        border: 1px solid {isFreeSpinMode ? '#666' : '#66aaff'};
        border-radius: 5px;
        cursor: {isFreeSpinMode ? 'not-allowed' : 'pointer'};
        font-size: 11px;
        opacity: {isFreeSpinMode ? '0.5' : '1'};
      "
				>
					🎰 Test Free Spins
				</button>
			</div>
		</div>

		<!-- Music and Sound buttons in top-right corner -->
		<div
			style="
  position: absolute;
	top: {audioButtonTop}px;
	right: {audioButtonRight}px;
  display: flex;
  gap: {10 * gameScale}px;
  z-index: 1001;
"
		>
			<!-- Music toggle button -->
			<button
				onclick={toggleMusic}
				style="
      width: {50 * gameScale}px;
      height: {50 * gameScale}px;
      background-image: url('{controlsPath}/{musicEnabled ? 'music_on.png' : 'music_off.png'}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    "
				title={musicEnabled ? 'Music: ON' : 'Music: OFF'}
				aria-label="Toggle music"
			></button>

			<!-- Sound effects toggle button -->
			<button
				onclick={toggleSound}
				style="
      width: {50 * gameScale}px;
      height: {50 * gameScale}px;
      background-image: url('{controlsPath}/{soundEnabled ? 'sounds_on.png' : 'sounds_off.png'}');
      background-size: contain;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
      background-color: transparent;
    "
				title={soundEnabled ? 'Sound: ON' : 'Sound: OFF'}
				aria-label="Toggle sound"
			></button>
		</div>
	</div>
	<!-- Päätä skaalautuva wrapper -->
</div>

<!-- Päätä ulompi wrapper -->

<!--
  ============================================================================
  HelloPixi.svelte - ROCKABILLY REELS Slot Machine
  ============================================================================
  VERSION: Auto-loaded from package.json

  GAME ARCHITECTURE:
  - 5-reel slot with 3×3×1×3×3 grid layout (13 total independent reels)
  - 81 WAYS-PAYING system with column-based win calculation
  - PixiJS 8 graphics engine with Svelte 5 runes reactive state
  - YAML Config v1.0 math model implementation

  GAME FEATURES:
  - Dynamic symbol generation with weighted randomization
  - Wild symbols on middle reel only (55% probability)
  - Scatter-triggered free spins (5+ scatters = variable free spins)
  - TRUE WAYS LOGIC: Counts symbols per column, multiplies ways together
  - Win multipliers: Base (1x/2x/3x), Free Spins (3x/5x/10x)
  - "Longest only" rule: Only pay highest win per symbol
  - Win animations with highlighted winning paths
  - Autoplay with configurable spin counts (10/100/1K/10K/100K)
  - Adjustable bet system (min 1, max 100)

  MATH MODEL (YAML Config v1.0):
  - Target RTP: ~97% (corrected from ~80% in v1.0.8)
  - Base Game: ~69% RTP | ~71% of total wins
  - Free Spins: ~28% RTP | ~29% of total wins
  - Hit Frequency: ~17-18% (1 in 5.7 spins)
  - Free Spin Trigger: ~1 in 230-240 spins
  - Volatility: Medium-High (balanced hit frequency with big win potential)
  - Max Win Observed: 2700x+ (1M spin simulation)

  SYMBOL REPLACEMENTS (Free Spins):
  - k (Milkshake) → f (Brunette): 8% → 14% total
  - j (Fries) → e (Blonde): 7% → 12% total
  - i (Burger) → g (Rockabilly): 7% → 11% total
  - Result: Premium symbols appear 2x more frequently in free spins

  WIN CALCULATION:
  - Column-based: Symbol must appear on each consecutive column from left
  - Example 4-symbol win requires symbol on columns 0,1,2,3
  - Ways counted per path: multiply symbol count per column
  - CORRECT LOGIC (v1.0.8): Pays all symbol+length combinations separately
    * Groups by symbol+length (e.g., "a-3", "a-5")
    * Each group counts ways independently and pays separately
    * This is the correct ways-game behavior
  - REMOVED (v1.0.8): "Longest only per symbol" global filter (caused 17% RTP loss)

  VISUAL ELEMENTS:
  - Background: 1445×1000px custom rockabilly-themed slot machine
  - 11 symbol types: 3 red (low), 4 blue (mid), 3 premium, 1 wild, 1 scatter
  - Logo, bet controls, credit display, paytable viewer
  - Statistics tracker with RTP monitoring
  - Win log system with download capability
  - Test mode for instant free spins

  TECHNICAL NOTES:
  - All math is local (no RGS integration)
  - Separate weight tables: SYMBOL_WEIGHTS_BASE / SYMBOL_WEIGHTS_FS
  - Multiplier distribution: 70%/22%/8% for base and free spins (v1.7)
  - Empty slots: 25% across all reels for RTP balancing
  - Wild on middle reel: 55% probability

  VERSION HISTORY:
  - v1.5.2: High-resolution logo (796×552px) with improved antialiasing, mipmaps, and retina display support
  - v1.3.1: Poistettu "HELLO MAD CRANE" teksti, palautettu pieni bounce effect (8px, 0.85 damping), tehty wrapper läpinäkyväksi
  - v1.3.0: Poistettu reelien taustalla olevat värilliset debug-neliöt ja numerot
  - v1.2.9: Poistettu kiekon pomppuefekti [PALAUTETTU v1.3.1 pienempänä]
  - v1.2.8: Korjattu musiikki - poistettu dynaamiset loop-vaihdot, yksi satunnainen loop koko session ajan
  - v1.2.7: Dynaaminen musiikkivaihto - eri satunnainen loop joka kierroksella (20 loopia) [PERUTTU]
  - v1.2.6: Fixed PixiJS scaling - use stage.scale instead of renderer resize
  - v1.2.5: Fixed canvas container size to match renderer size (background zoom fix)
  - v1.2.4: Fixed Control Panel position scaling - multiply positions by gameScale
  - v1.2.3: Fixed Control Panel positioning - keep position scaling, remove content scaling
  - v1.2.2: Fixed Paytable and Debug button scaling at high zoom (scale all dimensions)
  - v1.2.1: Fixed canvas container double-scaling issue (PLAY button growth)
  - v1.2.0: Fixed control panel scaling at high browser zoom (removed double scaling, scaled all elements)
  - v1.1.9: UI consolidation - removed redundant displays, added lastWin tracking, debug toggle
  - v1.1.8: Fixed browser zoom scaling for control panel and payout table
  - v1.1.7: Sequential reel stopping (0→12), dynamic music system (20 loops)
  - v1.1.6: Spin speed configuration (fast ~3s, med ~5s, slow ~7s)
  - v1.1.5: Updated stop.mp3 sound effect
  - v1.1.4: Fixed control panel responsive scaling (transform-based positioning)
  - v1.1.3: Enhanced control panel (enlarged PLAY button, status bars)
  - v1.1.2: Added divider graphics between control panel sections
  - v1.1.1: Added adjustable parameters for control panel positioning
  - v1.1.0: Implemented modern control panel with scalable design
  - v1.0.9: Music integration with BPM-synchronized reel stops
  - v1.0.8: CRITICAL FIX - Removed underpay bug (+17% RTP: 80%→97%)
  - v1.0.7: Fixed free spin symbol replacements (use weight tables)
  - v1.0.6: Fixed column-based win calculation (require symbol on each column)
  - v1.0.5: Added win logging system and test free spins button
  - v1.0.4: Implemented "longest only" rule (pay highest win per symbol)
  - v1.0.3: Updated to math v1.7 (wild 55%, multipliers 70/22/8)
  - v1.0.2: Fixed black screen, improved UI
  - v1.0.1: Fixed ways calculation (enumerate all 81 paths)
  - v1.0.0: Initial YAML config v1.0 implementation
  ============================================================================
-->

<style>
	@keyframes winPulse {
		0%,
		100% {
			transform: translate(-50%, -50%) scale(1);
			box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
		}
		50% {
			transform: translate(-50%, -50%) scale(1.05);
			box-shadow: 0 0 40px rgba(255, 215, 0, 1);
		}
	}

	/* === RETRO 50s DINER WIN TEXT === */
	:global(.win3d) {
		--face: #ffd36a;
		--stroke: rgba(30, 12, 0, 0.95);
		--depth: #7a3b00;
		--glowA: rgba(255, 92, 168, 0.55);
		--glowB: rgba(90, 210, 255, 0.55);

		position: relative;
		display: inline-block;
		font-family: 'Cooper Black', 'Luckiest Guy', 'Bungee', system-ui, sans-serif;
		font-weight: 900;
		letter-spacing: 0.03em;
		text-transform: uppercase;
		font-size: clamp(0.8rem, 3vw, 1.4rem);
		line-height: 1.05;
	}

	:global(.win3d .depth) {
		position: absolute;
		inset: 0;
		transform: translate(3px, 3px);
		color: var(--depth);
		filter: saturate(1.1) contrast(1.05);
		text-shadow:
			0 1px 0 rgba(0, 0, 0, 0.25),
			0 2px 0 rgba(0, 0, 0, 0.25),
			0 3px 0 rgba(0, 0, 0, 0.25),
			0 10px 18px rgba(0, 0, 0, 0.35);
		user-select: none;
		pointer-events: none;
	}

	:global(.win3d .face) {
		position: relative;
		color: var(--face);
		-webkit-text-stroke: 2px var(--stroke);
		paint-order: stroke fill;
		text-shadow:
			0 -2px 0 rgba(255, 255, 255, 0.18),
			0 2px 0 rgba(120, 55, 0, 0.25),
			0 18px 22px rgba(0, 0, 0, 0.4),
			0 0 14px var(--glowA),
			0 0 18px var(--glowB);
	}

	:global(.winShine)::after {
		content: '';
		position: absolute;
		inset: -12%;
		background: linear-gradient(
			110deg,
			transparent 0%,
			rgba(255, 255, 255, 0) 35%,
			rgba(255, 255, 255, 0.75) 48%,
			rgba(255, 255, 255, 0) 60%,
			transparent 100%
		);
		transform: translateX(-160%) rotate(0.001deg);
		mix-blend-mode: screen;
		pointer-events: none;
		-webkit-mask: linear-gradient(#000 0 0);
		mask: linear-gradient(#000 0 0);
		animation: shine 1.25s ease-in-out infinite;
		opacity: 0.9;
	}

	@keyframes shine {
		0% {
			transform: translateX(-160%);
			opacity: 0;
		}
		15% {
			opacity: 0.85;
		}
		55% {
			transform: translateX(160%);
			opacity: 0.85;
		}
		56% {
			opacity: 0;
		}
		100% {
			transform: translateX(160%);
			opacity: 0;
		}
	}

	:global(.winHit) {
		animation: pop 420ms cubic-bezier(0.2, 0.9, 0.2, 1);
	}

	@keyframes pop {
		0% {
			transform: scale(0.92);
		}
		55% {
			transform: scale(1.08);
		}
		100% {
			transform: scale(1);
		}
	}

	:global(.rolling .face) {
		animation: glowPulse 900ms ease-in-out infinite;
	}

	@keyframes glowPulse {
		0%,
		100% {
			filter: drop-shadow(0 0 0 rgba(255, 92, 168, 0)) drop-shadow(0 0 0 rgba(90, 210, 255, 0));
		}
		50% {
			filter: drop-shadow(0 0 14px rgba(255, 92, 168, 0.65))
				drop-shadow(0 0 18px rgba(90, 210, 255, 0.65));
		}
	}

	/* Glare effect for PLAY button */
	.play-button-wrapper {
		position: relative;
		display: inline-block;
		overflow: hidden;
		border-radius: 50%;
	}

	.play-button-wrapper::after {
		content: '';
		position: absolute;
		top: -150%;
		left: -150%;
		width: 300%;
		height: 300%;
		background: linear-gradient(
			45deg,
			rgba(255, 255, 255, 0) 40%,
			rgba(255, 255, 255, 0.55) 50%,
			rgba(255, 255, 255, 0) 60%
		);
		transform: translateX(-100%) translateY(-100%);
		pointer-events: none;
		opacity: 0;
		filter: blur(2px);
	}

	.play-button-wrapper.glare-animate::after {
		animation: glareSweep 1.2s ease-out forwards;
		opacity: 1;
	}

	@keyframes glareSweep {
		0% {
			transform: translate(-120%, -120%);
			opacity: 0;
		}
		15% {
			opacity: 1;
		}
		100% {
			transform: translate(120%, 120%);
			opacity: 0;
		}
	}

	.mobile-menu-controls {
		display: none !important;
	}

	/* Piilota tietyt elementit mobiilissa */
	.hide-on-mobile {
		display: flex !important;
	}

	/* Piilota tietyt elementit desktopilla */
	.hide-on-desktop {
		display: none !important;
	}

	/* Mobiili portrait-tila - pelialue isompi, kontrollit alareunaan */
	/* HUOM: Sijainti tulee nyt layoutConfig.ts:stä - CSS ei enää ylikirjoita */
	@media (max-width: 768px) and (orientation: portrait) {
		/* Debug-nappi pienemmmäksi ja yläkulmaan */
		button[style*='position: absolute'][style*='z-index: 10000'] {
			position: fixed !important;
			top: 5px !important;
			right: 5px !important;
			font-size: 10px !important;
			padding: 4px 8px !important;
		}

		.mobile-menu-controls {
			display: block !important;
		}

		/* Piilota BALANCE, Autoplay, Spin Speed, WIN mobiilissa */
		.hide-on-mobile {
			display: none !important;
		}

		/* Näytä Menu vasemmalla mobiilissa */
		.hide-on-desktop {
			display: flex !important;
		}
	}

	/* Mobiili landscape-tila - myös yksinkertaistettu layout */
	/* HUOM: Sijainti tulee nyt layoutConfig.ts:stä - CSS ei enää ylikirjoita */
	@media (max-width: 768px) and (orientation: landscape) {
		.mobile-menu-controls {
			display: block !important;
		}

		/* Piilota BALANCE, Autoplay, Spin Speed, WIN mobiilissa */
		.hide-on-mobile {
			display: none !important;
		}

		/* Näytä Menu vasemmalla mobiilissa */
		.hide-on-desktop {
			display: flex !important;
		}
	}
</style>
