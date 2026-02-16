# Arkkitehtuurimuutokset - Siirrettävä Layout-järjestelmä

## Yhteenveto

Tässä dokumentaatiossa kuvataan uusi layout-järjestelmä, joka mahdollistaa:
- ✅ Helposti säädettävät parametrit eri laitteille (Desktop, Android Portrait/Landscape, iPhone Portrait/Landscape)
- ✅ Pelialueen koko suhteessa selainikkunaan
- ✅ Control panelin koko ja sijainti (x ja y)
- ✅ Play-napin koko suhteessa control paneeliin
- ✅ Tausta-asetukset (sijainti, skaalaus)
- ✅ Helppo siirto seuraavaan peliin

## Uudet Tiedostot

### 1. `/src/config/layoutConfig.ts`
Sisältää kaikki layout-konfiguraatiot eri laitteille.

**Käytettävät DeviceType-arvot:**
- `desktop` - Työpöytäkone
- `android-portrait` - Android pystysuunnassa
- `android-landscape` - Android vaakasuunnassa  
- `iphone-portrait` - iPhone pystysuunnassa
- `iphone-landscape` - iPhone vaakasuunnassa

**Jokainen layout sisältää:**
```typescript
{
  gameArea: {
    width: 1445,      // Canvas leveys
    height: 1000,     // Canvas korkeus
    scale: 0.95,      // Skaalaus (0.95 = 95% selainikkunasta)
    offsetX: 0,       // X-siirtymä
    offsetY: -20,     // Y-siirtymä
  },
  controlPanel: {
    x: 250,           // X-sijainti
    y: 820,           // Y-sijainti
    width: 1100,      // Leveys
    height: 70,       // Korkeus
    scaleX: 0.85,     // X-skaalaus
    scaleY: 0.85,     // Y-skaalaus
    offsetX: 0,       // X-siirtymä
    offsetY: 20,      // Y-siirtymä
  },
  playButton: {
    scale: 1.2,       // Koko suhteessa control paneeliin
    offsetX: 0,       // X-siirtymä
    offsetY: 0,       // Y-siirtymä
  },
  background: {
    yShift: -30,      // Pystysiirtymä
    scale: 1.0,       // Skaalaus
    fitMode: 'width', // 'width', 'height' tai 'min'
  }
}
```

### 2. `/src/utils/layoutUtils.ts`
Utility-funktiot layout-hallintaan.

**Tärkeimmät funktiot:**
- `createLayoutState()` - Luo reaktiivisen layout-tilan joka päivittyy automaattisesti
- `calculateControlPanelPosition()` - Laske control panelin sijainti
- `calculatePlayButtonSize()` - Laske Play-napin koko
- `calculateGameAreaDimensions()` - Laske pelialueen mitat
- `debugLayout()` - Tulosta layout-info konsoliin

### 3. `/src/components/GameBackground.svelte`
Irroitettava taustakuva-komponentti.

**Käyttö:**
```svelte
<GameBackground 
  layout={currentLayout} 
  gameScale={gameScale}
  backgroundPath="/path/to/bg.jpg"
/>
```

## Parametrien Säätäminen

### Desktop-näkymä
Muokkaa `LAYOUT_DESKTOP` objektia tiedostossa `layoutConfig.ts`:

```typescript
export const LAYOUT_DESKTOP: LayoutConfig = {
  gameArea: {
    scale: 1.0,    // 100% selainikkunasta
    // ... muut asetukset
  },
  controlPanel: {
    y: 750,        // Alemmas = isompi luku
    height: 80,    // Control panelin korkeus
    // ... muut asetukset
  },
  playButton: {
    scale: 1.0,    // Normaali koko
  }
}
```

### Android Portrait (pystysuunta)
Muokkaa `LAYOUT_ANDROID_PORTRAIT`:

