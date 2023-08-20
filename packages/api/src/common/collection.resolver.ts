import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PrismaService } from '@/app/shared/repositories/prisma.service'
import { Collection } from './types/graphql'

@Resolver('Collection')
export class CollectionResolver {
  constructor(private prismaService: PrismaService) {}

  @Query('collections')
  async collections() {
    return await this.prismaService.collection.findMany()
  }

  @ResolveField('products')
  async products(@Parent() collection: Collection) {
    const { id } = collection
    const result = await this.prismaService.productOnCollection.findMany({
      where: { collectionId: id },
      include: { product: true }
    })

    return result.map(r => r.product)
  }
}
