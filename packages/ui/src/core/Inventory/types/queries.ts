import type { Product } from './product'

export type GetProductsQueryResult = Pick<Product, 'id' | 'name' | 'slug' | 'enabled'> & {
  asset: {
    id: string
    name: string
  }
}
