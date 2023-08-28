import { CommonProductFragment } from './fragments'

export const GetProductsQuery = /* GraphQL */ `
  ${CommonProductFragment}

  query Products {
    products {
      ...CommonProduct
    }
  }
`
