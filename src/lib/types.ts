export interface Project {
	title: string
	description: string
	stack: string[]
	image?: string
	url?: string
	featured: boolean
}

export interface Job {
	company: string
	role: string
	period: string
	active: boolean
	objectives: string[]
}

export interface SkillStat {
	id: string
	title: string
	items: string[]
	level: number
}

export interface SocialLink {
	label: string
	href: string
	platform: 'linkedin' | 'github'
}

export interface ProjectEntry {
	id: string
	data: Project
}
