import en from './en'
import es from './es'

const dictionaries = { es, en } as const

export type Locale = keyof typeof dictionaries
export type Dict = (typeof dictionaries)[Locale]

export function getDict(locale: Locale): Dict {
	return dictionaries[locale]
}
