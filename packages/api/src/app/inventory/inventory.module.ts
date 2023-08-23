import { Module } from '@nestjs/common'
import { InventoryResolver } from './resolvers'
import { InventoryRepository } from './repositories'

@Module({
  providers: [InventoryResolver, InventoryRepository]
})
export class InventoryModule {}
