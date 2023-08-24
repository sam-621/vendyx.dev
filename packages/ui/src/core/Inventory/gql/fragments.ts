export const CommonProductFragment = /* GraphQL */ `
  fragment CommonProduct on Product {
    id
    name
    slug
    enabled
    assets {
      id
      name
    }
  }
`
