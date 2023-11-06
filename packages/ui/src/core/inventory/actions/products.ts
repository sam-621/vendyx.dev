'use server';

import { fetchProducts } from '../services';
import { type BasicProduct } from '../types';

export const getProducts = async (): Promise<BasicProduct[]> => {
  const products = await fetchProducts();

  return products.items;
};
