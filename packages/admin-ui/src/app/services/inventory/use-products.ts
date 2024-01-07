import { type ErrorResult } from '@vendyx/common';

import { useQuery } from '@/lib/query-client';
import { type GetProductsQueryResult } from '@/lib/vendyx/types';

import { getProductsFetcher, InventoryKeys } from './fetcher';

type QueryFnData = GetProductsQueryResult;
type TError = ErrorResult;

export const useProducts = () => {
  const { data, isLoading } = useQuery<QueryFnData, TError>(
    InventoryKeys.products,
    getProductsFetcher
  );

  return {
    products: data,
    isLoading
  };
};
