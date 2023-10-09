import {
  CommonAssetFragment,
  CommonProductFragment,
  CommonVariantFragment
} from '@/core/shared/gql/fragments'

export const GetInventoryProductsQuery = /* GraphQL */ `
  query GetInventoryProducts {
    ${CommonProductFragment}
    ${CommonAssetFragment}
    ${CommonVariantFragment}
    
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
