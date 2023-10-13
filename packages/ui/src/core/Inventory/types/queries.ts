import type { List } from '@/core/shared/types'
import type { BasicProduct, DetailedProduct } from './product'

// Get inventory products
export type GetInventoryProductsQueryResult = List<BasicProduct>

// Get product details
export type GetProductDetailsQueryResult = DetailedProduct

export type GetProductDetailsArgs = {
  slug: string
}

// Create Product
export type CreateProductMutationResult = DetailedProduct

export type CreateProductMutationArgs = {
  name: string
  slug: string
  description?: string
  enabled?: boolean
  collectionsIds?: [string]
  assetsIds?: [string]
  labelValuesIds?: [string]
  variants?: {
    price: number
    sku: string
    enabled?: boolean
    stock?: number
    offerPrice?: number
    costPerProduct?: number
    weight?: number

    assetId?: string
  }[]
}
