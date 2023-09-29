import type { Asset } from '@/core/asset/types'
import type { Product, Variant } from './product'

export type GetInventoryProductsQueryResult = Pick<
  Product,
  'id' | 'name' | 'slug' | 'enabled' | 'createdAt'
> & {
  assets: (Pick<Asset, 'id' | 'source'> | undefined)[]
  variants: (Pick<Variant, 'id' | 'price' | 'stock'> | undefined)[]
}
