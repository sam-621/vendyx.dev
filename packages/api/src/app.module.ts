import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'

import { SharedModule } from './app/shared'
import { InventoryModule } from './app/inventory'
import { UploadModule } from './app/shared/upload'
import { AssetModule } from './app/asset'

@Module({
  imports: [SharedModule, UploadModule, AssetModule, InventoryModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
