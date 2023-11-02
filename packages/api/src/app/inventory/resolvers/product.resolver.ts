import { Args, Query, Resolver } from '@nestjs/graphql'
import { ProductService } from '../services/products.service'
import { List } from '@/shared/utils/responses'
import { Product } from '../inventory'
import { ID } from '@/shared/types/models'

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
}
