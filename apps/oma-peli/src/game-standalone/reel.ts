import { Container, Sprite, type Texture } from 'pixi.js';
import type { SpinSpeed, SymbolKey } from './types';

export type ReelState = 'idle' | 'spinning' | 'slowing' | 'bouncing' | 'stopped';

export interface ReelDimensions {
	symbolWidth: number;
	symbolHeight: number;
	rowHeight: number;
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
	index: number;
	container: Container;
	offset = 0;
	speed = 0;
	targetSpeed = 30;
	state: ReelState = 'idle';
	stopDelay = 0;
	bounceOffset = 0;
	bounceSpeed = 0;
	bounceFrames = 0;
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
		this.state = 'spinning';
		this.speed = 0;
		this.targetSpeed = 35;
		this.stopDelay = delay;
		this.symbolStrip = [];
		this.finalSymbol = null;
		this.stopRowsRemaining = 0;
	}

	startSynchronized(beatIndex: number, framesPerReel: number) {
		const delay = 60 + beatIndex * framesPerReel;
		this.start(delay);
	}

	update() {
		if (this.state === 'idle') return;

		if (this.state === 'spinning') {
			if (this.speed < this.targetSpeed) this.speed += 2;
			if (this.stopDelay > 0) this.stopDelay--;
			else this.prepareStop();
		}

		if (this.state === 'slowing') {
			const spinSpeed = this.dependencies.getSpinSpeed();
			const slowDownFactor = spinSpeed === 'slow' ? 0.88 : spinSpeed === 'medium' ? 0.92 : 0.95;
			this.speed *= slowDownFactor;
			this.speed = Math.max(this.speed, 2.5);
		}

		if (this.state === 'bouncing') {
			const springForce = -this.bounceOffset * 0.24;
			this.bounceSpeed = (this.bounceSpeed + springForce) * 0.72;
			this.bounceOffset += this.bounceSpeed;

			if (Math.abs(this.bounceOffset) < 0.35 && Math.abs(this.bounceSpeed) < 0.35) {
				this.state = 'stopped';
				this.bounceOffset = 0;
				this.bounceSpeed = 0;
			}
		}

		if (this.speed > 0) {
			this.offset += this.speed;

			if (this.offset >= this.dimensions.rowHeight) {
				this.offset -= this.dimensions.rowHeight;
				const currentSymbol = this.advanceSymbolStrip(this.getNextStripSymbol());
				this.dependencies.setSymbol(this.index, currentSymbol);

				if (this.state === 'slowing') {
					this.stopRowsRemaining--;

					if (this.stopRowsRemaining <= 0 && this.finalSymbol) {
						this.dependencies.setSymbol(this.index, this.finalSymbol);
						this.symbolStrip = [
							this.dependencies.randomSymbol(this.index),
							this.finalSymbol,
							currentSymbol,
						];
						this.offset = 0;
						this.startBounce();
					}
				}
			}
		}
	}

	private prepareStop() {
		this.state = 'slowing';
		this.finalSymbol = this.dependencies.randomSymbol(this.index);
		this.stopRowsRemaining = 4;
	}

	private startBounce() {
		this.state = 'bouncing';
		this.speed = 0;
		this.bounceOffset = 10;
		this.bounceSpeed = -2.6;
		this.dependencies.playStopSound();
		this.dependencies.playDrumHit();
	}

	private getNextStripSymbol() {
		if (this.state === 'slowing' && this.stopRowsRemaining <= 2 && this.finalSymbol) {
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

		const y = Math.round(this.offset + this.bounceOffset);
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
			sprite.width = this.dimensions.symbolWidth;
			sprite.height = this.dimensions.symbolHeight;
			sprite.x = 0;
			sprite.y = yPos;
		};

		drawSymbol(0, previousSymbol, y - this.dimensions.rowHeight);
		drawSymbol(1, currentSymbol, y);
		drawSymbol(2, nextSymbol, y + this.dimensions.rowHeight);
	}
}
