import {
  CommonAssetFragment,
  CommonCollectionFragment,
  CommonProductFragment,
  CommonVariantFragment
} from '@/core/shared/gql'

export const GetInventoryProductsQuery = /* GraphQL */ `
  ${CommonProductFragment}
  ${CommonAssetFragment}
  ${CommonVariantFragment}

  query GetInventoryProducts {
    products {
      items {
        ...CommonProduct
        variants {
          ...CommonVariant
        }
        assets {
          ...CommonAsset
        }
      }
    }
  }
`

export const GetProductDetailsQuery = /* GraphQL */ `
  ${CommonProductFragment}
  ${CommonAssetFragment}
  ${CommonVariantFragment}
  ${CommonCollectionFragment}

  query GetProductDetails($slug: String!) {
    product(slug: $slug) {
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
  }
`