```typescript
export const LAYOUT_ANDROID_PORTRAIT: LayoutConfig = {
  gameArea: {
    scale: 0.95,   // 95% selainikkunasta - SÄÄDÄ TÄTÄ!
    offsetY: -20,  // Ylöspäin siirtymä
  },
  controlPanel: {
    x: 250,
    y: 820,        // Control panelin Y-sijainti - SÄÄDÄ TÄTÄ!
    scaleX: 0.85,  // 85% leveydestä - SÄÄDÄ TÄTÄ!
    scaleY: 0.85,  // 85% korkeudesta - SÄÄDÄ TÄTÄ!
    offsetY: 20,   // Lisäsiirtymä - SÄÄDÄ TÄTÄ!
  },
  playButton: {
    scale: 1.2,    // 120% normaalista - ISOMPI NAPPI! SÄÄDÄ TÄTÄ!
  }
}
```

### Android Landscape (vaakasuunta)
Muokkaa `LAYOUT_ANDROID_LANDSCAPE`:

```typescript
export const LAYOUT_ANDROID_LANDSCAPE: LayoutConfig = {
  gameArea: {
    scale: 0.75,   // Pienempi pelialue landscape-tilassa - SÄÄDÄ TÄTÄ!
  },
  controlPanel: {
    y: 780,        // Y-sijainti - SÄÄDÄ TÄTÄ!
    scaleX: 0.80,  // SÄÄDÄ TÄTÄ!
    scaleY: 0.80,  // SÄÄDÄ TÄTÄ!
  },
  playButton: {
    scale: 1.1,    // SÄÄDÄ TÄTÄ!
  }
}
```

### iPhone Portrait
Muokkaa `LAYOUT_IPHONE_PORTRAIT`:

```typescript
export const LAYOUT_IPHONE_PORTRAIT: LayoutConfig = {
  gameArea: {
    scale: 0.92,   // Hieman pienempi kuin Android - SÄÄDÄ TÄTÄ!
  },
  controlPanel: {
    y: 830,        // SÄÄDÄ TÄTÄ!
    scaleX: 0.82,  // SÄÄDÄ TÄTÄ!
    scaleY: 0.82,  // SÄÄDÄ TÄTÄ!
  },
  playButton: {
    scale: 1.25,   // Vieläkin isompi nappi - SÄÄDÄ TÄTÄ!
  }
}
```

### iPhone Landscape
Muokkaa `LAYOUT_IPHONE_LANDSCAPE`:

```typescript
export const LAYOUT_IPHONE_LANDSCAPE: LayoutConfig = {
  gameArea: {
    scale: 0.72,   // SÄÄDÄ TÄTÄ!
  },
  controlPanel: {
    y: 785,        // SÄÄDÄ TÄTÄ!
    scaleX: 0.78,  // SÄÄDÄ TÄTÄ!
    scaleY: 0.78,  // SÄÄDÄ TÄTÄ!
  },
  playButton: {
    scale: 1.15,   // SÄÄDÄ TÄTÄ!
  }
}
```

## Integraatio HelloPixi.svelte:een

### 1. Tuo tarvittavat moduulit

```typescript
import { createLayoutState, calculateControlPanelPosition } from '../utils/layoutUtils';
import GameBackground from './GameBackground.svelte';
```

### 2. Luo layout-tila komponentin alussa

```typescript
const layoutState = createLayoutState();
const currentLayout = $derived(layoutState.layout);
const deviceType = $derived(layoutState.deviceType);
```

### 3. Käytä layout-konfiguraatiota

**Pelialueen mitat:**
```typescript
const CANVAS_WIDTH = currentLayout.gameArea.width;
const CANVAS_HEIGHT = currentLayout.gameArea.height;
```

**Control Panel:**
```typescript
const controlPanelPos = $derived(
  calculateControlPanelPosition(currentLayout, gameScale)
);

// Käytä template:ssa:
<div style="
  position: absolute;
  left: {controlPanelPos.x}px;
  top: {controlPanelPos.y}px;
  width: {controlPanelPos.width}px;
  height: {controlPanelPos.height}px;
">
```

**Taustakuva:**
```typescript
<GameBackground 
  layout={currentLayout} 
  gameScale={gameScale}
/>
```

## Siirto Seuraavaan Peliin

