<svelte:head>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.4/howler.min.js"></script>
</svelte:head>

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
  - v1.2.7: Dynaaminen musiikkivaihto - eri satunnainen loop joka kierroksella (20 loopia)
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
    0%, 100% { 
      transform: translate(-50%, -50%) scale(1); 
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
    }
    50% { 
      transform: translate(-50%, -50%) scale(1.05); 
      box-shadow: 0 0 40px rgba(255, 215, 0, 1.0);
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
    content: "";
    position: absolute;
    top: -150%;
    left: -150%;
    width: 300%;
    height: 300%;
    background: linear-gradient(
      45deg,
      rgba(255,255,255,0) 40%,
      rgba(255,255,255,0.55) 50%,
      rgba(255,255,255,0) 60%
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
  
  .bet-btn-minus:hover {
    background: #ff6666 !important;
  }
  
  .bet-btn-plus:hover {
    background: #66ff66 !important;
  }
  
  .bet-btn-max:hover {
    background: #ffed4e !important;
  }
  
  /* Piilotetaan debug-elementit mobiilissa ja skaalataan control panel */
  @media (max-width: 768px) {
    .debug-panel {
      display: none !important;
    }
    
    .control-panel-mobile {
      transform: scale(0.7) !important;
      transform-origin: bottom center !important;
    }
  }
  
  /* Mobiili portrait-tila - vielä pienempi skaalaus */
  @media (max-width: 768px) and (orientation: portrait) {
    .control-panel-mobile {
      transform: scale(0.5) !important;
      transform-origin: bottom center !important;
    }
  }
</style>
<script lang="ts">
  // Game version
  const GAME_VERSION = "1.2.7";
  
  // Svelte lifecycle ja routing
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  
  // Win animation component
  import VinylWinAnimation from './VinylWinAnimation.svelte';
  
  // PixiJS kirjaston komponentit pelimoottoria varten
  import {
    Application,    // Pelin pääsovellus
    Graphics,      // Geometristen muotojen piirtäminen
    Container,     // Elementtien ryhmittely
    Sprite,        // Kuvien näyttäminen
    Texture,       // Kuvatekstuurit
    Assets,        // Modernit Asset lataukset
    Text,          // Tekstin näyttäminen
    TextStyle      // Tekstin tyylit
  } from "pixi.js";

  // ===== PELIN PERUSKONFIGURAATIO =====
  const COLS = 5; // Sarakkeiden määrä vaakasuunnassa  
  const ROWS = 3; // Rivien määrä per sarake
  const TOTAL_REELS = 13; // Yhteensä 13 erillistä kiekkoa (joka ruutu oma kiekko)

  // ===== SÄÄDETTÄVÄT PARAMETRIT =====
  // Näitä arvoja voi muuttaa pelin ulkonäön säätämiseksi
  // Kaikki muutokset päivittyvät automaattisesti dev-palvelimessa
  
  // Canvas (peliruudun) koko - uusi kuvasuhde 1445x1000
  const CANVAS_WIDTH = 1445;   // Leveys pikseleinä
  const CANVAS_HEIGHT = 1000;  // Korkeus pikseleinä
  
  // Kiekkojen koko ja sijainti - uudelle 1445x1000 taustalle
  const SCALE_MULTIPLIER = 1.75; // Symbolien koko kerroin (1.0 = normaali)
  const OFFSET_X = -30;       // Kaikkien kiekkojen X-siirtymä (+ = oikealle)
  const OFFSET_Y = -10;        // Kaikkien kiekkojen Y-siirtymä (+ = alaspäin)
  
  // KESKIKIEKON (indeksi 6) erikoiskohdistus
  const MIDDLE_REEL_Y_OFFSET = 160; // Keskikiekon Y-siirtymä (+ = alaspäin, - = ylöspäin)
  const MIDDLE_REEL_X_OFFSET = 0;   // Keskikiekon X-siirtymä (+ = oikealle, - = vasemmalle)
  
  // SPIN-napin sijainti (uudelle 1445x1000 taustalle)
  const BUTTON_X = 720;       // Napin X-koordinaatti
  const BUTTON_Y = 750;       // Napin Y-koordinaatti
  
  // ===== CONTROL PANEL ASETUKSET (v1.1.0) =====
  const CONTROL_PANEL_Y = 750;         // Paneelin Y-koordinaatti (sama kuin vanha BUTTON_Y)
  const CONTROL_PANEL_HEIGHT = 80;    // Paneelin korkeus
  const REEL_FRAMES_X = 250;           // Kehysten X-sijainti (sama kuin kehyksissä)
  const REEL_FRAMES_WIDTH = 945;       // Kehysten leveys (arvio, päivitetään dynaamisesti)
  
  // Control Panel Fine-Tuning (säädettävissä)
  const CONTROL_PANEL_OFFSET_X = 0;    // X-siirtymä (+ = oikealle, - = vasemmalle)
  const CONTROL_PANEL_OFFSET_Y = 50;    // Y-siirtymä (+ = alaspäin, - = ylöspäin)
  const CONTROL_PANEL_SCALE_X = 1.0;   // X-skaalaus (1.0 = normaali, >1 = leveämpi, <1 = kapeampi)
  const CONTROL_PANEL_SCALE_Y = 1.1;   // Y-skaalaus (1.0 = normaali, >1 = korkeampi, <1 = matalampi)
  
  // LOGO-asetukset (helppo säätää)
  const LOGO_SCALE = 0.5;     // Logon koko kerroin (1.0 = alkuperäinen koko)
  const LOGO_X = 40;          // Logon X-siirtymä keskikohdasta (+ = oikealle, - = vasemmalle)
  const LOGO_Y = 0;          // Logon Y-koordinaatti (+ = alaspäin, - = ylöspäin)
  
  // Taustakuvan (bg.jpg) säädöt
  const BACKGROUND_Y_SHIFT = -40;  // Pystysiirtymä (+ = alaspäin, - = ylöspäin)
  const BACKGROUND_SCALE = 1.0;    // Koon kerroin (1.0 = normaali)
  const BACKGROUND_FIT_MODE: "width" | "height" | "min" = "height"; // Skaalaustyyppi: "width", "height", "min"
  // =====================================

  // Symbol dimensions to fit background reels properly
  const baseSymbolWidth = 100;
  const symbolWidth = Math.round(baseSymbolWidth * SCALE_MULTIPLIER);
  const symbolHeight = Math.round(symbolWidth * (700 / 760));
  const cellSize = symbolWidth; // Keep for compatibility
  const gap = 10;
  const ROW_HEIGHT = symbolHeight + gap;

  // Avaimet symboleille - kaikki uudet rockabilly-teemalliset symbolit
  const SYMBOL_KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "emptyslot"] as const;
  type SymbolKey = (typeof SYMBOL_KEYS)[number];

  // URL jokaiselle symbolille (static/symbols/...)
  // GitHub Pages: käytä suoria polkuja, localhost: käytä base-polkuja
  const isGitHubPages = typeof window !== 'undefined' && window.location.hostname.includes('github.io');
  const symbolPath = isGitHubPages ? '/web-sdk/oma-peli/symbols' : `${base}/symbols`;
  const controlsPath = isGitHubPages ? '/web-sdk/oma-peli/controls' : `${base}/controls`;
  
  const SYMBOL_URLS: Record<SymbolKey, string> = {
    a: `${symbolPath}/Blue_hotrod.jpg`,      // Sininen hotrod
    b: `${symbolPath}/Blue_jacket.jpg`,      // Sininen takki
    c: `${symbolPath}/Blue_rollers.jpg`,     // Siniset rullat
    d: `${symbolPath}/Blue_speakers.jpg`,    // Siniset kaiuttimet
    e: `${symbolPath}/Premium_blonde.jpg`,   // Premium blondi
    f: `${symbolPath}/Premium_brunette.jpg`, // Premium brunette
    g: `${symbolPath}/Premium_rocker.jpg`,   // Premium rocker
    h: `${symbolPath}/New_Wild.jpg`,         // WILD symbol
    i: `${symbolPath}/Red_burger.jpg`,       // Punainen hampurilainen
    j: `${symbolPath}/Red_fries.jpg`,        // Punaiset ranskalaiset
    k: `${symbolPath}/Red_milkshake.jpg`,    // Punainen milkshake
    l: `${symbolPath}/Scatter.jpg`,          // Scatter symboli
    emptyslot: `${symbolPath}/Emptyslot.jpg`, // Tyhjä ruutu - VAIN keskikiekolla!
  };

  // Uudet kuvien URLit
  const BACKGROUND_URL = `${symbolPath}/bg_base.jpg`;    // Uusi taustakuva (1445x1000)
  const REEL_FRAMES_URL = `${symbolPath}/ReelFrames.png`; // Kiekkojen kehykset
  const LOGO_URL = `${symbolPath}/RockABillyReels_logo.png`; // Pelin logo
  
  // ===== ÄÄNIEFEKTIT =====
  // Äänitiedostojen URLit
  const SOUND_URLS = {
    spin: `${base}/sounds/spin.mp3`,     // SPIN-napin ääni (whirr)
    stop: `${base}/sounds/stop.mp3`,     // Kiekon pysähtymisääni (chunk)
    win: `${base}/sounds/win.mp3`        // Voittoääni (tulevaisuudessa)
  };
  
  // Äänien hallinta
  let soundEnabled = $state(true);              // Voi käyttäjä halutessaan mykistää
  let audioElements: Record<string, HTMLAudioElement> = {};
  
  // ===== MUSIIKKIJÄRJESTELMÄ (v1.0.9) =====
  // Howler.js-pohjaiset musiikkisoittimet
  let backgroundMusic: any = null;  // Taustamusiikki (rockabilly loop)
  let freeSpinsMusic: any = null;   // Free spins musiikki
  let drumHitSound: any = null;     // Rumpuisku kiekkojen pysähtyessä
  let winThemeSound: any = null;    // Voittoteema
  
  // BPM-synkronointi
  const MUSIC_BPM = 130;            // Rockabilly tempo (beats per minute)
  const BEAT_INTERVAL = 60 / MUSIC_BPM; // Sekunteja per tahti (~0.46s)
  const FRAMES_PER_BEAT = Math.round(BEAT_INTERVAL * 60); // Frameja per tahti (60 FPS)
  
  // Musiikin tilanhallinta
  let musicEnabled = $state(true);  // Musiikin on/off toggle
  let musicLoaded = $state(false);  // Onko musiikki ladattu
  
  // ===== CONTROL PANEL TILA (v1.1.0) =====
  let isFastPlayEnabled = $state(false);     // Nopea pelitila
  let controlPanelWidth = $state(945);       // Paneelin leveys (päivittyy dynaamisesti)
  let reelFramesSpriteRef: any = null;       // Viittaus reel frames spriteen
  
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
    fast: 1,    // Fast: ~3 sec (15 frames/kiekko * 13 kiekkoa = 195 frames = ~3.25s @ 60fps)
    medium: 10,  // Medium: ~5 sec (23 frames/kiekko * 13 kiekkoa = 299 frames = ~5s @ 60fps)
    slow: 18     // Slow: ~7 sec (32 frames/kiekko * 13 kiekkoa = 416 frames = ~6.9s @ 60fps)
  };
  
  type SpinSpeed = 'slow' | 'medium' | 'fast';
  let spinSpeed = $state<SpinSpeed>('medium'); // Nykyinen spinninopeus
  let showSpinSpeedMenu = $state(false);       // Näytetäänkö nopeusvalikko
  
  // Arvo satunnainen loop-tiedosto (1-20) peruspelille
  let randomLoopNumber = $state(Math.floor(Math.random() * 20) + 1);
  
  // Musiikkitiedostojen URLit
  const MUSIC_URLS = {
    background: () => `${base}/music/rockabilly reels loop ${randomLoopNumber}.mp3`,  // Satunnainen loop peruspelille
    freeSpins: `${base}/music/rockabilly-loop_long.mp3`,    // Free spins musiikki
    drumHit: `${base}/music/drum-hit.mp3`,                  // Rumpuisku
    winTheme: `${base}/music/win-stinger.mp3`               // Voittoteema
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
        volume: 0.3,  // 30% volume
        onload: () => {
          console.log('✅ Background music loaded (loop #' + randomLoopNumber + ')');
          musicLoaded = true;
        },
        onloaderror: (id: any, error: any) => {
          console.warn('⚠️ Background music not found:', error);
        }
      });
      
      // Free spins musiikki
      freeSpinsMusic = new Howl({
        src: [MUSIC_URLS.freeSpins],
        loop: true,
        volume: 0.3,
        onload: () => console.log('✅ Free spins music loaded'),
        onloaderror: (id: any, error: any) => console.warn('⚠️ Free spins music not found:', error)
      });
      
      // Rumpuisku-efekti (soitetaan kiekkojen pysähtyessä)
      drumHitSound = new Howl({
        src: [MUSIC_URLS.drumHit],
        volume: 0.5,
        onload: () => console.log('✅ Drum hit sound loaded'),
        onloaderror: () => console.warn('⚠️ Drum hit sound not found')
      });
      
      // Voittoteema (soitetaan isoille voitoille)
      winThemeSound = new Howl({
        src: [MUSIC_URLS.winTheme],
        volume: 0.6,
        onload: () => console.log('✅ Win theme loaded'),
        onloaderror: () => console.warn('⚠️ Win theme not found')
      });
      
      console.log('🎵 Music system initialized (generate music with Suno AI)');
      
    } catch (error) {
      console.error('Failed to initialize music system:', error);
    }
  }
  
  // Käynnistä taustamusiikki (valitaan peruspeli tai free spins musiikki)
  function startBackgroundMusic() {
    const currentMusic = isFreeSpinMode ? freeSpinsMusic : backgroundMusic;
    if (currentMusic && musicEnabled && !currentMusic.playing()) {
      currentMusic.play();
      console.log('🎵 ' + (isFreeSpinMode ? 'Free spins' : 'Background') + ' music started');
    }
  }
  
  // Vaihda uusi satunnainen loop peruspelille
  function changeBackgroundLoop() {
    if (isFreeSpinMode) return; // Ei vaihdeta free spins -tilassa
    
    // Valitse uusi satunnainen loop
    const newLoopNumber = Math.floor(Math.random() * 20) + 1;
    randomLoopNumber = newLoopNumber;
    
    // Pysäytä vanha musiikki
    if (backgroundMusic) {
      if (backgroundMusic.playing()) {
        backgroundMusic.fade(backgroundMusic.volume(), 0, 300);
        setTimeout(() => backgroundMusic.stop(), 300);
      }
      backgroundMusic.unload();
    }
    
    // Lataa uusi loop
    const Howl = (window as any).Howl;
    if (Howl) {
      backgroundMusic = new Howl({
        src: [MUSIC_URLS.background()],
        loop: true,
        volume: 0.3,
        onload: () => {
          console.log('🎵 New background music loop #' + randomLoopNumber + ' loaded');
          if (musicEnabled && !isFreeSpinMode) {
            setTimeout(() => backgroundMusic.play(), 400);
          }
        }
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
  
  // Toggle musiikin on/off
  function toggleMusic() {
    musicEnabled = !musicEnabled;
    if (musicEnabled) {
      startBackgroundMusic();
    } else {
      stopBackgroundMusic();
    }
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
  // Ladatut tekstuurit (kuvat muutettuna PixiJS muotoon)
  let symbolTextures: Record<SymbolKey, Texture> | null = null;
  let backgroundTexture: Texture | null = null;
  let reelFramesTexture: Texture | null = null;
  let logoTexture: Texture | null = null;
  
  // Debug tila - näyttää lataustilanteen
  let loadingStatus = $state("Initializing...");
  let errorMessage = $state("");
  let debugInfo: string[] = [];
  
  // Credit järjestelmä
  let balance = $state(1000); // Aloitussaldo
  let betAmount = $state(10);  // Panoksen määrä per spin
  let lastWin = $state(0);  // Viimeisin voittosumma
  const MIN_BET = 1;
  const MAX_BET = 100;

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
  let currentRTP = $derived(totalWagered > 0 ? (totalWon / totalWagered * 100).toFixed(2) : "0.00");
  let hitFrequency = $derived(totalRounds > 0 ? (totalWins / totalRounds * 100).toFixed(2) : "0.00");
  
  // Free spins state
  let isFreeSpinMode = $state(false);
  let freeSpinsRemaining = $state(0);
  let freeSpinsTotalWon = $state(0);
  let freeSpinsTriggerCount = $state(0); // Kuinka monta kertaa vapaapelit alkaneet
  let freeSpinsPlayedCount = $state(0);  // Kuinka monta vapaapelikierrosta yhteensä pelattu
  
  // Emptyslot tracking
  let totalVisibleSymbols = $state(0); // Kaikki näkyvät symbolit yhteensä
  let totalEmptySlots = $state(0);      // Emptyslot-symbolit yhteensä
  let emptySlotPercentage = $derived(totalVisibleSymbols > 0 ? (totalEmptySlots / totalVisibleSymbols * 100).toFixed(2) : "0.00");
  
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
  // SYMBOL DISTRIBUTION - Weighted Randomization
  // ============================================================================
  // Current configuration: 81 WAYS + TRUE WAYS LOGIC + MULTIPLIERS
  // From YAML config v1.0, Math v1.7
  //
  // DISTRIBUTION STRATEGY (BASE GAME):
  // - Empty slots (25%) balance hit frequency
  // - Low tier (k,j,i) provides frequent small wins (8%+7%+7% = 22%)
  // - Mid tier (c,d,b,a) creates medium-sized wins (28% total)
  // - Premium tier (f,e,g) rare high-value wins (15% total)
  // - Scatter at 10% triggers free spins
  // - Wild only on middle reel (55%) for substitution
  // - Multipliers: base game (1x/2x/3x at 70/22/8), free spins (3x/5x/10x at 70/22/8)
  //
  // FREE SPINS DISTRIBUTION:
  // - Low tier (k,j,i) REMOVED (0% each)
  // - Premium tier BOOSTED: f=14%, e=12%, g=11% (inherits low tier weights)
  // - Result: More frequent premium symbols for higher free spin value
  // ============================================================================
  const SYMBOL_WEIGHTS_BASE: Record<SymbolKey, number> = {
    // LOW TIER - Low value, moderate frequency
    'k': 0.08,   // Red_milkshake
    'j': 0.07,   // Red_fries
    'i': 0.07,   // Red_burger
    
    // MID TIER - Mid value, moderate frequency
    'c': 0.07,   // Blue_rollers
    'd': 0.07,   // Blue_speakers
    'b': 0.07,   // Blue_jacket
    'a': 0.07,   // Blue_hotrod
    
    // PREMIUM TIER - High value, lower frequency
    'f': 0.06,   // Premium_brunette
    'e': 0.05,   // Premium_blonde
    'g': 0.04,   // Premium_rocker (JACKPOT symbol)
    
    // SPECIAL SYMBOLS
    'l': 0.10,   // Scatter (10% - triggers free spins)
    'h': 0,      // Wild - ONLY on middle reel (handled separately)
    'emptyslot': 0.25 // Empty slots (25%)
  };

  // FREE SPINS WEIGHTS - Symbol replacements applied:
  // k → f (milkshake → brunette)
  // j → e (fries → blonde)
  // i → g (burger → rockabilly)
  const SYMBOL_WEIGHTS_FS: Record<SymbolKey, number> = {
    // LOW TIER - Replaced in free spins
    'k': 0,      // Milkshake - REMOVED in free spins
    'j': 0,      // Fries - REMOVED in free spins
    'i': 0,      // Burger - REMOVED in free spins
    
    // MID TIER - Mid value, moderate frequency
    'c': 0.07,   // Blue_rollers
    'd': 0.07,   // Blue_speakers
    'b': 0.07,   // Blue_jacket
    'a': 0.07,   // Blue_hotrod
    
    // PREMIUM TIER - Increased frequency in free spins (gets k+j+i weights)
    'f': 0.14,   // Premium_brunette (0.06 + 0.08 from k)
    'e': 0.12,   // Premium_blonde (0.05 + 0.07 from j)
    'g': 0.11,   // Premium_rocker (0.04 + 0.07 from i)
    
    // SPECIAL SYMBOLS
    'l': 0.10,   // Scatter (10% - triggers free spins)
    'h': 0,      // Wild - ONLY on middle reel (handled separately)
    'emptyslot': 0.25 // Empty slots (25%)
  };

  // Palauttaa satunnaisen symbolin tietylle kiekolle (weighted distribution)
  function randomSymbol(reelIndex: number): SymbolKey {
    // Reel 6 (keskikiekko) - Wild (55%) tai emptyslot (45%)
    if (reelIndex === 6) {
      return Math.random() < 0.55 ? 'h' : 'emptyslot';
    }
    
    // Select appropriate weight table
    const SYMBOL_WEIGHTS = isFreeSpinMode ? SYMBOL_WEIGHTS_FS : SYMBOL_WEIGHTS_BASE;
    
    // Reels 1,2,4,5 (outer reels) - Include Empty slots
    const rand = Math.random();
    let cumulative = 0;
    
    // All symbols INCLUDING emptyslot, but NO Wild
    const availableSymbols = SYMBOL_KEYS.filter(s => s !== 'h');
    
    // Calculate total weight
    const totalWeight = availableSymbols.reduce((sum, sym) => sum + SYMBOL_WEIGHTS[sym], 0);
    
    // Weighted selection
    for (const symbol of availableSymbols) {
      cumulative += SYMBOL_WEIGHTS[symbol] / totalWeight;
      if (rand < cumulative) {
        return symbol;
      }
    }
    
    // Fallback
    return 'f';
  }

  // Luo 13 erillistä kiekkoa (jokaiselle ruudulle oma kiekko)
  function createReelData(): SymbolKey[] {
    const reelData: SymbolKey[] = [];
    for (let i = 0; i < TOTAL_REELS; i++) {
      // randomSymbol() now uses correct weights based on isFreeSpinMode
      // In free spins: k/j/i have 0 weight, f/e/g have increased weights
      const symbol = randomSymbol(i);
      
      reelData.push(symbol);
      
      // Track visible symbols and emptyslots
      totalVisibleSymbols++;
      if (symbol === 'emptyslot') {
        totalEmptySlots++;
      }
    }
    return reelData;
  }

  // Muuntaa reel-indeksin (0-12) koordinaateiksi (col, row)
  function getReelPosition(reelIndex: number): {col: number, row: number} {
    if (reelIndex < 3) return {col: 0, row: reelIndex}; // Sarake 0: ruudut 0,1,2
    if (reelIndex < 6) return {col: 1, row: reelIndex - 3}; // Sarake 1: ruudut 3,4,5
    if (reelIndex === 6) return {col: 2, row: 0}; // Keskikiekko: ruutu 6
    if (reelIndex < 10) return {col: 3, row: reelIndex - 7}; // Sarake 3: ruudut 7,8,9
    return {col: 4, row: reelIndex - 10}; // Sarake 4: ruudut 10,11,12
  }

  // Muuntaa koordinaatit (col, row) reel-indeksiksi (0-12)
  function getReelIndex(col: number, row: number): number {
    if (col === 0) return row;
    if (col === 1) return 3 + row;
    if (col === 2) return 6; // Keskikiekko on aina indeksi 6
    if (col === 3) return 7 + row;
    if (col === 4) return 10 + row;
    return -1; // Virhe
  }

  // ===== VOITTOLOGIIKKA =====
  type WinResult = {
    symbol: SymbolKey;
    count: number;
    payout: number;
    positions: number[]; // Voittavien kiekkojen indeksit
    multiplier: number; // 1x/2x/3x (base), 3x/5x/10x (free spins)
  };
  
  // ============================================================================
  // MULTIPLIERS - YAML Config v1.7
  // ============================================================================
  // Base game: 1x (70%), 2x (22%), 3x (8%)
  // Free spins: 3x (70%), 5x (22%), 10x (8%)
  // ============================================================================
  function getWinMultiplier(): number {
    if (isFreeSpinMode) {
      // Free spins: 3x/5x/10x distribution
      const rand = Math.random();
      if (rand < 0.70) return 3;   // 70%
      if (rand < 0.92) return 5;   // 22%
      return 10;                    // 8%
    } else {
      // Base game: 1x/2x/3x distribution
      const rand = Math.random();
      if (rand < 0.70) return 1;   // 70%
      if (rand < 0.92) return 2;   // 22%
      return 3;                     // 8%
    }
  }

  // ============================================================================
  // PAYTABLE - Symbol Payouts (Multipliers × Bet × Ways)
  // ============================================================================
  // Values represent payout multipliers PER SYMBOL for 3/4/5-of-a-kind.
  // 
  // WAYS CALCULATION:
  // Final payout = paytable_value × bet × ways × multiplier
  // Where ways = count_reel0 × count_reel1 × count_reel2 × count_reel3 × count_reel4
  // Multiplier = 1x/2x/3x (base game) or 3x/5x/10x (free spins)
  //
  // Example: 4×k with 2 symbols on reel 0, 1 on reel 1, 1 wild, 1 on reel 3, 2x multiplier:
  // - Ways = 2 × 1 × 1 × 1 = 2 ways
  // - Payout = 0.60 × 1 (bet) × 2 (ways) × 2 (multiplier) = 2.40
  //
  // Paytable from YAML config v1.0
  // ============================================================================
  const SYMBOL_PAYTABLE: Record<SymbolKey, {3?: number, 4?: number, 5?: number}> = {
    // LOW TIER - From YAML config
    k: { 3: 0.20, 4: 0.60, 5: 1.50 },    // Red_milkshake
    j: { 3: 0.40, 4: 1.00, 5: 2.50 },    // Red_fries
    i: { 3: 0.40, 4: 1.00, 5: 2.50 },    // Red_burger
    
    // MID TIER - From YAML config
    c: { 3: 0.80, 4: 2.00, 5: 5.00 },    // Blue_rollers
    d: { 3: 0.80, 4: 2.00, 5: 5.00 },    // Blue_speakers
    b: { 3: 1.50, 4: 4.00, 5: 8.00 },    // Blue_jacket
    a: { 3: 1.50, 4: 4.00, 5: 8.00 },    // Blue_hotrod
    
    // PREMIUM TIER - From YAML config
    f: { 3: 3.00, 4: 8.00, 5: 20.00 },   // Premium_brunette
    e: { 3: 5.00, 4: 10.00, 5: 25.00 },  // Premium_blonde
    g: { 3: 7.00, 4: 15.00, 5: 50.00 },  // Premium_rocker (JACKPOT)
    
    // SPECIAL SYMBOLS (no payouts)
    h: {},  // Wild (substitutes only)
    l: {},  // Scatter (triggers free spins only)
    emptyslot: {}  // Empty
  };

  // Tarkista voitot 81-ways järjestelmällä
  function checkWins(): WinResult[] {
    const wins: WinResult[] = [];
    
    // 1. Tarkista scatter-symbolit (l) - voivat olla missä tahansa
    const scatterPositions: number[] = [];
    for (let i = 0; i < TOTAL_REELS; i++) {
      if (reelData[i] === 'l') {
        scatterPositions.push(i);
      }
    }
    
    // Scatter-voitot ja free spinsit
    // Variable free spins based on scatter count (YAML config v1.0)
    // 5 scatters = 5 spins, 6 = 6, ..., 12 = 12 spins
    if (scatterPositions.length >= 5) {
      const freeSpinsTriggered = scatterPositions.length; // Variable: 5-12 free spins
      
      // Add free spins (trigger or retrigger)
      freeSpinsRemaining += freeSpinsTriggered;
      
      // If not already in free spin mode, enter it
      if (!isFreeSpinMode) {
        isFreeSpinMode = true;
        freeSpinsTotalWon = 0;
        freeSpinsTriggerCount++; // Laske uusi vapaaerä
        console.log(`🎰 FREE SPINS TRIGGERED! ${scatterPositions.length} scatters = ${freeSpinsTriggered} FREE SPINS!`);
        
        // Vaihda musiikkia free spins -musiikiksi
        switchMusic();
      } else {
        console.log(`🎰 FREE SPINS RETRIGGERED! +${freeSpinsTriggered} FREE SPINS! Total: ${freeSpinsRemaining}`);
      }
      
      // Scatters don't pay, just trigger free spins
      wins.push({
        symbol: 'l',
        count: scatterPositions.length,
        payout: 0,
        positions: scatterPositions,
        multiplier: 1
      });
    }
    
  // ============================================================================
  // 81 WAYS-PAYING LOGIC (v1.0.6: Column-based calculation)
  // ============================================================================
  // Generate all 81 valid paths through the grid
  // NO RESTRICTIONS: All possible row combinations allowed
  // Grid: 3×3×1×3×3 = 81 total ways
  //
  // COLUMN-BASED WIN CALCULATION (v1.0.6):
  // - Win length determined by consecutive columns from left that contain symbol
  // - Example: If columns 0,1,2 have symbol but column 3 doesn't → 3-symbol win
  // - For 4-symbol win: Symbol MUST appear on columns 0,1,2,3
  // - This prevents false 4-symbol wins when symbol missing from column 3
  //
  // WAYS COUNTING:
  // - Each unique path through the grid counts as separate way
  // - If 2 symbols on column 0, 1 on column 1, 1 on column 2 → 2 ways of 3-symbol win
  // - Ways multiply together: column0_count × column1_count × column2_count...
  // ============================================================================
    const allPaths: number[][] = [];
    
    // Iterate through all possible row combinations (NO ±1 restriction)
    for (let r0 = 0; r0 < 3; r0++) {           // Column 0: rows 0,1,2
      for (let r1 = 0; r1 < 3; r1++) {         // Column 1: rows 0,1,2
        for (let r2 = 0; r2 < 1; r2++) {       // Column 2: 1 row (middle reel, always 0)
          for (let r3 = 0; r3 < 3; r3++) {     // Column 3: rows 0,1,2
            for (let r4 = 0; r4 < 3; r4++) {   // Column 4: rows 0,1,2
              const path = [
                getReelIndex(0, r0),
                getReelIndex(1, r1),
                getReelIndex(2, r2),
                getReelIndex(3, r3),
                getReelIndex(4, r4)
              ];
              allPaths.push(path);
            }
          }
        }
      }
    }
    
    console.log(`Generated ${allPaths.length} possible paths (should be 81)`);
    
    // Laske voittolinjat: jokainen polku arvioidaan erikseen
    // Kerää KAIKKI voitot (myös samat symbolit eri riveiltä erikseen)
    interface WinPath {
      symbol: SymbolKey;
      length: number;
      path: number[];
      startRow: number; // Miltä riviltä alkaa (0, 1, 2)
    }
    
    const allWins: WinPath[] = [];
    
    for (const path of allPaths) {
      const symbols = path.map(idx => reelData[idx]);
      
      // Ohita jos ensimmäinen symboli on emptyslot tai scatter
      if (symbols[0] === 'emptyslot' || symbols[0] === 'l') continue;
      
      // Määritä voittosymboli: jos ensimmäinen on wild, etsi ensimmäinen ei-wild
      let winSymbol: SymbolKey | null = null;
      
      for (let i = 0; i < symbols.length; i++) {
        if (symbols[i] !== 'h' && symbols[i] !== 'emptyslot' && symbols[i] !== 'l') {
          winSymbol = symbols[i];
          break;
        }
      }
      
      // Jos kaikki symbolit ovat wildeja, emptyslotteja tai scattereita, ohita
      if (!winSymbol) continue;
      
      // Laske kuinka monta peräkkäistä KIEKKOA (column) sisältää symbolin
      // CRITICAL: For a 4-symbol win, the symbol must appear on columns 0,1,2,3
      // If column 3 has no matching symbol, the win stops at column 2 (= 3 symbols)
      let matchLength = 0;
      
      // Track which columns have this symbol on this path
      const columnsWithSymbol = new Set<number>();
      
      for (let i = 0; i < path.length; i++) {
        const position = path[i];
        const { col } = getReelPosition(position);
        const currentSymbol = symbols[i];
        
        // Check if this position has the winning symbol or wild
        if (currentSymbol === winSymbol || currentSymbol === 'h') {
          columnsWithSymbol.add(col);
        }
      }
      
      // Now check how many consecutive columns from the left have the symbol
      for (let col = 0; col < 5; col++) {
        if (columnsWithSymbol.has(col)) {
          matchLength++;
        } else {
          break; // Stop as soon as we hit a column without the symbol
        }
      }
      
      // Tarkista onko vähintään 3 symbolia (voittoon tarvitaan 3, 4 tai 5)
      if (matchLength >= 3) {
        // Määritä aloitusrivi (0, 1, 2)
        const startReelIndex = path[0];
        const startRow = startReelIndex % 3;
        
        allWins.push({
          symbol: winSymbol,
          length: matchLength,
          path: path.slice(0, matchLength),
          startRow: startRow
        });
      }
    }
    
    // Suodata voitot: Pidä vain PISIMMÄT voitot kullekin POLULLE
    // Ways-peleissä jokainen uniikki polku maksetaan erikseen!
    const filteredWins: WinPath[] = [];
    const winsGroupedByPath = new Map<string, WinPath[]>();
    
    // Ryhmittele voitot polun mukaan (symboli + koko polku)
    for (const win of allWins) {
      const pathKey = `${win.symbol}-${win.path.join(',')}`;
      if (!winsGroupedByPath.has(pathKey)) {
        winsGroupedByPath.set(pathKey, []);
      }
      winsGroupedByPath.get(pathKey)!.push(win);
    }
    
    // Jokaisesta polusta ota vain PISIN voitto
    for (const [pathKey, wins] of winsGroupedByPath.entries()) {
      // Etsi pisin pituus tälle polulle
      const maxLength = Math.max(...wins.map(w => w.length));
      
      // Ota ensimmäinen voitto jolla on tämä pituus
      const longestWin = wins.find(w => w.length === maxLength);
      
      if (longestWin) {
        filteredWins.push(longestWin);
      }
    }
    
    // ============================================================================
    // TRUE WAYS LOGIC: Count unique positions from winning paths
    // ============================================================================
    // IMPORTANT (v1.0.4): Only pay the LONGEST combination for each symbol
    // Example: If symbol 'a' has both 3-symbol and 4-symbol wins, only pay 4-symbol wins
    // But count ALL paths/ways that produce the longest combination
    //
    // WAYS CALCULATION:
    // - Count how many times longest combination appears across all paths
    // - Each unique path = 1 way
    // - Multiple symbols on same columns = multiple ways
    // - Example: 2 symbols on col0 × 1 on col1 × 1 on col2 = 2 ways of 3-symbol win
    //
    // This "longest only" rule significantly reduces RTP (~80% vs ~96% without it)
    // ============================================================================
    const foundWinCombos: WinResult[] = [];
    
    // Group by symbol to find the longest combination for each
    const winsBySymbol = new Map<SymbolKey, WinPath[]>();
    
    for (const win of filteredWins) {
      if (!winsBySymbol.has(win.symbol)) {
        winsBySymbol.set(win.symbol, []);
      }
      winsBySymbol.get(win.symbol)!.push(win);
    }
    
    // For each symbol, keep ONLY the longest wins
    const finalFilteredWins: WinPath[] = [];
    for (const [symbol, wins] of winsBySymbol.entries()) {
      const maxLength = Math.max(...wins.map(w => w.length));
      const longestWins = wins.filter(w => w.length === maxLength);
      finalFilteredWins.push(...longestWins);
    }
    
    // Now group by symbol+length for payout calculation
    const winsBySymbolAndLength = new Map<string, WinPath[]>();
    
    for (const win of finalFilteredWins) {
      const key = `${win.symbol}-${win.length}`;
      if (!winsBySymbolAndLength.has(key)) {
        winsBySymbolAndLength.set(key, []);
      }
      winsBySymbolAndLength.get(key)!.push(win);
    }
    
    // Get one multiplier for the entire spin
    const winMultiplier = finalFilteredWins.length > 0 ? getWinMultiplier() : 1;
    
    // Process each symbol+length combination
    for (const [key, winsInGroup] of winsBySymbolAndLength.entries()) {
      const firstWin = winsInGroup[0];
      const payoutMultiplier = SYMBOL_PAYTABLE[firstWin.symbol]?.[firstWin.length as 3 | 4 | 5];
      
      if (payoutMultiplier !== undefined && payoutMultiplier > 0) {
        // Count unique positions per reel from all winning paths in this group
        const positionsPerReel = new Map<number, Set<number>>();
        
        for (const win of winsInGroup) {
          for (let i = 0; i < win.length; i++) {
            if (!positionsPerReel.has(i)) {
              positionsPerReel.set(i, new Set());
            }
            positionsPerReel.get(i)!.add(win.path[i]);
          }
        }
        
        // Calculate ways by multiplying position counts
        let ways = 1;
        for (let i = 0; i < firstWin.length; i++) {
          const s = positionsPerReel.get(i);
          ways *= s ? s.size : 1;
        }
        
        // Payout = paytable × bet × ways × multiplier
        const totalPayout = payoutMultiplier * betAmount * ways * winMultiplier;
        
        console.log(`  ${firstWin.length}x${firstWin.symbol}: ${ways} ways × ${payoutMultiplier}x × ${betAmount} bet × ${winMultiplier} mult = ${totalPayout}`);
      
        // Collect all unique positions for highlighting
        const allPositions = new Set<number>();
        for (const win of winsInGroup) {
          win.path.forEach(pos => allPositions.add(pos));
        }
      
        foundWinCombos.push({
          symbol: firstWin.symbol,
          count: firstWin.length,
          payout: totalPayout,
          positions: Array.from(allPositions),
          multiplier: winMultiplier
        });
      }
    }
    
    // Add all found wins
    wins.push(...foundWinCombos);
    
    return wins;
  }

  // Kokonaisvoitto
  let totalWin = $state(0);
  let currentWins = $state<WinResult[]>([]);
  let isShowingWin = $state(false);
  let showPaytable = $state(false); // Paytable-näkyvyys
  
  // Symbolin nimen muunnos näyttöä varten
  const SYMBOL_NAMES: Record<SymbolKey, string> = {
    a: "Hot Rod",
    b: "Jacket",
    c: "Roller Skates",
    d: "Microphone",
    e: "Blonde",
    f: "Brunette",
    g: "Rockabilly",
    h: "WILD",
    i: "Burger",
    j: "Fries",
    k: "Milkshake",
    l: "SCATTER",
    emptyslot: "Empty"
  };
  
  // Äänen toisto (jos äänet on käytössä)
  function playSound(soundKey: keyof typeof SOUND_URLS) {
    if (!soundEnabled || !audioElements[soundKey]) return;
    
    const audio = audioElements[soundKey];
    audio.currentTime = 0; // Palaa alkuun (jos jo soittaa)
    audio.play().catch(err => {
      console.warn('Äänen toisto epäonnistui:', soundKey, err);
    });
  }

  // Korostaa voittavat symbolit
  function highlightWinningSymbols(wins: WinResult[]) {
    // Poista vanhat korostukset
    winHighlights.forEach(h => app.stage.removeChild(h));
    winHighlights = [];

    // Lisää uudet korostukset
    wins.forEach(win => {
      win.positions.forEach(pos => {
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
    winHighlights.forEach(h => app.stage.removeChild(h));
    winHighlights = [];
  }

  // Alkutilan pelidata (13 erillistä kiekkoa)
  let reelData: SymbolKey[] = createReelData();

  // PixiJS sovelluksen pääkomponentit
  let container: HTMLDivElement;  // HTML-elementti johon peli sijoitetaan
  let app: Application;           // Pelin pääsovellus
  let reels: Reel[] = [];        // Kaikki kiekot (13 kpl)
  let winHighlights: Graphics[] = []; // Voittavien symbolien korostukset

  // ===================================================================
  // REEL LUOKKA - Yksittäisen kiekon toiminta (yksi ruutu = yksi kiekko)
  // ===================================================================
  // Tämä luokka hallinnoi yhden kiekon pyörimistä ja yhden symbolin näyttämistä
  class Reel {
    index: number;          // Kiekon numero (0-12)
    container: Container;   // PixiJS kontti johon symboli piirretään
    offset = 0;            // Nykyinen scrollaus-offset (0 = normaali asema)
    speed = 0;             // Nykyinen pyörimisnopeus (pikseleitä per frame)
    targetSpeed = 30;      // Tavoitenopeus (saavutetaan kiihdytyksen jälkeen)
    state: "idle" | "spinning" | "slowing" | "bouncing" | "stopped" = "idle"; // Kiekon tila + bounce
    stopDelay = 0;         // Kuinka monta framea odotetaan ennen hidastusta
    
    // BOUNCE EFEKTI muuttujat
    bounceOffset = 0;      // Bounce-efektin Y-siirtymä
    bounceSpeed = 0;       // Bounce-efektin nopeus
    bounceFrames = 0;      // Kuinka monta framea bouncessa ollaan

    // Konstruktori: luo uuden kiekon
    constructor(index: number, container: Container) {
      this.index = index;      // Tallenna kiekon numero (0-12)
      this.container = container; // Tallenna PixiJS kontti
    }

    // Aloita kiekon pyöriminen määritellyllä viiveellä
    start(delay: number) {
      this.state = "spinning";    // Aseta pyörivä tila
      this.speed = 0;            // Aloita nopeudesta 0
      
      // Pyörimisnopeus on AINA sama (medium), vain pysähtymisviive muuttuu
      this.targetSpeed = 35;     // Vakio pyörimisnopeus kaikille spinSpeed-asetuksille
      
      this.stopDelay = delay;    // Aseta pysäytysviive (kiekot pysähtyvät eri aikoina)
    }
    
    // BPM-synkronoitu start-metodi (v1.0.9)
    // Pysäyttää kiekot peräkkäin spinSpeed-asetuksen mukaan
    startSynchronized(beatIndex: number) {
      const framesPerReel = SPIN_SPEED_CONFIG[spinSpeed]; // Käytä konfiguraation arvoa
      const delay = 60 + (beatIndex * framesPerReel); // 60 base + viive per kiekko
      this.start(delay);
    }

    // Päivitä kiekon tila joka frame
    update() {
      if (this.state === "idle") return; // Ei tee mitään jos kiekko ei pyöri

      // KIIHTYMIS-VAIHE: nopeutetaan kunnes saavutetaan tavoitenopeus
      if (this.state === "spinning") {
        if (this.speed < this.targetSpeed) this.speed += 2; // Kiihdytä hitaasti
        if (this.stopDelay > 0) this.stopDelay--;           // Vähennä viivettä
        else this.state = "slowing";                        // Aloita hidastus kun viive on nolla
      }

      // HIDASTUS-VAIHE: vähennetään nopeutta kunnes aloitetaan bounce
      if (this.state === "slowing") {
        // Hidastuskerroin riippuu nopeusasetuksesta
        const slowDownFactor = spinSpeed === 'slow' ? 0.88 : spinSpeed === 'medium' ? 0.92 : 0.95;
        this.speed *= slowDownFactor; // Eksponentiaalinen hidastus

        // Aloita bounce-efekti kun nopeus on riittävän pieni
        if (this.speed < 2.5) {
          this.state = "bouncing";   // Siirry bounce-tilaan
          this.bounceSpeed = -8;     // Alkuperäinen "tökkäys" ylöspäin
          this.bounceFrames = 0;     // Nollaa bounce-laskuri
          this.speed = 0;           // Pysäytä normaali liike
          this.offset = 0;          // Nollaa scroll-offset
          
          // Soita "chunk" pysähtymisääni
          playSound('stop');
          
          // Soita rumpuisku (v1.0.9 music integration)
          playDrumHit();
        }
      }
      
      // BOUNCE-VAIHE: "kimpoileva" pysähtyminen
      if (this.state === "bouncing") {
        this.bounceFrames++;
        this.bounceSpeed += 0.8;              // Gravitation (hidastaa ylösnopeus, kiihdyttää alaspäin)
        this.bounceOffset += this.bounceSpeed; // Päivitä bounce-sijainti
        
        // Jos "pomppi" menee liian alas, törmää "lattiaan" ja pomppii takaisin
        if (this.bounceOffset > 3) {
          this.bounceOffset = 3;
          this.bounceSpeed *= -0.6; // Vaimenna pomppiminen (60% energia säilyy)
        }
        
        // Lopeta bounce kun liike on riittävän pientä
        if (this.bounceFrames > 45 || (Math.abs(this.bounceSpeed) < 0.5 && Math.abs(this.bounceOffset) < 1)) {
          this.state = "stopped";    // Siirry lopulliseen pysähtynyt-tilaan
          this.bounceOffset = 0;     // Nollaa bounce-offset
          this.bounceSpeed = 0;      // Nollaa bounce-nopeus
        }
      }

      // LIIKE-LASKENTA: siirrytään jos nopeus > 0 (vain spinning/slowing aikana)
      if (this.speed > 0) {
        this.offset += this.speed; // Lisätään offsettia

        // Jos offset ylittää yhden symbolin korkeuden, vaihda uusi symboli
        if (this.offset >= ROW_HEIGHT) {
          this.offset = 0;                    // Nollaa offset
          reelData[this.index] = randomSymbol(this.index); // Aseta uusi satunnainen symboli tälle kiekolle (välitä kiekon indeksi!)
        }
      }
    }

    // Piirrä kiekon symboli näytölle
    draw() {
      const stage = this.container;
      stage.removeChildren(); // Poista vanhat spritet

      // Hae tämän kiekon symboli
      const symbol = reelData[this.index];
      if (!symbol || !symbolTextures || !symbolTextures[symbol]) return;

      // Hae symbolin tekstuuri
      const texture = symbolTextures[symbol];
      if (!texture) return;

      // Laske Y-koordinaatti (scroll offset + bounce offset)
      const y = this.offset + this.bounceOffset;

      // Luo sprite ja aseta koko/sijainti
      const sprite = new Sprite(texture);
      sprite.width = symbolWidth;   // Aseta leveys
      sprite.height = symbolHeight; // Aseta korkeus
      sprite.x = 0;                // X-koordinaatti (suhteessa konttiin)
      sprite.y = y;                // Y-koordinaatti (sisältää offsetit)

      stage.addChild(sprite); // Lisää sprite näytölle
    }
  } // Reel luokan loppu

  // ===================================================================
  // PIXIJS ALUSTUS - Suoritetaan kun komponentti on ladattu
  // ===================================================================
  // Tämä funktio käynnistyy kun Svelte komponentti on valmis
  // Lisää reactive skaalausmuuttuja
  let gameScale = $state(1);
  
  onMount(async () => {
    // ===== 1) PIXIJS SOVELLUKSEN LUONTI =====
    // Luo PixiJS Application joka hallinnoi koko peliä
    app = new Application();
    await app.init({
      width: CANVAS_WIDTH,     // Canvas leveys
      height: CANVAS_HEIGHT,   // Canvas korkeus
      background: "#001a33"     // Tummansininen tausta (näkyy ennen taustakuvaa)
    });

    // Liitä canvas HTML-elementtiin
    container.appendChild(app.canvas);
    
    // Lisää responsiivinen skaalaus
    const resizeGame = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const scaleX = windowWidth / CANVAS_WIDTH;
      const scaleY = windowHeight / CANVAS_HEIGHT;
      const newScale = Math.min(scaleX, scaleY, 1); // Ei skaalata suuremmaksi kuin 1
      
      // Päivitä reactive skaalaus
      gameScale = newScale;
      
      // Skaalaa PixiJS stage vastaamaan uutta kokoa
      app.stage.scale.set(newScale);
      
      // Renderer pysyy kiinteässä koossa
      app.renderer.resize(CANVAS_WIDTH, CANVAS_HEIGHT);
    };
    
    // Kutsu heti alussa
    resizeGame();
    
    // Päivitä kun ikkunan kokoa muutetaan
    window.addEventListener('resize', resizeGame);

    // ===== 2) KUVIEN LATAUS JA TEKSTUURIEN LUONTI =====
    // Käytetään PIXI.Assets.load modernin latauksen takaamiseksi
    const textures: Record<SymbolKey, Texture> = {} as any;

    try {
      loadingStatus = "Loading background and UI images...";
      debugInfo.push(`Loading background: ${BACKGROUND_URL}`);
      debugInfo.push(`Loading reel frames: ${REEL_FRAMES_URL}`);
      debugInfo.push(`Loading logo: ${LOGO_URL}`);
      
      // TAUSTAKUVAN JA UI-KUVIEN LATAUS
      await Assets.load([
        {alias: 'background', src: BACKGROUND_URL},
        {alias: 'reelframes', src: REEL_FRAMES_URL},
        {alias: 'logo', src: LOGO_URL}
      ]);
      backgroundTexture = Texture.from('background');
      reelFramesTexture = Texture.from('reelframes');
      logoTexture = Texture.from('logo');
      console.log("✅ Background texture created:", backgroundTexture.width, "x", backgroundTexture.height);
      console.log("✅ Reel frames texture created:", reelFramesTexture.width, "x", reelFramesTexture.height);
      console.log("✅ Logo texture created:", logoTexture.width, "x", logoTexture.height);
      debugInfo.push("✅ All UI images loaded");
      
      loadingStatus = "Loading symbols...";
      
      // SYMBOLIEN KUVIEN LATAUS - lataa ensin kaikki Assets.cache:een
      const assetManifest: Array<{alias: string, src: string}> = [];
      for (const key of SYMBOL_KEYS) {
        assetManifest.push({alias: key, src: SYMBOL_URLS[key]});
      }
      await Assets.load(assetManifest);
      
      // Luo tekstuurit cache:sta
      for (const key of SYMBOL_KEYS) {
        const url = SYMBOL_URLS[key];
        debugInfo.push(`Loading symbol ${key}: ${url}`);
        
        try {
          const texture = Texture.from(key); // Käytä aliasta
          textures[key] = texture;
          console.log(`✅ Symbol ${key} loaded:`, texture.width, "x", texture.height);
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
      loadingStatus = "Assets loaded successfully!";
      
    } catch (error) {
      errorMessage = `Asset loading failed: ${error}`;
      debugInfo.push(errorMessage);
      console.error(errorMessage);
      return; // Lopeta lataus jos virhe
    }
    
    // ===== 3) ÄÄNIEN LATAUS =====
    // Luodaan HTML5 Audio elementit ääniefektejä varten
    console.log("Ladataan ääniefektit...");
    
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
    // Lisätään taustakuva ENSIMMÄISENÄ jotta se jää kaiken taakse
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
        const thisReelCenter = symbolHeight / 2;                // Tämän keskikohta
        return baseY + otherReelsCenter - thisReelCenter;       // Korjattu Y-sijainti
      }
      return baseY; // Muut kiekot käyttävät alkuperäistä sijaintia
    };

    // Kiekkojen perussijainnit (mitattu taustakuvan kiekkojen kohdilta)
    const baseReelPositions = [
      { x: 70, y: 120 },   // 1. kiekko: vasen (siirretty hieman ulkospäin)
      { x: 203, y: 120 },  // 2. kiekko: vasen-keski
      { x: 345, y: 120 },  // 3. kiekko: keskimmäinen (pysyy keskellä)
      { x: 487, y: 120 },  // 4. kiekko: oikea-keski
      { x: 620, y: 120 }   // 5. kiekko: oikea (siirretty hieman ulkospäin)
    ];
    
    // Lisätään käyttäjän asettamat offset-arvot
    const reelPositions = baseReelPositions.map(pos => ({
      x: pos.x + OFFSET_X,  // Lisää X-siirtymä
      y: pos.y + OFFSET_Y   // Lisää Y-siirtymä
    }));

    // ===== 5) KIEKKOJEN LUONTI JA MASKIEN ASETUS =====
    reels = []; // Tyhjennetään kiekko-array

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

      // Lisää värillinen tausta kiekon alueelle (debug/visualisointi) - jokainen kiekko eri väri
      const colors = [
        0xff0000, 0x00ff00, 0x0000ff, // Sarake 0: punainen, vihreä, sininen
        0xffff00, 0xff00ff, 0x00ffff, // Sarake 1: keltainen, magenta, cyan
        0xffa500,                     // Keskikiekko: oranssi
        0x800080, 0x008000, 0x000080, // Sarake 3: violetti, tumma vihreä, tumma sininen
        0xff8000, 0x8000ff, 0x0080ff  // Sarake 4: oranssinpunainen, sinipurppura, siniturkoosi
      ];
      
      const reelBg = new Graphics()
        .rect(0, 0, symbolWidth, symbolHeight)      // Yhden symbolin koko
        .fill({ color: colors[reelIndex], alpha: 0.3 }); // Eri väri jokaiselle kiekolle, 30% läpinäkyvyys
      reelBg.x = reelCont.x;
      reelBg.y = reelCont.y;
      app.stage.addChild(reelBg);  // Lisää tausta näytölle

      // Lisää kiekon numero tekstinä debug-tarkoituksessa
      const style = new TextStyle({
        fontFamily: 'Arial',
        fontSize: 20,
        fill: 0xffffff,
        fontWeight: 'bold',
        stroke: { color: 0x000000, width: 2 }
      });
      
      const reelText = new Text({ text: reelIndex.toString(), style });
      reelText.x = reelCont.x + 5;
      reelText.y = reelCont.y + 5;
      app.stage.addChild(reelText);  // Lisää numero näytölle

      // Luo maski joka rajaa kiekon näkyvän alueen
      const mask = new Graphics()
        .rect(0, 0, symbolWidth, symbolHeight)  // Yhden symbolin koko
        .fill(0xffffff);                    // Valkoinen (maskin väri ei vaikuta)

      mask.x = reelCont.x;  // Sama sijainti kuin kiekko
      mask.y = reelCont.y;

      reelCont.mask = mask;  // Aseta maski kiekon kontille

      // Lisää maski ja kiekko näytölle
      app.stage.addChild(mask);     // Maski ensin
      app.stage.addChild(reelCont); // Sitten kiekko

      // Luo Reel-olio ja lisää listaan
      reels.push(new Reel(reelIndex, reelCont));
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
      console.log("Reel frames lisätty:", reelFramesSprite.width.toFixed(0), "x", reelFramesSprite.height.toFixed(0));
      console.log("Control panel leveys päivitetty:", controlPanelWidth.toFixed(0));
    }
    
    // ===== 7) PELIN LOGO (PÄÄLLIMMÄINEN LAYER) =====
    if (logoTexture) {
      const logoSprite = new Sprite(logoTexture);
      
      // Käytä määriteltyjä logo-asetuksia
      logoSprite.scale.set(LOGO_SCALE);
      
      // Sijoita logo käyttäjän asetusten mukaan
      logoSprite.x = (app.renderer.width - logoSprite.width) / 2 + LOGO_X; // Keskitetty + X-siirtymä
      logoSprite.y = LOGO_Y; // Käyttäjän määrittelemä Y-koordinaatti
      
      app.stage.addChild(logoSprite); // Päällimmäinen layer
      console.log("Logo lisätty päällimmäiseen layeriin:", logoSprite.width.toFixed(0), "x", logoSprite.height.toFixed(0));
    }

    // ===== 7) MUSIIKKIJÄRJESTELMÄN ALUSTUS (v1.0.9) =====
    initializeMusic();
    
    // ===== 8) PELISILMUKAN KÄYNNISTYS =====
    // PixiJS ticker kutsuu update-funktiota joka frame (yleensä 60 FPS)
    app.ticker.add(update);
  }); // onMount loppu

  // ===================================================================
  // PELISILMUKKA - Kutsutaan joka frame
  // ===================================================================
  function update() {
    // Päivitä jokainen kiekko (liike, animaatiot)
    for (const r of reels) {
      r.update(); // Päivitä kiekon tila
      r.draw();   // Piirrä kiekko uudelleen
    }
    
    // Tarkista voitot kun kaikki kiekot ovat pysähtyneet JA voittoja ei ole vielä tarkistettu
    if (!isShowingWin && !winsCheckedForCurrentSpin && reels.every(r => r.state === "stopped")) {
      winsCheckedForCurrentSpin = true; // Merkitse että voitot on tarkistettu
      
      // Feidaa musiikki alas kun kierros on ohi
      fadeOutMusicAfterSpin();
      
      const wins = checkWins();
      console.log(`Checking wins, found ${wins.length} wins`);
      
      if (wins.length > 0) {
        currentWins = wins;
        totalWin = wins.reduce((sum, win) => sum + win.payout, 0);
        
        // Log the win to file
        logWin(totalRounds, wins, totalWin);
        
        // Lisää voitto saldoon VAIN KERRAN
        addWinToBalance(totalWin);
        
        // Näytä voitto-popup
        isShowingWin = true;
        winPopupShownAt = Date.now(); // Merkitse aika kun popup tuli näkyviin
        
        console.log(`🎉 VOITTO! ${totalWin} pistettä! Uusi saldo: ${balance}`);
        console.log(`isShowingWin set to: ${isShowingWin}, totalWin: ${totalWin}`);
        wins.forEach(win => {
          const multiplierText = win.multiplier ? ` (${win.multiplier}x multiplier)` : '';
          console.log(`${win.count}x ${win.symbol} = ${win.payout} pistettä${multiplierText}`);
        });
        
        // Korostaa voittavat symbolit
        highlightWinningSymbols(wins);
        
        // Soita voittoääni
        playSound('win');
        
        // Jos autoplay on päällä, odota 1.5s ja sulje popup automaattisesti
        if (isAutoPlaying && !isProcessingAutoPlay) {
          isProcessingAutoPlay = true; // Lukitse
          autoPlayTimeoutId = window.setTimeout(() => {
            if (isShowingWin && isAutoPlaying) {
              console.log('Autoplay: Auto-closing win popup after 1.5s');
              isShowingWin = false;
              clearWinHighlights();
            }
            // Jatka seuraavaan kierrokseen
            autoPlayTimeoutId = window.setTimeout(() => {
              isProcessingAutoPlay = false; // Vapauta lukko
              executeAutoPlay();
            }, 200);
          }, 1500);
        }
      } else {
        console.log('No wins found this spin');
        // Jos autoplay on päällä ja ei voittoja, jatka seuraavaan kierrokseen
        // MUTTA odota 1 sekunti että pelaaja näkee tulokset
        if (isAutoPlaying && !isProcessingAutoPlay) {
          isProcessingAutoPlay = true; // Lukitse
          autoPlayTimeoutId = window.setTimeout(() => {
            isProcessingAutoPlay = false; // Vapauta lukko
            executeAutoPlay();
          }, 1000);
        }
      }
      
      // Check if free spins ended (ALWAYS, regardless of win/no-win)
      if (isFreeSpinMode && freeSpinsRemaining === 0) {
        console.log(`🎰 FREE SPINS ENDED! Total won: ${freeSpinsTotalWon}`);
        // Show free spins end message
        setTimeout(() => {
          alert(`Free Spins Ended!\nTotal Won: ${freeSpinsTotalWon.toFixed(2)}`);
          isFreeSpinMode = false;
          freeSpinsTotalWon = 0;
          
          // Palauta peruspelin musiikki
          switchMusic();
        }, 2000);
      }
    }
  }

  // ===================================================================
  // SPIN NAPPI - Käynnistää uuden pyöräytyksen
  // ===================================================================
  function spin() {
    // Vaihda uusi satunnainen loop peruspelissä
    if (!isFreeSpinMode) {
      changeBackgroundLoop();
    }
    
    // Käynnistä taustamusiikki ensimmäisellä kierroksella (EI vapaapeleissä)
    if (!isFreeSpinMode && backgroundMusic && musicEnabled && !backgroundMusic.playing()) {
      backgroundMusic.play();
      console.log('🎵 Background music started on first spin');
    }
    
    // Trigger glare effect on play button
    triggerPlayButtonGlare();
    
    // Free spins mode - no bet deduction
    if (isFreeSpinMode && freeSpinsRemaining > 0) {
      freeSpinsRemaining--;
      freeSpinsPlayedCount++; // Laske vapaaerä
      console.log(`🎰 FREE SPIN! Remaining: ${freeSpinsRemaining}`);
      
      // Check if free spins end after this spin (will be checked after win evaluation)
      // Note: freeSpinsRemaining is decremented before the spin
    } else if (!isFreeSpinMode) {
      // Normal mode - check balance and deduct bet
      if (balance < betAmount) {
        alert(`Not enough credits! Balance: ${balance}, Bet: ${betAmount}`);
        stopAutoPlay();
        return;
      }
      
      // Vähennä panos saldosta
      balance -= betAmount;
      
      // Päivitä RTP-tilastot (only for paid spins)
      totalRounds++;
      totalWagered += betAmount;
    }
    
    // Tyhjennä mahdollinen autoplay timeout
    if (autoPlayTimeoutId !== null) {
      clearTimeout(autoPlayTimeoutId);
      autoPlayTimeoutId = null;
    }
    
    // Nollaa voittotiedot JA sulje popup
    currentWins = [];
    totalWin = 0;
    isShowingWin = false;
    winsCheckedForCurrentSpin = false; // Salli voittojen tarkistus uudelle spinille
    clearWinHighlights(); // Poista voittokorostukset
    
    reelData = createReelData();                     // Luo uudet symbolit 13 kiekolle
    
    // v1.0.9: BPM-synkronoitu pysähtyminen (130 BPM)
    // Kiekot pysähtyvät rytmisesti musiikin tahtiin
    // Jokainen ruutu pysähtyy yksi kerrallaan järjestyksessä: 0-1-2-3-4-5-6-7-8-9-10-11-12
    reels.forEach((r, i) => {
      r.startSynchronized(i);        // Jokainen kiekko pysähtyy eri aikaan
    });
    
    // Soita "whirr" SPIN-ääni
    playSound('spin');
  }
  
  // Lisää voitto saldoon
  function addWinToBalance(winAmount: number) {
    balance += winAmount;
    totalWon += winAmount;
    lastWin = winAmount; // Track last win for display
    
    // Track free spins total wins separately
    if (isFreeSpinMode) {
      freeSpinsTotalWon += winAmount;
    }
    
    if (winAmount > 0) {
      totalWins++;
      
      // v1.0.9: Soita voittoteema isoille voitoille (yli 10x panos)
      const winMultiplier = winAmount / betAmount;
      if (winMultiplier >= 10) {
        playWinTheme();
      }
      
      // v1.1.6: Show vinyl win animation based on win size
      if (vinylWinAnimationRef) {
        if (winMultiplier >= 50) {
          // JACKPOT win (50x+)
          vinylWinAnimationRef.show();
        } else if (winMultiplier >= 20) {
          // MEDIUM win (20x-49x)
          setTimeout(() => vinylWinAnimationRef.show(), 200);
        } else if (winMultiplier >= 10) {
          // SMALL win (10x-19x)
          setTimeout(() => vinylWinAnimationRef.show(), 400);
        }
      }
    }
  }
  
  // Bet kontrollit
  function increaseBet() {
    if (betAmount < MAX_BET) {
      betAmount = Math.min(betAmount + 1, MAX_BET);
    }
  }
  
  function decreaseBet() {
    if (betAmount > MIN_BET) {
      betAmount = Math.max(betAmount - 1, MIN_BET);
    }
  }
  
  function maxBet() {
    betAmount = MAX_BET;
  }

  // Autoplay funktiot
  function startAutoPlay(rounds: number) {
    isAutoPlaying = true;
    autoPlayRoundsLeft = rounds;
    showAutoPlayMenu = false;
    executeAutoPlay();
  }

  function stopAutoPlay() {
    isAutoPlaying = false;
    autoPlayRoundsLeft = 0;
    isProcessingAutoPlay = false; // Vapauta lukko
    if (autoPlayTimeoutId !== null) {
      clearTimeout(autoPlayTimeoutId);
      autoPlayTimeoutId = null;
    }
  }

  function executeAutoPlay() {
    if (!isAutoPlaying || autoPlayRoundsLeft <= 0) {
      stopAutoPlay();
      return;
    }

    // Pyöräytä (update() jatkaa automaattisesti kun voitot on käsitelty)
    console.log(`Autoplay: Starting spin ${autoPlayRoundsLeft} rounds left`);
    spin();
    autoPlayRoundsLeft--;
    
    // ÄLÄ kutsu executeAutoPlay() täällä!
    // update() funktio kutsuu sitä automaattisesti kun voitot on käsitelty
  }

  // Nollaa RTP-tilastot
  function resetStats() {
    if (confirm('Reset all statistics?')) {
      totalRounds = 0;
      totalWagered = 0;
      totalWon = 0;
      totalWins = 0;
      freeSpinsTriggerCount = 0;
      freeSpinsPlayedCount = 0;
      totalVisibleSymbols = 0;
      totalEmptySlots = 0;
    }
  }
</script>

<!-- ================================================================ -->
<!-- HTML TEMPLATE - Pelin visuaalinen rakenne                        -->
<!-- ================================================================ -->

<!-- Debug-tiedot (näytetään vain jos ladataan tai virhe) -->
{#if loadingStatus !== "Assets loaded successfully!" || errorMessage}
  <div style="
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
  ">
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

<!-- Voittonäyttö -->
{#if totalWin > 0 && isShowingWin}
  <div style="
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
  ">
    <h2 style="margin: 0 0 10px 0; font-size: 2em;">🎉 VOITTO! 🎉</h2>
    <div style="font-size: 1.5em; font-weight: bold; margin: 10px 0;">
      {totalWin} pistettä
    </div>
    
    {#each currentWins as win}
      <div style="margin: 5px 0; font-size: 1.1em;">
        {win.count} × {SYMBOL_NAMES[win.symbol]} = {win.payout.toFixed(2)} pistettä
      </div>
    {/each}
    
    {#if currentWins.length > 0 && currentWins[0].multiplier > 1}
      <div style="margin: 10px 0; padding: 8px; background: rgba(255, 0, 255, 0.2); border-radius: 8px; border: 2px solid #ff00ff;">
        <span style="font-size: 1.3em; font-weight: bold; color: #ff00ff;">
          ✨ {currentWins[0].multiplier}x WIN MULTIPLIER! ✨
        </span>
      </div>
    {/if}
    
    <button 
      on:click={() => { 
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

<!-- Paytable-näyttö -->
{#if showPaytable}
  <div style="
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
    max-height: {Math.min(CANVAS_HEIGHT * gameScale * 0.8, 80 * window.innerHeight / 100)}px;
    overflow-y: auto;
    font-size: {gameScale}em;
  ">
    <h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;">💰 PAYTABLE (81 WAYS)</h2>
    
    <div style="margin-bottom: 15px; text-align: center; color: #aaa;">
      Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br/>
      Vähintään 3 symbolia tarvitaan voittoon
    </div>
    
    <div style="display: grid; gap: 10px;">
      <!-- Premium Symbols -->
      <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;">
        <div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;">👑 PREMIUM SYMBOLS</div>
        <div style="margin: 5px 0;">Rockabilly: 3x=7.00 | 4x=15.00 | 5x=50.00 🎸</div>
        <div style="margin: 5px 0;">Blonde: 3x=5.00 | 4x=10.00 | 5x=25.00 👱‍♀️</div>
        <div style="margin: 5px 0;">Brunette: 3x=3.00 | 4x=8.00 | 5x=20.00 👩‍🦱</div>
      </div>
      
      <!-- Blue Symbols -->
      <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;">
        <div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;">💎 BLUE SYMBOLS</div>
        <div style="margin: 5px 0;">Hot Rod: 3x=1.50 | 4x=4.00 | 5x=8.00 🚗</div>
        <div style="margin: 5px 0;">Jacket: 3x=1.50 | 4x=4.00 | 5x=8.00 🧥</div>
        <div style="margin: 5px 0;">Roller Skates: 3x=0.80 | 4x=2.00 | 5x=5.00 🛼</div>
        <div style="margin: 5px 0;">Microphone: 3x=0.80 | 4x=2.00 | 5x=5.00 🎤</div>
      </div>
      
      <!-- Red Symbols -->
      <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;">
        <div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;">🎵 RED SYMBOLS</div>
        <div style="margin: 5px 0;">Burger: 3x=0.40 | 4x=1.00 | 5x=2.50 🍔</div>
        <div style="margin: 5px 0;">Fries: 3x=0.40 | 4x=1.00 | 5x=2.50 🍟</div>
        <div style="margin: 5px 0;">Milkshake: 3x=0.20 | 4x=0.60 | 5x=1.50 🥤</div>
      </div>
      
      <!-- Special Symbols -->
      <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;">
        <div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;">⭐ SPECIAL SYMBOLS</div>
        <div style="margin: 5px 0;">WILD 🍬 - Korvaa kaikki muut symbolit (paitsi Scatter). Vain keskikelalla (50%).</div>
        <div style="margin: 5px 0;">SCATTER 📌 - Triggeröi 5-12 FREE SPINS (5-12 scatteria)</div>
      </div>
    </div>
    
    <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;">
      Kaikki voitot kerrotaan panoksella (Bet) ja Ways-kertoimella<br/>
      <span style="color: #ffd700;">Ways = Symbolien määrä per kela kerrottuna</span>
    </div>
    
    <button 
      on:click={() => { showPaytable = false; }}
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

<!-- PixiJS canvas ja kaikki UI-elementit skaalautuvassa konteissa -->
<div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: #000;
">
  <div style="
    position: relative;
    width: {CANVAS_WIDTH * gameScale}px;
    height: {CANVAS_HEIGHT * gameScale}px;
  ">
    <!-- PixiJS canvas sijoitetaan tähän -->
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
        on:click={() => { showPaytable = !showPaytable; }}
        style="
          position: absolute;
          top: {130 * gameScale}px;
          right: {20 * gameScale}px;
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

      <!-- Debug-nappi paytable-napin alapuolella -->
      <button
        on:click={() => { showDebugPanel = !showDebugPanel; }}
        style="
          position: absolute;
          top: {190 * gameScale}px;
          right: {20 * gameScale}px;
          padding: {10 * gameScale}px {15 * gameScale}px;
          background-color: rgba(0, 255, 0, 0.3);
          border: {2 * gameScale}px solid rgba(0, 255, 0, 0.7);
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
        🛠️ DEBUG v{GAME_VERSION}
      </button>

      <!-- Control Panel sijoitetaan canvas-kontin sisään -->
      <div class="control-panel-mobile" style="
        position: absolute;
        left: {((reelFramesSpriteRef ? reelFramesSpriteRef.x : REEL_FRAMES_X) + CONTROL_PANEL_OFFSET_X) * gameScale}px;
        top: {(CONTROL_PANEL_Y + CONTROL_PANEL_OFFSET_Y) * gameScale}px;
        width: {controlPanelWidth * gameScale}px;
        height: {CONTROL_PANEL_HEIGHT * gameScale}px;
        display: flex;
        align-items: center;
        z-index: 1000;
      ">





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
    style="height: {CONTROL_PANEL_HEIGHT * gameScale}px; flex-shrink: 0;"
  />
  
  <!-- Keskiosa (skaalautuva tausta) -->
  <div style="
    flex-grow: 1;
    height: {CONTROL_PANEL_HEIGHT * gameScale}px;
    background-image: url('{controlsPath}/Control_scalablebg.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 {20 * gameScale}px;
  ">
    <!-- BET kontrollit -->
    <div style="display: flex; flex-direction: column; align-items: center; gap: {5 * gameScale}px;">
      <div style="color: #00ff00; font-size: {12 * gameScale}px; font-weight: bold;">BET</div>
      <div style="display: flex; gap: {5 * gameScale}px; align-items: center;">
        <button
          on:click={decreaseBet}
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
        ></button>
        <div style="
          color: #fff;
          font-size: {18 * gameScale}px;
          font-weight: bold;
          min-width: {80 * gameScale}px;
          text-align: center;
          font-family: 'Courier New', monospace;
        ">
          {betAmount.toFixed(2)}
        </div>
        <button
          on:click={increaseBet}
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
        ></button>
        <button
          on:click={maxBet}
          style="
            padding: {6 * gameScale}px {10 * gameScale}px;
            background: #ffd700;
            color: #000;
            border: {2 * gameScale}px solid #000;
            border-radius: {5 * gameScale}px;
            cursor: pointer;
            font-size: {12 * gameScale}px;
            font-weight: bold;
            font-family: 'Courier New', monospace;
            transition: background 0.2s;
          "
          title="Max Bet"
        >MAX</button>
      </div>
    </div>
    
    <!-- Divider -->
    <img 
      src="{controlsPath}/Control_divider.png" 
      alt="Divider"
      style="height: {CONTROL_PANEL_HEIGHT * 0.8 * gameScale}px; flex-shrink: 0;"
    />
    
    <!-- BALANCE näyttö -->
    <div style="display: flex; flex-direction: column; align-items: center; gap: {5 * gameScale}px;">
      <div style="color: #00ff00; font-size: {12 * gameScale}px; font-weight: bold;">BALANCE</div>
      <div style="
        color: #fff;
        font-size: {20 * gameScale}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      ">
        {balance.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
      </div>
    </div>
    
    <!-- Divider -->
    <img 
      src="{controlsPath}/Control_divider.png" 
      alt="Divider"
      style="height: {CONTROL_PANEL_HEIGHT * 0.8 * gameScale}px; flex-shrink: 0;"
    />
    
    <!-- PLAY nappi (keskellä, iso - tulee paneelin yli) -->
    <div style="position: relative; display: flex; align-items: center; justify-content: center; flex-grow: 0.5;">
      <div class="play-button-wrapper {playButtonGlareActive ? 'glare-animate' : ''}">
        <button
          on:click={spin}
          disabled={isAutoPlaying}
          style="
            width: {130 * gameScale}px;
            height: {130 * gameScale}px;
            background-image: url('{controlsPath}/Control_playbutton.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border: none;
            cursor: {isAutoPlaying ? 'not-allowed' : 'pointer'};
            background-color: transparent;
            opacity: {isAutoPlaying ? 0.5 : 1};
            position: relative;
            z-index: 10;
            border-radius: 50%;
          "
          title="SPIN"
        ></button>
      </div>
    </div>
    
    <!-- Divider -->
    <img 
      src="{controlsPath}/Control_divider.png" 
      alt="Divider"
      style="height: {CONTROL_PANEL_HEIGHT * 0.8 * gameScale}px; flex-shrink: 0;"
    />
    
    <!-- Autoplay nappi -->
    <div style="display: flex; flex-direction: column; align-items: center; gap: {5 * gameScale}px;">
      <button
        on:click={() => { showAutoPlayMenu = !showAutoPlayMenu; }}
        style="
          width: {50 * gameScale}px;
          height: {50 * gameScale}px;
          background-image: url('{controlsPath}/{isAutoPlaying ? 'Control_autoplay_stop.png' : 'Control_autoplay_select.png'}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        "
        title="Autoplay"
      ></button>
      <img 
        src="{controlsPath}/{isAutoPlaying ? 'Control_bar_select.png' : 'Control_bar_deselect.png'}" 
        alt="Status bar"
        style="width: {50 * gameScale}px; height: auto;"
      />
    </div>
    
    <!-- Divider -->
    <img 
      src="{controlsPath}/Control_divider.png" 
      alt="Divider"
      style="height: {CONTROL_PANEL_HEIGHT * 0.8 * gameScale}px; flex-shrink: 0;"
    />
    
    <!-- Spin Speed nappi -->
    <div style="position: relative; display: flex; flex-direction: column; align-items: center; gap: {5 * gameScale}px;">
      <button
        on:click={() => { showSpinSpeedMenu = !showSpinSpeedMenu; }}
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
        title="Spin Speed: {spinSpeed === 'slow' ? 'Slow' : spinSpeed === 'medium' ? 'Medium' : 'Fast'}"
      ></button>
      <div style="
        color: #ffffff;
        font-size: {10 * gameScale}px;
        font-weight: bold;
        text-transform: uppercase;
      ">
        {spinSpeed === 'slow' ? 'Slow' : spinSpeed === 'medium' ? 'Med' : 'Fast'}
      </div>
      
      <!-- Spin Speed Valikko -->
      {#if showSpinSpeedMenu}
        <div style="
          position: absolute;
          bottom: {80 * gameScale}px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(180deg, #2a2a2a 0%, #1a1a1a 100%);
          border: {2 * gameScale}px solid #ffd700;
          border-radius: {10 * gameScale}px;
          padding: {10 * gameScale}px;
          display: flex;
          flex-direction: column;
          gap: {8 * gameScale}px;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        ">
          <div style="
            color: #ffd700;
            font-size: {14 * gameScale}px;
            font-weight: bold;
            text-align: center;
            border-bottom: {1 * gameScale}px solid #444;
            padding-bottom: {5 * gameScale}px;
          ">
            SPIN SPEED
          </div>
          
          <button
            on:click={() => { spinSpeed = 'slow'; showSpinSpeedMenu = false; }}
            style="
              background: {spinSpeed === 'slow' ? 'linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)' : 'linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)'};
              border: {2 * gameScale}px solid {spinSpeed === 'slow' ? '#ffd700' : '#666'};
              color: {spinSpeed === 'slow' ? '#ffd700' : '#ffffff'};
              padding: {8 * gameScale}px {20 * gameScale}px;
              border-radius: {5 * gameScale}px;
              cursor: pointer;
              font-weight: bold;
              font-size: {12 * gameScale}px;
              transition: all 0.2s;
            "
          >
            🐌 SLOW
          </button>
          
          <button
            on:click={() => { spinSpeed = 'medium'; showSpinSpeedMenu = false; }}
            style="
              background: {spinSpeed === 'medium' ? 'linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)' : 'linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)'};
              border: {2 * gameScale}px solid {spinSpeed === 'medium' ? '#ffd700' : '#666'};
              color: {spinSpeed === 'medium' ? '#ffd700' : '#ffffff'};
              padding: {8 * gameScale}px {20 * gameScale}px;
              border-radius: {5 * gameScale}px;
              cursor: pointer;
              font-weight: bold;
              font-size: {12 * gameScale}px;
              transition: all 0.2s;
            "
          >
            ⚡ MEDIUM
          </button>
          
          <button
            on:click={() => { spinSpeed = 'fast'; showSpinSpeedMenu = false; }}
            style="
              background: {spinSpeed === 'fast' ? 'linear-gradient(180deg, #4a4a4a 0%, #2a2a2a 100%)' : 'linear-gradient(180deg, #3a3a3a 0%, #1a1a1a 100%)'};
              border: {2 * gameScale}px solid {spinSpeed === 'fast' ? '#ffd700' : '#666'};
              color: {spinSpeed === 'fast' ? '#ffd700' : '#ffffff'};
              padding: {8 * gameScale}px {20 * gameScale}px;
              border-radius: {5 * gameScale}px;
              cursor: pointer;
              font-weight: bold;
              font-size: {12 * gameScale}px;
              transition: all 0.2s;
            "
          >
            🚀 FAST
          </button>
        </div>
      {/if}
    </div>
    
    <!-- Divider -->
    <img 
      src="{controlsPath}/Control_divider.png" 
      alt="Divider"
      style="height: {CONTROL_PANEL_HEIGHT * 0.8 * gameScale}px; flex-shrink: 0;"
    />
    
    <!-- Fast Play nappi -->
    <div style="display: flex; flex-direction: column; align-items: center; gap: {5 * gameScale}px;">
      <button
        on:click={() => { isFastPlayEnabled = !isFastPlayEnabled; }}
        style="
          width: {50 * gameScale}px;
          height: {50 * gameScale}px;
          background-image: url('{controlsPath}/{isFastPlayEnabled ? 'Control_fastplay_select.png' : 'Control_fastplay_deselect.png'}');
          background-size: contain;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          background-color: transparent;
        "
        title="Fast Play"
      ></button>
      <img 
        src="{controlsPath}/{isFastPlayEnabled ? 'Control_bar_select.png' : 'Control_bar_deselect.png'}" 
        alt="Status bar"
        style="width: {50 * gameScale}px; height: auto;"
      />
    </div>
    
    <!-- Divider -->
    <img 
      src="{controlsPath}/Control_divider.png" 
      alt="Divider"
      style="height: {CONTROL_PANEL_HEIGHT * 0.8 * gameScale}px; flex-shrink: 0;"
    />
    
    <!-- WIN näyttö -->
    <div style="display: flex; flex-direction: column; align-items: center; gap: {5 * gameScale}px;">
      <div style="color: #00ff00; font-size: {12 * gameScale}px; font-weight: bold;">WIN</div>
      <div style="
        color: #ffd700;
        font-size: {20 * gameScale}px;
        font-weight: bold;
        font-family: 'Courier New', monospace;
      ">
        {lastWin.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}
      </div>
    </div>
    
    <!-- Divider -->
    <img 
      src="{controlsPath}/Control_divider.png" 
      alt="Divider"
      style="height: {CONTROL_PANEL_HEIGHT * 0.8 * gameScale}px; flex-shrink: 0;"
    />
    
    <!-- Menu nappi -->
    <button
      on:click={() => { showPaytable = !showPaytable; }}
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
    ></button>
  </div>
  
  <!-- Oikea pää -->
  <img 
    src="{controlsPath}/Control_rightend.png" 
    alt="Right End"
    style="height: {CONTROL_PANEL_HEIGHT * gameScale}px; flex-shrink: 0;"
  />
</div>
    </div> <!-- Suljetaan sisempi canvas-kontti -->

<!-- Paytable-nappi oikeassa reunassa credit-näytön alla -->
<button
<VinylWinAnimation 
  bind:this={vinylWinAnimationRef}
  winLevel={totalWin / betAmount >= 50 ? 'jackpot' : totalWin / betAmount >= 20 ? 'medium' : 'small'}
  winAmount={totalWin}
/>

<!-- DEBUG PANEELIT (pelialueen sisällä) -->
<!-- RTP Debug näyttö (vasemmassa yläkulmassa) -->
<div class="debug-panel" style="
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
">
  <div style="font-weight: bold; font-size: 16px; margin-bottom: 5px; color: #ffd700; text-align: center;">
    📊 RTP MONITOR
  </div>
  <div style="font-size: 14px; font-weight: bold; margin-bottom: 10px; color: #ffd700; text-align: center;">
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
  <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 10px; 
    padding-top: 10px; 
    border-top: 1px solid #555;
    font-weight: bold;
    font-size: 18px;
  ">
    <span style="color: #ffd700;">RTP:</span>
    <span style="color: {parseFloat(currentRTP) >= 95 ? '#00ff00' : parseFloat(currentRTP) >= 85 ? '#ffff00' : '#ff6666'};">
      {currentRTP}%
    </span>
  </div>
  <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-weight: bold;
    font-size: 16px;
  ">
    <span style="color: #aaa;">Hit Freq:</span>
    <span style="color: {parseFloat(hitFrequency) >= 30 ? '#00ff00' : parseFloat(hitFrequency) >= 20 ? '#ffff00' : '#ff6666'};">
      {hitFrequency}%
    </span>
  </div>
  <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    font-size: 14px;
  ">
    <span style="color: #aaa;">Free Spins Triggered:</span>
    <span style="color: #66ccff;">{freeSpinsTriggerCount}</span>
  </div>
  <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 4px;
    font-size: 14px;
  ">
    <span style="color: #aaa;">Free Spins Played:</span>
    <span style="color: #66ccff;">{freeSpinsPlayedCount}</span>
  </div>
  <div style="
    display: flex; 
    justify-content: space-between; 
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #555;
    font-size: 14px;
  ">
    <span style="color: #aaa;">Empty Slots:</span>
    <span style="color: #ff9900;">{emptySlotPercentage}%</span>
  </div>
  <button
    on:click={resetStats}
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
  <div style="
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  ">
    <button
      on:click={downloadWinLog}
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
      on:click={clearWinLog}
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
    
    <!-- Music Toggle Button (v1.0.9) -->
    <button
      on:click={toggleMusic}
      style="
        width: 100%;
        padding: 5px;
        background: {musicEnabled ? 'rgba(255, 215, 0, 0.3)' : 'rgba(100, 100, 100, 0.3)'};
        color: #fff;
        border: 1px solid {musicEnabled ? '#ffd700' : '#666'};
        border-radius: 5px;
        cursor: pointer;
        font-size: 11px;
        margin-bottom: 5px;
      "
    >
      🎵 Music: {musicEnabled ? 'ON' : 'OFF'}
    </button>
    
    <button
      on:click={triggerTestFreeSpins}
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

<!-- Autoplay nappi ja menu (oikeassa alakulmassa) -->
<div class="debug-panel" style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
  display: {showDebugPanel ? 'block' : 'none'};
">
  {#if isAutoPlaying}
    <!-- Autoplay aktiivinen - näytä Stop ja kierrosten määrä -->
    <div style="
      background: rgba(255, 100, 100, 0.9);
      color: white;
      padding: 15px 20px;
      border-radius: 10px;
      border: 2px solid #ff0000;
      box-shadow: 0 4px 15px rgba(255, 0, 0, 0.5);
      text-align: center;
      animation: winPulse 1s infinite;
    ">
      <div style="font-weight: bold; font-size: 16px; margin-bottom: 8px;">
        🔄 AUTOPLAY
      </div>
      <div style="font-size: 20px; font-family: 'Courier New', monospace; margin-bottom: 10px;">
        {autoPlayRoundsLeft} left
      </div>
      <button
        on:click={stopAutoPlay}
        style="
          width: 100%;
          padding: 8px;
          background: #ffffff;
          color: #ff0000;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
        "
      >
        ⏹ STOP
      </button>
    </div>
  {:else}
    <!-- Autoplay ei aktiivinen - näytä nappi -->
    <button
      on:click={() => { showAutoPlayMenu = !showAutoPlayMenu; }}
      style="
        padding: 12px 20px;
        background: rgba(100, 200, 255, 0.9);
        color: white;
        border: 2px solid #0088ff;
        border-radius: 10px;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        box-shadow: 0 4px 15px rgba(0, 136, 255, 0.5);
        min-width: 140px;
      "
    >
      🔄 AUTOPLAY
    </button>
    
    <!-- Autoplay valikko -->
    {#if showAutoPlayMenu}
      <div style="
        position: absolute;
        bottom: 60px;
        right: 0;
        background: rgba(0, 0, 0, 0.95);
        padding: 15px;
        border-radius: 10px;
        border: 2px solid #0088ff;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.8);
        min-width: 180px;
      ">
        <div style="color: white; font-weight: bold; margin-bottom: 10px; text-align: center;">
          Select Rounds:
        </div>
        <button
          on:click={() => startAutoPlay(10)}
          style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #44aa44;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          "
        >
          10 Rounds
        </button>
        <button
          on:click={() => startAutoPlay(100)}
          style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #4488ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          "
        >
          100 Rounds
        </button>
        <button
          on:click={() => startAutoPlay(1000)}
          style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff8844;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          "
        >
          1,000 Rounds
        </button>
        <button
          on:click={() => startAutoPlay(10000)}
          style="
            width: 100%;
            padding: 8px;
            margin-bottom: 5px;
            background: #ff4444;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          "
        >
          10,000 Rounds
        </button>
        <button
          on:click={() => startAutoPlay(100000)}
          style="
            width: 100%;
            padding: 8px;
            margin-bottom: 10px;
            background: #aa00ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-weight: bold;
          "
        >
          100,000 Rounds
        </button>
        <button
          on:click={() => { showAutoPlayMenu = false; }}
          style="
            width: 100%;
            padding: 6px;
            background: rgba(255, 255, 255, 0.1);
            color: #aaa;
            border: 1px solid #555;
            border-radius: 5px;
            cursor: pointer;
            font-size: 12px;
          "
        >
          Cancel
        </button>
      </div>
    {/if}
  {/if}
</div>

<!-- Mykistysnappi oikeassa yläkulmassa -->
<button class="debug-panel"
  on:click={() => { soundEnabled = !soundEnabled; }}
  style="
    position: absolute;
    top: 10px;
    right: 10px;
    display: none;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: {soundEnabled ? 'rgba(0,255,0,0.2)' : 'rgba(255,0,0,0.2)'};
    border: 2px solid {soundEnabled ? 'rgba(0,255,0,0.5)' : 'rgba(255,0,0,0.5)'};
    cursor: pointer;
    z-index: 1001;
    font-size: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  "
  title={soundEnabled ? "Mykistä äänet" : "Laita äänet päälle"}
>
  {soundEnabled ? "🔊" : "🔇"}
</button>

  </div> <!-- Päätä skaalautuva wrapper -->
</div> <!-- Päätä ulompi wrapper -->
