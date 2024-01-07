import {
  CommonAssetFragment,
  CommonCollectionFragment,
  CommonProductFragment,
  CommonVariantFragment
} from './common.fragment';

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
