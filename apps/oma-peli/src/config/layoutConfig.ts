/**
 * Layout Configuration System
 * 
 * Määrittää pelialueen, control panelin ja Play-napin asetukset eri laitteille.
 * Tämä konfiguraatio on helposti siirrettävissä seuraavaan peliin.
 */

export type DeviceType = 'desktop' | 'android-portrait' | 'android-landscape' | 'iphone-portrait' | 'iphone-landscape';

export interface LayoutConfig {
  // Pelialueen koko ja sijainti
  gameArea: {
    width: number;          // Canvas leveys pikseleinä
    height: number;         // Canvas korkeus pikseleinä
    scale: number;          // Pelialueen skaalauskerroin (1.0 = 100%)
    offsetX: number;        // X-siirtymä (+ = oikealle)
    offsetY: number;        // Y-siirtymä (+ = alaspäin)
  };
  
  // Control Panelin asetukset
  controlPanel: {
    x: number;              // X-sijainti (pikseleinä tai prosentteina)
    y: number;              // Y-sijainti (pikseleinä)
    width: number;          // Leveys pikseleinä
    height: number;         // Korkeus pikseleinä
    scaleX: number;         // X-skaalaus (1.0 = normaali)
    scaleY: number;         // Y-skaalaus (1.0 = normaali)
    offsetX: number;        // X-siirtymä
    offsetY: number;        // Y-siirtymä
  };
  
  // Play-napin asetukset suhteessa control paneeliin
  playButton: {
    scale: number;          // Napin koko suhteessa control paneeliin (1.0 = 100%)
    offsetX: number;        // X-siirtymä control paneelin sisällä
    offsetY: number;        // Y-siirtymä control paneelin sisällä
  };
  
  // Tausta-asetukset
  background: {
    yShift: number;         // Pystysiirtymä
    scale: number;          // Skaalauskerroin
    fitMode: 'width' | 'height' | 'min'; // Skaalaustyyppi
  };
}

/**
 * DESKTOP LAYOUT
 * Täysi pelinäkymä isommalle ruudulle
 */
export const LAYOUT_DESKTOP: LayoutConfig = {
  gameArea: {
    width: 1445,
    height: 1000,
    scale: 1.0,
    offsetX: -25,
    offsetY: -15,
  },
  controlPanel: {
    x: 250,
    y: 750,
    width: 1100,
    height: 80,
    scaleX: 1.0,
    scaleY: 1.1,
    offsetX: 0,
    offsetY: 50,
  },
  playButton: {
    scale: 1.0,
    offsetX: 0,
    offsetY: 0,
  },
  background: {
    yShift: -40,
    scale: 1.0,
    fitMode: 'height',
  },
};

/**
 * ANDROID PORTRAIT
 * Pystysuuntainen mobiili (Android puhelimet)
 */
export const LAYOUT_ANDROID_PORTRAIT: LayoutConfig = {
  gameArea: {
    width: 1445,
    height: 1000,
    scale: 1.0,            // Pelialue 95% selainikkunasta
    offsetX: 0,
    offsetY: -20,
  },
  controlPanel: {
    x: 250,
    y: 790,                 // Alemmas mobiilissa
    width: 1100,
    height: 70,             // Matalampi
    scaleX: 0.85,
    scaleY: 0.85,
    offsetX: 0,
    offsetY: 20,
  },
  playButton: {
    scale: 1.2,             // Isompi Play-nappi mobiilissa
    offsetX: 0,
    offsetY: 0,
  },
  background: {
    yShift: -30,
    scale: 1.0,
    fitMode: 'width',       // Sovita leveyteen mobiilissa
  },
};

/**
 * ANDROID LANDSCAPE
 * Vaakasuuntainen mobiili (Android puhelimet)
 */
export const LAYOUT_ANDROID_LANDSCAPE: LayoutConfig = {
  gameArea: {
    width: 1445,
    height: 1000,
    scale: 0.75,            // Pienempi pelialue landscape-tilassa
    offsetX: 0,
    offsetY: 0,
  },
  controlPanel: {
    x: 250,
    y: 780,
    width: 1100,
    height: 65,
    scaleX: 0.80,
    scaleY: 0.80,
    offsetX: 0,
    offsetY: 40,
  },
  playButton: {
    scale: 1.1,
    offsetX: 0,
    offsetY: 0,
  },
  background: {
    yShift: -20,
    scale: 0.95,
    fitMode: 'height',
  },
};

/**
 * IPHONE PORTRAIT
 * Pystysuuntainen mobiili (iOS laitteet)
 */
export const LAYOUT_IPHONE_PORTRAIT: LayoutConfig = {
  gameArea: {
    width: 1445,
    height: 1000,
    scale: 0.92,            // Hieman pienempi kuin Android
    offsetX: 0,
    offsetY: -15,
  },
  controlPanel: {
    x: 250,
    y: 830,
    width: 1100,
    height: 70,
    scaleX: 0.82,
    scaleY: 0.82,
    offsetX: 0,
    offsetY: 25,
  },
  playButton: {
    scale: 1.25,            // Vielä isompi Play-nappi iPhonessa
    offsetX: 0,
    offsetY: 0,
  },
  background: {
    yShift: -25,
    scale: 1.0,
    fitMode: 'width',
  },
};

/**
 * IPHONE LANDSCAPE
 * Vaakasuuntainen mobiili (iOS laitteet)
 */
export const LAYOUT_IPHONE_LANDSCAPE: LayoutConfig = {
  gameArea: {
    width: 1445,
    height: 1000,
    scale: 0.72,
    offsetX: 0,
    offsetY: 5,
  },
  controlPanel: {
    x: 250,
    y: 785,
    width: 1100,
    height: 65,
    scaleX: 0.78,
    scaleY: 0.78,
    offsetX: 0,
    offsetY: 35,
  },
  playButton: {
    scale: 1.15,
    offsetX: 0,
    offsetY: 0,
  },
  background: {
    yShift: -15,
    scale: 0.93,
    fitMode: 'height',
  },
};

/**
 * Tunnista laitteen tyyppi ja palauta oikea layout-konfiguraatio
 */
export function detectDeviceLayout(): LayoutConfig {
  if (typeof window === 'undefined') {
    return LAYOUT_DESKTOP;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const isPortrait = height > width;
  const isMobile = width <= 768;
  
  // Yksinkertainen iOS-tunnistus
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  if (!isMobile) {
    return LAYOUT_DESKTOP;
  }
  
  // Mobile layouts
  if (isIOS) {
    return isPortrait ? LAYOUT_IPHONE_PORTRAIT : LAYOUT_IPHONE_LANDSCAPE;
  } else {
    return isPortrait ? LAYOUT_ANDROID_PORTRAIT : LAYOUT_ANDROID_LANDSCAPE;
  }
}

/**
 * Kaikki layoutit objektina (helpottaa debuggausta)
 */
export const ALL_LAYOUTS: Record<DeviceType, LayoutConfig> = {
  'desktop': LAYOUT_DESKTOP,
  'android-portrait': LAYOUT_ANDROID_PORTRAIT,
  'android-landscape': LAYOUT_ANDROID_LANDSCAPE,
  'iphone-portrait': LAYOUT_IPHONE_PORTRAIT,
  'iphone-landscape': LAYOUT_IPHONE_LANDSCAPE,
};
