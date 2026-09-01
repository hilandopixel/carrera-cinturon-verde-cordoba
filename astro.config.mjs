import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // URL canónica fija necesaria para que @astrojs/sitemap no falle en el primer build
  site: 'https://carreracinturonverdecordoba.vercel.app',
  integrations: [
    tailwind()
  ],
  output: 'static'
});