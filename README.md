# Portafolio — Humberto López

Portafolio personal con estética pixel art / RPG gamer, construido con Astro, Tailwind CSS v4 y soporte bilingüe (ES/EN).

## Estructura del proyecto

```text
/
├── public/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── projects/           # Imágenes optimizadas de proyectos
│   ├── components/
│   │   ├── sections/           # Hero, About, Skills, Experience, Education, Projects, Certs, Contact
│   │   ├── shared/             # Header, Footer
│   │   └── ui/                 # Button
│   ├── content/
│   │   └── projects/           # Colección de proyectos (Markdown)
│   ├── i18n/
│   │   ├── es.ts               # Diccionario español
│   │   ├── en.ts               # Diccionario inglés
│   │   └── index.ts            # Helper getDict()
│   ├── layouts/                # Layout.astro (OG tags, SEO, hreflang)
│   ├── lib/                    # tipos.ts, constants.ts
│   ├── pages/
│   │   ├── index.astro         # Página principal (ES/EN via i18n routing)
│   │   └── 404.astro
│   └── styles/
│       └── global.css          # Tailwind tokens + animaciones + scroll-reveal
├── astro.config.mjs            # i18n, sitemap, Tailwind v4
├── biome.json
├── content.config.ts
├── package.json
└── tsconfig.json
```

## Stack

- [Astro](https://astro.build) — Framework + i18n routing
- [Tailwind CSS v4](https://tailwindcss.com) — Estilos + tokens de diseño
- [tailwind-animations](https://tailwind-animations.com) — Animaciones CSS utility-first
- [Biome](https://biomejs.dev) — Linter y formateador
- [Web3Forms](https://web3forms.com) — Formulario de contacto (sin exponer email)
- [Sharp](https://sharp.pixelplumbing.com) — Optimización de imágenes

## i18n

| URL     | Idioma            |
|---      |---                |
| `/`     | Español (default) |
| `/en/`  | Inglés            |

Los textos viven en `src/i18n/{es,en}.ts`. Los componentes leen automáticamente del diccionario según `Astro.currentLocale`.

## Comandos

| Comando            | Acción                                      |
| :----------------- | :------------------------------------------ |
| `pnpm install`     | Instala dependencias                        |
| `pnpm dev`         | Servidor de desarrollo en `localhost:4321`  |
| `pnpm build`       | Build de producción en `./dist/`            |
| `pnpm preview`     | Previsualiza el build localmente            |
| `pnpm check`       | Type-checking                               |
| `pnpm lint`        | Biome CI (lint)                             |
