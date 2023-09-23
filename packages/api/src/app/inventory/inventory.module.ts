import { Module } from '@nestjs/common'
import { ProductResolver, ProductVariantResolver } from './resolvers'
import { ProductRepository, ProductVariantRepository } from './repositories'

const RESOLVERS = [ProductResolver, ProductVariantResolver]
const REPOSITORIES = [ProductRepository, ProductVariantRepository]

@Module({
  providers: [...RESOLVERS, ...REPOSITORIES]
})
export class InventoryModule {}
