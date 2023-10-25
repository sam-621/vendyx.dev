import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { SharedModule } from './app/shared'
import { InventoryModule } from './app/inventory'
import { UploadModule } from './app/shared/upload'

@Module({
  imports: [SharedModule, UploadModule, InventoryModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
