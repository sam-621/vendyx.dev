export const CommonProductFragment = /* GraphQL */ `
  fragment CommonProduct on Product {
    variants {
      id
      price
      stock
    }
    id
    createdAt
    updatedAt
    name
    description
    slug
    enabled
    assets {
      id
      name
      source
    }
  }
`
