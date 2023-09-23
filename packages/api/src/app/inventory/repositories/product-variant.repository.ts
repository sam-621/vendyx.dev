import { PrismaService } from '@/app/shared/services'
import { Injectable } from '@nestjs/common'
import { ProductVariant } from '../inventory'

@Injectable()
export class ProductVariantRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<ProductVariant[]> {
    return this.prismaService.productVariant.findMany()
  }

  async findOne(id: string): Promise<ProductVariant> {
    return this.prismaService.productVariant.findUnique({ where: { id } })
  }
}
