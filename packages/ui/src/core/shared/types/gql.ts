import { type Asset } from '@/core/assets/types';
import { type Collection } from '@/core/collections/types';
import { type Product, type ProductVariant } from '@/core/inventory/types';

export type List<T> = {
  items: T[];
  count: number;
};

export type CommonAsset = Pick<Asset, 'id' | 'source'>;

export type CommonProductVariant = Pick<ProductVariant, 'id' | 'price' | 'stock' | 'sku'>;

export type CommonCollection = Pick<Collection, 'id' | 'name' | 'slug'>;

export type CommonProduct = Pick<Product, 'id' | 'createdAt' | 'name' | 'slug' | 'enabled'>;
