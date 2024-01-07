import { type Asset, type Collection, type Product, type ProductVariant } from '@vendyx/common';

export type GqlQuery<R> = {
  __typename?: 'Query';
  validateAdminToken: R;
  products: R;
  product: R;
};

export type GqlMutation<R> = {
  __typename?: 'Mutation';
  authenticateAdmin: R;
  createProduct: R;
  updateProduct: R;
  removeProduct: R;
};

export type List<T> = {
  items: T[];
  count: number;
};

export type CommonAsset = Pick<Asset, 'id' | 'source'>;

export type CommonProductVariant = Pick<ProductVariant, 'id' | 'price' | 'stock' | 'sku'>;

export type CommonCollection = Pick<Collection, 'id' | 'name' | 'slug'>;

export type CommonProduct = Pick<Product, 'id' | 'createdAt' | 'name' | 'slug' | 'enabled'>;
