import type { Product } from './product'

// TODO: Add asset type
export type CommonProduct = Pick<Product, 'id' | 'name' | 'slug' | 'enabled' | 'createdAt'> & {
  assets: {
    id: string
    name: string
    source: string
  }[]
  variants: {
    id: string
    price: number
    stock: number
  }[]
}

export type GetProductsResult = CommonProduct[]
