import {
  type CommonAsset,
  type CommonCollection,
  type CommonProduct,
  type CommonProductVariant,
  type List
} from './common.type';

/** Operations */

export type GetProductsQueryResult = List<BasicProduct>;

export type GetProductDetailsQueryResult = DetailedProduct;
export type GetProductDetailsArgs = {
  slug: string;
};

/** Fragments */

export type BasicProduct = CommonProduct & {
  variants: List<CommonProductVariant | null>;
  assets: List<CommonAsset | null>;
};

export type DetailedProduct = CommonProduct & {
  description: string;
  variants: List<DetailedProductVariant | null>;
  assets: List<CommonAsset | null>;
  collections: List<CommonCollection | null>;
};

export type DetailedProductVariant = CommonProductVariant & {
  costPerProduct: number;
  offerPrice: null;
  weight: number;
};
