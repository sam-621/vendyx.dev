import type { THashMap } from '../types/commons'

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
export type Dictionary = typeof import('./dictionaries/es.json')
export type Locale = 'en' | 'es'

const dictionaries: THashMap<() => Promise<Dictionary>> = {
  // en: async () => await import('./dictionaries/en.json').then(module => module.default),
  es: async () => await import('./dictionaries/es.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale): Promise<Dictionary> => {
  return await dictionaries[locale]()
}
