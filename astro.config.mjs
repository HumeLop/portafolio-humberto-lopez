// @ts-check

import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

export default defineConfig({
	site: 'https://humberto-lopez.dev',
	i18n: {
		locales: ['es', 'en'],
		defaultLocale: 'es',
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
})
