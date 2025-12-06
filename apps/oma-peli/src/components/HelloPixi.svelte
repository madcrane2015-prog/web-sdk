<!--
  HelloPixi.svelte - Rockabilly Reels hedelmäpeli
  
  Tämä komponentti toteuttaa 5-kiekkoisen hedelmäpelin PixiJS:llä.
  Peli sisältää:
  - 5 kiekkoa (4 normaalikieppoa 3 rivillä, 1 keskikiekko 1 rivillä)
  - Taustakuvan (bg.jpg) joka näyttää fyysisen peliautomaatin
  - 10 erilaista symbolia (mukautetut .jpg kuvat)
  - SPIN-napin joka on sijoitettu taustakuvan vihreän napin päälle
  - Säädettävät parametrit kohdistusta ja kokoa varten
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
  
  .bet-btn-minus:hover {
    background: #ff6666 !important;
  }
  
  .bet-btn-plus:hover {
    background: #66ff66 !important;
  }
  
  .bet-btn-max:hover {
    background: #ffed4e !important;
  }
</style>
<script lang="ts">
  // Svelte lifecycle ja routing
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  
  // StakeEngine math configuration
  import config from "../game/config";
  
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
  
  // LOGO-asetukset (helppo säätää)
  const LOGO_SCALE = 0.8;     // Logon koko kerroin (1.0 = alkuperäinen koko)
  const LOGO_X = 50;          // Logon X-siirtymä keskikohdasta (+ = oikealle, - = vasemmalle)
  const LOGO_Y = 30;          // Logon Y-koordinaatti (+ = alaspäin, - = ylöspäin)
  
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
  
  const SYMBOL_URLS: Record<SymbolKey, string> = {
    a: `${symbolPath}/Blue_hotrod.jpg`,      // Sininen hotrod
    b: `${symbolPath}/Blue_jacket.jpg`,      // Sininen takki
    c: `${symbolPath}/Blue_rollers.jpg`,     // Siniset rullat
    d: `${symbolPath}/Blue_speakers.jpg`,    // Siniset kaiuttimet
    e: `${symbolPath}/Premium_blonde.jpg`,   // Premium blondi
    f: `${symbolPath}/Premium_brunette.jpg`, // Premium brunette
    g: `${symbolPath}/Premium_rocker.jpg`,   // Premium rocker
    h: `${symbolPath}/Red_bubblegum.jpg`,    // Punainen purukumi
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
  const MIN_BET = 1;
  const MAX_BET = 100;

  // Autoplay-toiminnallisuus
  let isAutoPlaying = $state(false);
  let autoPlayRoundsLeft = $state(0);
  let showAutoPlayMenu = $state(false);
  let winPopupShownAt = $state(0); // Timestamp kun popup tuli näkyviin
  let isProcessingAutoPlay = false; // Lukko estää päällekkäiset kutsut
  let autoPlayTimeoutId: number | null = null; // Tallenna timeout ID
  let winsCheckedForCurrentSpin = false; // Estää voittojen tarkistuksen useaan kertaan

  // RTP-seuranta
  let totalRounds = $state(0);
  let totalWagered = $state(0);
  let totalWon = $state(0);
  let currentRTP = $derived(totalWagered > 0 ? (totalWon / totalWagered * 100).toFixed(2) : "0.00");

  // ===== APUFUNKTIOT =====
  // Symbol weights for weighted random distribution
  const SYMBOL_WEIGHTS: Record<SymbolKey, number> = {
    // Red tier - 48% of symbols (cheap, frequent)
    'k': 0.18,   // Red_milkshake (18%)
    'j': 0.15,   // Red_fries (15%)
    'i': 0.15,   // Red_burger (15%)
    // Blue tier - 32% of symbols (mid)
    'c': 0.09,   // Blue_rollers (9%)
    'd': 0.09,   // Blue_speakers (9%)
    'b': 0.07,   // Blue_jacket (7%)
    'a': 0.07,   // Blue_hotrod (7%)
    // Premium tier - 12% of symbols (expensive, rare)
    'f': 0.04,   // Premium_brunette (4%)
    'e': 0.03,   // Premium_blonde (3%)
    'g': 0.025,  // Premium_rocker (2.5%)
    'l': 0.025,  // Premium_pin (2.5%)
    // Wild and empty (special handling)
    'h': 0.08,   // Red_bubblegum (Wild) - only on middle reel
    'emptyslot': 0
  };

  // Palauttaa satunnaisen symbolin tietylle kiekolle (weighted distribution)
  function randomSymbol(reelIndex: number): SymbolKey {
    // Reel 6 (keskikiekko) - VAIN emptyslot ja h (Red_bubblegum)
    if (reelIndex === 6) {
      const symbol = Math.random() < 0.5 ? 'emptyslot' : 'h';
      console.log(`Reel ${reelIndex} (MIDDLE): ${symbol}`);
      return symbol;
    }
    
    // Muut kiekot - weighted distribution (NO Wild on other reels)
    const rand = Math.random();
    let cumulative = 0;
    
    // Get symbols without Wild and empty
    const availableSymbols = SYMBOL_KEYS.filter(s => s !== 'emptyslot' && s !== 'h');
    
    // Calculate total weight
    const totalWeight = availableSymbols.reduce((sum, sym) => sum + SYMBOL_WEIGHTS[sym], 0);
    
    // Weighted selection
    for (const symbol of availableSymbols) {
      cumulative += SYMBOL_WEIGHTS[symbol] / totalWeight;
      if (rand < cumulative) {
        console.log(`Reel ${reelIndex} (WEIGHTED): ${symbol}`);
        return symbol;
      }
    }
    
    // Fallback (should never happen)
    return 'k';
  }

  // Luo 13 erillistä kiekkoa (jokaiselle ruudulle oma kiekko)
  function createReelData(): SymbolKey[] {
    const reelData: SymbolKey[] = [];
    for (let i = 0; i < TOTAL_REELS; i++) {
      reelData.push(randomSymbol(i)); // Välitä kiekon indeksi
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
    multiplier?: number; // Satunnainen kerroin (1x, 2x, 3x)
  };

  // Paytable - symbolien voitot 3x, 4x, 5x osumille (kertoimet x Bet)
  // Säädöt: Base RTP ~68%, Bonus RTP ~36%, Total ~104%
  // Halpojen symbolien määrä lisätty (48% Red, 32% Blue, 12% Premium)
  const SYMBOL_PAYTABLE: Record<SymbolKey, {3?: number, 4?: number, 5?: number}> = {
    // Red series - alhaisin arvo (PALJON ENEMMÄN NÄITÄ KIEKOILLA!)
    k: { 3: 0.15, 4: 0.5, 5: 2.4 },      // Red_milkshake (18% kiekoilla)
    j: { 3: 0.25, 4: 1, 5: 5 },          // Red_fries (15% kiekoilla)
    i: { 3: 0.25, 4: 1, 5: 5 },          // Red_burger (15% kiekoilla)
    // Blue series - keskiarvo
    c: { 3: 0.75, 4: 2.5, 5: 10 },       // Blue_rollers (9% kiekoilla)
    d: { 3: 0.75, 4: 2.5, 5: 10 },       // Blue_speakers (9% kiekoilla)
    b: { 3: 1, 4: 3.5, 5: 12.5 },        // Blue_jacket (7% kiekoilla)
    a: { 3: 1, 4: 3.5, 5: 12.5 },        // Blue_hotrod (7% kiekoilla)
    // Premium series - korkein arvo (VÄHEMMÄN NÄITÄ)
    f: { 3: 1.5, 4: 7.5, 5: 25 },        // Premium_brunette (4% kiekoilla)
    e: { 3: 2.5, 4: 10, 5: 37.5 },       // Premium_blonde (3% kiekoilla)
    g: { 3: 2.5, 4: 12.5, 5: 50 },       // Premium_rocker (2.5% kiekoilla)
    // Erikoissymbolit
    h: {},                               // Red_bubblegum (WILD - 50% middle reel, 0% others)
    l: { 3: 2.5, 4: 12.5, 5: 50 },       // Premium_pin (2.5% kiekoilla)
    emptyslot: {}                        // Tyhjä ruutu - ei voittoa
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
    if (scatterPositions.length >= 5) {
      const freeSpins = 8 + (scatterPositions.length - 5); // 5 scatters = 8 free spins, 12 scatters = 15 free spins
      console.log(`🎰 SCATTER WIN! ${scatterPositions.length} scatters = ${freeSpins} FREE SPINS!`);
      
      // Scatter ei maksa voittoa, vain free spins (voit lisätä tämän myöhemmin)
      wins.push({
        symbol: 'l',
        count: scatterPositions.length,
        payout: 0, // Scatterit eivät maksa rahaa, vain free spinsejä
        positions: scatterPositions
      });
    }
    
    // 2. Rakenna grid symboleista (5 saraketta x 3 riviä, keskisarake vain 1 rivi)
    const grid: SymbolKey[][] = [
      [reelData[0], reelData[1], reelData[2]],        // Sarake 0 (vasen)
      [reelData[3], reelData[4], reelData[5]],        // Sarake 1
      [reelData[6]],                                   // Sarake 2 (keskikiekko, vain 1 symboli)
      [reelData[7], reelData[8], reelData[9]],        // Sarake 3
      [reelData[10], reelData[11], reelData[12]]      // Sarake 4 (oikea)
    ];
    
    // 3. Etsi kaikki 81-ways voitot
    // Ways = kaikki mahdolliset polut vasemmalta oikealle
    // 3x3x1x3x3 = 81 mahdollista polkua
    
    // Käy läpi kaikki mahdolliset polut
    const allPaths: number[][] = [];
    
    // Generoi kaikki 81 polkua
    for (let r0 = 0; r0 < 3; r0++) {           // Sarake 0: 3 riviä
      for (let r1 = 0; r1 < 3; r1++) {         // Sarake 1: 3 riviä
        for (let r2 = 0; r2 < 1; r2++) {       // Sarake 2: 1 rivi (keskikiekko)
          for (let r3 = 0; r3 < 3; r3++) {     // Sarake 3: 3 riviä
            for (let r4 = 0; r4 < 3; r4++) {   // Sarake 4: 3 riviä
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
    // Ryhmitellään voitot symbolin ja pituuden mukaan laskemista varten
    const winCounts = new Map<string, {symbol: SymbolKey, length: number, lineCount: number, examplePath: number[]}>();
    
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
      
      // Laske kuinka monta peräkkäistä symbolia (winSymbol tai wild) vasemmalta
      let matchLength = 0;
      
      for (let i = 0; i < symbols.length; i++) {
        const currentSymbol = symbols[i];
        
        // Hyväksy vain winSymbol tai wild (h)
        if (currentSymbol === winSymbol || currentSymbol === 'h') {
          matchLength++;
        } else {
          break; // Katko heti kun tulee jotain muuta
        }
      }
      
      // Tarkista onko vähintään 3 symbolia (voittoon tarvitaan 3, 4 tai 5)
      if (matchLength >= 3) {
        // Laske tämä voittolinja
        const winKey = `${winSymbol}-${matchLength}`;
        const existing = winCounts.get(winKey);
        if (existing) {
          existing.lineCount++;
        } else {
          winCounts.set(winKey, {
            symbol: winSymbol,
            length: matchLength,
            lineCount: 1,
            examplePath: path.slice(0, matchLength)
          });
        }
      }
    }
    
    // Muunna voittolinjat voittoiksi
    // 81-ways: Maksetaan VAIN KERRAN per symboli-yhdistelmä (ei per way)
    const foundWinCombos: WinResult[] = [];
    
    for (const [key, winData] of winCounts.entries()) {
      const payoutMultiplier = SYMBOL_PAYTABLE[winData.symbol]?.[winData.length as 3 | 4 | 5];
      
      if (payoutMultiplier !== undefined && payoutMultiplier > 0) {
        // Maksetaan vain kerran riippumatta ways-määrästä
        const finalPayout = payoutMultiplier * betAmount;
        
        console.log(`Win: ${winData.length}x ${winData.symbol} (found on ${winData.lineCount} ways) = ${finalPayout}`);
        
        foundWinCombos.push({
          symbol: winData.symbol,
          count: winData.length,
          payout: finalPayout,
          positions: winData.examplePath
        });
      }
    }
    
    // Lisää kaikki löydetyt voitot
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
      this.targetSpeed = 35;     // Aseta tavoitenopeus
      this.stopDelay = delay;    // Aseta pysäytysviive (kiekot pysähtyvät eri aikoina)
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
        this.speed *= 0.92; // Eksponentiaalinen hidastus (8% vähenee joka frame)

        // Aloita bounce-efekti kun nopeus on riittävän pieni
        if (this.speed < 2.5) {
          this.state = "bouncing";   // Siirry bounce-tilaan
          this.bounceSpeed = -8;     // Alkuperäinen "tökkäys" ylöspäin
          this.bounceFrames = 0;     // Nollaa bounce-laskuri
          this.speed = 0;           // Pysäytä normaali liike
          this.offset = 0;          // Nollaa scroll-offset
          
          // Soita "chunk" pysähtymisääni
          playSound('stop');
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
    }    // ===== 3) ÄÄNIEN LATAUS =====
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
      console.log("Reel frames lisätty:", reelFramesSprite.width.toFixed(0), "x", reelFramesSprite.height.toFixed(0));
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

    // ===== 6) PELISILMUKAN KÄYNNISTYS =====
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
      const wins = checkWins();
      console.log(`Checking wins, found ${wins.length} wins`);
      
      if (wins.length > 0) {
        currentWins = wins;
        totalWin = wins.reduce((sum, win) => sum + win.payout, 0);
        
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
    }
  }

  // ===================================================================
  // SPIN NAPPI - Käynnistää uuden pyöräytyksen
  // ===================================================================
  function spin() {
    // Tarkista että on tarpeeksi saldoa
    if (balance < betAmount) {
      alert(`Not enough credits! Balance: ${balance}, Bet: ${betAmount}`);
      stopAutoPlay();
      return;
    }
    
    // Tyhjennä mahdollinen autoplay timeout
    if (autoPlayTimeoutId !== null) {
      clearTimeout(autoPlayTimeoutId);
      autoPlayTimeoutId = null;
    }
    
    // Vähennä panos saldosta
    balance -= betAmount;
    
    // Päivitä RTP-tilastot
    totalRounds++;
    totalWagered += betAmount;
    
    // Nollaa voittotiedot JA sulje popup
    currentWins = [];
    totalWin = 0;
    isShowingWin = false;
    winsCheckedForCurrentSpin = false; // Salli voittojen tarkistus uudelle spinille
    clearWinHighlights(); // Poista voittokorostukset
    
    reelData = createReelData();                     // Luo uudet symbolit 13 kiekolle
    reels.forEach((r, i) => r.start(60 + i * 10));  // Käynnistä kiekot porrastetusti
    // Viive kaava: 1. kiekko = 60 framea, 2. = 70, 3. = 80, jne.
    // Kaikki kiekot pyörivät vähintään 60 framea ennen hidastuksen alkua
    // Tämä luo kauniin "aaltomaisen" pysähtymisen
    
    // Soita "whirr" SPIN-ääni
    playSound('spin');
  }
  
  // Lisää voitto saldoon
  function addWinToBalance(winAmount: number) {
    balance += winAmount;
    totalWon += winAmount;
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
        {win.count} × {SYMBOL_NAMES[win.symbol]} = {win.payout} pistettä
        {#if win.multiplier && win.multiplier > 1}
          <span style="color: #ffd700; font-weight: bold;"> ({win.multiplier}x kerroin!)</span>
        {/if}
      </div>
    {/each}
    
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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.95);
    color: white;
    padding: 30px;
    border-radius: 15px;
    font-family: Arial, sans-serif;
    z-index: 3000;
    border: 3px solid #ffd700;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
  ">
    <h2 style="margin: 0 0 20px 0; text-align: center; color: #ffd700;">💰 PAYTABLE (81 WAYS)</h2>
    
    <div style="margin-bottom: 15px; text-align: center; color: #aaa;">
      Voitot muodostuvat 81 ways -järjestelmällä (vasemmalta oikealle)<br/>
      Vähintään 3 symbolia tarvitaan voittoon<br/>
      <span style="color: #ffd700;">Satunnainen 1x-3x kerroin lisätään voittoihin!</span>
    </div>
    
    <div style="display: grid; gap: 10px;">
      <!-- Premium Symbols -->
      <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ffd700;">
        <div style="font-size: 1.2em; font-weight: bold; color: #ffd700; margin-bottom: 5px;">👑 PREMIUM SYMBOLS</div>
        <div style="margin: 5px 0;">g (Rockabilly): 3x=5 | 4x=25 | 5x=100</div>
        <div style="margin: 5px 0;">e (Blonde): 3x=5 | 4x=20 | 5x=75</div>
        <div style="margin: 5px 0;">f (Brunette): 3x=3 | 4x=15 | 5x=50</div>
      </div>
      
      <!-- Blue Symbols -->
      <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #00bfff;">
        <div style="font-size: 1.2em; font-weight: bold; color: #00bfff; margin-bottom: 5px;">💎 BLUE SYMBOLS</div>
        <div style="margin: 5px 0;">a (Hot Rod): 3x=2 | 4x=7 | 5x=25</div>
        <div style="margin: 5px 0;">b (Jacket): 3x=2 | 4x=7 | 5x=25</div>
        <div style="margin: 5px 0;">c (Roller Skates): 3x=1.5 | 4x=5 | 5x=20</div>
        <div style="margin: 5px 0;">d (Microphone): 3x=1.5 | 4x=5 | 5x=20</div>
      </div>
      
      <!-- Red Symbols -->
      <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff6666;">
        <div style="font-size: 1.2em; font-weight: bold; color: #ff6666; margin-bottom: 5px;">🎵 RED SYMBOLS</div>
        <div style="margin: 5px 0;">i (Burger): 3x=0.5 | 4x=2 | 5x=10</div>
        <div style="margin: 5px 0;">j (Fries): 3x=0.5 | 4x=2 | 5x=10</div>
        <div style="margin: 5px 0;">k (Milkshake): 3x=0.3 | 4x=1 | 5x=5</div>
      </div>
      
      <!-- Special Symbols -->
      <div style="background: rgba(255, 255, 255, 0.1); padding: 10px; border-radius: 8px; border-left: 4px solid #ff00ff;">
        <div style="font-size: 1.2em; font-weight: bold; color: #ff00ff; margin-bottom: 5px;">⭐ SPECIAL SYMBOLS</div>
        <div style="margin: 5px 0;">h (WILD) - Korvaa kaikki muut symbolit (paitsi Scatter)</div>
        <div style="margin: 5px 0;">l (SCATTER) - 5-12 symbolia = 8-15 FREE SPINS</div>
      </div>
    </div>
    
    <div style="margin-top: 20px; text-align: center; font-size: 0.9em; color: #aaa;">
      Kaikki voitot kerrotaan panoksella (Bet) | Satunnainen 1x-3x kerroin lisätään
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

<!-- PixiJS canvas sijoitetaan tähän div-elementtiin -->
<div bind:this={container}></div>

<!-- Credit ja Bet näyttö (oikeassa yläkulmassa) -->
<div style="
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.85);
  color: #ffd700;
  padding: 15px 20px;
  border-radius: 10px;
  font-family: 'Courier New', monospace;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid #ffd700;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.5);
  z-index: 1500;
  min-width: 180px;
">
  <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
    <span style="color: #fff;">CREDITS:</span>
    <span style="color: #ffd700;">{balance.toLocaleString()}</span>
  </div>
  <div style="display: flex; justify-content: space-between; border-top: 1px solid #555; padding-top: 8px;">
    <span style="color: #fff;">BET:</span>
    <span style="color: #00ff00;">{betAmount}</span>
  </div>
</div>

<!-- Bet kontrollit (vasemmassa alakulmassa) -->
<div style="
  position: absolute;
  bottom: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.85);
  padding: 15px;
  border-radius: 10px;
  border: 2px solid #00ff00;
  z-index: 1500;
">
  <div style="color: white; font-size: 14px; margin-bottom: 10px; text-align: center; font-weight: bold;">
    BET CONTROLS
  </div>
  <div style="display: flex; gap: 10px; align-items: center;">
    <button
      on:click={decreaseBet}
      style="
        padding: 8px 15px;
        background: #ff4444;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      "
      class="bet-btn-minus"
    >
      -
    </button>
    
    <div style="
      color: #00ff00;
      font-family: 'Courier New', monospace;
      font-size: 20px;
      font-weight: bold;
      min-width: 60px;
      text-align: center;
      background: rgba(0, 255, 0, 0.1);
      padding: 5px 10px;
      border-radius: 5px;
    ">
      {betAmount}
    </div>
    
    <button
      on:click={increaseBet}
      style="
        padding: 8px 15px;
        background: #44ff44;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        font-weight: bold;
        transition: background 0.2s;
      "
      class="bet-btn-plus"
    >
      +
    </button>
    
    <button
      on:click={maxBet}
      style="
        padding: 8px 12px;
        background: #ffd700;
        color: #000;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-size: 14px;
        font-weight: bold;
        transition: background 0.2s;
      "
      class="bet-btn-max"
    >
      MAX
    </button>
  </div>
</div>

<!-- Paytable-nappi oikeassa reunassa credit-näytön alla -->
<button
  on:click={() => { showPaytable = !showPaytable; }}
  style="
    position: absolute;
    top: 130px;
    right: 20px;
    padding: 10px 15px;
    background-color: rgba(255, 215, 0, 0.3);
    border: 2px solid rgba(255, 215, 0, 0.7);
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    color: white;
    text-shadow: 0 0 5px rgba(0,0,0,0.8);
    z-index: 1000;
    min-width: 180px;
  "
>
  💰 PAYTABLE
</button>

<!-- RTP Debug näyttö (vasemmassa yläkulmassa) -->
<div style="
  position: absolute;
  top: 20px;
  left: 20px;
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
  <div style="font-weight: bold; font-size: 16px; margin-bottom: 10px; color: #ffd700; text-align: center;">
    📊 RTP MONITOR
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
</div>

<!-- Autoplay nappi ja menu (oikeassa alakulmassa) -->
<div style="
  position: absolute;
  bottom: 20px;
  right: 20px;
  z-index: 1500;
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
<button
  on:click={() => { soundEnabled = !soundEnabled; }}
  style="
    position: absolute;
    top: 10px;
    right: 10px;
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

<!-- 
  Läpinäkyvä SPIN-nappi taustakuvan vihreän napin päälle
  
  Nappi on positioned absolutely ja sijoitettu täsmälleen taustakuvan
  vihreän SPIN-napin päälle. Se on osittain läpinäkyvä koordinaattien
  varmistamiseksi ja helpon klikkauksen mahdollistamiseksi.
-->
<button
  on:click={spin}
  style="
    position: absolute;
    left: {BUTTON_X}px;                    /* X-koordinaatti (säädettävissä) */
    top: {BUTTON_Y}px;                     /* Y-koordinaatti (säädettävissä) */
    width: 60px;                           /* Napin leveys */
    height: 60px;                          /* Napin korkeus */
    border-radius: 50%;                    /* Pyöreä muoto */
    background-color: rgba(0,255,0,0.2);   /* Vihreä, läpinäkyvä */
    border: 2px solid rgba(0,255,0,0.5);   /* Vihreä reunus */
    cursor: pointer;                       /* Käsi-kursori hover:ssa */
    z-index: 1000;                         /* Varmista että nappi on päällimmäisenä */
    font-size: 0;                          /* Piilota teksti */
  "
  title="SPIN"
>
  <!-- Nappi on osittain näkyvä koordinaattien varmistamiseksi -->
</button>
