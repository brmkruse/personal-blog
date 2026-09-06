# personal-blog

Personal blog for **Kruse** — a calm Astro + Markdown site for learning in public.

Inspired by the readability of long-form engineering posts (narrow reading column, sticky TOC, muted metadata), but with original design and content. Not an OpenAI brand clone.

## Features

- Astro 7 + TypeScript
- Content collections for Markdown posts
- Sticky header: Home / Writing / About
- Post pages with date + category, large title, byline, share/copy-link, sticky TOC, tags, author blurb, and keep-reading cards
- Responsive layout (TOC becomes a compact sticky bar on mobile)
- SEO meta tags, sitemap, and `robots.txt`
- Sample posts included so the site feels alive on first run

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home intro + latest posts |
| `/writing` | Full post list |
| `/writing/[slug]` | Individual post |
| `/about` | About Kruse |
| `/404` | Not found page |

## Quick start

Requirements: Node.js 22+ (or current LTS that Astro 7 supports) and npm.

```bash
git clone https://github.com/brmkruse/personal-blog.git
cd personal-blog
npm install
npm run dev
```

Then open the local URL Astro prints (usually `http://localhost:4321`).

### Useful scripts

```bash
npm run dev       # local development server
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Project structure

```text
public/                 static files (favicon, robots.txt)
src/
  components/           Header, PostCard, TOC, Share, etc.
  content/blog/         Markdown posts
  content.config.ts     content collection schema
  layouts/              BaseLayout
  pages/                routes
  styles/global.css     design tokens + base styles
astro.config.mjs
package.json
```

## Writing a new post

1. Add a Markdown file in `src/content/blog/`.
2. Include frontmatter like this:

```md
---
title: "My new post"
description: "One or two sentences for previews and SEO."
pubDate: 2026-09-06
category: Learning
tags: [beginner, notes]
---

Your post content goes here.
```

3. Run `npm run dev` and open `/writing`.

Use `draft: true` in frontmatter to hide a post from listings and routes while you edit.

## Deploy to Vercel

1. Push this repo to GitHub (already done if you are reading this on GitHub).
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, and **Import** `brmkruse/personal-blog`.
3. Leave the defaults:
   - Framework Preset: Astro
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Click Deploy.

Optional follow-ups:

- Set a custom domain in the Vercel project settings
- Update `site` in `astro.config.mjs` to your real production URL so sitemap and canonical links stay accurate
- Re-deploy after changing that `site` value

## Design notes

- Font: Inter (Google Fonts)
- White background, black text, muted gray metadata
- Reading column ~580px
- Light gray code blocks
- No audio player

## License

Personal project. Content and code are for Kruse's learning blog.
