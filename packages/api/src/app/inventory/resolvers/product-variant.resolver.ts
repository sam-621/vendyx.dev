import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ProductVariantRepository } from '../repositories'
import { ProductVariant } from '../inventory'

@Resolver('ProductVariant')
export class ProductVariantResolver {
  constructor(private repository: ProductVariantRepository) {}

  @Query('variants')
  async variants() {
    return this.repository.findMany()
  }

  @Query('variant')
  async variant(@Args('id') id: string) {
    return this.repository.findOne(id)
  }

  @ResolveField('product')
  async product(@Parent() variant: ProductVariant) {
    return this.repository.findProductOnVariant(variant.id)
  }

  @ResolveField('asset')
  async collections(@Parent() variant: ProductVariant) {
    return this.repository.findAssetsOnVariant(variant.id)
  }

  @ResolveField('optionValues')
  async optionValues(@Parent() variant: ProductVariant) {
    return this.repository.findOptionValuesOnVariant(variant.id)
  }
}
