import { PrismaService } from '@/shared/persistance'
import { ID } from '@/shared/types/models'
import { Injectable } from '@nestjs/common'
import { Product } from '../inventory'
import { Asset } from '@/app/asset'
import { Collection } from '@/app/collection'

@Injectable()
export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(id: ID): Promise<Product | null> {
    return this.prismaService.product.findUnique({ where: { id } })
  }

  async findBySlug(slug: string): Promise<Product | null> {
    return this.prismaService.product.findUnique({ where: { slug } })
  }

  async findMany(): Promise<Product[]> {
    return this.prismaService.product.findMany()
  }

  async findVariants(productId: ID) {
    return this.prismaService.productVariant.findMany({ where: { productId } })
  }

  async findAssets(productId: ID): Promise<Asset[]> {
    const result = await this.prismaService.assetOnProduct.findMany({
      where: { productId },
      include: { asset: true }
    })

    return result.map(asset => asset.asset)
  }

  async findCollections(productId: ID): Promise<Collection[]> {
    const result = await this.prismaService.productOnCollection.findMany({
      where: { productId },
      include: { collection: true }
    })

    return result.map(c => c.collection)
  }
}
