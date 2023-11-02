import { Module } from '@nestjs/common'
import { SharedModule } from '../shared'
import { InventoryModule } from './inventory'

@Module({
  imports: [SharedModule, InventoryModule]
})
export class AppModule {}
