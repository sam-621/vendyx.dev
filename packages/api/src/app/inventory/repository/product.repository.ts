import { PrismaService } from '@/shared/persistance'
import { ID } from '@/shared/types/models'
import { Injectable } from '@nestjs/common'

@Injectable()
export class ProductRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findById(id: ID) {
    return this.prismaService.product.findUnique({ where: { id } })
  }

  findBySlug(slug: string) {
    return this.prismaService.product.findUnique({ where: { slug } })
  }

  findMany() {
    return this.prismaService.product.findMany()
  }
}
