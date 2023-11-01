import { PrismaService, SearchCriteriaInMany } from '@/shared/persistance'
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

  findMany(searchCriteria: SearchCriteriaInMany) {
    return this.prismaService.product.findMany({
      skip: searchCriteria.skip,
      take: searchCriteria.take
    })
  }
}
