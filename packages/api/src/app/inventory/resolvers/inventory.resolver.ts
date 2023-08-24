import { PrismaService } from '@/app/shared/services'
import { Product } from '@/common/types/graphql'
import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { InventoryRepository } from '../repositories'

@Resolver('Product')
export class InventoryResolver {
  constructor(private prismaService: PrismaService, private repository: InventoryRepository) {}

  @Query('products')
  async products() {
    return this.repository.findMany()
  }

  @ResolveField('variants')
  async variants(@Parent() product: Product) {
    return this.prismaService.productVariant.findMany({ where: { productId: product.id } })
  }

  @ResolveField('collections')
  async collections(@Parent() product: Product) {
    return this.repository.getCollectionsOnProduct(product.id)
  }

  @ResolveField('assets')
  async assets(@Parent() product: Product) {
    return this.repository.getAssetsOnProduct(product.id)
  }

  @ResolveField('labelValues')
  async labelValues(@Parent() product: Product) {
    return this.repository.getLabelValuesOnProduct(product.id)
  }

  @ResolveField('options')
  async options(@Parent() product: Product) {
    return this.repository.getOptionsOnProduct(product.id)
  }
}
