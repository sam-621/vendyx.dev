import { Asset } from '@/app/asset/asset'
import { Collection } from '@/app/collection/collection'
import { PrismaService } from '@/app/shared/services'
import { AssetType } from '@/common/types/graphql'
import { Injectable } from '@nestjs/common'
import { LabelValues, Option, Product, ProductVariant } from '../inventory'
import { Prisma } from '@prisma/client'

@Injectable()
export class ProductRepository {
  constructor(private prismaService: PrismaService) {}

  async create(input: Prisma.ProductCreateInput): Promise<Product> {
    return this.prismaService.product.create({ data: input })
  }

  async findMany(): Promise<Product[]> {
    return this.prismaService.product.findMany()
  }

  async findOne(id: string): Promise<Product> {
    return this.prismaService.product.findUnique({ where: { id } })
  }

  async getCollectionsOnProduct(id: string): Promise<Collection[]> {
    const result = await this.prismaService.productOnCollection.findMany({
      where: { productId: id },
      include: { collection: true }
    })

    return result.map(r => r.collection)
  }

  async getAssetsOnProduct(id: string): Promise<Asset[]> {
    const result = await this.prismaService.assetOnProduct.findMany({
      where: { productId: id },
      include: { asset: true }
    })

    return result.map(r => ({ ...r.asset, type: r.asset.type as AssetType }))
  }

  async getLabelValuesOnProduct(id: string): Promise<LabelValues[]> {
    const result = await this.prismaService.labelValueOnProduct.findMany({
      where: { productId: id },
      include: { labelValue: true }
    })

    return result.map(r => r.labelValue)
  }

  async getOptionsOnProduct(id: string): Promise<Option[]> {
    const result = await this.prismaService.option.findMany({
      where: { productId: id }
    })

    return result
  }

  async getVariantsOnProduct(id: string): Promise<ProductVariant[]> {
    const result = await this.prismaService.productVariant.findMany({ where: { productId: id } })

    return result
  }
}
