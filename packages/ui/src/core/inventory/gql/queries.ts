import { BasicProductFragment, DetailedProductFragment } from './fragments'

export const GetInventoryProductsQuery = /* GraphQL */ `
  ${BasicProductFragment}

  query GetInventoryProducts {
    products {
      items {
        ...BasicProduct
      }
    }
  }
`

export const GetProductDetailsQuery = /* GraphQL */ `
  ${DetailedProductFragment}

  query GetProductDetails($slug: String!) {
    product(slug: $slug) {
      ...DetailedProduct
    }
  }
`
