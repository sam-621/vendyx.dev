import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { SharedModule } from './app/shared'
import { InventoryModule } from './app/inventory'

@Module({
  imports: [SharedModule, InventoryModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
