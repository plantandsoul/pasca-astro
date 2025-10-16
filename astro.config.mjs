// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [react(), sitemap()],
  image: {
    domains: ['https://superb-canvas-e9f287e8f1.strapiapp.com']
  },
  site: 'https://plantandsoul.org',
});
