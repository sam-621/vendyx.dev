import { PrismaService } from '@/shared/persistance'
import { ID } from '@/shared/types/models'
import { Injectable } from '@nestjs/common'
import { Asset } from '../asset'

@Injectable()
export class AssetRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique(id: ID): Promise<Asset | null> {
    return this.prismaService.asset.findUnique({ where: { id } })
  }

  async findMany(): Promise<Asset[]> {
    return this.prismaService.asset.findMany()
  }

  async findAssetsOnProducts(productId: ID): Promise<Asset[]> {
    return this.prismaService.asset.findMany({ where: { products: { every: { productId } } } })
  }

  async findAssetsOnCollections(collectionId: ID): Promise<Asset[]> {
    return this.prismaService.asset.findMany({
      where: { collections: { every: { collectionId } } }
    })
  }
}
