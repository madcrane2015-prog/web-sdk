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
    Texture        // Kuvatekstuurit
  } from "pixi.js";

  // ===== PELIN PERUSKONFIGURAATIO =====
  const COLS = 5; // Kiekkojen määrä vaakasuunnassa
  const ROWS = 3; // Rivien määrä per kiekko (paitsi keskimmäinen)

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

  // Avaimet symboleille
  const SYMBOL_KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"] as const;
  type SymbolKey = (typeof SYMBOL_KEYS)[number];

  // URL jokaiselle symbolille (static/symbols/...)
  const SYMBOL_URLS: Record<SymbolKey, string> = {
    a: `${base}/symbols/marska.jpg`,     // Mukautettu symboli
    b: `${base}/symbols/elvar.jpg`,      // Mukautettu symboli
    c: `${base}/symbols/lucy.jpg`,       // Mukautettu symboli
    d: `${base}/symbols/hotrod.jpg`,     // Mukautettu symboli
    e: `${base}/symbols/bubblegum.jpg`,  // Mukautettu symboli
    f: `${base}/symbols/burger.jpg`,     // Mukautettu symboli
    g: `${base}/symbols/single.jpg`,     // Mukautettu symboli
    h: `${base}/symbols/microfones.jpg`, // Mukautettu symboli
    i: `${base}/symbols/shake.jpg`,      // Mukautettu symboli
    j: `${base}/symbols/fries.jpg`       // Mukautettu symboli
  };

  // Taustakuvan URL (fyysinen peliautomaatti)
  const BACKGROUND_URL = `${base}/symbols/bg.jpg`;

  // ===== PELIN TILA JA MUUTTUJAT =====
  // Ladatut tekstuurit (kuvat muutettuna PixiJS muotoon)
  let symbolTextures: Record<SymbolKey, Texture> | null = null;
  let backgroundTexture: Texture | null = null;

  // ===== APUFUNKTIOT =====
  // Palauttaa satunnaisen symbolin a-j väliltä
  function randomSymbol(): SymbolKey {
    return SYMBOL_KEYS[Math.floor(Math.random() * SYMBOL_KEYS.length)];
  }

  // Luo uuden pelilaudan (5 saraketta, 3+1+3+3+3 symbolia)
  function createGrid(): SymbolKey[][] {
    const grid: SymbolKey[][] = [];
    for (let c = 0; c < COLS; c++) {
      const col: SymbolKey[] = [];
      // Keskimmäinen kiekko (index 2) näyttää vain 1 symbolin, muut 3
      const rowsForThisCol = c === 2 ? 1 : ROWS;
      for (let r = 0; r < rowsForThisCol; r++) {
        col.push(randomSymbol());
      }
      grid.push(col);
    }
    return grid;
  }

  // Alkutilan pelilauta (luodaan heti)
  let gridData: SymbolKey[][] = createGrid();

  // PixiJS sovelluksen pääkomponentit
  let container: HTMLDivElement;  // HTML-elementti johon peli sijoitetaan
  let app: Application;           // Pelin pääsovellus
  let reels: Reel[] = [];        // Kaikki kiekot (5 kpl)

  // ===================================================================
  // REEL LUOKKA - Yksittäisen kiekon toiminta
  // ===================================================================
  // Tämä luokka hallinnoi yhden kiekon pyörimistä ja symbolien näyttämistä
  class Reel {
    index: number;          // Kiekon numero (0-4, 0=vasen, 2=keski, 4=oikea)
    container: Container;   // PixiJS kontti johon symbolit piirretään
    offset = 0;            // Nykyinen scrollaus-offset (0 = normaali asema)
    speed = 0;             // Nykyinen pyörimisnopeus (pikseleitä per frame)
    targetSpeed = 30;      // Tavoitenopeus (saavutetaan kiihdytyksen jälkeen)
    state: "idle" | "spinning" | "slowing" | "stopped" = "idle"; // Kiekon tila
    stopDelay = 0;         // Kuinka monta framea odotetaan ennen hidastusta

    // Konstruktori: luo uuden kiekon
    constructor(index: number, container: Container) {
      this.index = index;      // Tallenna kiekon numero
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

      // HIDASTUS-VAIHE: vähennetään nopeutta kunnes pysähdytään
      if (this.state === "slowing") {
        this.speed *= 0.92; // Eksponentiaalinen hidastus (8% vähenee joka frame)

        // Pysähdytään kun nopeus on riittävän pieni
        if (this.speed < 2.5) {
          this.speed = 0;         // Nopeus nollaksi
          this.state = "stopped"; // Tila: pysähtynyt
          this.offset = 0;        // Nollaa offset (snap kohdilleen)
        }
      }

      // LIIKE-LASKENTA: siirrytään jos nopeus > 0
      if (this.speed > 0) {
        this.offset += this.speed; // Lisätään offsettia

        // Jos offset ylittää yhden rivin korkeuden, vieritä symboleja
        if (this.offset >= ROW_HEIGHT) {
          this.offset = 0;                              // Nollaa offset
          gridData[this.index].unshift(randomSymbol()); // Lisää uusi symboli ylään
          gridData[this.index].pop();                   // Poista viimeinen symboli
        }
      }
    }

    // Piirrä kiekon symbolit näytölle
    draw() {
      const stage = this.container;
      stage.removeChildren(); // Poista vanhat spritet

      // Selvitä tämän kiekon rivimäärä (keskikiekko 1, muut 3)
      const rowsForThisReel = this.index === 2 ? 1 : ROWS;
      const currentGridColumn = gridData[this.index]; // Nykyiset symbolit tässä kiekossa

      // Käy läpi kaikki rivit ja piirrä symbolit
      for (let r = 0; r < rowsForThisReel; r++) {
        const symKey = currentGridColumn[r];  // Hae symbolin avain (a-j)
        if (!symKey) continue;               // Ohita jos ei symbolia
        
        const y = r * ROW_HEIGHT + this.offset; // Laske Y-koordinaatti (+ offset pyörimistä varten)

        // Varmista että tekstuurit on ladattu
        if (!symbolTextures) continue;

        const texture = symbolTextures[symKey]; // Hae tekstuuri
        if (!texture) continue;                // Ohita jos tekstuuria ei löydy

        // Luo sprite ja aseta koko/sijainti
        const sprite = new Sprite(texture);
        sprite.width = symbolWidth;   // Aseta leveys
        sprite.height = symbolHeight; // Aseta korkeus
        sprite.x = 0;                // X-koordinaatti (suhteessa konttiin)
        sprite.y = y;                // Y-koordinaatti (sisältää offsetin)

        stage.addChild(sprite); // Lisää sprite näytölle
      }
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
    // Käytetään vanhaa Image() menetelmää varman toimivuuden takaamiseksi
    const textures: Record<SymbolKey, Texture> = {} as any;

    // TAUSTAKUVAN LATAUS
    console.log("Ladataan taustakuva:", BACKGROUND_URL);
    const bgImg = new Image();
    bgImg.src = BACKGROUND_URL;
    
    // Odotetaan että taustakuva latautuu
    await new Promise<void>((resolve, reject) => {
      bgImg.onload = () => {
        console.log("Taustakuva ladattu ok:", BACKGROUND_URL, bgImg.width, "x", bgImg.height);
        resolve();
      };
      bgImg.onerror = (err) => {
        console.error("Taustakuvan lataus epäonnistui:", BACKGROUND_URL, err);
        reject(err);
      };
    });
    
    // Luo PixiJS tekstuuri taustakuvasta
    backgroundTexture = Texture.from(bgImg);
    console.log("Taustakuvan tekstuuri luotu:", backgroundTexture);

    // SYMBOLIEN KUVIEN LATAUS
    for (const key of SYMBOL_KEYS) {
      const url = SYMBOL_URLS[key];
      console.log("Ladataan symboli:", key, url);

      const img = new Image();
      img.src = url;

      // Odotetaan että jokainen kuva latautuu
      await new Promise<void>((resolve, reject) => {
        img.onload = () => {
          console.log("Kuva ladattu ok:", key, url);
          resolve();
        };
        img.onerror = (err) => {
          console.error("Kuvan lataus epäonnistui:", key, url, err);
          reject(err);
        };
      });

      // Luo PixiJS tekstuuri HTML kuvasta
      textures[key] = Texture.from(img);
      console.log("Tekstuuri luotu:", key, textures[key]);
    }

    // Tallenna ladatut tekstuurit muuttujaan (käytettävissä koko komponentissa)
    symbolTextures = textures;
    // ===== 3) TAUSTAKUVAN ASETTELU =====
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

    // ===== 4) KIEKKOJEN MITAT JA SIJAINNIT =====
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

    for (let i = 0; i < COLS; i++) {
      // Luo PixiJS kontti tälle kiekolle
      const reelCont = new Container();
      const reelHeight = getReelHeight(i); // Hae kiekon korkeus
      
      // Aseta kiekon sijainti
      reelCont.x = reelPositions[i].x;
      reelCont.y = getAdjustedY(i, reelPositions[i].y);

      // Lisää läpinäkyvä tausta kiekon alueelle (debug/visualisointi)
      const reelBg = new Graphics()
        .rect(0, 0, REEL_WIDTH, reelHeight)      // Piirrrä suorakulmio
        .fill({ color: 0x000000, alpha: 0.3 }); // Musta, 30% läpinäkyvyys
      reelBg.x = reelCont.x;
      reelBg.y = reelCont.y;
      app.stage.addChild(reelBg);  // Lisää tausta näytölle

      // Luo maski joka rajaa kiekon näkyvän alueen (estaa ylimääräisten symbolien näkymisen)
      const mask = new Graphics()
        .rect(0, 0, REEL_WIDTH, reelHeight)  // Sama koko kuin kiekko
        .fill(0xffffff);                    // Valkoinen (maskin väri ei vaikuta)

      mask.x = reelCont.x;  // Sama sijainti kuin kiekko
      mask.y = reelCont.y;

      reelCont.mask = mask;  // Aseta maski kiekon kontille

      // Lisää maski ja kiekko näytölle
      app.stage.addChild(mask);     // Maski ensin
      app.stage.addChild(reelCont); // Sitten kiekko

      // Luo Reel-olio ja lisää listaan
      reels.push(new Reel(i, reelCont));
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
    gridData = createGrid();                        // Luo uudet symbolit
    reels.forEach((r, i) => r.start(i * 15));       // Käynnistä kiekot porrastetusti
    // Viive kaava: 1. kiekko = 0 framea, 2. = 15, 3. = 30, jne.
    // Tämä luo kauniin "aaltomaisen" pysähtymisen vasemmalta oikealle
  }
</script>

<!-- ================================================================ -->
<!-- HTML TEMPLATE - Pelin visuaalinen rakenne                        -->
<!-- ================================================================ -->

<!-- PixiJS canvas sijoitetaan tähän div-elementtiin -->
<div bind:this={container}></div>

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
