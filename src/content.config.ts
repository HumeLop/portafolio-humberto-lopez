import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			stack: z.array(z.string()),
			image: image().optional(),
			url: z.string().url().optional(),
			featured: z.boolean().default(false),
		}),
})

export const collections = { projects }
