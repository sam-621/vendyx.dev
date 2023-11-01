import { PrismaService } from '@/shared/persistance'
import { Injectable } from '@nestjs/common'
import { ID } from '@/shared/types/models'

@Injectable()
export class ProductVariantRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findById(id: ID) {
    return this.prismaService.productVariant.findUnique({ where: { id } })
  }

  findMany() {
    return this.prismaService.productVariant.findMany()
  }
}
