import { gqlRequest } from '@/core/shared/gql'
import { GetInventoryProductsQuery } from '../gql/queries'
import type { GetInventoryProductsQueryResult } from '../types/queries'

type GetProductsResponse = { products: GetInventoryProductsQueryResult }

export const getProducts = async (): Promise<GetInventoryProductsQueryResult | null> => {
  const { products } = await gqlRequest<GetProductsResponse>({
    query: GetInventoryProductsQuery
  })

  return products
}
