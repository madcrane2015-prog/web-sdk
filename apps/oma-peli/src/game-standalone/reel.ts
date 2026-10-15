import { Container, Sprite, type Texture } from 'pixi.js';
import type { SpinSpeed, SymbolKey } from './types';

export type ReelState = 'idle' | 'spinning' | 'slowing' | 'bouncing' | 'stopped';

export interface ReelDimensions {
	symbolWidth: number;
	symbolHeight: number;
	rowHeight: number;
	symbolBleedLeft?: number;
	symbolBleedRight?: number;
	symbolBleedTop?: number;
	symbolBleedBottom?: number;
	symbolYOffset?: number;
}

export interface ReelDependencies {
	getSymbol: (reelIndex: number) => SymbolKey;
	setSymbol: (reelIndex: number, symbol: SymbolKey) => void;
	randomSymbol: (reelIndex: number) => SymbolKey;
	getSpinSpeed: () => SpinSpeed;
	getSymbolTextures: () => Record<SymbolKey, Texture> | null;
	playStopSound: () => void;
	playDrumHit: () => void;
}

export class Reel {
	readonly index: number;
	readonly container: Container;
	private offsetValue = 0;
	private speedValue = 0;
	private targetSpeed = 30;
	private stateValue: ReelState = 'idle';
	private stopDelay = 0;
	private bounceOffsetValue = 0;
	private bounceSpeed = 0;
	get state() { return this.stateValue; }
	get speed() { return this.speedValue; }
	get offset() { return this.offsetValue; }
	get bounceOffset() { return this.bounceOffsetValue; }
	private sprites: Sprite[] = [];
	private symbolStrip: SymbolKey[] = [];
	private finalSymbol: SymbolKey | null = null;
	private stopRowsRemaining = 0;

	constructor(
		index: number,
		container: Container,
		private readonly dimensions: ReelDimensions,
		private readonly dependencies: ReelDependencies,
	) {
		this.index = index;
		this.container = container;
	}

	start(delay: number) {
		this.stateValue = 'spinning';
		this.speedValue = 0;
		this.targetSpeed = 35;
		this.stopDelay = delay;
		this.symbolStrip = [];
		this.finalSymbol = null;
		this.stopRowsRemaining = 0;
	}

	startWithResult(delay: number, symbol: SymbolKey) {
		this.start(delay);
		this.finalSymbol = symbol;
	}

	startSynchronized(beatIndex: number, framesPerReel: number) {
		const delay = 60 + beatIndex * framesPerReel;
		this.start(delay);
	}

	requestStop() {
		if (this.stateValue !== 'spinning') return;
		this.stopDelay = 0;
		// Use the same transition as a timed stop so finalSymbol and the strip
		// countdown are initialized before entering the slowing state.
		this.prepareStop();
	}

	update() {
		if (this.stateValue === 'idle') return;

		if (this.stateValue === 'spinning') {
			if (this.speedValue < this.targetSpeed) this.speedValue += 2;
			if (this.stopDelay > 0) this.stopDelay--;
			else this.prepareStop();
		}

		if (this.stateValue === 'slowing') {
			const spinSpeed = this.dependencies.getSpinSpeed();
			const stopSpeed = spinSpeed === 'slow' ? 24 : spinSpeed === 'medium' ? 28 : 32;
			this.speedValue = Math.max(this.speedValue * 0.96, stopSpeed);
		}

		if (this.stateValue === 'bouncing') {
			const springForce = -this.bounceOffsetValue * 0.24;
			this.bounceSpeed = (this.bounceSpeed + springForce) * 0.72;
			this.bounceOffsetValue += this.bounceSpeed;

			if (Math.abs(this.bounceOffsetValue) < 0.35 && Math.abs(this.bounceSpeed) < 0.35) {
				this.stateValue = 'stopped';
				this.bounceOffsetValue = 0;
				this.bounceSpeed = 0;
			}
		}

		if (this.speedValue > 0) {
			this.offsetValue += this.speedValue;

			if (this.offsetValue >= this.dimensions.rowHeight) {
				this.offsetValue -= this.dimensions.rowHeight;
				const currentSymbol = this.advanceSymbolStrip(this.getNextStripSymbol());
				this.dependencies.setSymbol(this.index, currentSymbol);

				if (this.stateValue === 'slowing') {
					this.stopRowsRemaining--;

					if (this.stopRowsRemaining <= 0 && this.finalSymbol) {
						this.dependencies.setSymbol(this.index, this.finalSymbol);
						this.symbolStrip = [
							this.dependencies.randomSymbol(this.index),
							this.finalSymbol,
							currentSymbol,
						];
						this.offsetValue = 0;
						this.startBounce();
					}
				}
			}
		}
	}

