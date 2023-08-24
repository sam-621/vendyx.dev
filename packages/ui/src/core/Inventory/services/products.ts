import { gqlRequest } from '@/core/shared/gql'
import { GetProductsQuery } from '../gql/queries'
import type { GetProductsResult } from '../types/queries'

type GetProductsResponse = { products: GetProductsResult }

export const getProducts = async (): Promise<GetProductsResult | null> => {
  const { products } = await gqlRequest<GetProductsResponse>({
    query: GetProductsQuery
  })

  return products
}
