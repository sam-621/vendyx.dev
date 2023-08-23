import { PrismaService } from '@/app/shared/services'
import { Asset, AssetType, Collection, LabelValues, Option, Product } from '@/common/types/graphql'
import { Injectable } from '@nestjs/common'

@Injectable()
export class InventoryRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<ProductWithNoRelations[]> {
    return this.prismaService.product.findMany()
  }

  async findOne(id: string): Promise<ProductWithNoRelations> {
    return this.prismaService.product.findUnique({ where: { id } })
  }

  async getCollectionsOnProduct(id: string): Promise<CollectionWithNoRelations[]> {
    const result = await this.prismaService.productOnCollection.findMany({
      where: { productId: id },
      include: { collection: true }
    })

    return result.map(r => r.collection)
  }

  async getAssetsOnProduct(id: string): Promise<AssetWithNoRelations[]> {
    const result = await this.prismaService.assetOnProduct.findMany({
      where: { productId: id },
      include: { asset: true }
    })

    return result.map(r => ({ ...r.asset, type: r.asset.type as AssetType }))
  }

  async getLabelValuesOnProduct(id: string): Promise<LabelValuesWithNoRelations[]> {
    const result = await this.prismaService.labelValueOnProduct.findMany({
      where: { productId: id },
      include: { labelValue: true }
    })

    return result.map(r => r.labelValue)
  }

  async getOptionsOnProduct(id: string): Promise<OptionWithNoRelations[]> {
    const result = await this.prismaService.option.findMany({
      where: { productId: id }
    })

    return result
  }
}

type ProductWithNoRelations = Omit<
  Product,
  'variants' | 'collections' | 'assets' | 'labelValues' | 'options'
>

type CollectionWithNoRelations = Omit<Collection, 'products' | 'assets' | 'labelValues'>

type AssetWithNoRelations = Omit<
  Asset,
  'products' | 'collections' | 'productVariants' | 'labelValues'
>

type LabelValuesWithNoRelations = Omit<LabelValues, 'label'>

type OptionWithNoRelations = Omit<Option, 'values'>
