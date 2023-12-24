import { Args, Query, Resolver } from '@nestjs/graphql';
import { ID } from '@vendyx/common';

import { ListInput, ListResponse } from '@/app/api/common';
import { ProductService } from '@/app/service';

@Resolver('product')
export class ProductResolver {
  constructor(private readonly service: ProductService) {}

  @Query('products')
  async products(@Args('input') input: ListInput) {
    const product = await this.service.find(input);

    return new ListResponse(product, product.length);
  }

  @Query('product')
  async product(@Args('id') id: ID, @Args('slug') slug: string) {
    const product = await this.service.findUnique({ id, slug });

    return product;
  }
}
