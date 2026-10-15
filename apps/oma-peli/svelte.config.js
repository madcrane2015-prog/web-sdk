import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),

    // GitHub Pages polku korjattu
    paths: {
      base: dev || process.env.OMA_PELI_BUILD_TARGET === 'stake' ? '' : '/web-sdk/oma-peli'
    },

    prerender: {
      entries: ['*']
    }
  }
};

export default config;
