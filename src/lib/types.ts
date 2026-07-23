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
	current: boolean
	points: string[]
}

export interface SkillCategory {
	id: string
	title: string
	items: string[]
}

export interface SocialLink {
	label: string
	href: string
	platform: string
}
