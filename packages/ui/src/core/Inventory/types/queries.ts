import type { Asset } from '@/core/asset/types'
import type { Product, ProductVariant } from './product'
import type { Collection } from '@/core/collection/types/collection'
import type { List } from '@/core/shared/types'

export type GetInventoryProductsQueryResult = List<
  Pick<Product, 'id' | 'name' | 'slug' | 'enabled' | 'createdAt'> & {
    variants: (Pick<ProductVariant, 'id' | 'price' | 'stock'> | undefined)[]
    assets: (Pick<Asset, 'id' | 'source'> | undefined)[]
  }
>

export type GetProductDetailsQueryResult = Pick<
  Product,
  'id' | 'name' | 'description' | 'slug' | 'enabled' | 'createdAt'
> & {
  variants: (Omit<ProductVariant, 'createdAt' | 'updatedAt' | 'enable'> | undefined)[]
  assets: (Pick<Asset, 'id' | 'source'> | undefined)[]
  collections: Pick<Collection, 'id' | 'name' | 'slug'>
}

export type GetProductDetailsArgs = {
  productId: string
}
