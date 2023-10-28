import { Module } from '@nestjs/common'
import { AssetController } from './controllers/asset.controller'
import { AssetRepository } from './repositories/asset.repository'
import { UploadModule } from '../shared/upload'
import { AssetService } from './services'

@Module({
  imports: [UploadModule],
  controllers: [AssetController],
  providers: [AssetRepository, AssetService]
})
export class AssetModule {}
