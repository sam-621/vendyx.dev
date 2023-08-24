import { gqlRequest } from '@/core/shared/gql'
import { GetProductsQuery } from '../gql/queries'
import type { GetProductsQueryResult } from '../types/queries'

export const getProducts = async (): Promise<GetProductsQueryResult | null> => {
  const result = await gqlRequest<GetProductsQueryResult>({
    query: GetProductsQuery
  })

  return result
}
