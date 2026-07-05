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
		onTogglePaytable,
		onToggleDebug,
		onToggleMusic,
		onToggleSound,
	}: Props = $props();
</script>

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
		style:background-image="url('{controlsPath}/{musicEnabled ? 'music_on.png' : 'music_off.png'}')"
		title={musicEnabled ? 'Music: ON' : 'Music: OFF'}
		aria-label="Toggle music"
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
	></button>
</div>

<style>
	.top-action {
		position: absolute;
		cursor: pointer;
		font-weight: bold;
		color: white;
		text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
		z-index: 1000;
		pointer-events: auto;
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
	}
</style>
