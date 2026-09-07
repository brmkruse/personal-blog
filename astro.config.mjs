// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xkruse.com',
  redirects: {
    '/professional': '/xp',
    '/writing': '/interests',
    '/writing/[...slug]': '/interests/[...slug]',
  },
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
