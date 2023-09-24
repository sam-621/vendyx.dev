import { CreateProductInput, Product } from '@/common/types/graphql'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ProductRepository } from '../repositories'

@Resolver('Product')
export class ProductResolver {
  constructor(private repository: ProductRepository) {}

  @Mutation('createProduct')
  async create(@Args('input') input: CreateProductInput) {
    return this.repository.create({
      name: input.name,
      slug: input.slug,
      description: input.description,
      enabled: input.enabled,
      assets: { create: input.assetsIds.map(id => ({ assetId: id, position: 0 })) },
      collections: { create: input.collectionsIds.map(id => ({ collectionId: id })) },
      labelValues: { create: input.labelValuesIds.map(id => ({ labelValueId: id })) }
    })
  }

  @Query('products')
  async products() {
    return this.repository.findMany()
  }

  @Query('product')
  async product(@Args('id') id: string) {
    return this.repository.findOne(id)
  }

  @ResolveField('variants')
  async variants(@Parent() product: Product) {
    return this.repository.getVariantsOnProduct(product.id)
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
