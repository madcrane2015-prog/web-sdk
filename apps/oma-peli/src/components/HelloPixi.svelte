<script lang="ts">
  import { onMount } from "svelte";
  import { base } from "$app/paths";
  import {
    Application,
    Graphics,
    Container,
    Sprite,
    Texture
  } from "pixi.js";

  const COLS = 5;
  const ROWS = 3;

  // Symbol dimensions to fit background reels properly
  const symbolWidth = 100;
  const symbolHeight = Math.round(symbolWidth * (700 / 760)); // ≈ 92px
  const cellSize = symbolWidth; // Keep for compatibility
  const gap = 10;
  const ROW_HEIGHT = symbolHeight + gap;

  // Avaimet symboleille
  const SYMBOL_KEYS = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"] as const;
  type SymbolKey = (typeof SYMBOL_KEYS)[number];

  // URL jokaiselle symbolille (static/symbols/...)
  const SYMBOL_URLS: Record<SymbolKey, string> = {
    a: `${base}/symbols/marska.jpg`,
    b: `${base}/symbols/elvar.jpg`,
    c: `${base}/symbols/lucy.jpg`,
    d: `${base}/symbols/hotrod.jpg`,
    e: `${base}/symbols/bubblegum.jpg`,
    f: `${base}/symbols/burger.jpg`,
    g: `${base}/symbols/single.jpg`,
    h: `${base}/symbols/microfones.jpg`,
    i: `${base}/symbols/shake.jpg`,
    j: `${base}/symbols/fries.jpg`
  };

  // Background image URL
  const BACKGROUND_URL = `${base}/symbols/bg.jpg`;

  // Tänne ladatut tekstuurit
  let symbolTextures: Record<SymbolKey, Texture> | null = null;
  let backgroundTexture: Texture | null = null;

  function randomSymbol(): SymbolKey {
    return SYMBOL_KEYS[Math.floor(Math.random() * SYMBOL_KEYS.length)];
  }

  function createGrid(): SymbolKey[][] {
    const grid: SymbolKey[][] = [];
    for (let c = 0; c < COLS; c++) {
      const col: SymbolKey[] = [];
      // Middle reel (index 2) only has 1 symbol, others have 3
      const rowsForThisCol = c === 2 ? 1 : ROWS;
      for (let r = 0; r < rowsForThisCol; r++) {
        col.push(randomSymbol());
      }
      grid.push(col);
    }
    return grid;
  }

  let gridData: SymbolKey[][] = createGrid();

  let container: HTMLDivElement;
  let app: Application;
  let reels: Reel[] = [];

  // ----------------------------------------------------------
  // REEL CLASS
  // ----------------------------------------------------------
  class Reel {
    index: number;
    container: Container;
    offset = 0;
    speed = 0;
    targetSpeed = 30;
    state: "idle" | "spinning" | "slowing" | "stopped" = "idle";
    stopDelay = 0;

    constructor(index: number, container: Container) {
      this.index = index;
      this.container = container;
    }

    start(delay: number) {
      this.state = "spinning";
      this.speed = 0;
      this.targetSpeed = 35;
      this.stopDelay = delay;
    }

    update() {
      if (this.state === "idle") return;

      // Kiihtyminen
      if (this.state === "spinning") {
        if (this.speed < this.targetSpeed) this.speed += 2;
        if (this.stopDelay > 0) this.stopDelay--;
        else this.state = "slowing";
      }

      // Hidastus
      if (this.state === "slowing") {
        this.speed *= 0.92;

        if (this.speed < 2.5) {
          this.speed = 0;
          this.state = "stopped";
          this.offset = 0;
        }
      }

      // Liike
      if (this.speed > 0) {
        this.offset += this.speed;

        if (this.offset >= ROW_HEIGHT) {
          this.offset = 0;
          gridData[this.index].unshift(randomSymbol());
          gridData[this.index].pop();
        }
      }
    }

    draw() {
      const stage = this.container;
      stage.removeChildren();

      // Get number of rows for this specific reel
      const rowsForThisReel = this.index === 2 ? 1 : ROWS;
      const currentGridColumn = gridData[this.index];

      for (let r = 0; r < rowsForThisReel; r++) {
        const symKey = currentGridColumn[r];
        if (!symKey) continue; // Skip if no symbol for this row
        
        const y = r * ROW_HEIGHT + this.offset;

        // Jos tekstuureja ei ole vielä ladattu, älä piirrä kuvaa
        if (!symbolTextures) continue;

        const texture = symbolTextures[symKey];
        if (!texture) continue;

        const sprite = new Sprite(texture);
        sprite.width = symbolWidth;
        sprite.height = symbolHeight;
        sprite.x = 0;
        sprite.y = y;

        stage.addChild(sprite);
      }
    }
  }

  // ----------------------------------------------------------
  // PIXI INIT
  // ----------------------------------------------------------
  onMount(async () => {
    // 1) Luodaan ja init App
    app = new Application();
    await app.init({
      width: 800,
      height: 450,
      background: "#001a33"
    });

    container.appendChild(app.canvas);

    // 2) Ladataan kuvat VANHALLA HYVÄLLÄ Image()-tavalla
    const textures: Record<SymbolKey, Texture> = {} as any;

    // Load background image first
    console.log("Ladataan taustakuva:", BACKGROUND_URL);
    const bgImg = new Image();
    bgImg.src = BACKGROUND_URL;
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
    backgroundTexture = Texture.from(bgImg);
    console.log("Taustakuvan tekstuuri luotu:", backgroundTexture);

    // Load symbol textures
    for (const key of SYMBOL_KEYS) {
      const url = SYMBOL_URLS[key];
      console.log("Ladataan HTMLImage-kuva:", key, url);

      const img = new Image();
      img.src = url;

      // Odotetaan että kuva latautuu
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

      // Tehdään Pixi-tekstuurit HTMLImage:stä
      textures[key] = Texture.from(img);
      console.log("Tekstuuri luotu:", key, textures[key]);
    }

    symbolTextures = textures;
    
    console.log("Taustakuva ladattu, tekstuuri:", backgroundTexture);

    // Add background sprite FIRST so it stays behind everything
    if (backgroundTexture) {
      const bgSprite = new Sprite(backgroundTexture);
      // Scale to fit canvas properly
      const scaleX = app.renderer.width / bgSprite.texture.width;
      const scaleY = app.renderer.height / bgSprite.texture.height;
      const scale = Math.min(scaleX, scaleY); // Fit entire image
      bgSprite.scale.set(scale);
      // Center the background properly
      bgSprite.x = (app.renderer.width - bgSprite.width) / 2;
      bgSprite.y = (app.renderer.height - bgSprite.height) / 2;
      app.stage.addChild(bgSprite);
      console.log("Taustakuva lisätty stageen:", bgSprite.width, "x", bgSprite.height, "position:", bgSprite.x, bgSprite.y);
    } else {
      console.error("Taustakuva ei ole saatavilla!");
    }

    // 3) Rullien mitat ja sijainnit taustakuvan perusteella
    const REEL_WIDTH = symbolWidth;
    
    // Eri korkeudet eri rullille - keskimmäinen rulla (index 2) näyttää vain yhden symbolin
    const getReelHeight = (reelIndex: number) => {
      return reelIndex === 2 ? symbolHeight : ROWS * ROW_HEIGHT - gap;
    };
    
    // Keskimmäisen rullan Y-korjaus että se on samassa linjassa muiden keskikohdan kanssa
    const getAdjustedY = (reelIndex: number, baseY: number) => {
      if (reelIndex === 2) {
        // Keskimmäinen rulla: siirretään ylöspäin niin että sen keskikohta on muiden keskikohdassa
        const otherReelsCenter = (ROWS * ROW_HEIGHT - gap) / 2;
        const thisReelCenter = symbolHeight / 2;
        return baseY + otherReelsCenter - thisReelCenter;
      }
      return baseY;
    };

    // Rullien sijainnit taustakuvan rullien kohdalla (mitattu kuvan perusteella)
    const reelPositions = [
      { x: 120, y: 180 },  // Vasen rulla
      { x: 240, y: 180 },  // Toinen rulla  
      { x: 360, y: 180 },  // Keskimmäinen rulla (samalla tasolla kuin muut)
      { x: 480, y: 180 },  // Neljäs rulla
      { x: 600, y: 180 }   // Oikea rulla
    ];

    // 4) LUODAAN RULLAT + MASKIT
    reels = [];

    for (let i = 0; i < COLS; i++) {
      const reelCont = new Container();
      const reelHeight = getReelHeight(i);
      
      reelCont.x = reelPositions[i].x;
      reelCont.y = getAdjustedY(i, reelPositions[i].y);

      // Add semi-transparent background for reel area
      const reelBg = new Graphics()
        .rect(0, 0, REEL_WIDTH, reelHeight)
        .fill({ color: 0x000000, alpha: 0.3 });
      reelBg.x = reelCont.x;
      reelBg.y = reelCont.y;
      app.stage.addChild(reelBg);

      const mask = new Graphics()
        .rect(0, 0, REEL_WIDTH, reelHeight)
        .fill(0xffffff);

      mask.x = reelCont.x;
      mask.y = reelCont.y;

      reelCont.mask = mask;

      app.stage.addChild(mask);
      app.stage.addChild(reelCont);

      reels.push(new Reel(i, reelCont));
    }

    // 5) Ticker päälle
    app.ticker.add(update);
  });

  // ----------------------------------------------------------
  // GAME LOOP
  // ----------------------------------------------------------
  function update() {
    for (const r of reels) {
      r.update();
      r.draw();
    }
  }

  // ----------------------------------------------------------
  // SPIN BUTTON
  // ----------------------------------------------------------
  function spin() {
    gridData = createGrid();
    reels.forEach((r, i) => r.start(i * 15));
  }
</script>

<div bind:this={container}></div>

<!-- Läpinäkyvä nappi taustakuvan vihreän SPIN-napin päällä -->
<button
  on:click={spin}
  style="
    position: absolute;
    left: 480px;
    top: 500px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    z-index: 1000;
    font-size: 0;
  "
  title="SPIN"
>
  <!-- Nappi on läpinäkyvä, taustakuvan vihreä ympyrä näkyy -->
</button>
