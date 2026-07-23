# Portafolio — Humberto López

Portafolio personal construido con Astro y Tailwind CSS.

## Estructura del proyecto

```text
/
├── public/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── projects/         # Imágenes optimizadas de proyectos
│   ├── components/
│   │   ├── sections/         # Secciones de página (Hero, About, Skills, Experience, Education, Projects, Certifications, Contact)
│   │   ├── shared/           # Componentes globales (Header, Footer)
│   │   └── ui/               # Componentes reutilizables (Button, Card, Badge)
│   ├── content/
│   │   └── projects/         # Colección de proyectos (Markdown)
│   ├── layouts/              # Layouts base
│   ├── lib/                  # Tipos, constantes y utilidades
│   ├── pages/                # Rutas
│   └── styles/               # CSS global con tokens de diseño Tailwind
├── astro.config.mjs
├── biome.json
├── content.config.ts        # Schema de colecciones de contenido
├── package.json
└── tsconfig.json
```

## Stack

- [Astro](https://astro.build) — Framework
- [Tailwind CSS v4](https://tailwindcss.com) — Estilos
- [Biome](https://biomejs.dev) — Linter y formateador
- [Web3Forms](https://web3forms.com) — Formulario de contacto (sin exponer email)

## Comandos

| Comando                   | Acción                                      |
| :------------------------ | :------------------------------------------ |
| `pnpm install`            | Instala dependencias                        |
| `pnpm dev`                | Servidor de desarrollo en `localhost:4321`   |
| `pnpm build`              | Build de producción en `./dist/`             |
| `pnpm preview`            | Previsualiza el build localmente             |
| `pnpm astro check`        | Type-checking de todo el proyecto            |
