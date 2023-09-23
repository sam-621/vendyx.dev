import { Module } from '@nestjs/common'
import { InventoryResolver, ProductVariantResolver } from './resolvers'
import { InventoryRepository, ProductVariantRepository } from './repositories'

const RESOLVERS = [InventoryResolver, ProductVariantResolver]
const REPOSITORIES = [InventoryRepository, ProductVariantRepository]

@Module({
  providers: [...RESOLVERS, ...REPOSITORIES]
})
export class InventoryModule {}
