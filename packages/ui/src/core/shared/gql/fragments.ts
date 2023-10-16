export const CommonAssetFragment = /* GraphQL */ `
  fragment CommonAsset on Asset {
    id
    source
  }
`

export const CommonVariantFragment = /* GraphQL */ `
  fragment CommonVariant on ProductVariant {
    id
    price
    stock
    sku
  }
`

export const CommonCollectionFragment = /* GraphQL */ `
  fragment CommonCollection on Collection {
    id
    name
    slug
  }
`
export const CommonProductFragment = /* GraphQL */ `
  fragment CommonProduct on Product {
    id
    createdAt
    name
    slug
    enabled
  }
`
