import { PrismaService } from '@/shared/persistance'
import { ID } from '@/shared/types/models'
import { Injectable } from '@nestjs/common'
import { Product } from '../inventory'
import { Asset } from '@/app/asset'

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

  async findAssetsOnProduct(productId: ID): Promise<Asset[]> {
    return this.prismaService.asset.findMany({ where: { products: { every: { productId } } } })
  }
}
