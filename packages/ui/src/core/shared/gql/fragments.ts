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
  ${CommonAssetFragment}
  ${CommonVariantFragment}

  fragment CommonProduct on Product {
    id
    createdAt
    name
    slug
    enabled
    variants {
      ...CommonVariant
    }
    assets {
      ...CommonAsset
    }
  }
`
