/**
 * INTEGRATION EXAMPLE - How to use the new layout system in HelloPixi.svelte
 * 
 * This file shows the key changes needed to integrate the layout system.
 * Copy these snippets into your HelloPixi.svelte file.
 */

// ============================================================================
// 1. ADD IMPORTS AT THE TOP OF THE SCRIPT SECTION
// ============================================================================

import { createLayoutState, calculateControlPanelPosition, calculateGameAreaDimensions } from '../utils/layoutUtils';
import GameBackground from './GameBackground.svelte';

// ============================================================================
// 2. CREATE LAYOUT STATE (after other $state declarations)
// ============================================================================

// Layout system - automatically detects device and updates on resize/orientation change
const layoutState = createLayoutState();
const currentLayout = $derived(layoutState.layout);
const deviceType = $derived(layoutState.deviceType);

// ============================================================================
// 3. REPLACE STATIC CONSTANTS WITH LAYOUT-BASED VALUES
// ============================================================================

// OLD CODE (REMOVE):
// const CANVAS_WIDTH = 1445;
// const CANVAS_HEIGHT = 1000;
// const CONTROL_PANEL_Y = 750;
// const CONTROL_PANEL_HEIGHT = 80;
// const CONTROL_PANEL_OFFSET_X = 0;
// const CONTROL_PANEL_OFFSET_Y = 50;
// const CONTROL_PANEL_SCALE_X = 1.0;
// const CONTROL_PANEL_SCALE_Y = 1.1;

// NEW CODE (ADD):
// Canvas dimensions from layout
const CANVAS_WIDTH = $derived(currentLayout.gameArea.width);
const CANVAS_HEIGHT = $derived(currentLayout.gameArea.height);

// Control panel position calculation
const controlPanelPos = $derived(calculateControlPanelPosition(currentLayout, gameScale));

// Game area dimensions
const gameAreaDims = $derived(calculateGameAreaDimensions(currentLayout, gameScale));

// ============================================================================
// 4. UPDATE CONTROL PANEL POSITIONING IN TEMPLATE
// ============================================================================

// OLD CODE (REMOVE):
// <div class="control-panel-mobile" style="
//   position: absolute;
//   left: {((reelFramesSpriteRef ? reelFramesSpriteRef.x : REEL_FRAMES_X) + CONTROL_PANEL_OFFSET_X) * gameScale}px;
//   top: {(CONTROL_PANEL_Y + CONTROL_PANEL_OFFSET_Y) * gameScale}px;
//   width: {controlPanelWidth * gameScale}px;
//   height: {CONTROL_PANEL_HEIGHT * gameScale}px;
// ">

// NEW CODE (REPLACE WITH):
/*
<div class="control-panel-mobile" style="
  position: absolute;
  left: {controlPanelPos.x}px;
  top: {controlPanelPos.y}px;
  width: {controlPanelPos.width}px;
  height: {controlPanelPos.height}px;
  display: flex;
  align-items: center;
  z-index: 1000;
">
*/

// ============================================================================
// 5. REPLACE BACKGROUND IMAGE WITH GAMEBACKGROUND COMPONENT
// ============================================================================

// OLD CODE (FIND AND REMOVE the background img tag):
// <img src="{base}/background/bg.jpg" ... />

// NEW CODE (ADD):
/*
<GameBackground 
  layout={currentLayout} 
  gameScale={gameScale}
  backgroundPath="{base}/background/bg.jpg"
/>
*/

// ============================================================================
// 6. UPDATE PLAY BUTTON SIZE
// ============================================================================

// Calculate play button size based on layout
const playButtonScale = $derived(currentLayout.playButton.scale);

// Then use it in your Play button styling:
/*
<button style="
  transform: scale({playButtonScale});
  ...other styles...
">
*/

// ============================================================================
// 7. ADD DEBUG BUTTON TO TEST DIFFERENT LAYOUTS (OPTIONAL)
// ============================================================================

import { debugLayout, getLayoutForDevice } from '../utils/layoutUtils';

// Add this button somewhere in your template for testing:
/*
<button 
  on:click={() => debugLayout(currentLayout, deviceType)}
  style="
    position: fixed;
    top: 50px;
    right: 10px;
    z-index: 10000;
    padding: 8px 12px;
    background: rgba(0, 255, 0, 0.8);
    color: black;
    border: 2px solid white;
    border-radius: 5px;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
  "
>
  Debug Layout
</button>
*/

// ============================================================================
// 8. UPDATE GAME AREA OFFSETS FOR REELS
// ============================================================================

// OLD CODE:
// const OFFSET_X = -25;
// const OFFSET_Y = -15;

// NEW CODE (use layout-based offsets):
const OFFSET_X = $derived(currentLayout.gameArea.offsetX);
const OFFSET_Y = $derived(currentLayout.gameArea.offsetY);

// ============================================================================
// 9. RESPONSIVE SCALING (optional enhancement)
// ============================================================================

// Apply game area scale to overall game scale calculation
const baseGameScale = $derived(() => {
  // Your existing scale calculation
  const scaleW = containerWidth / CANVAS_WIDTH;
  const scaleH = containerHeight / CANVAS_HEIGHT;
  const calculatedScale = Math.min(scaleW, scaleH);
  
  // Multiply by layout's game area scale
  return calculatedScale * currentLayout.gameArea.scale;
});

// ============================================================================
// COMPLETE MINIMAL EXAMPLE
// ============================================================================

/*
<script lang="ts">
  // ... existing imports ...
  import { createLayoutState, calculateControlPanelPosition } from '../utils/layoutUtils';
  import GameBackground from './GameBackground.svelte';
  
  // ... existing code ...
  
  // Layout system
  const layoutState = createLayoutState();
  const currentLayout = $derived(layoutState.layout);
  const deviceType = $derived(layoutState.deviceType);
  
  // Derived values from layout
  const CANVAS_WIDTH = $derived(currentLayout.gameArea.width);
  const CANVAS_HEIGHT = $derived(currentLayout.gameArea.height);
  const controlPanelPos = $derived(calculateControlPanelPosition(currentLayout, gameScale));
  const playButtonScale = $derived(currentLayout.playButton.scale);
  
  // ... rest of your code ...
</script>

<!-- Template -->
<div class="game-wrapper">
  <!-- Background -->
  <GameBackground 
    layout={currentLayout} 
    gameScale={gameScale}
  />
  
  <!-- Canvas container -->
  <div bind:this={canvasContainer} style="
    width: {CANVAS_WIDTH * gameScale}px;
    height: {CANVAS_HEIGHT * gameScale}px;
  ">
    <!-- Existing canvas and game content -->
  </div>
  
  <!-- Control Panel -->
  <div class="control-panel-mobile" style="
    position: absolute;
    left: {controlPanelPos.x}px;
    top: {controlPanelPos.y}px;
    width: {controlPanelPos.width}px;
    height: {controlPanelPos.height}px;
  ">
    <!-- Control panel content -->
    <button style="transform: scale({playButtonScale});">
      PLAY
    </button>
  </div>
</div>
*/

// ============================================================================
// TESTING ON DIFFERENT DEVICES
// ============================================================================

// Open browser DevTools Console and run:
// window.dispatchEvent(new Event('resize')); // Test layout change

// Check current device type:
// console.log('Current device:', deviceType);

// Check current layout config:
// console.log('Current layout:', currentLayout);

export {}; // Make this a module
