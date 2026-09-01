import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://carreracinturonverdecordoba.vercel.app',
  output: 'hybrid', // Permite renderizado estático + funciones API
  adapter: vercel(),
  integrations: [tailwind()]
});