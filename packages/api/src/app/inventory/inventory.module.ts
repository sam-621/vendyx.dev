import { Module } from '@nestjs/common'
import { OptionResolver, ProductResolver, ProductVariantResolver } from './resolvers'
import { OptionRepository, ProductRepository, ProductVariantRepository } from './repositories'

const RESOLVERS = [ProductResolver, ProductVariantResolver, OptionResolver]
const REPOSITORIES = [ProductRepository, ProductVariantRepository, OptionRepository]

@Module({
  providers: [...RESOLVERS, ...REPOSITORIES]
})
export class InventoryModule {}
