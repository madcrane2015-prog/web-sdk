import type { SymbolKey } from './types';

export interface BackgroundMusicLoop {
	id: number;
	file: string;
	url: string;
}

export interface StandaloneAssetManifest {
	controlsPath: string;
	symbolUrls: Record<SymbolKey, string>;
	backgroundUrl: string;
	reelFramesUrl: string;
	logoUrl: string;
	soundUrls: {
		spin: string;
		stop: string;
		win: string;
	};
	musicUrls: {
		backgroundLoops: BackgroundMusicLoop[];
		freeSpins: string;
		drumHit: string;
		winTheme: string;
	};
}

const SYMBOL_FILES: Record<SymbolKey, string> = {
	a: 'Blue_hotrod.jpg',
	b: 'Blue_jacket.jpg',
	c: 'Blue_rollers.jpg',
	d: 'Blue_speakers.jpg',
	e: 'Premium_blonde.jpg',
	f: 'Premium_brunette.jpg',
	g: 'Premium_rocker.jpg',
	h: 'New_Wild.jpg',
	i: 'Red_burger.jpg',
	j: 'Red_fries.jpg',
	k: 'Red_milkshake.jpg',
	l: 'Scatter.jpg',
	emptyslot: 'Emptyslot.jpg',
};

export const BACKGROUND_MUSIC_LOOP_IDS = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 17, 18, 19, 20,
] as const;

function joinAssetPath(basePath: string, segment: string) {
	return `${basePath}/${segment}`;
}

export function createStandaloneAssetManifest(
	basePath: string,
	options: { hostname?: string; cacheBust?: string | number } = {},
): StandaloneAssetManifest {
	const isGitHubPages = options.hostname?.includes('github.io') ?? false;
	const appBase = isGitHubPages ? '/web-sdk/oma-peli' : basePath;
	const symbolPath = joinAssetPath(appBase, 'symbols');
	const controlsPath = joinAssetPath(appBase, 'controls');
	const soundPath = joinAssetPath(appBase, 'sounds');
	const musicPath = joinAssetPath(appBase, 'music');
	const cacheBust = options.cacheBust ?? Date.now();

	const symbolUrls = Object.fromEntries(
		Object.entries(SYMBOL_FILES).map(([key, file]) => [key, joinAssetPath(symbolPath, file)]),
	) as Record<SymbolKey, string>;

	return {
		controlsPath,
		symbolUrls,
		backgroundUrl: joinAssetPath(symbolPath, 'bg_base.jpg'),
		reelFramesUrl: `${joinAssetPath(symbolPath, 'ReelFrames.png')}?v=${cacheBust}`,
		logoUrl: joinAssetPath(symbolPath, 'RockABillyReels_logo.png'),
		soundUrls: {
			spin: joinAssetPath(soundPath, 'spin.mp3'),
			stop: joinAssetPath(soundPath, 'stop.mp3'),
			win: joinAssetPath(soundPath, 'win.mp3'),
		},
		musicUrls: {
			backgroundLoops: BACKGROUND_MUSIC_LOOP_IDS.map((id) => ({
				id,
				file: `rockabilly reels loop ${id}.mp3`,
				url: joinAssetPath(musicPath, `rockabilly reels loop ${id}.mp3`),
			})),
			freeSpins: joinAssetPath(musicPath, 'rockabilly-loop_long.mp3'),
			drumHit: joinAssetPath(musicPath, 'drum-hit.mp3'),
			winTheme: joinAssetPath(musicPath, 'win-stinger.mp3'),
		},
	};
}

export function chooseBackgroundMusicLoop(
	loops: BackgroundMusicLoop[],
	currentLoop?: BackgroundMusicLoop,
	rng: () => number = Math.random,
) {
	if (loops.length === 0) {
		throw new Error('No background music loops configured.');
	}

	if (loops.length === 1) {
		return loops[0];
	}

	let nextLoop = loops[Math.floor(rng() * loops.length)];
	if (currentLoop && nextLoop.id === currentLoop.id) {
		const currentIndex = loops.findIndex((loop) => loop.id === currentLoop.id);
		nextLoop = loops[(currentIndex + 1) % loops.length];
	}

	return nextLoop;
}
