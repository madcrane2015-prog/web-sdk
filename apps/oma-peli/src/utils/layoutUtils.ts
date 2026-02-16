/**
 * Layout Management Utilities
 * 
 * Utility-funktiot ja state-hallinta layout-konfiguraatioiden käyttöön.
 * Tämä tiedosto tarjoaa työkalut laitteen tunnistamiseen ja layout-asetusten hallintaan.
 */

import { detectDeviceLayout, type LayoutConfig, ALL_LAYOUTS, type DeviceType } from '../config/layoutConfig';

/**
 * Hae nykyinen layout-konfiguraatio
 * Tämä funktio kutsutaan komponentin puolelta $state/$derived -runejen kanssa
 */
export function getCurrentLayout(): LayoutConfig {
  return detectDeviceLayout();
}

/**
 * Hae nykyinen laitetyyppi
 */
export function getCurrentDeviceType(): DeviceType {
  return getDeviceType();
}

/**
 * Tunnista nykyinen laitteen tyyppi
 */
function getDeviceType(): DeviceType {
  if (typeof window === 'undefined') {
    return 'desktop';
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const isPortrait = height > width;
  const isMobile = width <= 768;
  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  
  if (!isMobile) {
    return 'desktop';
  }
  
  if (isIOS) {
    return isPortrait ? 'iphone-portrait' : 'iphone-landscape';
  } else {
    return isPortrait ? 'android-portrait' : 'android-landscape';
  }
}

/**
 * Laske control panelin absoluuttinen sijainti gameScale-kertoimen kanssa
 */
export function calculateControlPanelPosition(layout: LayoutConfig, gameScale: number = 1) {
  return {
    x: (layout.controlPanel.x + layout.controlPanel.offsetX) * gameScale,
    y: (layout.controlPanel.y + layout.controlPanel.offsetY) * gameScale,
    width: layout.controlPanel.width * gameScale * layout.controlPanel.scaleX,
    height: layout.controlPanel.height * gameScale * layout.controlPanel.scaleY,
  };
}

/**
 * Laske Play-napin koko control paneliin nähden
 */
export function calculatePlayButtonSize(layout: LayoutConfig, baseSize: number) {
  return baseSize * layout.playButton.scale;
}

/**
 * Laske pelialueen koko ja skaalaus
 */
export function calculateGameAreaDimensions(layout: LayoutConfig, gameScale: number) {
  return {
    width: layout.gameArea.width * gameScale * layout.gameArea.scale,
    height: layout.gameArea.height * gameScale * layout.gameArea.scale,
    offsetX: layout.gameArea.offsetX * gameScale,
    offsetY: layout.gameArea.offsetY * gameScale,
  };
}

/**
 * Debug-funktio: Tulosta nykyinen layout-konfiguraatio konsoliin
 */
export function debugLayout(layout: LayoutConfig, deviceType: DeviceType) {
  console.log('=== LAYOUT DEBUG ===');
  console.log('Device Type:', deviceType);
  console.log('Game Area:', layout.gameArea);
  console.log('Control Panel:', layout.controlPanel);
  console.log('Play Button:', layout.playButton);
  console.log('Background:', layout.background);
  console.log('===================');
}

/**
 * Hae layout tietyn laitteen tyypille (testaamista varten)
 */
export function getLayoutForDevice(deviceType: DeviceType): LayoutConfig {
  return ALL_LAYOUTS[deviceType];
}
