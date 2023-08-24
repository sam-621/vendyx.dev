import type { Product } from './product'

export type GetProductsResult = Pick<Product, 'id' | 'name' | 'slug' | 'enabled'> & {
  asset: {
    id: string
    name: string
  }
}
