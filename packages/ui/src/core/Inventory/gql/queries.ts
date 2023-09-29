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

export const GetProductDetailsQuery = /* GraphQL */ `
  query GetInventoryProducts($productId: ID!) {
    product(id: $productId) {
      id
      name
      description
      slug
      enabled
      createdAt
      variants {
        id
        price
        costPerProduct
        offerPrice
        stock
        sku
        weight
      }
      assets {
        id
        source
      }
      collections {
        id
        name
        slug
      }
    }
  }
`
