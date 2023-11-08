import { PrismaService } from '@/shared/persistance'
import { Injectable } from '@nestjs/common'
import { ProductVariant } from '../inventory'
import { ID } from '@/shared/entities/entity'

@Injectable()
export class ProductVariantRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: ID): Promise<ProductVariant | null> {
    return this.prismaService.productVariant.findUnique({ where: { id } })
  }

  async findMany(): Promise<ProductVariant[]> {
    return this.prismaService.productVariant.findMany()
  }
}
