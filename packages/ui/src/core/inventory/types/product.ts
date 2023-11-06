import type {
  CommonAsset,
  CommonCollection,
  CommonProduct,
  CommonProductVariant,
  List
} from '@/core/shared/types';

export interface Product {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  slug: string;
  enabled: boolean;
}

export interface ProductVariant {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  enabled: boolean;
  price: number;
  offerPrice: number;
  costPerProduct: number;
  stock: number;
  sku: string;
  weight?: number;
}

/* Abstractions */

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
