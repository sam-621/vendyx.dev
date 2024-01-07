import { vendyxFetch } from '@/lib/vendyx';
import { GetProductsQuery } from '@/lib/vendyx/queries';
import {
  type GetProductDetailsArgs,
  type GetProductDetailsQueryResult,
  type GetProductsQueryResult,
  type GqlQuery
} from '@/lib/vendyx/types';

export const getProductsFetcher = async () => {
  const {
    data: { products }
  } = await vendyxFetch<GqlQuery<GetProductsQueryResult>>({ query: GetProductsQuery });

  return products;
};

export const getProductDetailsFetcher = async (input: GetProductDetailsArgs) => {
  const {
    data: { product }
  } = await vendyxFetch<GqlQuery<GetProductDetailsQueryResult>, GetProductDetailsArgs>({
    query: GetProductsQuery,
    variables: { input }
  });

  return product;
};
