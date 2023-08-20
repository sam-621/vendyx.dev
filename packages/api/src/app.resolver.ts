import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { PrismaService } from './app/shared/persistance/prisma.service'
import { Product } from './common/types/graphql'

@Resolver('Product')
export class ProductsResolver {
  constructor(private prismaService: PrismaService) {}

  @Query('products')
  async products() {
    return await this.prismaService.product.findMany()
  }

  @ResolveField('collections')
  async collections(@Parent() product: Product) {
    const { id } = product
    const result = await this.prismaService.productOnCollection.findMany({
      where: { productId: id },
      include: { collection: true }
    })

    return result.map(r => r.collection)
  }

  @ResolveField('assets')
  async assets(@Parent() product: Product) {
    const { id } = product
    const result = await this.prismaService.assetOnProduct.findMany({
      where: { productId: id },
      include: { asset: true }
    })

    return result.map(r => r.asset)
  }

  @ResolveField('labelValues')
  async labelValues(@Parent() product: Product) {
    const { id } = product
    const result = await this.prismaService.labelValueOnProduct.findMany({
      where: { productId: id },
      include: { labelValue: true }
    })

    return result.map(r => r.labelValue)
  }

  @ResolveField('options')
  async options(@Parent() product: Product) {
    const { id } = product
    const result = await this.prismaService.option.findMany({
      where: { productId: id }
    })

    return result
  }
}
