import type { Asset } from '@/core/asset/types'
import type { Product, Variant } from './product'
import type { Collection } from '@/core/collection/types/collection'

export type GetInventoryProductsQueryResult = (Pick<
  Product,
  'id' | 'name' | 'slug' | 'enabled' | 'createdAt'
> & {
  variants: (Pick<Variant, 'id' | 'price' | 'stock'> | undefined)[]
  assets: (Pick<Asset, 'id' | 'source'> | undefined)[]
})[]

export type GetProductDetailsQueryResult = Pick<
  Product,
  'id' | 'name' | 'description' | 'slug' | 'enabled' | 'createdAt'
> & {
  variants: (Omit<Variant, 'createdAt' | 'updatedAt' | 'enable'> | undefined)[]
  assets: (Pick<Asset, 'id' | 'source'> | undefined)[]
  collections: Pick<Collection, 'id' | 'name' | 'slug'>
}

export type GetProductDetailsArgs = {
  productId: string
}
