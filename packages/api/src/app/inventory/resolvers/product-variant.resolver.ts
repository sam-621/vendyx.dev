import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ProductVariantRepository } from '../repositories'
import { ProductVariant } from '../inventory'

@Resolver('ProductVariant')
export class ProductVariantResolver {
  constructor(private repository: ProductVariantRepository) {}

  @Query('productVariants')
  async variants() {
    return this.repository.findMany()
  }

  @ResolveField('product')
  async product(@Parent() variant: ProductVariant) {
    return this.repository.findProductOnVariant(variant.id)
  }

  @ResolveField('asset')
  async collections(@Parent() variant: ProductVariant) {
    return this.repository.findAssetsOnVariant(variant.id)
  }

  // @ResolveField('assets')
  // async assets(@Parent() product: Product) {
  //   return this.repository.getAssetsOnProduct(product.id)
  // }

  // @ResolveField('labelValues')
  // async labelValues(@Parent() product: Product) {
  //   return this.repository.getLabelValuesOnProduct(product.id)
  // }

  // @ResolveField('options')
  // async options(@Parent() product: Product) {
  //   return this.repository.getOptionsOnProduct(product.id)
  // }
}
