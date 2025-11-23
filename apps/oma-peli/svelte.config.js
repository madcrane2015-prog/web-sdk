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

    // Tämä on GitHub Pages -julkaisun kannalta tärkein osa:
    paths: {
      base: dev ? '' : '/web-sdk/oma-peli'
    },

    prerender: {
      entries: ['*']
    }
  }
};

export default config;
