import { Asset as ApiAsset, AssetType as ApiAssetType } from '@/shared/types'

export const AssetType = { ...ApiAssetType }

export type Asset = Omit<ApiAsset, 'products' | 'collections' | 'productVariants' | 'labelValues'>
