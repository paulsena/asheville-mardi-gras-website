import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://paulsena.github.io',
  base: process.env.BASE_PATH ?? '/asheville-mardi-gras-website',
  trailingSlash: 'ignore',
});
