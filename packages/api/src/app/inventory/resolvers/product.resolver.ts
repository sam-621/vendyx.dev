import { CreateProductInput, Product } from '@/common/types/graphql'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ProductRepository } from '../repositories'
import { ProductService } from '../services/product.service'

@Resolver('Product')
export class ProductResolver {
  constructor(private repository: ProductRepository, private productService: ProductService) {}

  @Mutation('createProduct')
  async create(@Args('input') input: CreateProductInput) {
    return this.productService.createProduct(input)
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
