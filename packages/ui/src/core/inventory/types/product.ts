import type {
  CommonAsset,
  CommonCollection,
  CommonProduct,
  CommonProductVariant
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
  variants: (CommonProductVariant | null)[];
  assets: (CommonAsset | null)[];
};

export type DetailedProduct = CommonProduct & {
  description: string;
  variants: (DetailedProductVariant | null)[];
  assets: (CommonAsset | null)[];
  collections: (CommonCollection | null)[];
};

export type DetailedProductVariant = CommonProductVariant & {
  costPerProduct: number;
  offerPrice: null;
  weight: number;
};
