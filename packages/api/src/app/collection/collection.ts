import { Collection as ApiCollection } from '@/shared/types'

export type Collection = Omit<ApiCollection, 'products' | 'assets' | 'labelValues'>
