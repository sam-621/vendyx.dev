import { Collection as ApiCollection } from '@/common/types/graphql'

export type Collection = Omit<ApiCollection, 'products' | 'assets' | 'labelValues'>