	private prepareStop() {
		this.stateValue = 'slowing';
		this.finalSymbol ??= this.dependencies.randomSymbol(this.index);
		this.stopRowsRemaining = 3;
	}

	private startBounce() {
		this.stateValue = 'bouncing';
		this.speedValue = 0;
		this.bounceOffsetValue = 10;
		this.bounceSpeed = -2.6;
		this.dependencies.playStopSound();
		this.dependencies.playDrumHit();
	}

	private getNextStripSymbol() {
		if (this.stateValue === 'slowing' && this.stopRowsRemaining <= 2 && this.finalSymbol) {
			return this.finalSymbol;
		}

		return this.dependencies.randomSymbol(this.index);
	}

	private getSymbolStrip(currentSymbol: SymbolKey) {
		if (this.symbolStrip[1] !== currentSymbol) {
			this.symbolStrip = [
				this.dependencies.randomSymbol(this.index),
				currentSymbol,
				this.dependencies.randomSymbol(this.index),
			];
		}

		return this.symbolStrip;
	}

	private advanceSymbolStrip(nextSymbol: SymbolKey) {
		const [previousSymbol, currentSymbol] = this.symbolStrip;
		const nextCurrentSymbol = previousSymbol ?? currentSymbol ?? this.dependencies.randomSymbol(this.index);

		this.symbolStrip = [
			nextSymbol,
			nextCurrentSymbol,
			currentSymbol ?? this.dependencies.randomSymbol(this.index),
		];

		return nextCurrentSymbol;
	}

	draw() {
		const stage = this.container;

		const symbol = this.dependencies.getSymbol(this.index);
		const symbolTextures = this.dependencies.getSymbolTextures();
		if (!symbol || !symbolTextures || !symbolTextures[symbol]) return;

		const y = Math.round(this.offsetValue + this.bounceOffsetValue);
		const [previousSymbol, currentSymbol, nextSymbol] = this.getSymbolStrip(symbol);

		const drawSymbol = (spriteIndex: number, symbolKey: SymbolKey, yPos: number) => {
			const texture = symbolTextures[symbolKey];
			if (!texture) return;

			const sprite = this.sprites[spriteIndex] ?? new Sprite(texture);
			if (!this.sprites[spriteIndex]) {
				this.sprites[spriteIndex] = sprite;
				stage.addChild(sprite);
			}

			sprite.texture = texture;
			const bleedLeft = this.dimensions.symbolBleedLeft ?? 0;
			const bleedRight = this.dimensions.symbolBleedRight ?? bleedLeft;
			const bleedTop = this.dimensions.symbolBleedTop ?? 0;
			const bleedBottom = this.dimensions.symbolBleedBottom ?? bleedTop;
			sprite.width = this.dimensions.symbolWidth + bleedLeft + bleedRight;
			sprite.height = this.dimensions.symbolHeight + bleedTop + bleedBottom;
			sprite.x = -bleedLeft;
			sprite.y = yPos - bleedTop + (this.dimensions.symbolYOffset ?? 0);
		};

		drawSymbol(0, previousSymbol, y - this.dimensions.rowHeight);
		drawSymbol(1, currentSymbol, y);
		drawSymbol(2, nextSymbol, y + this.dimensions.rowHeight);
	}
}
