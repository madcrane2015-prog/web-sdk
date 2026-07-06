<script lang="ts">
	interface Props {
		controlsPath: string;
		gameScale: number;
		paytableTop: number;
		debugTop: number;
		topRight: number;
		audioTop: number;
		audioRight: number;
		musicEnabled: boolean;
		soundEnabled: boolean;
		gameVersion: string;
		isMobile: boolean;
		onTogglePaytable: () => void;
		onToggleDebug: () => void;
		onToggleMusic: () => void;
		onToggleSound: () => void;
	}

	let {
		controlsPath,
		gameScale,
		paytableTop,
		debugTop,
		topRight,
		audioTop,
		audioRight,
		musicEnabled,
		soundEnabled,
		gameVersion,
		isMobile,
		onTogglePaytable,
		onToggleDebug,
		onToggleMusic,
		onToggleSound,
	}: Props = $props();
</script>

{#if isMobile}
	<div class="mobile-top-actions dev-actions">
		<button
			onclick={onToggleMusic}
			class="icon-button mobile-icon"
			style:background-image="url('{controlsPath}/{musicEnabled
				? 'music_on.png'
				: 'music_off.png'}')"
			title={musicEnabled ? 'Music: ON' : 'Music: OFF'}
			aria-label="Toggle music"
			aria-pressed={musicEnabled}
		></button>
		<button
			onclick={onToggleSound}
			class="icon-button mobile-icon"
			style:background-image="url('{controlsPath}/{soundEnabled
				? 'sounds_on.png'
				: 'sounds_off.png'}')"
			title={soundEnabled ? 'Sound: ON' : 'Sound: OFF'}
			aria-label="Toggle sound"
			aria-pressed={soundEnabled}
		></button>
	</div>
{:else}
	<button
		onclick={onTogglePaytable}
		class="top-action paytable"
		style:top="{paytableTop}px"
		style:right="{topRight}px"
		style:padding="{10 * gameScale}px {15 * gameScale}px"
		style:border-width="{2 * gameScale}px"
		style:border-radius="{8 * gameScale}px"
		style:font-size="{16 * gameScale}px"
		style:min-width="{180 * gameScale}px"
	>
		PAYTABLE
	</button>

	<button
		onclick={onToggleDebug}
		class="top-action debug"
		style:top="{debugTop}px"
		style:right="{topRight}px"
		style:padding="{10 * gameScale}px {15 * gameScale}px"
		style:border-width="{2 * gameScale}px"
		style:border-radius="{8 * gameScale}px"
		style:font-size="{16 * gameScale}px"
		style:min-width="{180 * gameScale}px"
	>
		DEBUG v{gameVersion}
	</button>

	<div
		class="audio-actions"
		style:top="{audioTop}px"
		style:right="{audioRight}px"
		style:gap="{10 * gameScale}px"
	>
		<button
			onclick={onToggleMusic}
			class="icon-button"
			style:width="{50 * gameScale}px"
			style:height="{50 * gameScale}px"
			style:background-image="url('{controlsPath}/{musicEnabled
				? 'music_on.png'
				: 'music_off.png'}')"
			title={musicEnabled ? 'Music: ON' : 'Music: OFF'}
			aria-label="Toggle music"
			aria-pressed={musicEnabled}
		></button>
		<button
			onclick={onToggleSound}
			class="icon-button"
			style:width="{50 * gameScale}px"
			style:height="{50 * gameScale}px"
			style:background-image="url('{controlsPath}/{soundEnabled
				? 'sounds_on.png'
				: 'sounds_off.png'}')"
			title={soundEnabled ? 'Sound: ON' : 'Sound: OFF'}
			aria-label="Toggle sound"
			aria-pressed={soundEnabled}
		></button>
	</div>
{/if}

<style>
	.top-action {
		position: absolute;
		cursor: pointer;
		font-weight: bold;
		color: white;
		text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
		z-index: 1000;
		pointer-events: auto;
		transition:
			filter 120ms ease,
			transform 120ms ease;
	}

	.top-action:hover,
	.top-action:focus-visible,
	.icon-button:hover,
	.icon-button:focus-visible {
		filter: brightness(1.12) drop-shadow(0 0 8px rgba(255, 215, 0, 0.35));
		outline: 2px solid rgba(255, 215, 0, 0.8);
		outline-offset: 2px;
	}

	.top-action:active,
	.icon-button:active {
		transform: translateY(1px) scale(0.98);
	}

	.paytable {
		background-color: rgba(255, 215, 0, 0.3);
		border-style: solid;
		border-color: rgba(255, 215, 0, 0.7);
	}

	.debug {
		background-color: rgba(0, 255, 0, 0.3);
		border-style: solid;
		border-color: rgba(0, 255, 0, 0.7);
		z-index: 10000;
	}

	.audio-actions {
		position: absolute;
		display: flex;
		z-index: 1001;
	}

	.icon-button {
		background-size: contain;
		background-repeat: no-repeat;
		border: none;
		cursor: pointer;
		background-color: transparent;
		border-radius: 8px;
		transition:
			filter 120ms ease,
			transform 120ms ease;
	}

	.mobile-top-actions {
		position: fixed;
		top: max(var(--oma-top-action-inset, 8px), env(safe-area-inset-top));
		right: max(var(--oma-top-action-inset, 8px), env(safe-area-inset-right));
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--oma-top-action-gap, 6px);
		z-index: 4000;
		pointer-events: auto;
	}

	.mobile-icon {
		width: var(--oma-top-action-icon-size, 40px);
		height: var(--oma-top-action-icon-size, 40px);
		flex: 0 0 auto;
	}

	@media (max-width: 768px) and (orientation: portrait),
		(max-width: 900px) and (max-height: 500px) and (orientation: landscape) {
		.mobile-top-actions {
			right: max(8px, env(safe-area-inset-right));
			top: max(8px, env(safe-area-inset-top));
			gap: 5px;
		}

		.top-action {
			position: fixed !important;
			top: max(8px, env(safe-area-inset-top)) !important;
			min-width: 64px !important;
			min-height: 40px !important;
			padding: 7px 9px !important;
			border-width: 1px !important;
			border-radius: 7px !important;
			font-size: 11px !important;
			letter-spacing: 0;
			z-index: 4000;
		}

		.paytable {
			right: calc(164px + env(safe-area-inset-right)) !important;
		}

		.debug {
			right: calc(94px + env(safe-area-inset-right)) !important;
		}

		.audio-actions {
			position: fixed !important;
			top: max(8px, env(safe-area-inset-top)) !important;
			right: max(8px, env(safe-area-inset-right)) !important;
			gap: 6px !important;
			z-index: 4001;
		}

		.audio-actions .icon-button {
			width: 40px !important;
			height: 40px !important;
		}
	}
</style>
