# Portafolio — Humberto López

Portafolio personal con estética pixel art / RPG gamer, construido con Astro, Tailwind CSS v4 y soporte bilingüe (ES/EN).

## Estructura del proyecto

```text
/
├── .impeccable/                 # Críticas de diseño (impeccable skill)
│   └── critique/
├── public/
│   ├── CV_Humberto_Lopez_EN.pdf
│   ├── CV_Humberto_Lopez_ES.pdf
│   ├── favicon.ico
│   ├── favicon.svg
│   ├── fonts/                   # Fuentes self-hosted (.woff2, .ttf)
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── projects/           # Imágenes optimizadas de proyectos
│   ├── components/
│   │   ├── sections/           # Hero, About, Skills, Experience, Education, Projects, Certs, Contact
│   │   ├── shared/             # Header, Footer
│   │   └── ui/                 # Button
│   ├── content/
│   │   └── projects/           # Colección de proyectos (Markdown bilingüe)
│   ├── i18n/
│   │   ├── es.ts               # Diccionario español
│   │   ├── en.ts               # Diccionario inglés
│   │   └── index.ts            # Helper getDict()
│   ├── layouts/                # Layout.astro (OG tags, SEO, hreflang)
│   ├── lib/                    # tipos.ts, constants.ts
│   ├── pages/
│   │   ├── index.astro         # Página principal (EN default)
│   │   ├── es/index.astro      # Página en español
│   │   └── 404.astro
│   └── styles/
│       └── global.css          # Tailwind tokens + fuentes + animaciones
├── .env                        # PUBLIC_WEB3FORMS_KEY (gitignored)
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
- Fuentes self-hosted — Press Start 2P, JetBrains Mono, IBM Plex Sans (sin CDN)

## i18n

| URL    | Idioma            |
|--------|-------------------|
| `/`    | Inglés (default)  |
| `/es/` | Español           |

Los textos de UI viven en `src/i18n/{es,en}.ts`. Los componentes leen del diccionario según `Astro.currentLocale`. Los títulos y descripciones de proyectos son bilingües dentro de cada archivo `.md` de la colección.

## Contacto (Web3Forms)

La key del formulario se lee de la variable de entorno `PUBLIC_WEB3FORMS_KEY`. En local se define en `.env` (no se sube al repo); en Cloudflare Pages se configura como variable de entorno del proyecto.

## Comandos

| Comando            | Acción                                      |
| :----------------- | :------------------------------------------ |
| `pnpm install`     | Instala dependencias                        |
| `pnpm dev`         | Servidor de desarrollo en `localhost:4321`  |
| `pnpm build`       | Build de producción en `./dist/`            |
| `pnpm preview`     | Previsualiza el build localmente            |
| `pnpm check`       | Type-checking                               |
| `pnpm lint`        | Biome CI (lint)                             |
