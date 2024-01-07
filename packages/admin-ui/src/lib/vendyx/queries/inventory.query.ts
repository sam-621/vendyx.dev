import { BasicProductFragment, DetailedProductFragment } from '../fragments';

export const GetProductsQuery = /* GraphQL */ `
  ${BasicProductFragment}

  query GetProductsQuery {
    products {
      items {
        ...BasicProduct
      }
    }
  }
`;

export const GetProductDetailsQuery = /* GraphQL */ `
  ${DetailedProductFragment}

  query GetProductDetails($slug: String!) {
    product(slug: $slug) {
      ...DetailedProduct
    }
  }
`;
