import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const siteUrl = process.env.VERCEL_URL 
  ? `https://${process.env.VERCEL_URL}` 
  : 'https://carreracinturonverdecordoba.vercel.app';

export default defineConfig({
  site: siteUrl,
  integrations: [
    tailwind(),
    sitemap()
  ],
  output: 'static'
});