import { DetailedProductFragment } from './fragments'

export const CreateProductMutation = /* GraphQL */ `
  ${DetailedProductFragment}

  mutation CreateProduct($input: CreateProductInput!) {
    createProduct(input: $input) {
      ...DetailedProduct
    }
  }
`
