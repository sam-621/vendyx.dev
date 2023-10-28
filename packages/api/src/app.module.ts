import { Module } from '@nestjs/common'

import { SharedModule } from './shared'
import { InventoryModule } from './app/inventory'
import { UploadModule } from './shared/upload'
import { AssetModule } from './app/asset'
import { CollectionModule } from './app/collection'

@Module({
  imports: [SharedModule, UploadModule, AssetModule, InventoryModule, CollectionModule]
})
export class AppModule {}
