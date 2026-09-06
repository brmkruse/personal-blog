---
title: "Building a Tiny Blog With Astro"
description: "A beginner walkthrough of scaffolding a personal blog with Astro, Markdown, and a calm reading layout."
pubDate: 2026-09-05
category: Engineering
tags: [astro, markdown, web, beginners]
---

I wanted a personal blog that felt calm to read and simple to maintain. Not a giant CMS. Not a pile of plugins. Just Markdown files, a clean layout, and a site I could understand.

Astro turned out to be a great fit for that goal.

## Why Astro felt approachable

Astro ships mostly static HTML by default. That means fewer moving parts for a content site. I can write posts in Markdown, keep metadata in frontmatter, and generate pages at build time.

As a beginner, that mental model is easier than "everything is a client-side app."

## The shape of the project

Here is the basic structure I aimed for:

- `src/pages` for routes like Home, Writing, and About
- `src/content/blog` for Markdown posts
- `src/components` for reusable pieces like the header and post cards
- `src/layouts` for shared page shells

That separation helped me find things quickly.

## Frontmatter keeps posts organized

Each post starts with a small block of metadata. Mine looks like this:

```md
---
title: "Building a Tiny Blog With Astro"
description: "A beginner walkthrough of scaffolding a personal blog."
pubDate: 2026-09-05
category: Engineering
tags: [astro, markdown, beginners]
---
```

With a content collection schema, Astro can check that required fields exist. That saves me from broken list pages later.

## Layout choices that matter for reading

I copied the *feel* of calm long-form writing sites without copying their branding:

1. A sticky header with a short site name and a few links
2. A centered reading column around 580px wide
3. Muted gray metadata above a large title
4. A left sticky table of contents on desktop
5. Light gray code blocks that stay quiet on the page

On mobile, the table of contents becomes a compact sticky bar so the page still stays usable.

## A beginner checklist for shipping

If you are building your first Astro blog, this checklist helped me:

- Create the project and confirm `npm run dev` works
- Add one Markdown post and render it on a dynamic route
- Style the reading experience before adding fancy features
- Write an About page and a 404 page early
- Add SEO basics: title, description, sitemap, robots.txt
- Commit often with clear messages

## What I would tell past me

Do not wait for a perfect design system. Start with white space, readable type, and consistent spacing. A blog becomes useful the moment it has a few honest posts and a layout that does not fight the reader.

That is the version I am shipping now — and improving one commit at a time.
