import { Asset } from '@/app/asset/asset'
import { Collection } from '@/app/collection/collection'
import { AssetType } from '@/common/types/graphql'
import { Injectable } from '@nestjs/common'
import { LabelValues, Option, Product, ProductVariant } from '../inventory'
import { Prisma } from '@prisma/client'
import { InternalServerError, UserInputError } from '@/common/errors'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { PrismaService } from '@/app/shared/persistance'

@Injectable()
export class ProductRepository {
  constructor(private prismaService: PrismaService) {}

  async create(input: Prisma.ProductCreateInput): Promise<Product> {
    try {
      return await this.prismaService.product.create({ data: input })
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
        throw new UserInputError(
          'These fields already exist in database: ' + (error.meta?.target as string[]).join(', ')
        )
      }

      throw new InternalServerError('Error ocurred while creating the product')
    }
  }

  async update(id: string, input: Prisma.ProductUpdateInput): Promise<Product> {
    return this.prismaService.product.update({ data: input, where: { id: id } })
  }

  async findMany(): Promise<Product[]> {
    return this.prismaService.product.findMany()
  }

  async findOneById(id: string): Promise<Product | null> {
    return this.prismaService.product.findUnique({ where: { id } })
  }

  async findOneBySlug(slug: string): Promise<Product | null> {
    return this.prismaService.product.findUnique({ where: { slug } })
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
    const result = (await this.prismaService.productVariant.findMany({
      where: { productId: id }
    })) as unknown as ProductVariant[]

    return result
  }
}
