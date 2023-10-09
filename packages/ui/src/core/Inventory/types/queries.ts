import type { Asset } from '@/core/asset/types'
import type { ProductVariant } from './product'
import type { Collection } from '@/core/collection/types/collection'
import type { CommonAsset, CommonProduct, CommonVariant, List } from '@/core/shared/types'

export type GetInventoryProductsQueryResult = List<
  CommonProduct & {
    variants: CommonVariant[]
    assets: CommonAsset[]
  }
>

export type GetProductDetailsQueryResult = CommonProduct & {
  description: string
  variants: (Omit<ProductVariant, 'createdAt' | 'updatedAt' | 'enable'> | undefined)[]
  assets: (Pick<Asset, 'id' | 'source'> | undefined)[]
  collections: Pick<Collection, 'id' | 'name' | 'slug'>
}

export type GetProductDetailsArgs = {
  productId: string
}
