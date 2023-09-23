import { Asset as ApiAsset } from '@/common/types/graphql'

export type Asset = Omit<ApiAsset, 'products' | 'collections' | 'productVariants' | 'labelValues'>
