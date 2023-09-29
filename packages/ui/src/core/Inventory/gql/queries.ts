export const GetInventoryProductsQuery = /* GraphQL */ `
  query GetInventoryProducts {
    products {
      id
      createdAt
      name
      slug
      enabled
      variants {
        id
        price
        stock
      }
      assets {
        id
        source
      }
    }
  }
`
