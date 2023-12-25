import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ID } from '@vendyx/common';

import {
  AdminJwtAuthGuard,
  CreateProductInput,
  ListInput,
  ListResponse,
  UpdateProductInput
} from '@/app/api/common';
import { ProductService } from '@/app/service';

@UseGuards(AdminJwtAuthGuard)
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

  @Mutation('createProduct')
  async createProduct(@Args('input') input: CreateProductInput) {
    const product = await this.service.create(input);

    return product;
  }

  @Mutation('updateProduct')
  async updateProduct(@Args('id') id: ID, @Args('input') input: UpdateProductInput) {
    const product = await this.service.update(id, input);

    return product;
  }

  @Mutation('removeProduct')
  async deleteProduct(@Args('id') id: ID) {
    const product = await this.service.remove(id);

    return product;
  }
}
