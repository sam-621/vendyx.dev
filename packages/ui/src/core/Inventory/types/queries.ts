import type { List } from '@/core/shared/types'
import type { BasicProduct, DetailedProduct } from './product'

// Get inventory products
export type GetInventoryProductsQueryResult = List<BasicProduct>

// Get product details
export type GetProductDetailsQueryResult = DetailedProduct

export type GetProductDetailsArgs = {
  slug: string
}
