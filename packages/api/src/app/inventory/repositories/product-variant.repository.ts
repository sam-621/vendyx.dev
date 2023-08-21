import { PrismaService } from '@/app/shared/services'
import { ProductVariant } from '@/common/types/graphql'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductVariantRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<ProductVariantWithNoRelations[]> {
    return this.prismaService.productVariant.findMany()
  }

  async findOne(id: string): Promise<ProductVariantWithNoRelations> {
    return this.prismaService.productVariant.findUnique({ where: { id } })
  }
}

type ProductVariantWithNoRelations = Omit<ProductVariant, 'optionValues' | 'asset' | 'product'>
