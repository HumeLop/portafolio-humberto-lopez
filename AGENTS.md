# Development

Use `pnpm` for all package manager commands and `pnpx` to run binaries:

```bash
pnpm dev              # Start dev server at localhost:4321
pnpm build            # Build for production
pnpm check            # Type-check project
pnpm lint             # Lint all files
pnpx biome check --write  # Format all files
```

## Project structure

``` text
src/
├── assets/projects/       # Optimized project images
├── components/
│   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   ├── shared/            # Shared components (Header, Footer)
│   └── ui/                # Reusable UI (Button)
├── content/projects/      # Content collection: markdown project files
├── i18n/                  # ES/EN dictionaries + helper
├── layouts/               # Layout.astro (OG tags, SEO, hreflang)
├── lib/                   # Types, constants
├── pages/                 # Routes (index.astro handles both locales, 404)
└── styles/                # Tailwind v4 tokens, components, animations
```

## Key files

- `astro.config.mjs` — i18n routing (`es`/`en`), sitemap, Tailwind v4
- `content.config.ts` — Content collection schema (projects)
- `src/i18n/es.ts` `src/i18n/en.ts` — All UI strings and translatable content
- `src/i18n/index.ts` — `getDict(locale)` helper
- `biome.json` — Linter/formatter config (CSS ignored)
- `src/lib/types.ts` — TypeScript interfaces
- `src/lib/constants.ts` — Site metadata, social links, skill stats
- `src/styles/global.css` — Design tokens (colors, fonts), components, animations

## Stack

- **Astro** with i18n routing
- **Tailwind CSS v4** with `@theme` tokens
- **tailwind-animations** for utility-first CSS animations
- **Biome** for linting/formatting
- **Web3Forms** for contact form (no email exposed)

## Documentation

- [Astro docs](https://docs.astro.build)
- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Internationalization (i18n)](https://docs.astro.build/en/guides/internationalization/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [tailwind-animations](https://tailwind-animations.com)
