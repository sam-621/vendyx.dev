import { Module } from '@nestjs/common';

import {
  AdminResolver,
  OptionResolver,
  ProductResolver,
  ProductVariantResolver
} from './resolvers';

import { ServiceModule } from '@/app/service';

@Module({
  imports: [ServiceModule],
  providers: [AdminResolver, ProductResolver, ProductVariantResolver, OptionResolver]
})
export class AdminApiModule {}
