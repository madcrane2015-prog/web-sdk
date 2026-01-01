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
    0%, 100% { 
      transform: translate(-50%, -50%) scale(1); 
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.8);
    }
    50% { 
      transform: translate(-50%, -50%) scale(1.05); 
      box-shadow: 0 0 40px rgba(255, 215, 0, 1.0);
    }
  }

  /* === RETRO 50s DINER WIN TEXT === */
  .win3d {
    --face: #ffd36a;
    --stroke: rgba(30,12,0,.95);
    --depth: #7a3b00;
    --glowA: rgba(255, 92, 168, .55);
    --glowB: rgba( 90, 210, 255, .55);

    position: relative;
    display: inline-block;
    font-family: "Cooper Black", "Luckiest Guy", "Bungee", system-ui, sans-serif;
    font-weight: 900;
    letter-spacing: .03em;
    text-transform: uppercase;
    font-size: clamp(0.8rem, 3vw, 1.4rem);
    line-height: 1.05;
  }

  .win3d .depth {
    position: absolute;
    inset: 0;
    transform: translate(3px, 3px);
    color: var(--depth);
    filter: saturate(1.1) contrast(1.05);
    text-shadow:
      0 1px 0 rgba(0,0,0,.25),
      0 2px 0 rgba(0,0,0,.25),
      0 3px 0 rgba(0,0,0,.25),
      0 10px 18px rgba(0,0,0,.35);
    user-select: none;
    pointer-events: none;
  }

  .win3d .face {
    position: relative;
    color: var(--face);
    -webkit-text-stroke: 2px var(--stroke);
    paint-order: stroke fill;
    text-shadow:
      0 -2px 0 rgba(255,255,255,.18),
      0 2px 0 rgba(120,55,0,.25),
      0 18px 22px rgba(0,0,0,.40),
      0 0 14px var(--glowA),
      0 0 18px var(--glowB);
  }

  .winShine::after {
    content: "";
    position: absolute;
    inset: -12%;
    background: linear-gradient(110deg,
      transparent 0%,
      rgba(255,255,255,0.00) 35%,
      rgba(255,255,255,0.75) 48%,
      rgba(255,255,255,0.00) 60%,
      transparent 100%
    );
    transform: translateX(-160%) rotate(0.001deg);
    mix-blend-mode: screen;
    pointer-events: none;
    -webkit-mask: linear-gradient(#000 0 0);
    mask: linear-gradient(#000 0 0);
    animation: shine 1.25s ease-in-out infinite;
    opacity: .9;
  }

  @keyframes shine {
    0%   { transform: translateX(-160%); opacity: 0; }
    15%  { opacity: .85; }
    55%  { transform: translateX(160%); opacity: .85; }
    56%  { opacity: 0; }
    100% { transform: translateX(160%); opacity: 0; }
  }

  .winHit {
    animation: pop 420ms cubic-bezier(.2,.9,.2,1);
  }

  @keyframes pop {
    0%   { transform: scale(.92); }
    55%  { transform: scale(1.08); }
    100% { transform: scale(1.00); }
  }

  .rolling .face {
    animation: glowPulse 900ms ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% {
      filter: drop-shadow(0 0 0 rgba(255,92,168,0))
              drop-shadow(0 0 0 rgba(90,210,255,0));
    }
    50% {
      filter: drop-shadow(0 0 14px rgba(255,92,168,.65))
              drop-shadow(0 0 18px rgba(90,210,255,.65));
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
  const GAME_VERSION = "1.3.4";
  
  // Svelte lifecycle ja routing
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  
  // Win animation component
  import VinylWinAnimation from './VinylWinAnimation.svelte';
  
  // ===== PIXIJS KIRJASTON KOMPONENTIT =====
  // PixiJS on 2D-grafiikkakirjasto joka käyttää WebGL:ää
  import {
    Application,    // Pelin pääsovellus - hallitsee rendereriä ja stage-objektia
    Graphics,      // Geometristen muotojen piirtäminen (ympyrät, neliöt, viivat)
    Container,     // Elementtien ryhmittely - toimii kuten HTML div
    Sprite,        // Kuvien (tekstuurien) näyttäminen ruudulla
    Texture,       // Kuvatekstuurit - lataa ja tallentaa kuvia muistiin
    Assets,        // Modernit Asset lataukset (PixiJS v8)
    Text,          // Tekstin näyttäminen pelissä
    TextStyle      // Tekstin tyyliasetukset (fontti, koko, väri jne.)
  } from "pixi.js";

  // ===== PELIN PERUSKONFIGURAATIO =====
  // Tämä on WAYS-peli, ei perinteinen paylines-peli!
  const COLS = 5; // Sarakkeiden määrä vaakasuunnassa (5 pystyriviä symboleja)
  const ROWS = 3; // Rivien määrä per sarake (3 vaakarivi symboleja per sarake)
  const TOTAL_REELS = 13; // Yhteensä 13 erillistä kiekkoa:
  // Layout: 3×3×1×3×3 (vasen 3 riviä, keskellä 1 rivi, oikea 3 riviä)
  // Jokaisella ruudulla on oma kiekko joka pyörii itsenäisesti!

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

  // ===== SYMBOLIN MITAT =====
  // Nämä määrittävät kuinka isoja symbolit näyttävät pelissä
  const baseSymbolWidth = 100;  // Perusleveys pikseleinä (ennen skaalaus-kerrointa)
  const symbolWidth = Math.round(baseSymbolWidth * SCALE_MULTIPLIER);  // Lopullinen leveys (skaalattu)
  const symbolHeight = Math.round(symbolWidth * (700 / 760));  // Korkeus (sama suhde kuin alkuperäiset kuvat)
  const cellSize = symbolWidth; // Ruudun koko (käytetään vanhoissa laskuissa, säilytetty yhteensopivuuden takia)
  const gap = 10;  // Väli symbolien välillä pikseleinä
  const ROW_HEIGHT = symbolHeight + gap;  // Yhden rivin kokonaiskorkeus (symboli + väli)

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
    fast: 3,    // Fast: ~3 sec (15 frames/kiekko * 13 kiekkoa = 195 frames = ~3.25s @ 60fps)
    medium: 7,  // Medium: ~5 sec (23 frames/kiekko * 13 kiekkoa = 299 frames = ~5s @ 60fps)
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
  // (v1.2.8: Poistettu käytöstä - yksi loop session ajan)
  function changeBackgroundLoop() {
    if (isFreeSpinMode) return; // Ei vaihdeta free spins -tilassa
    
    // Valitse uusi satunnainen loop (1-20)
    const newLoopNumber = Math.floor(Math.random() * 20) + 1;
    randomLoopNumber = newLoopNumber;
    
    // Pysäytä vanha musiikki (fade out 300ms)
    if (backgroundMusic) {
      if (backgroundMusic.playing()) {
        backgroundMusic.fade(backgroundMusic.volume(), 0, 300);
        setTimeout(() => backgroundMusic.stop(), 300);
      }
      backgroundMusic.unload();
    }
    
    // Lataa uusi loop Howler.js:llä
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
  
  // Vinyl win animation configuration
  const vinylAnimationConfig = {
    vinylStartScale: 0.01,  // Aloituskoko (0.01 = hyvin pieni keskipiste)
    vinylEndScale: 0.15,     // Lopetuskoko (0.15 = pienempi loppukoko)
    sparkleScale: 0.6        // Tähtien koko (0.6 = pienempi)
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
  let symbolTextures: Record<SymbolKey, Texture> | null = null;  // Kaikki 13 symbolia
  let backgroundTexture: Texture | null = null;  // Taustakuva (bg_base.jpg)
  let reelFramesTexture: Texture | null = null;  // Kiekkojen kehykset (ReelFrames.png)
  let logoTexture: Texture | null = null;  // Pelin logo (RockABillyReels_logo.png)
  
  // Debug tila - näyttää lataustilanteen ja mahdolliset virheet
  let loadingStatus = $state("Initializing...");  // Nykyinen latausvaihe
  let errorMessage = $state("");  // Virheviesti jos lataus epäonnistuu
  let debugInfo: string[] = [];  // Kootut debug-tiedot
  
  // ===== CREDIT JÄRJESTELMÄ =====
  // Pelaajan saldo ja panostus
  let balance = $state(1000); // Aloitussaldo (voi muuttaa)
  
  // Bet levels - ennalta määritellyt panostasot
  // Pelaaja voi valita näistä + ja - napeilla
  const BET_LEVELS = [0.4, 0.8, 1, 1.6, 2, 3, 5, 8, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100];
  let currentBetIndex = $state(5); // Aloitetaan indeksistä 5 = 3.0 (default bet)
  let betAmount = $derived(BET_LEVELS[currentBetIndex]); // Panoksen määrä per spin (automaattisesti laskettu)
  let lastWin = $state(0);  // Viimeisin voittosumma (näytetään UI:ssa)
  const MIN_BET = BET_LEVELS[0];  // Pienin mahdollinen panos (0.4)
  const MAX_BET = BET_LEVELS[BET_LEVELS.length - 1];  // Suurin mahdollinen panos (100)

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

  // ===== SATUNNAINEN SYMBOLI =====
  // Palauttaa satunnaisen symbolin tietylle kiekolle (painotettu jakauma)
  // @param reelIndex - Kiekon indeksi (0-12)
  // @returns SymbolKey - Valittu symboli
  function randomSymbol(reelIndex: number): SymbolKey {
    // Kiekko 6 (keskikiekko) - Wild (55%) tai tyhjä ruutu (45%)
    // Tämä on ainoa kiekko jossa Wild voi esiintyä!
    if (reelIndex === 6) {
      return Math.random() < 0.55 ? 'h' : 'emptyslot';
    }
    
    // Valitse oikea painotustaulukko (peruspeli tai vapaapelit)
    const SYMBOL_WEIGHTS = isFreeSpinMode ? SYMBOL_WEIGHTS_FS : SYMBOL_WEIGHTS_BASE;
    
    // Kiekot 1,2,4,5 (ulkokiekot) - Sisältää tyhjät ruudut
    const rand = Math.random();  // Satunnaisluku 0-1
    let cumulative = 0;  // Kumulatiivinen paino
    
    // Kaikki symbolit PAITSI Wild (h)
    const availableSymbols = SYMBOL_KEYS.filter(s => s !== 'h');
    
    // Laske kokonaispaino
    const totalWeight = availableSymbols.reduce((sum, sym) => sum + SYMBOL_WEIGHTS[sym], 0);
    
    // Painotettu valinta (roulette wheel selection)
    for (const symbol of availableSymbols) {
      cumulative += SYMBOL_WEIGHTS[symbol] / totalWeight;
      if (rand < cumulative) {
        return symbol;
      }
    }
    
    // Varavaihtoeht (ei pitäisi koskaan toteutua)
    return 'f';
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

  // ===== KOORDINAATTIMUUNNOKSET =====
  // Nämä funktiot muuntavat kiekko-indeksin (0-12) grid-koordinaateiksi (col, row)
  // ja päinvastoin
  
  // Muuntaa reel-indeksin (0-12) koordinaateiksi (col, row)
  // Layout: [0,1,2] [3,4,5] [6] [7,8,9] [10,11,12]
  //         Col 0    Col 1   Col 2  Col 3   Col 4
  function getReelPosition(reelIndex: number): {col: number, row: number} {
    if (reelIndex < 3) return {col: 0, row: reelIndex}; // Sarake 0: ruudut 0,1,2
    if (reelIndex < 6) return {col: 1, row: reelIndex - 3}; // Sarake 1: ruudut 3,4,5
    if (reelIndex === 6) return {col: 2, row: 0}; // Keskikiekko: ruutu 6 (vain 1 rivi!)
    if (reelIndex < 10) return {col: 3, row: reelIndex - 7}; // Sarake 3: ruudut 7,8,9
    return {col: 4, row: reelIndex - 10}; // Sarake 4: ruudut 10,11,12
  }

  // Muuntaa koordinaatit (col, row) reel-indeksiksi (0-12)
  // Käänteistoiminto getReelPosition():lle
  function getReelIndex(col: number, row: number): number {
    if (col === 0) return row;
    if (col === 1) return 3 + row;
    if (col === 2) return 6; // Keskikiekko on aina indeksi 6
    if (col === 3) return 7 + row;
    if (col === 4) return 10 + row;
    return -1; // Virhe - virheellinen koordinaatti
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
    // TRUE WAYS LOGIC: Laske yksilölliset positiot voittopoluilta
    // ============================================================================
    // TÄRKEÄÄ (v1.0.4): Maksetaan VAIN PISIN yhdistelmä jokaiselle symbolille
    // Esimerkki: Jos symboli 'a' on voittanut sekä 3-symbolilla ETTÄ 4-symbolilla,
    //            maksetaan VAIN 4-symboli voitot
    // Mutta lasketaan KAIKKI polut/tavat joilla pisin yhdistelmä saavutetaan
    //
    // WAYS-LASKENTA (81 WAYS):
    // - Laske montako kertaa pisin yhdistelmä esiintyy kaikilla poluilla
    // - Jokainen uniikki polku = 1 tapa (way)
    // - Useita symboleja samoissa sarakkeissa = useita tapoja
    // - Esimerkki: 2 symbolia sarake0 × 1 sarake1 × 1 sarake2 = 2 tapaa 3-symbolin voittoon
    //
    // Tämä "vain pisin" sääntö vähentää merkittävästi RTP:tä (~80% vs ~96% ilman sitä)
    // ============================================================================
    const foundWinCombos: WinResult[] = [];
    
    // ===== VAIHE 1: Ryhmittele voitot symboleittain =====
    // Tämä varmistaa että jokaiselle symbolille käsitellään vain pisin mahdollinen voitto
    const winsBySymbol = new Map<SymbolKey, WinPath[]>();
    
    for (const win of filteredWins) {
      if (!winsBySymbol.has(win.symbol)) {
        winsBySymbol.set(win.symbol, []);
      }
      winsBySymbol.get(win.symbol)!.push(win);
    }
    
    // ===== VAIHE 2: Pidä vain PISIMMÄT voitot jokaiselle symbolille =====
    // Jos symboli 'a' voitti sekä 3- ETTÄ 4-symbolilla, pidetään vain 4-symbolin voitot
    const finalFilteredWins: WinPath[] = [];
    for (const [symbol, wins] of winsBySymbol.entries()) {
      const maxLength = Math.max(...wins.map(w => w.length)); // Etsi pisin
      const longestWins = wins.filter(w => w.length === maxLength); // Suodata
      finalFilteredWins.push(...longestWins);
    }
    
    // ===== VAIHE 3: Ryhmittele symboli+pituus -yhdistelmillä maksujen laskentaa varten =====
    const winsBySymbolAndLength = new Map<string, WinPath[]>();
    
    for (const win of finalFilteredWins) {
      const key = `${win.symbol}-${win.length}`;
      if (!winsBySymbolAndLength.has(key)) {
        winsBySymbolAndLength.set(key, []);
      }
      winsBySymbolAndLength.get(key)!.push(win);
    }
    
    // ===== VAIHE 4: Hae kerroin koko spinille =====
    // Yksi kerroin koko kierrokselle (ei jokaiselle voitolle erikseen)
    // Peruspeli: 1x (70%), 2x (22%), 3x (8%)
    // Vapaapelit: 3x (70%), 5x (22%), 10x (8%)
    const winMultiplier = finalFilteredWins.length > 0 ? getWinMultiplier() : 1;
    
    // ===== VAIHE 5: Käsittele jokainen symboli+pituus -yhdistelmä =====
    for (const [key, winsInGroup] of winsBySymbolAndLength.entries()) {
      const firstWin = winsInGroup[0];
      
      // Hae paytable-kerroin tälle symbolille ja pituudelle (3, 4 tai 5)
      const payoutMultiplier = SYMBOL_PAYTABLE[firstWin.symbol]?.[firstWin.length as 3 | 4 | 5];
      
      if (payoutMultiplier !== undefined && payoutMultiplier > 0) {
        // ===== LASKE WAYS (TAVAT) =====
        // Laske yksilölliset positiot per kiekko kaikista voittopoluista tässä ryhmässä
        // Esimerkki: Jos on 2 symbolia sarakkeessa 0, 1 sarakkeessa 1, 1 sarakkeessa 2:
        //            ways = 2 × 1 × 1 = 2 tapaa voittaa
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
  let showFreeSpinsEndPopup = $state(false); // Free spins end popup
  let freeSpinsEndAmount = $state(0); // Total won in free spins
  
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

    // ===== ALOITA KIEKON PYÖRIMINEN =====
    // Käynnistää kiekon pyörimisen määritellyllä viiveellä
    // @param delay - Montako framea odotetaan ennen pysähtymistä (määrittää milloin kiekko pysähtyy)
    start(delay: number) {
      this.state = "spinning";    // Aseta pyörivä tila
      this.speed = 0;            // Aloita nopeudesta 0 (kiihdytetään vähitellen)
      
      // Pyörimisnopeus on AINA sama (medium), vain pysähtymisviive muuttuu
      // Tämä luo tasaisen visuaalisen pyörimisnopeuden riippumatta spinSpeed-asetuksesta
      this.targetSpeed = 35;     // Vakio pyörimisnopeus (pikseleitä per frame)
      
      this.stopDelay = delay;    // Aseta pysäytysviive (kiekot pysähtyvät eri aikoina)
    }
    
    // ===== BPM-SYNKRONOITU ALOITUS (v1.0.9) =====
    // Pysäyttää kiekot peräkkäin rytmisesti musiikin tahtiin (130 BPM)
    // Jokainen kiekko pysähtyy yksi kerrallaan vasemmalta oikealle
    // @param beatIndex - Kiekon järjestysnumero (0-12)
    startSynchronized(beatIndex: number) {
      const framesPerReel = SPIN_SPEED_CONFIG[spinSpeed]; // Käytä konfiguraation arvoa (slow/medium/fast)
      const delay = 60 + (beatIndex * framesPerReel); // 60 base-framea + viive per kiekko
      this.start(delay);
    }

    // ===== PÄIVITÄ KIEKON TILA JOKA FRAME =====
    // Kutsutaan joka frame (60 FPS) pelisilmukasta
    // Käsittelee kiekon tilan mukaan: spinning → slowing → bouncing → stopped
    update() {
      if (this.state === "idle") return; // Ei tee mitään jos kiekko ei pyöri

      // ===== VAIHE 1: KIIHTYMIS-VAIHE =====
      // Nopeutetaan kiekkoa kunnes saavutetaan tavoitenopeus
      if (this.state === "spinning") {
        if (this.speed < this.targetSpeed) this.speed += 2; // Kiihdytä +2 pikseliä/frame
        if (this.stopDelay > 0) this.stopDelay--;           // Vähennä viivettä joka frame
        else this.state = "slowing";                        // Aloita hidastus kun viive = 0
      }

      // ===== VAIHE 2: HIDASTUS-VAIHE =====
      // Vähennetään nopeutta eksponentiaalisesti kunnes pysähdytään
      if (this.state === "slowing") {
        // Hidastuskerroin määrää kuinka nopeasti kiekko pysähtyy
        // Pienempi arvo = nopeampi pysähtyminen (0.88 < 0.92 < 0.95)
        const slowDownFactor = spinSpeed === 'slow' ? 0.88 : spinSpeed === 'medium' ? 0.92 : 0.95;
        this.speed *= slowDownFactor; // Kerro nopeus kertoimella (eksponentiaalinen hidastus)

        // Kun nopeus on riittävän pieni, siirrytään bounce-vaiheeseen
        if (this.speed < 2.5) {
          this.state = "bouncing";  // Siirry bouncing-tilaan (pieni pomppuefekti)
          this.speed = 0;           // Pysäytä normaali scrollaus
          this.offset = 0;          // Nollaa scroll-offset
          this.bounceOffset = 0;    // Aloita bounce-offset nollasta
          this.bounceSpeed = 8;     // Pieni alkubounce 8px alaspäin (aiemmin 0 = ei bounceta)
          
          // Soita "chunk" pysähtymisääni
          playSound('stop');
          
          // Soita rumpuisku musiikin tahtiin (v1.0.9 music integration)
          playDrumHit();
        }
      }

      // ===== VAIHE 3: BOUNCE-VAIHE =====
      // Pieni pomppuefekti pysähdyksen jälkeen (palautettu v1.3.1)
      // Luo visuaalisen "painon tunteen" kun kiekko pysähtyy
      if (this.state === "bouncing") {
        this.bounceSpeed *= 0.85;  // Vaimennus 85% per frame (nopeampi kuin aiemmin 0.75)
        this.bounceOffset += this.bounceSpeed; // Lisää bounce-offset (liikkuu alaspäin)
        
        // Kun bounce on riittävän pieni, kiekko on lopullisesti pysähtynyt
        if (Math.abs(this.bounceSpeed) < 0.3) {
          this.state = "stopped";  // Lopullinen pysähtynyt tila
          this.bounceOffset = 0;   // Nollaa bounce-offset
          this.bounceSpeed = 0;    // Nollaa bounce-nopeus
        }
      }

      // ===== VAIHE 4: LIIKE-LASKENTA =====
      // Siirrytään alaspäin jos nopeus > 0 (vain spinning/slowing-tiloissa)
      if (this.speed > 0) {
        this.offset += this.speed; // Lisätään offsettia (scrollaus alaspäin)

        // Jos offset ylittää yhden symbolin korkeuden, symboli on "scrollannut ulos"
        // ja tarvitsemme uuden symbolin scrollaamaan sisään ylhäältä
        if (this.offset >= ROW_HEIGHT) {
          this.offset = 0;                    // Nollaa offset (aloitetaan uuden symbolin scrollaus)
          reelData[this.index] = randomSymbol(this.index); // Aseta uusi satunnainen symboli tälle kiekolle
          // HUOM: Välitetään kiekon indeksi randomSymbol():lle koska keskikiekko (6) käyttää eri painotuksia (Wild 55%)
        }
      }
    } // update() loppu

    // ===== PIIRRÄ KIEKON SYMBOLI NÄYTÖLLE =====
    // Kutsutaan joka frame päivitetyn tilan jälkeen
    // Luo uuden Sprite-objektin ja lisää sen PixiJS näyttöön
    draw() {
      const stage = this.container; // Kiekon PixiJS Container
      stage.removeChildren(); // Poista vanhat spritet (estää päällekkäisyydet)

      // Hae tämän kiekon symboli reelData-taulukosta
      const symbol = reelData[this.index];
      if (!symbol || !symbolTextures || !symbolTextures[symbol]) return; // Tarkista että symboli on olemassa

      // Hae symbolin tekstuuri (ladattu onMount-vaiheessa)
      const texture = symbolTextures[symbol];
      if (!texture) return; // Tarkista että tekstuuri on olemassa

      // Laske lopullinen Y-koordinaatti:
      // - offset: Scrollaus-siirtymä (0-ROW_HEIGHT kun pyörii)
      // - bounceOffset: Pieni pomppuefekti pysähdyksen jälkeen
      const y = this.offset + this.bounceOffset;

      // Luo uusi Sprite-objekti tälle symbolille
      const sprite = new Sprite(texture);
      sprite.width = symbolWidth;   // Aseta leveys (skaalattu oikeaan kokoon)
      sprite.height = symbolHeight; // Aseta korkeus (skaalattu oikeaan kokoon)
      sprite.x = 0;                // X-koordinaatti (suhteessa konttiin, aina 0)
      sprite.y = y;                // Y-koordinaatti (sisältää scrollaus + bounce offsetit)

      stage.addChild(sprite); // Lisää sprite Container:iin (näkyy ruudulla)
    } // draw() loppu
  } // Reel luokan loppu

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
  
  onMount(async () => {
    // ===== 1) PIXIJS SOVELLUKSEN LUONTI =====
    // Luo PixiJS Application joka hallinnoi koko peliä (stage, renderer, ticker)
    app = new Application();
    await app.init({
      width: CANVAS_WIDTH,     // Canvas leveys pikseleinä (1445px)
      height: CANVAS_HEIGHT,   // Canvas korkeus pikseleinä (1000px)
      backgroundAlpha: 0       // Läpinäkyvä tausta (taustakuva asetetaan CSS:llä)
    });

    // Liitä PixiJS canvas HTML-elementtiin (container-diviin)
    container.appendChild(app.canvas);
    
    // ===== 2) RESPONSIIVINEN SKAALAUS =====
    // Skaalataan peliä ikkunan koon mukaan mutta ei koskaan suuremmaksi kuin 100%
    const resizeGame = () => {
      const windowWidth = window.innerWidth;   // Selaimen ikkunan leveys
      const windowHeight = window.innerHeight; // Selaimen ikkunan korkeus
      const scaleX = windowWidth / CANVAS_WIDTH;   // Leveys-skaalauskertoin
      const scaleY = windowHeight / CANVAS_HEIGHT; // Korkeus-skaalauskertoin
      const newScale = Math.min(scaleX, scaleY, 1); // Valitse pienempi kerroin, max 1.0
      
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
  // PELISILMUKKA - Kutsutaan joka frame (60 FPS)
  // ===================================================================
  // Tämä on pelin "sydän" joka pyörii jatkuvasti
  // PixiJS ticker kutsuu tätä funktiota ~60 kertaa sekunnissa
  function update() {
    // Päivitä jokainen kiekko (liike, animaatiot)
    for (const r of reels) {
      r.update(); // Päivitä kiekon tila (spinning → slowing → bouncing → stopped)
      r.draw();   // Piirrä kiekko uudelleen (luo uuden Sprite-objektin)
    }
    
    // ===== VOITTOJEN TARKISTUS =====
    // Tarkistetaan voitot VAIN kerran per spin, kun kaikki kiekot ovat pysähtyneet
    // Ehdot:
    // 1) Voittoja ei ole vielä tarkistettu tälle spinille (winsCheckedForCurrentSpin === false)
    // 2) Voitto-popuppia ei näytetä (isShowingWin === false)
    // 3) Kaikki kiekot ovat tilassa "stopped"
    if (!isShowingWin && !winsCheckedForCurrentSpin && reels.every(r => r.state === "stopped")) {
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
        wins.forEach(win => {
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
    // ===== MUSIIKIN KÄYNNISTYS =====
    // Käynnistä taustamusiikki ensimmäisellä kierroksella (EI vapaapeleissä)
    if (!isFreeSpinMode && backgroundMusic && musicEnabled && !backgroundMusic.playing()) {
      backgroundMusic.play();
      console.log('🎵 Background music started on first spin');
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
    currentWins = [];  // Tyhjennä voittolista
    totalWin = 0;      // Nollaa kokonaisvoitto
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
      r.startSynchronized(i); // Jokainen kiekko pysähtyy eri aikaan (i = beatIndex)
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
    
    const winLabel = document.getElementById("winLabel");
    if (!winLabel) return;
    
    const face = winLabel.querySelector(".face");
    const depth = winLabel.querySelector(".depth");
    if (!face || !depth) return;
    
    winLabel.classList.add("rolling");
    const start = performance.now();
    const span = to - from;
    
    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
    
    function tick(now: number) {
      const t = Math.min(1, (now - start) / ms);
      const v = Math.round(from + span * easeOutCubic(t));
      const txt = "WIN " + v.toLocaleString("en-US");
      face.textContent = txt;
      depth.textContent = txt;
      
      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        winLabel.classList.remove("rolling");
        winLabel.classList.add("winHit");
        setTimeout(() => winLabel.classList.remove("winHit"), 450);
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
    balance += winAmount;      // Lisää voitto pelaajan saldoon
    totalWon += winAmount;     // Päivitä kokonaisvoitot (RTP-tilastot)
    
    // Animoi WIN-arvon nouseminen edellisestä arvosta uuteen
    const previousWin = lastWin;
    lastWin = winAmount;       // Tallenna viimeisin voitto (näytetään UI:ssa)
    
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
    isAutoPlaying = true;           // Aktivoi autoplay-tila
    autoPlayRoundsLeft = rounds;    // Aseta kierrosmäärä
    showAutoPlayMenu = false;       // Sulje autoplay-valikko
    executeAutoPlay();              // Aloita ensimmäinen kierros
  }

  // Pysäytä autoplay kesken kaiken
  function stopAutoPlay() {
    isAutoPlaying = false;          // Deaktivoi autoplay-tila
    autoPlayRoundsLeft = 0;         // Nollaa jäljellä olevat kierrokset
    isProcessingAutoPlay = false;   // Vapauta lukko (estää jumit)
    
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
      totalRounds = 0;           // Nollaa pelatut kierrokset
      totalWagered = 0;          // Nollaa panostettu määrä
      totalWon = 0;              // Nollaa voitettu määrä
      totalWins = 0;             // Nollaa voittojen määrä
      freeSpinsTriggerCount = 0; // Nollaa vapaaerätriggerit
      freeSpinsPlayedCount = 0;  // Nollaa pelatut vapaapelit
      totalVisibleSymbols = 0;   // Nollaa näkyvät symbolit
      totalEmptySlots = 0;       // Nollaa tyhjät ruudut
    }
  }
</script>

<!-- ================================================================ -->
<!-- HTML TEMPLATE - Pelin visuaalinen rakenne                        -->
<!-- ================================================================ -->
<!-- Tämä osio sisältää kaikki HTML-elementit joita peli käyttää:      -->
<!-- 1) Debug-paneeli (lataus/virhetilanteissa)                        -->
<!-- 2) Voitto-popup (näyttää voitot ja kertoimet)                     -->
<!-- 3) Paytable-popup (näyttää symbolien maksuarvot)                  -->
<!-- 4) Vapaaerä-lopetus-popup (vapaaerän yhteisvoitto)                -->
<!-- 5) Pääkontti (PixiJS canvas + UI-kontrollit)                      -->
<!-- 6) Control Panel (panos, autoplay, spin-nappi)                    -->
<!-- 7) Tilastopaneeli (RTP, voitot, kierrokset)                       -->
<!-- 8) Musiikkikontrollit (play/pause/volume)                         -->
<!-- ================================================================ -->

<!-- ===== 1) DEBUG-PANEELI ===== -->
<!-- Näytetään vain jos ladataan assetteja tai tapahtuu virhe -->
<!-- Näyttää latausstatuksen, virheilmoitukset ja debug-lokin -->
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

<!-- ===== 2) VOITTO-POPUP ===== -->
<!-- Näytetään kun totalWin > 0 JA isShowingWin === true -->
<!-- Näyttää voiton määrän, voittoyhdistelmät ja mahdollisen kertoimet -->
<!-- Sulkeutuu automaattisesti autoplayn aikana (1.5s) tai manuaalisesti -->
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
      {totalWin.toFixed(2)} pistettä
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

<!-- ===== 3) PAYTABLE-POPUP ===== -->
<!-- Näyttää kaikkien symbolien maksuarvot ja erikoissymboleiden selitykset -->
<!-- Avataan "💰 PAYTABLE" -napista, suljetaan "Sulje"-napista -->
<!-- Skaalautuu automaattisesti gameScale-muuttujan mukaan -->
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

<!-- ===== 4) VAPAAERÄ-LOPETUS-POPUP ===== -->
<!-- Näytetään kun vapaaeräjakso päättyy (freeSpinsRemaining === 0) -->
<!-- Näyttää vapaaerän aikana voitetun kokonaissumman -->
<!-- "JATKA PERUSPELIIN" -nappi palauttaa peruspelitilaan ja vaihtaa musiikin -->
{#if showFreeSpinsEndPopup}
  <div style="
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
  ">
    <div style="
      background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
      color: white;
      padding: 40px;
      border-radius: 20px;
      text-align: center;
      border: 3px solid #ffd700;
      box-shadow: 0 0 30px rgba(255, 215, 0, 0.5);
      max-width: 500px;
      font-family: Arial, sans-serif;
    ">
      <h1 style="
        margin: 0 0 20px 0;
        font-size: 2.5em;
        color: #ffd700;
        text-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
      ">
        🎰 VAPAAPELIT PÄÄTTYIVÄT! 🎰
      </h1>
      
      <div style="
        font-size: 1.2em;
        margin: 20px 0;
        color: #aaa;
      ">
        Voitit yhteensä:
      </div>
      
      <div style="
        font-size: 3em;
        font-weight: bold;
        color: #00ff00;
        text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        margin: 20px 0;
      ">
        {freeSpinsEndAmount.toFixed(2)}
      </div>
      
      <button 
        on:click={() => { 
          showFreeSpinsEndPopup = false;
          isFreeSpinMode = false;
          freeSpinsTotalWon = 0;
          freeSpinsEndAmount = 0;
          
          // Palauta peruspelin musiikki
          switchMusic();
        }}
        on:mouseenter={(e) => {
          e.currentTarget.style.transform = 'scale(1.05)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(255, 215, 0, 0.6)';
        }}
        on:mouseleave={(e) => {
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
<div style="
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: transparent;
">
  <div style="
    position: relative;
    width: {CANVAS_WIDTH * gameScale}px;
    height: {CANVAS_HEIGHT * gameScale}px;
  ">
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

      <!-- ===== 6) CONTROL PANEL ===== -->
      <!-- Pelin pääkontrollit näytön alareunassa -->
      <!-- Sisältää: Panos-kontrollit, Balance, Play-nappi, Autoplay, Spin Speed, Win-näyttö, Menu -->
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

<!-- Autoplay valikko (näkyy kun showAutoPlayMenu = true) -->
{#if showAutoPlayMenu}
  <div style="
    position: absolute;
    bottom: {(CONTROL_PANEL_HEIGHT + 20) * gameScale}px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.95);
    padding: {20 * gameScale}px;
    border-radius: {15 * gameScale}px;
    border: {3 * gameScale}px solid #0088ff;
    box-shadow: 0 {8 * gameScale}px {30 * gameScale}px rgba(0, 136, 255, 0.6);
    z-index: 2000;
    min-width: {250 * gameScale}px;
  ">
    <div style="color: white; font-weight: bold; margin-bottom: {15 * gameScale}px; text-align: center; font-size: {18 * gameScale}px;">
      🔄 Select Rounds
    </div>
    <button
      on:click={() => { startAutoPlay(10); showAutoPlayMenu = false; }}
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
      on:click={() => { startAutoPlay(25); showAutoPlayMenu = false; }}
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
      on:click={() => { startAutoPlay(50); showAutoPlayMenu = false; }}
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
      on:click={() => { startAutoPlay(100); showAutoPlayMenu = false; }}
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
      on:click={() => { startAutoPlay(200); showAutoPlayMenu = false; }}
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
      on:click={() => { startAutoPlay(500); showAutoPlayMenu = false; }}
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
      on:click={() => { startAutoPlay(1000); showAutoPlayMenu = false; }}
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
      on:click={() => { startAutoPlay(5000); showAutoPlayMenu = false; }}
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
      on:click={() => { showAutoPlayMenu = false; }}
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
          on:click={() => {
            if (isAutoPlaying) {
              stopAutoPlay();
            }
            spin();
          }}
          style="
            width: {130 * gameScale}px;
            height: {130 * gameScale}px;
            background-image: url('{controlsPath}/Control_playbutton.png');
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
        on:click={() => { 
          if (isAutoPlaying) {
            stopAutoPlay();
          } else {
            showAutoPlayMenu = !showAutoPlayMenu;
          }
        }}
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
        title="{isAutoPlaying ? 'Stop Autoplay' : 'Autoplay'}"
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
    
    <!-- Spin Speed nappi (3 tilaa: slow/medium/fast) -->
    <div style="display: flex; flex-direction: column; align-items: center; gap: {5 * gameScale}px;">
      <button
        on:click={() => { 
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
        title="Spin Speed: {spinSpeed === 'slow' ? 'Slow' : spinSpeed === 'medium' ? 'Medium' : 'Fast'}"
      ></button>
      <!-- Viiva: harmaa = slow, puolikas vihreä = medium, koko vihreä = fast -->
      <img 
        src="{controlsPath}/{spinSpeed === 'slow' ? 'Control_bar_deselect.png' : spinSpeed === 'medium' ? 'Control_half_bar_select.png' : 'Control_bar_select.png'}" 
        alt="Speed bar"
        style="width: {50 * gameScale}px; height: auto;"
      />
    </div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: {5 * gameScale}px;">
      <div style="color: #00ff00; font-size: {12 * gameScale}px; font-weight: bold;">WIN</div>
      <div class="win3d winShine" id="winLabel" style="font-size: {20 * gameScale}px;">
        <span class="depth" aria-hidden="true">WIN {lastWin.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
        <span class="face">WIN {lastWin.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 0})}</span>
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

<!-- Debug-nappi (ulomman wrapper-divin sisällä, canvas-kontin ulkopuolella) -->
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
  winLevel={totalWin / betAmount >= 50 ? 'jackpot' : totalWin / betAmount >= 20 ? 'medium' : 'small'}
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