### Vaihe 1: Kopioi tiedostot
```
/src/config/layoutConfig.ts          → Uusi peli
/src/utils/layoutUtils.ts            → Uusi peli  
/src/components/GameBackground.svelte → Uusi peli
```

### Vaihe 2: Muokkaa layoutConfig.ts
- Säädä `CANVAS_WIDTH` ja `CANVAS_HEIGHT` uuden pelin mukaan
- Säädä jokaisen laitteen parametrit
- Testaa eri laitteilla

### Vaihe 3: Käytä uudessa pelissä
```typescript
import { createLayoutState } from '../utils/layoutUtils';
import GameBackground from './GameBackground.svelte';

const layoutState = createLayoutState();
const currentLayout = $derived(layoutState.layout);

// Käytä currentLayout-objektia kaikkialla
```

## Control Panelin Irroitus (Tulevaisuus)

Control panel voidaan myös irroittaa omaksi komponentiksi:

```svelte
<!-- /src/components/ControlPanel.svelte -->
<script lang="ts">
  import type { LayoutConfig } from '../config/layoutConfig';
  
  interface Props {
    layout: LayoutConfig;
    gameScale: number;
    betAmount: number;
    balance: number;
    lastWin: number;
    isSpinning: boolean;
    onSpin: () => void;
    onBetChange: (delta: number) => void;
    // ... muut propsit
  }
  
  const props: Props = $props();
</script>

<!-- Control panel HTML tänne -->
```

**Käyttö:**
```svelte
<ControlPanel 
  layout={currentLayout}
  gameScale={gameScale}
  betAmount={betAmount}
  balance={balance}
  lastWin={lastWin}
  isSpinning={isSpinning}
  onSpin={spin}
  onBetChange={changeBet}
/>
```

## Debug-työkalut

**Tulosta nykyinen layout konsoliin:**
```typescript
import { debugLayout } from '../utils/layoutUtils';

debugLayout(currentLayout, deviceType);
```

**Testaa tiettyä laitteen layoutia:**
```typescript
import { getLayoutForDevice } from '../utils/layoutUtils';

const testLayout = getLayoutForDevice('android-portrait');
console.log(testLayout);
```

## Esimerkkejä Parametrien Säädöstä

### Pelialue isommaksi mobiilissa
```typescript
// layoutConfig.ts
export const LAYOUT_ANDROID_PORTRAIT: LayoutConfig = {
  gameArea: {
    scale: 1.0,  // Muuta 0.95 → 1.0 (100% näytöstä)
    // ...
  }
}
```

### Control Panel ylemmäs
```typescript
controlPanel: {
  y: 700,  // Pienempi luku = ylemmäs (oli 820)
  // ...
}
```

### Play-nappi isommaksi
```typescript
playButton: {
  scale: 1.5,  // Muuta 1.2 → 1.5 (50% isompi)
}
```

### Control Panel leveämmäksi
```typescript
controlPanel: {
  scaleX: 1.0,  // Muuta 0.85 → 1.0 (täysi leveys)
  scaleY: 0.85, // Korkeus pysyy samana
  // ...
}
```

## Yhteenveto

Uusi layout-järjestelmä tarjoaa:
1. ✅ **Keskitetty konfiguraatio** - Kaikki parametrit yhdessä paikassa
2. ✅ **Laitespesifinen säätö** - Erilliset asetukset jokaiselle laitteelle
3. ✅ **Helppo siirrettävyys** - 3 tiedostoa riittää seuraavaan peliin
4. ✅ **Automaattinen tunnistus** - Laitteen tyyppi tunnistetaan automaattisesti
5. ✅ **Reaktiivisuus** - Layout päivittyy kun ikkuna/orientaatio muuttuu

**Seuraavat askeleet:**
1. Kopioi HelloPixi.svelte → HelloPixi_backup.svelte (varmuuskopio)
2. Integroi uusi layout-järjestelmä vähitellen
3. Testaa eri laitteilla ja säädä parametreja
4. Kun toimii hyvin, ota käyttöön seuraavassa pelissä!
