import { PrismaService } from '@/app/shared/services'
import { Injectable } from '@nestjs/common'
import { Option, OptionValue, Product, ProductVariant } from '../inventory'
import { Asset } from '@/app/asset'
import { AssetType } from '@/common/types/graphql'
import { Prisma } from '@prisma/client'

@Injectable()
export class ProductVariantRepository {
  constructor(private prismaService: PrismaService) {}

  async create(input: Prisma.ProductVariantCreateInput): Promise<ProductVariant> {
    return this.prismaService.productVariant.create({ data: input })
  }

  async findMany(): Promise<ProductVariant[]> {
    return this.prismaService.productVariant.findMany()
  }

  async findOne(id: string): Promise<ProductVariant | null> {
    return this.prismaService.productVariant.findUnique({ where: { id } })
  }

  async findProductOnVariant(variantId: string): Promise<Product | undefined | null> {
    const result = await this.prismaService.productVariant.findUnique({
      where: { id: variantId },
      include: { product: true }
    })

    return result?.product
  }

  async findAssetsOnVariant(variantId: string): Promise<Asset | null> {
    const result = await this.prismaService.productVariant.findUnique({
      where: { id: variantId },
      include: { asset: true }
    })

    if (!result?.asset) return null

    return {
      ...result.asset,
      type: result.asset.type as AssetType
    }
  }

  async findOptionValuesOnVariant(variantId: string): Promise<OptionValue[]> {
    const result = await this.prismaService.optionValueOnProductVariant.findMany({
      where: { variantId: variantId },
      include: { optionValue: true }
    })

    console.log({
      result
    })

    return result.map(r => r.optionValue)
  }

  async findOptionsOnVariant(variantId: string): Promise<Option[]> {
    const result = await this.prismaService.optionValueOnProductVariant.findMany({
      where: { variantId: variantId },
      include: { optionValue: { include: { option: true } } }
    })

    console.log({
      result
    })

    return result.map(r => r.optionValue.option)
  }
}
