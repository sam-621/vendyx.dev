import { PrismaService } from '@/shared/persistance'
import { Injectable } from '@nestjs/common'
import { ID } from '@/shared/types/models'
import { ProductVariant } from '../inventory'

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
