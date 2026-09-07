// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xkruse.com',
  // Static-only redirects here. Catch-all /writing/* lives in vercel.json
  // (Astro needs an adapter for dynamic redirect patterns).
  redirects: {
    '/professional': '/xp',
    '/writing': '/interests',
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
