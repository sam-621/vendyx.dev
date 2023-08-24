import { CommonProductFragment } from './fragments'

export const GetProductsQuery = /* GraphQL */ `
  query Products {
    products {
      ...CommonProduct
    }
  }

  ${CommonProductFragment}
`
