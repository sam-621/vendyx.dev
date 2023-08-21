import { Module } from '@nestjs/common'
import { InventoryResolver } from './resolvers'

@Module({
  providers: [InventoryResolver]
})
export class InventoryModule {}
