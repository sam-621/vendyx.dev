import type {
  CommonAsset,
  CommonCollection,
  CommonProduct,
  CommonVariant,
  List
} from '@/core/shared/types'

export type GetInventoryProductsQueryResult = List<
  CommonProduct & {
    variants: CommonVariant[]
    assets: CommonAsset[]
  }
>

export type GetProductDetailsQueryResult = CommonProduct & {
  description: string
  variants: CommonVariant & {
    costPerProduct: number
    offerPrice: null
    sku: string
    weight: number
  }
  assets: CommonAsset[]
  collections: CommonCollection[]
}

export type GetProductDetailsArgs = {
  slug: string
}
