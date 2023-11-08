import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { ProductService } from '../services/products.service'
import { List } from '@/shared/utils/responses'
import { ProductVariant } from '../inventory'
import { Product as ApiProduct, CreateProductInput } from '@/shared/types/graphql'
import { Asset } from '@/app/asset'
import { Collection } from '@/app/collection'
import { Product } from '../entities'
import { ID } from '@/shared/entities/entity'

@Resolver('Product')
export class ProductResolver {
  constructor(private readonly productService: ProductService) {}

  @Query('products')
  async products() {
    const products = await this.productService.findMany()

    return new List<Product>(products, products.length)
  }

  @Query('product')
  async product(@Args('id') id: ID, @Args('slug') slug: string) {
    return this.productService.findUnique(id, slug)
  }

  @Mutation('createProduct')
  async createProduct(@Args('input') input: CreateProductInput) {
    return this.productService.create(input)
  }

  @ResolveField('variants')
  async variants(@Parent() product: ApiProduct) {
    const variants = await this.productService.findVariants(product.id)

    return new List<ProductVariant>(variants, variants.length)
  }

  @ResolveField('assets')
  async assets(@Parent() product: ApiProduct) {
    const assets = await this.productService.findAssets(product.id)

    return new List<Asset>(assets, assets.length)
  }

  @ResolveField('collections')
  async collections(@Parent() product: ApiProduct) {
    const collections = await this.productService.findCollections(product.id)

    return new List<Collection>(collections, collections.length)
  }
}
