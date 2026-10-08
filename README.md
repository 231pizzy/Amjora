# Amjora — Corporate Website

Finding Ways.

Production website for **Amjora** (legal entity: Amjora Forge Limited), built with React, Vite, Tailwind CSS and Framer Motion. Content and visual direction are sourced from the Amjora Master Brand Blueprint.

## Stack

- **React 19** + **Vite** (JavaScript, no TypeScript)
- **Tailwind CSS v4** (CSS-first theme in `src/index.css`, no `tailwind.config.js` needed)
- **React Router v7** for routing, with route-level code splitting via `React.lazy`
- **Framer Motion** for scroll reveals and transitions (respects `prefers-reduced-motion`)
- **Lucide React** for icons
- **react-helmet-async** for per-page SEO (title, meta, canonical, Open Graph, Twitter Card, JSON-LD)

## Getting started

```bash
npm install
npm run dev       # start local dev server
npm run build     # production build to dist/
npm run preview   # preview the production build
npm run lint      # oxlint
```

## Project structure

```
src/
  components/
    layout/     Navbar, MobileMenu, Footer, Layout (route shell)
    ui/         Logo, Button, SEO, PageHero, Reveal/StaggerGroup animation primitives
    sections/   Homepage sections (Hero, Ecosystem, FinderCulture, Roadmap, etc.)
  data/         Single source of truth for brand copy, products, nav and insights content
  lib/          JSON-LD schema builders (Organization, WebSite, Article, Breadcrumb)
  pages/        One file per route, incl. products/ and dynamic product & insight detail pages
public/
  favicon.svg, og-image.png, robots.txt, sitemap.xml
```

## Brand notes for whoever picks this up next

- **Logo**: `src/components/ui/Logo.jsx` recreates the Amjora mark described in the brand
  blueprint (geometric "A", cyan accent stroke) as inline SVG, since no vector export of the
  official logo was available at build time. Swap the `<path>` data for the official asset
  when you have it — do not change the proportions or color roles elsewhere on the site.
- **Typeface**: the blueprint specifies Gilroy, a commercial font not available via open font
  CDNs. The site currently loads **Plus Jakarta Sans** (Google Fonts) as a geometric,
  Gilroy-adjacent substitute. Swap the `<link>` in `index.html` and the `--font-sans` token in
  `src/index.css` if you license Gilroy.
- **Contact form**: `src/pages/Contact.jsx` validates and confirms client-side only — there is
  no backend wired up yet. Connect it to an email/CRM endpoint before launch.
- **Legal pages**: `Privacy.jsx` and `Terms.jsx` contain template policy language. Have counsel
  review before treating them as final.
- **Unreleased products**: Amjora Payments, AI, Cloud and Health are represented as roadmap
  items, not shipped products, throughout `src/data/products.js` and the pages that read from
  it — keep that distinction if you edit copy.

## SEO

Every route sets a unique title/description via the `<SEO />` component, with canonical URLs,
Open Graph + Twitter Card tags, and JSON-LD (`Organization`, `WebSite`, `Article` on insight
pages, `BreadcrumbList` on interior pages). `public/sitemap.xml` and `public/robots.txt` list
all routes — update both if you add or remove pages.
