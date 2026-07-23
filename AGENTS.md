## Development

Use `pnpm` for all package manager commands and `pnpx` to run binaries:

```bash
pnpm dev              # Start dev server at localhost:4321
pnpm build            # Build for production
pnpm astro check      # Type-check project
pnpx biome ci         # Lint all files
pnpx biome check --write  # Format all files
```

## Project structure

```
src/
├── assets/projects/       # Optimized project images
├── components/
│   ├── sections/          # Page sections (Hero, About, Skills, etc.)
│   ├── shared/            # Shared components (Header, Footer)
│   └── ui/                # Reusable UI (Button, Card, Badge)
├── content/projects/      # Content collection: markdown project files
├── layouts/               # Page layouts (BaseLayout)
├── lib/                   # Types, constants, utilities
├── pages/                 # Routes (index.astro)
└── styles/                # Global CSS with Tailwind design tokens
```

## Key files

- `content.config.ts` — Content collection schema (projects)
- `biome.json` — Linter/formatter config (CSS ignored, Astro overrides)
- `astro.config.mjs` — Astro config with Tailwind v4 Vite plugin
- `src/lib/types.ts` — TypeScript interfaces
- `src/lib/constants.ts` — Site metadata and social links

## Documentation

- [Astro docs](https://docs.astro.build)
- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
