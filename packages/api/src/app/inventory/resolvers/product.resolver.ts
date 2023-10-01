import { CreateProductInput, Product as ApiProduct } from '@/common/types/graphql'
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ProductRepository } from '../repositories'
import { ProductService } from '../services/product.service'
import { UserInputError } from '@/common/errors'
import { List } from '@/common/utils'
import { Product } from '../inventory'

@Resolver('Product')
export class ProductResolver {
  constructor(private repository: ProductRepository, private productService: ProductService) {}

  @Mutation('createProduct')
  async create(@Args('input') input: CreateProductInput) {
    return this.productService.createProduct(input)
  }

  @Query('products')
  async products() {
    const products = await this.repository.findMany()

    return new List<Product>(products, products.length)
  }

  @Query('product')
  async product(@Args('id') id: string, @Args('slug') slug: string) {
    if (!id && !slug) throw new UserInputError('No ID or Slug provided')

    if (id) return this.repository.findOneById(id)

    return this.repository.findOneBySlug(slug)
  }

  @ResolveField('variants')
  async variants(@Parent() product: ApiProduct) {
    return this.repository.getVariantsOnProduct(product.id)
  }

  @ResolveField('collections')
  async collections(@Parent() product: ApiProduct) {
    return this.repository.getCollectionsOnProduct(product.id)
  }

  @ResolveField('assets')
  async assets(@Parent() product: ApiProduct) {
    return this.repository.getAssetsOnProduct(product.id)
  }

  @ResolveField('labelValues')
  async labelValues(@Parent() product: ApiProduct) {
    return this.repository.getLabelValuesOnProduct(product.id)
  }

  @ResolveField('options')
  async options(@Parent() product: ApiProduct) {
    return this.repository.getOptionsOnProduct(product.id)
  }
}
