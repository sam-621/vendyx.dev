import { Injectable } from '@nestjs/common'
import { ProductRepository } from '../repositories'
import { UserInputError } from '@/shared/errors'
import { Asset } from '@/app/asset'
import { Collection } from '@/app/collection'
import { CreateProductInput } from '@/shared/types/graphql'
import { Product, ProductVariant } from '../entities'
import { ID } from '@/shared/entities/entity'
import { isFilledArray } from '@/shared/utils/arrays.util'

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(input: CreateProductInput) {
    const product = Product.fullyValidate(input)

    if (!isFilledArray(input.variants)) {
      return this.productRepository.create(product)
    }

    const variant = ProductVariant.fullyValidate(input.variants[0])

    return this.productRepository.create(product, [variant])
  }

  async findUnique(id: ID, slug: string): Promise<Product | null> {
    if (id) {
      return this.productRepository.findById(id)
    }

    if (slug) {
      return this.productRepository.findBySlug(slug)
    }

    throw new UserInputError('No ID or SLUG provided')
  }

  async findMany(): Promise<Product[]> {
    return this.productRepository.findMany()
  }

  async findVariants(productId: ID): Promise<ProductVariant[]> {
    return this.productRepository.findVariants(productId)
  }

  async findAssets(productId: ID): Promise<Asset[]> {
    return this.productRepository.findAssets(productId)
  }

  async findCollections(productId: ID): Promise<Collection[]> {
    return this.productRepository.findCollections(productId)
  }
}
