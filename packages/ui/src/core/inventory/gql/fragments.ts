import {
  CommonAssetFragment,
  CommonCollectionFragment,
  CommonProductFragment,
  CommonVariantFragment
} from '@/core/shared/gql';

export const BasicProductFragment = /* GraphQL */ `
  ${CommonProductFragment}
  ${CommonAssetFragment}
  ${CommonVariantFragment}

  fragment BasicProduct on Product {
    ...CommonProduct
    variants {
      items {
        ...CommonVariant
      }
    }
    assets {
      items {
        ...CommonAsset
      }
    }
  }
`;

export const DetailedProductFragment = /* GraphQL */ `
  ${CommonProductFragment}
  ${CommonAssetFragment}
  ${CommonVariantFragment}
  ${CommonCollectionFragment}

  fragment DetailedProduct on Product {
    ...CommonProduct
    description
    variants {
      items {
        ...CommonVariant
        costPerProduct
        offerPrice
        weight
      }
    }
    assets {
      items {
        ...CommonAsset
      }
    }
    collections {
      items {
        ...CommonCollection
      }
    }
  }
`;
