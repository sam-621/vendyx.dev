import { Module } from '@nestjs/common'
import { OptionResolver, ProductResolver, ProductVariantResolver } from './resolvers'
import { OptionRepository, ProductRepository, ProductVariantRepository } from './repositories'
import { ProductService } from './services'

const RESOLVERS = [ProductResolver, ProductVariantResolver, OptionResolver]
const SERVICES = [ProductService]
const REPOSITORIES = [ProductRepository, ProductVariantRepository, OptionRepository]

@Module({
  providers: [...RESOLVERS, ...SERVICES, ...REPOSITORIES]
})
export class InventoryModule {}
