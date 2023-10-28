import { Asset as ApiAsset, AssetType as ApiAssetType } from '@/common/types/graphql'

export const AssetType = { ...ApiAssetType }

export type Asset = Omit<ApiAsset, 'products' | 'collections' | 'productVariants' | 'labelValues'>
