import { gqlRequest } from '@/core/shared/gql'
import { GetInventoryProductsQuery, GetProductDetailsQuery } from '../gql/queries'
import type {
  GetInventoryProductsQueryResult,
  GetProductDetailsArgs,
  GetProductDetailsQueryResult
} from '../types/queries'

type GetProductsResponse = { products: GetInventoryProductsQueryResult }

export const getProducts = async (): Promise<GetInventoryProductsQueryResult> => {
  const { products } = await gqlRequest<GetProductsResponse>({
    query: GetInventoryProductsQuery
  })

  return products
}

type GetProductDetailsResponse = { product: GetProductDetailsQueryResult | null }

export const getProductDetails = async (
  args: GetProductDetailsArgs
): Promise<GetProductDetailsQueryResult | null> => {
  const { product } = await gqlRequest<GetProductDetailsResponse, GetProductDetailsArgs>({
    query: GetProductDetailsQuery,
    variables: args
  })

  return product
}
