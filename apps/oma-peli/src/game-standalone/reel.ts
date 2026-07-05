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
			else this.state = 'slowing';
		}

		if (this.state === 'slowing') {
			const spinSpeed = this.dependencies.getSpinSpeed();
			const slowDownFactor = spinSpeed === 'slow' ? 0.88 : spinSpeed === 'medium' ? 0.92 : 0.95;
			this.speed *= slowDownFactor;

			if (this.speed < 2.5) {
				this.state = 'bouncing';
				this.speed = 0;
				this.offset = 0;
				this.bounceOffset = 0;
				this.bounceSpeed = 4;
				this.dependencies.playStopSound();
				this.dependencies.playDrumHit();
			}
		}

		if (this.state === 'bouncing') {
			this.bounceSpeed *= 0.8;
			this.bounceOffset += this.bounceSpeed;

			if (Math.abs(this.bounceSpeed) < 0.2) {
				this.state = 'stopped';
				this.bounceOffset = 0;
				this.bounceSpeed = 0;
			}
		}

		if (this.speed > 0) {
			this.offset += this.speed;

			if (this.offset >= this.dimensions.rowHeight) {
				this.offset = 0;
				this.dependencies.setSymbol(this.index, this.dependencies.randomSymbol(this.index));
			}
		}
	}

	draw() {
		const stage = this.container;

		const symbol = this.dependencies.getSymbol(this.index);
		const symbolTextures = this.dependencies.getSymbolTextures();
		if (!symbol || !symbolTextures || !symbolTextures[symbol]) return;

		const y = this.offset + this.bounceOffset;

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

		drawSymbol(0, symbol, y - this.dimensions.rowHeight);
		drawSymbol(1, symbol, y);
		drawSymbol(2, symbol, y + this.dimensions.rowHeight);
	}
}
