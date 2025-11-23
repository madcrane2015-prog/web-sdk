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

  // Symbol dimensions to maintain 760:700 aspect ratio
  const symbolWidth = 120;
  const symbolHeight = Math.round(symbolWidth * (700 / 760)); // ≈ 111px
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

  // Tänne ladatut tekstuurit
  let symbolTextures: Record<SymbolKey, Texture> | null = null;

  function randomSymbol(): SymbolKey {
    return SYMBOL_KEYS[Math.floor(Math.random() * SYMBOL_KEYS.length)];
  }

  function createGrid(): SymbolKey[][] {
    const grid: SymbolKey[][] = [];
    for (let c = 0; c < COLS; c++) {
      const col: SymbolKey[] = [];
      for (let r = 0; r < ROWS; r++) {
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

      for (let r = 0; r < ROWS; r++) {
        const symKey = gridData[this.index][r];
        const y = r * ROW_HEIGHT + this.offset;

        // Taustaruutu (näkyy aina)
        const box = new Graphics().rect(0, 0, symbolWidth, symbolHeight).fill(0xffff00);
        box.x = 0;
        box.y = y;
        stage.addChild(box);

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

    // 3) Rullien mitat
    const REEL_WIDTH = symbolWidth;
    const REEL_HEIGHT = ROWS * ROW_HEIGHT - gap;

    const REELS_WIDTH = COLS * REEL_WIDTH + (COLS - 1) * gap;
    const REELS_HEIGHT = REEL_HEIGHT;

    // Keskitys
    const startX = (app.renderer.width - REELS_WIDTH) / 2;
    const startY = (app.renderer.height - REELS_HEIGHT) / 2;

    // 4) LUODAAN RULLAT + MASKIT
    reels = [];

    for (let i = 0; i < COLS; i++) {
      const reelCont = new Container();

      reelCont.x = startX + i * (REEL_WIDTH + gap);
      reelCont.y = startY;

      const mask = new Graphics()
        .rect(0, 0, REEL_WIDTH, REEL_HEIGHT)
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

<button
  on:click={spin}
  style="margin-top: 20px; padding: 10px 20px; font-size: 22px; cursor: pointer;"
>
  SPIN 🎰
</button>
