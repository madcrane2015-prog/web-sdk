<script lang="ts">
	import BetControls from './BetControls.svelte';
	import StatusMeters from './StatusMeters.svelte';
	import SpinButton from './SpinButton.svelte';
	import QuickActions from './QuickActions.svelte';
	import MenuButton from './MenuButton.svelte';
	import type { ControlPanelPosition } from '../../utils/layoutUtils';
	import type { SpinSpeed } from '../../game-standalone/types';

	let { controlsPath, controlPanelPos, balance, betAmount, lastWin, isAutoPlaying,
		isSpinInProgress, disabled, playButtonGlareActive, spinSpeed, onDecreaseBet,
		onIncreaseBet, onPressSpin, onToggleAutoplayMenu, onStopAutoplay,
		onCycleSpinSpeed, onTogglePaytable }: {
		controlsPath: string; controlPanelPos: ControlPanelPosition;
		balance: number; betAmount: number; lastWin: number;
		isAutoPlaying: boolean; isSpinInProgress: boolean; disabled: boolean;
		playButtonGlareActive: boolean; spinSpeed: SpinSpeed;
		onDecreaseBet: () => void; onIncreaseBet: () => void; onPressSpin: () => void;
		onToggleAutoplayMenu: () => void; onStopAutoplay: () => void;
		onCycleSpinSpeed: () => void; onTogglePaytable: () => void;
	} = $props();
	const scale = $derived(controlPanelPos.width / 1100);
</script>

<div class="desktop-control-bar" style="left: {controlPanelPos.x}px; top: {controlPanelPos.y}px; width: {controlPanelPos.width}px; height: {77 * scale}px; --bar-scale: {scale};">
	<div class="cell bet">
		<BetControls {controlsPath} gameScale={scale} {betAmount} {onDecreaseBet} {onIncreaseBet} />
	</div>
	<div class="cell balance">
		<StatusMeters mode="single" label="BALANCE" value={balance} {balance} {betAmount} {lastWin} gameScale={scale} />
	</div>
	<div class="spin-space"></div>
	<div class="actions">
		<QuickActions {controlsPath} gameScale={scale} {isAutoPlaying} {spinSpeed} {onToggleAutoplayMenu} {onStopAutoplay} {onCycleSpinSpeed} />
	</div>
	<div class="cell win">
		<StatusMeters mode="single" label="WIN" value={lastWin} {balance} {betAmount} {lastWin} gameScale={scale} />
	</div>
	<div class="cell menu"><MenuButton {controlsPath} gameScale={scale} {onTogglePaytable} /></div>
	<div class="center-spin">
		<SpinButton {controlsPath} gameScale={scale * 1.22} {isAutoPlaying} {isSpinInProgress} {disabled} {playButtonGlareActive} onPress={onPressSpin} />
	</div>
</div>

<style>
	.desktop-control-bar {
		position: absolute;
		z-index: 1000;
		display: grid;
		grid-template-columns: 22% 22% 12% 20% 17% 7%;
		align-items: center;
		box-sizing: border-box;
		border: calc(2px * var(--bar-scale)) solid #242424;
		border-radius: calc(9px * var(--bar-scale));
		background: linear-gradient(#4b4b4b 0%, #494949 42%, #272727 100%);
		box-shadow: inset 0 calc(2px * var(--bar-scale)) 0 #777, inset 0 calc(-2px * var(--bar-scale)) 0 #171717;
	}
	.cell { display: flex; align-items: center; justify-content: center; min-width: 0; height: 85%; }
	.bet, .win { border-right: 1px solid #686868; }
	.actions { display: grid; grid-template-columns: 1fr 1fr; align-items: center; height: 85%; }
	.actions :global(.quick-action) { border-right: 1px solid #686868; }
	.center-spin { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); display: flex; }
	.desktop-control-bar :global(button) { padding: 0; flex-shrink: 0; }
</style>
