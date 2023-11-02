import { Injectable } from '@nestjs/common'
import { ProductRepository } from '../repositories'
import { Product, ProductVariant } from '../inventory'
import { UserInputError } from '@/shared/errors'
import { ID } from '@/shared/types/models'

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

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
}
