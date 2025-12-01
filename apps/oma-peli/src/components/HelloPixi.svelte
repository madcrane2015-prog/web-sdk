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
<script lang="ts">
  // Svelte lifecycle ja routing
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  
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
  
  // Canvas (peliruudun) koko
  const CANVAS_WIDTH = 800;   // Leveys pikseleinä
  const CANVAS_HEIGHT = 800;  // Korkeus pikseleinä (neliö muoto)
  
  // Kiekkojen koko ja sijainti
  const SCALE_MULTIPLIER = 1.25; // Symbolien koko kerroin (1.0 = normaali)
  const OFFSET_X = -10;       // Kaikkien kiekkojen X-siirtymä (+ = oikealle)
  const OFFSET_Y = 60;        // Kaikkien kiekkojen Y-siirtymä (+ = alaspäin)
  
  // SPIN-napin sijainti (asetetaan taustakuvan vihreän napin päälle)
  const BUTTON_X = 370;       // Napin X-koordinaatti
  const BUTTON_Y = 600;       // Napin Y-koordinaatti
  
  // Taustakuvan (bg.jpg) säädöt
  const BACKGROUND_Y_SHIFT = -40;  // Pystysiirtymä (+ = alaspäin, - = ylöspäin)
  const BACKGROUND_SCALE = 1.0;    // Koon kerroin (1.0 = normaali)
  const BACKGROUND_FIT_MODE = "heigth"; // Skaalaustyyppi: "width", "height", "min"
  // =====================================

  // Symbol dimensions to fit background reels properly
  const baseSymbolWidth = 100;
  const symbolWidth = Math.round(baseSymbolWidth * SCALE_MULTIPLIER);
  const symbolHeight = Math.round(symbolWidth * (700 / 760));
  const cellSize = symbolWidth; // Keep for compatibility
  const gap = 10;
  const ROW_HEIGHT = symbolHeight + gap;

  // Avaimet symboleille - kaikki uudet rockabilly-teemalliset symbolit
  const SYMBOL_KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"] as const;
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
    m: `${symbolPath}/Emptyslot.jpg`,        // Tyhjä ruutu (nyt mukana satunnaispelauksessa)
  };

  // Taustakuvan URL (fyysinen peliautomaatti)
  const BACKGROUND_URL = `${symbolPath}/bg.jpg`;
  
  // ===== ÄÄNIEFEKTIT =====
  // Äänitiedostojen URLit
  const SOUND_URLS = {
    spin: `${base}/sounds/spin.mp3`,     // SPIN-napin ääni (whirr)
    stop: `${base}/sounds/stop.mp3`,     // Kiekon pysähtymisääni (chunk)
    win: `${base}/sounds/win.mp3`        // Voittoääni (tulevaisuudessa)
  };
  
  // Äänien hallinta
  let soundEnabled = true;              // Voi käyttäjä halutessaan mykistää
  let audioElements: Record<string, HTMLAudioElement> = {};

  // ===== PELIN TILA JA MUUTTUJAT =====
  // Ladatut tekstuurit (kuvat muutettuna PixiJS muotoon)
  let symbolTextures: Record<SymbolKey, Texture> | null = null;
  let backgroundTexture: Texture | null = null;
  
  // Debug tila - näyttää lataustilanteen
  let loadingStatus = "Initializing...";
  let errorMessage = "";
  let debugInfo: string[] = [];

  // ===== APUFUNKTIOT =====
  // Palauttaa satunnaisen symbolin
  function randomSymbol(): SymbolKey {
    return SYMBOL_KEYS[Math.floor(Math.random() * SYMBOL_KEYS.length)];
  }

  // Luo 13 erillistä kiekkoa (jokaiselle ruudulle oma kiekko)
  function createReelData(): SymbolKey[] {
    const reelData: SymbolKey[] = [];
    for (let i = 0; i < TOTAL_REELS; i++) {
      reelData.push(randomSymbol());
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
  
  // Äänen toisto (jos äänet on käytössä)
  function playSound(soundKey: keyof typeof SOUND_URLS) {
    if (!soundEnabled || !audioElements[soundKey]) return;
    
    const audio = audioElements[soundKey];
    audio.currentTime = 0; // Palaa alkuun (jos jo soittaa)
    audio.play().catch(err => {
      console.warn('Äänen toisto epäonnistui:', soundKey, err);
    });
  }

  // Alkutilan pelidata (13 erillistä kiekkoa)
  let reelData: SymbolKey[] = createReelData();

  // PixiJS sovelluksen pääkomponentit
  let container: HTMLDivElement;  // HTML-elementti johon peli sijoitetaan
  let app: Application;           // Pelin pääsovellus
  let reels: Reel[] = [];        // Kaikki kiekot (13 kpl)

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
          reelData[this.index] = randomSymbol(); // Aseta uusi satunnainen symboli tälle kiekolle
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
      loadingStatus = "Loading background...";
      debugInfo.push(`Loading background: ${BACKGROUND_URL}`);
      
      // TAUSTAKUVAN LATAUS - lataa ensin Assets.cache:een, sitten luo tekstuuri
      await Assets.load([{alias: 'background', src: BACKGROUND_URL}]);
      backgroundTexture = Texture.from('background');
      console.log("✅ Background texture created:", backgroundTexture.width, "x", backgroundTexture.height);
      debugInfo.push("✅ Background loaded");
      
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
      
      // Laske ruudun sijainti näytöllä
      const baseX = 180 + col * (symbolWidth + gap);
      const baseY = 120 + row * (symbolHeight + gap);
      
      // Keskikiekko (indeksi 6) on hieman korkeammalla
      const adjustedY = reelIndex === 6 ? baseY + 55 : baseY;
      
      // Luo PixiJS kontti tälle kiekolle
      const reelCont = new Container();
      reelCont.x = baseX + OFFSET_X;
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
  }

  // ===================================================================
  // SPIN NAPPI - Käynnistää uuden pyöräytyksen
  // ===================================================================
  function spin() {
    reelData = createReelData();                     // Luo uudet symbolit 13 kiekolle
    reels.forEach((r, i) => r.start(60 + i * 10));  // Käynnistä kiekot porrastetusti
    // Viive kaava: 1. kiekko = 60 framea, 2. = 70, 3. = 80, jne.
    // Kaikki kiekot pyörivät vähintään 60 framea ennen hidastuksen alkua
    // Tämä luo kauniin "aaltomaisen" pysähtymisen
    
    // Soita "whirr" SPIN-ääni
    playSound('spin');
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

<!-- PixiJS canvas sijoitetaan tähän div-elementtiin -->
<div bind:this={container}></div>

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
