import type {
  CommonAsset,
  CommonCollection,
  CommonProduct,
  CommonVariant
} from '@/core/shared/types'

export interface Product {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  description: string
  slug: string
  enabled: boolean
}

export interface ProductVariant {
  id: string
  createdAt: Date
  updatedAt: Date
  enabled: boolean
  price: number
  offerPrice: number
  costPerProduct: number
  stock: number
  sku: string
  weight?: number
}

/* Abstractions */

export type BasicProduct = CommonProduct & {
  variants: CommonVariant[]
  assets: CommonAsset[]
}

export type DetailedProduct = CommonProduct & {
  description: string
  variants: DetailedProductVariant[]
  assets: CommonAsset[]
  collections: CommonCollection[]
}

export type DetailedProductVariant = CommonVariant & {
  costPerProduct: number
  offerPrice: null
  sku: string
  weight: number
}
