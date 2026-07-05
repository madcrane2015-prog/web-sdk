import type { SpinSpeed } from '../../game-standalone/types';
import type { ControlPanelPosition } from '../../utils/layoutUtils';

export interface ControlPanelCallbacks {
	onDecreaseBet: () => void;
	onIncreaseBet: () => void;
	onTogglePaytable: () => void;
	onToggleAutoplayMenu: () => void;
	onStopAutoplay: () => void;
	onSpin: () => void;
	onPressSpin: () => void;
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

export interface SpinButtonProps {
	controlsPath: string;
	gameScale: number;
	isAutoPlaying: boolean;
	playButtonGlareActive: boolean;
	onPress: () => void;
}

export interface StatusMetersProps {
	balance: number;
	betAmount: number;
	lastWin: number;
	gameScale?: number;
	mode: 'strip' | 'single';
	label?: 'BALANCE' | 'BET' | 'WIN';
	value?: number;
	accent?: boolean;
}

export interface QuickActionsProps {
	controlsPath: string;
	gameScale: number;
	isAutoPlaying: boolean;
	spinSpeed: SpinSpeed;
	onToggleAutoplayMenu: () => void;
	onStopAutoplay: () => void;
	onCycleSpinSpeed: () => void;
}

export interface MenuButtonProps {
	controlsPath: string;
	gameScale: number;
	onTogglePaytable: () => void;
	className?: string;
}

export interface ControlPanelFrameProps {
	controlsPath: string;
	gameScale: number;
	controlPanelPos: ControlPanelPosition;
}
