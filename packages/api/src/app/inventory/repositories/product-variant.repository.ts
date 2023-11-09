import { PrismaService } from '@/shared/persistance'
import { Injectable } from '@nestjs/common'
import { ID } from '@/shared/entities/entity'
import { ProductVariant } from '../entities'

@Injectable()
export class ProductVariantRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(productId: ID, variant: ProductVariant) {
    return this.prismaService.productVariant.create({
      data: {
        ...variant,
        productId
      }
    })
  }

  async findById(id: ID): Promise<ProductVariant | null> {
    return this.prismaService.productVariant.findUnique({ where: { id } })
  }

  async findMany(): Promise<ProductVariant[]> {
    return this.prismaService.productVariant.findMany()
  }
}
