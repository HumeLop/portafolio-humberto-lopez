import type { SocialLink } from './types'

export const SITE = {
	name: 'Humberto López',
	title: 'Portafolio — Humberto López',
	description: 'Ingeniero en Desarrollo y Gestión de Software',
	url: 'https://humberto-lopez.dev',
} as const

export const SOCIAL_LINKS: SocialLink[] = [
	{
		label: 'LinkedIn',
		href: 'https://www.linkedin.com/in/humberto-lopez24/',
		platform: 'linkedin',
	},
	{
		label: 'GitHub',
		href: 'https://github.com/HumeLop',
		platform: 'github',
	},
]
