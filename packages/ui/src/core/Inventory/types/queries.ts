import type { Product } from './product'

// TODO: Add asset type
export type CommonProduct = Pick<Product, 'id' | 'name' | 'slug' | 'enabled' | 'createdAt'> & {
  assets: (
    | {
        id: string
        source: string
      }
    | undefined
  )[]
  variants: (
    | {
        id: string
        price: number
        stock: number
      }
    | undefined
  )[]
}

export type GetProductsResult = CommonProduct[]

// PIDE LOS PRODUCTOS PERO DEBES DECIR Q COSAS COMO LOS ASSETS A VECES NO VIENEN
