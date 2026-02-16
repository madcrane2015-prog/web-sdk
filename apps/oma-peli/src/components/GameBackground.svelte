<script lang="ts">
  /**
   * GameBackground Component
   * 
   * Helposti irroitettava taustakuva-komponentti joka voidaan siirtää seuraavaan peliin.
   * Käyttää layout-konfiguraatiota automaattiseen skaalautumiseen.
   */
  
  import { base } from "$app/paths";
  import type { LayoutConfig } from '../config/layoutConfig';
  
  interface Props {
    layout: LayoutConfig;
    gameScale: number;
    backgroundPath?: string;  // Oletuksena käytetään bg.jpg
  }
  
  const { layout, gameScale, backgroundPath = `${base}/background/bg.jpg` }: Props = $props();
  
  // Lasketaan tausta-asetukset layout-konfiguraation perusteella
  const backgroundStyle = $derived(() => {
    const config = layout.background;
    return {
      yShift: config.yShift * gameScale,
      scale: config.scale,
      fitMode: config.fitMode
    };
  });
</script>

<div class="game-background" style="
  position: absolute;
  top: {backgroundStyle().yShift}px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
">
  <img
    src={backgroundPath}
    alt="Game Background"
    style="
      width: 100%;
      height: 100%;
      object-fit: {backgroundStyle().fitMode === 'width' ? 'cover' : 
                   backgroundStyle().fitMode === 'height' ? 'contain' : 
                   'contain'};
      object-position: center center;
      transform: scale({backgroundStyle().scale});
      transform-origin: center center;
    "
  />
</div>

<style>
  .game-background {
    user-select: none;
    -webkit-user-select: none;
  }
</style>
