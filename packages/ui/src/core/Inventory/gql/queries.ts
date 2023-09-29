export const GetProductsQuery = /* GraphQL */ `
  query GetInventoryTableProducts {
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
