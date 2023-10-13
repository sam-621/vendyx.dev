import { gqlRequest } from '@/core/shared/gql'
import { GetInventoryProductsQuery, GetProductDetailsQuery } from '../gql/queries'
import type {
  CreateProductMutationArgs,
  CreateProductMutationResult,
  GetInventoryProductsQueryResult,
  GetProductDetailsArgs,
  GetProductDetailsQueryResult
} from '../types/queries'
import { CreateProductMutation } from '../gql'

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

type CreateProductResponse = { createProduct: CreateProductMutationResult | null }

export const createProduct = async (
  args: CreateProductMutationArgs
): Promise<CreateProductMutationResult | null> => {
  const { createProduct } = await gqlRequest<CreateProductResponse, CreateProductMutationArgs>({
    query: CreateProductMutation,
    variables: args
  })

  return createProduct
}
