import {
  CommonAssetFragment,
  CommonCollectionFragment,
  CommonProductFragment,
  CommonVariantFragment
} from '@/core/shared/gql'

export const BasicProductFragment = /* GraphQL */ `
  ${CommonProductFragment}
  ${CommonAssetFragment}
  ${CommonVariantFragment}

  fragment BasicProduct on Product {
    ...CommonProduct
    variants {
      ...CommonVariant
    }
    assets {
      ...CommonAsset
    }
  }
`

export const DetailedProductFragment = /* GraphQL */ `
  ${CommonProductFragment}
  ${CommonAssetFragment}
  ${CommonVariantFragment}
  ${CommonCollectionFragment}

  fragment DetailedProduct on Product {
    ...CommonProduct
    description
    variants {
      ...CommonVariant
      costPerProduct
      offerPrice
      sku
      weight
    }
    assets {
      ...CommonAsset
    }
    collections {
      ...CommonCollection
    }
  }
`
