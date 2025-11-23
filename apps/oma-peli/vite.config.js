import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],

  // TÄRKEÄ: base path GitHub Pagesille
  base: process.argv.includes('dev') ? '' : '/web-sdk/oma-peli/'
};

export default config;
