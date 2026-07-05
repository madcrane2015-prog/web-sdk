import type { SpinSpeed } from '../../game-standalone/types';
import type { ControlPanelPosition } from '../../utils/layoutUtils';

export interface ControlPanelCallbacks {
	onDecreaseBet: () => void;
	onIncreaseBet: () => void;
	onTogglePaytable: () => void;
	onToggleAutoplayMenu: () => void;
	onStopAutoplay: () => void;
	onSpin: () => void;
	onCycleSpinSpeed: () => void;
}

export interface ControlPanelState {
	balance: number;
	betAmount: number;
	lastWin: number;
	isAutoPlaying: boolean;
	spinSpeed: SpinSpeed;
}

export interface ControlPanelVisuals {
	controlsPath: string;
	gameScale: number;
	controlPanelPos: ControlPanelPosition;
}
