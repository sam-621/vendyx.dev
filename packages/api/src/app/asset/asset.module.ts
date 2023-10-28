import { Module } from '@nestjs/common'
import { AssetController } from './controllers/asset.controller'
import { AssetRepository } from './repositories/asset.repository'
import { UploadModule } from '../shared/upload'

@Module({
  imports: [UploadModule],
  controllers: [AssetController],
  providers: [AssetRepository]
})
export class AssetModule {}
