import { PrismaService } from '@/app/shared/services'
import { Product } from '@/common/types/graphql'
import { Injectable } from '@nestjs/common'

@Injectable()
export class InventoryRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<Product[]> {
    return this.prismaService.product.findMany()
  }

  async findOne(id: string): Promise<Product> {
    return this.prismaService.product.findUnique({ where: { id } })
  }
}
