# Layout-järjestelmän Pikaopas

## 📱 Parametrien Säätö - Yksinkertainen Ohje

### 1️⃣ Avaa tiedosto: `src/config/layoutConfig.ts`

### 2️⃣ Etsi haluamasi laite:

```typescript
// DESKTOP:
export const LAYOUT_DESKTOP: LayoutConfig = {

// ANDROID PYSTY:
export const LAYOUT_ANDROID_PORTRAIT: LayoutConfig = {

// ANDROID VAAKA:
export const LAYOUT_ANDROID_LANDSCAPE: LayoutConfig = {

// IPHONE PYSTY:
export const LAYOUT_IPHONE_PORTRAIT: LayoutConfig = {

// IPHONE VAAKA:
export const LAYOUT_IPHONE_LANDSCAPE: LayoutConfig = {
```

### 3️⃣ Säädä parametreja:

## 🎮 PELIALUEEN KOKO

```typescript
gameArea: {
  scale: 0.95,  // 🔧 SÄÄDÄ TÄSTÄ: 0.95 = 95% näytöstä
                // 1.0 = 100% (täysi näyttö)
                // 0.8 = 80% (pienempi)
  offsetY: -20, // Ylös/alas siirtymä (- = ylös, + = alas)
}
```

**Esimerkkejä:**
- Pelialue isommaksi: `scale: 1.0` (oli 0.95)
- Pelialue pienemmäksi: `scale: 0.85` (oli 0.95)
- Pelialue ylemmäs: `offsetY: -40` (oli -20)

## 🎛️ CONTROL PANEL

```typescript
controlPanel: {
  y: 820,        // 🔧 Y-SIJAINTI: Isompi = alemmas
  scaleX: 0.85,  // 🔧 LEVEYS: 1.0 = 100%, 0.85 = 85%
  scaleY: 0.85,  // 🔧 KORKEUS: 1.0 = 100%, 0.85 = 85%
  offsetY: 20,   // Lisäsiirtymä ylös/alas
}
```

**Esimerkkejä:**
- Control panel ylemmäs: `y: 750` (oli 820)
- Control panel alemmas: `y: 850` (oli 820)
- Control panel leveämmäksi: `scaleX: 1.0` (oli 0.85)
- Control panel kapeammaksi: `scaleX: 0.7` (oli 0.85)
- Control panel matalammaksi: `scaleY: 0.7` (oli 0.85)

## 🔘 PLAY-NAPPI

```typescript
playButton: {
  scale: 1.2,  // 🔧 KOKO: 1.0 = normaali, 1.2 = 20% isompi
}
```

**Esimerkkejä:**
- Play-nappi isommaksi: `scale: 1.5` (oli 1.2) = 50% isompi
- Play-nappi pienemmäksi: `scale: 0.9` (oli 1.2) = 10% pienempi
- Play-nappi normaaliksi: `scale: 1.0` (oli 1.2)

## 🖼️ TAUSTA

```typescript
background: {
  yShift: -30,      // Ylös/alas (- = ylös, + = alas)
  scale: 1.0,       // Suurennus/pienennys
  fitMode: 'width', // 'width' = sovita leveyteen
                    // 'height' = sovita korkeuteen
}
```

## 📋 NOPEAT ESIMERKIT

### Esimerkki 1: Android Pysty - Pelialue Isommaksi

```typescript
export const LAYOUT_ANDROID_PORTRAIT: LayoutConfig = {
  gameArea: {
    scale: 1.0,  // ← Muutettu 0.95 → 1.0 (TÄYSI NÄYTTÖ!)
    offsetY: -30, // ← Nostetaan vähän ylemmäs
  },
  // ... muut pysyvät samana
}
```

### Esimerkki 2: iPhone Pysty - Play-nappi Isommaksi

```typescript
export const LAYOUT_IPHONE_PORTRAIT: LayoutConfig = {
  playButton: {
    scale: 1.5,  // ← Muutettu 1.25 → 1.5 (ISOMPI NAPPI!)
  },
  // ... muut pysyvät samana
}
```

### Esimerkki 3: Android Vaaka - Control Panel Ylemmäs

```typescript
export const LAYOUT_ANDROID_LANDSCAPE: LayoutConfig = {
  controlPanel: {
    y: 700,  // ← Muutettu 780 → 700 (YLEMMÄS!)
    // ... muut pysyvät samana
  }
}
```

## 🔍 TESTAUS

1. **Tallenna tiedosto** `layoutConfig.ts`
2. **Avaa peli selaimessa**
3. **Avaa DevTools** (F12)
4. **Muuta ikkunan kokoa** tai **vaihda orientaatiota**
5. **Layout päivittyy automaattisesti!**

### Debug-nappi (valinnainen)

Lisää HelloPixi.svelte:een:

```svelte
<button 
  on:click={() => {
    console.log('Device:', deviceType);
    console.log('Layout:', currentLayout);
  }}
>
  Show Layout Info
</button>
```

## ⚡ YLEISET SÄÄTÖKOHTEET

### "Pelialue on liian pieni mobiilissa"
→ Kasvata `gameArea.scale` arvosta 0.95 → 1.0

### "Control panel on liian alhaalla"
→ Pienennä `controlPanel.y` arvosta 820 → 750

### "Play-nappi on liian pieni"
→ Kasvata `playButton.scale` arvosta 1.2 → 1.5

### "Control panel on liian leveä"
→ Pienennä `controlPanel.scaleX` arvosta 0.85 → 0.7

### "Tausta on väärässä paikassa"
→ Säädä `background.yShift` (negatiivinen = ylös, positiivinen = alas)

## 📦 SIIRTO SEURAAVAAN PELIIN

**Kopioi nämä 3 tiedostoa:**
1. `src/config/layoutConfig.ts`
2. `src/utils/layoutUtils.ts`
3. `src/components/GameBackground.svelte`

**Säädä arvot uuden pelin mukaan**
**Valmis!** ✅

## 🎯 MUISTA

- **Pienemmät luvut** = Ylemmäs/Vasemmalle
- **Isommat luvut** = Alemmas/Oikealle
- **Scale < 1.0** = Pienempi
- **Scale > 1.0** = Isompi
- **Tallenna ja testaa!**

---

**Kysymyksiä?** Katso täysi dokumentaatio: `LAYOUT_ARCHITECTURE.md`
