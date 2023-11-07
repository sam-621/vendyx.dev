import { Injectable } from '@nestjs/common'
import { ProductRepository } from '../repositories'
import { Product, ProductVariant } from '../inventory'
import { UserInputError } from '@/shared/errors'
import { ID } from '@/shared/types/models'
import { Asset } from '@/app/asset'
import { Collection } from '@/app/collection'
import { CreateProductInput } from '@/shared/types/graphql'

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async create(input: CreateProductInput) {
    const product = Product.create(input)

    return this.productRepository.create(product)
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
