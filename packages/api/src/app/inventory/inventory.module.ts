import { Module } from '@nestjs/common'
import { InventoryResolver, ProductVariantResolver } from './resolvers'
import { InventoryRepository, ProductVariantRepository } from './repositories'

@Module({
  providers: [
    InventoryResolver,
    ProductVariantResolver,
    InventoryRepository,
    ProductVariantRepository
  ]
})
export class InventoryModule {}
