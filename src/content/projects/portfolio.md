---
title:
  es: 'Portafolio — Humberto López'
  en: 'Portfolio — Humberto Lopez'
description:
  es: 'Portafolio personal con estética pixel art / RPG, bilingüe (ES/EN) y optimizado para rendimiento: fuentes self-hosted, CSS inline y contraste AA. Construido con Astro y Tailwind CSS v4.'
  en: 'Personal portfolio with a pixel art / RPG aesthetic, bilingual (ES/EN) and performance-optimized: self-hosted fonts, inlined CSS and AA contrast. Built with Astro and Tailwind CSS v4.'
image: '../../assets/projects/portafolio-hl.png'
stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'i18n', 'SEO', 'Web3Forms']
featured: true
url: 'https://github.com/HumeLop/portafolio-humberto-lopez'
---

**Portafolio personal** con estética retro gamer, desarrollado para mostrarme como desarrollador fullstack mientras demuestro buenas prácticas de frontend moderno.

## Decisiones clave

- **Astro + i18n routing** — Sitio estático con dos idiomas (`/` EN, `/es/` ES) sin JavaScript de más
- **Rendimiento medible** — Fuentes self-hosted en lugar de Google CDN, CSS inline, preload de fuentes y contraste WCAG AA (auditado con PageSpeed)
- **UI con identidad** — Diseño pixel art / RPG que convierte cada sección en una metáfora de videojuego (STATS.sav, QUEST_LOG, TROPHIES.unlocked)

## Stack

- **Framework**: Astro 7 (i18n, sitemap, content collections)
- **Estilos**: Tailwind CSS v4 + tailwind-animations
- **Formulario**: Web3Forms (sin backend, sin exponer email)
- **Calidad**: Biome, `astro check`, build estático en Cloudflare Pages
