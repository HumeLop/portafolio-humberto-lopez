import type { SkillStat, SocialLink } from './types'

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

export const SKILL_STATS: SkillStat[] = [
	{
		id: 'STR',
		title: 'Backend',
		items: ['Java', 'Spring Boot', 'Python', 'PHP', 'Laravel'],
		level: 5,
	},
	{
		id: 'DEX',
		title: 'Frontend',
		items: ['Angular', 'React', 'Vue', 'Ionic', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
		level: 8,
	},
	{
		id: 'INT',
		title: 'Bases de datos',
		items: ['Oracle · Apex', 'MariaDB', 'MongoDB', 'SQL Server', 'Firebase'],
		level: 5,
	},
	{
		id: 'WIS',
		title: 'Control de versiones',
		items: ['Git', 'GitLab', 'GitHub'],
		level: 3,
	},
	{
		id: 'CHA',
		title: 'Metodologías',
		items: ['Scrum'],
		level: 1,
	},
]
