import type { Product } from './product'

// TODO: Add asset type
export type CommonProduct = Pick<Product, 'id' | 'name' | 'slug' | 'enabled'> & {
  asset: {
    id: string
    name: string
  }
}

export type GetProductsResult = CommonProduct
