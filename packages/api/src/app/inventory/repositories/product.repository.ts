import { Asset } from '@/app/asset/asset'
import { Collection } from '@/app/collection/collection'
import { AssetType, CreateProductInput, CreateProductVariantInput } from '@/shared/types'
import { Injectable } from '@nestjs/common'
import { LabelValues, Option, Product, ProductVariant } from '../inventory'
import { Prisma } from '@prisma/client'
import { InternalServerError, UserInputError } from '@/shared/errors'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'
import { PrismaService } from '@/shared/persistance'

@Injectable()
export class ProductRepository {
  constructor(private prismaService: PrismaService) {}

  async create(input: CreateProductRepository): Promise<Product> {
    try {
      return await this.prismaService.product.create({
        data: {
          name: input.name,
          slug: input.slug,
          description: input.description ?? undefined,
          enabled: input.enabled ?? undefined,
          assets: { create: input.assetsIds?.map(id => ({ assetId: id, position: 0 })) },
          collections: { create: input.collectionsIds?.map(id => ({ collectionId: id })) },
          labelValues: { create: input.labelValuesIds?.map(id => ({ labelValueId: id })) },
          variants: input.variant && {
            create: {
              sku: input.variant?.sku,
              enabled: input.variant?.enabled ?? undefined,
              stock: input.variant?.stock ?? 0,
              price: input.variant?.price ?? 0,
              costPerProduct: input.variant?.costPerProduct ?? 0,
              offerPrice: input.variant?.offerPrice ?? 0,
              weight: input.variant?.weight ?? 0
            }
          }
        }
      })
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

type CreateProductRepository = Omit<CreateProductInput, 'variants'> & {
  variant?: Omit<CreateProductVariantInput, 'optionValues' | 'asset'>
}
