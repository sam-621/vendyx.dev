import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { ID, ProductVariant } from '@vendyx/common';

import {
  AdminJwtAuthGuard,
  CreateProductVariantInput,
  ListInput,
  ListResponse,
  UpdateProductVariantInput
} from '@/app/api/common';
import { ProductVariantService } from '@/app/service';

@UseGuards(AdminJwtAuthGuard)
@Resolver('ProductVariant')
export class ProductVariantResolver {
  constructor(private readonly service: ProductVariantService) {}

  @Query('variants')
  async variants(@Args('input') input: ListInput) {
    const variant = await this.service.find(input);

    return new ListResponse(variant, variant.length);
  }

  @Query('variant')
  async variant(@Args('id') id: ID) {
    const variant = await this.service.findUnique(id);

    return variant;
  }

  @Mutation('createVariant')
  async createVariant(@Args('id') id: ID, @Args('input') input: CreateProductVariantInput) {
    const variant = await this.service.create(id, input);

    return variant;
  }

  @Mutation('updateVariant')
  async updateVariant(@Args('id') id: ID, @Args('input') input: UpdateProductVariantInput) {
    const variant = await this.service.update(id, input);

    return variant;
  }

  @Mutation('removeVariant')
  async removeVariant(@Args('id') id: ID) {
    const variant = await this.service.remove(id);

    return variant;
  }

  @ResolveField('optionValues')
  async optionValues(@Parent() variant: ProductVariant) {
    const optionValues = await this.service.findOptionValues(variant.id);

    return optionValues;
  }
}
