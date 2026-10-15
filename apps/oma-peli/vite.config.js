import { sveltekit } from '@sveltejs/kit/vite';
import { readFileSync } from 'node:fs';

const { version } = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf8'));

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  define: { __OMA_PELI_VERSION__: JSON.stringify(version) },
};

export default config;
