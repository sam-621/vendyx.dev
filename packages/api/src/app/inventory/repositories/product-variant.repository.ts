import { PrismaService } from '@/app/shared/services'
import { Injectable } from '@nestjs/common'
import { Product, ProductVariant } from '../inventory'
import { Asset } from '@/app/asset'
import { AssetType } from '@/common/types/graphql'

@Injectable()
export class ProductVariantRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<ProductVariant[]> {
    return this.prismaService.productVariant.findMany()
  }

  async findOne(id: string): Promise<ProductVariant> {
    return this.prismaService.productVariant.findUnique({ where: { id } })
  }

  async findProductOnVariant(variantId: string): Promise<Product> {
    const result = await this.prismaService.productVariant.findUnique({
      where: { id: variantId },
      include: { product: true }
    })

    return result.product
  }

  async findAssetsOnVariant(variantId: string): Promise<Asset> {
    const result = await this.prismaService.productVariant.findUnique({
      where: { id: variantId },
      include: { asset: true }
    })

    return {
      ...result.asset,
      type: result.asset.type as AssetType
    }
  }
}
