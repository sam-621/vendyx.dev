import { UploadsService } from '@/app/shared/upload'
import { Injectable } from '@nestjs/common'
import { AssetRepository } from '../repositories'
import { AssetType } from '../asset'

@Injectable()
export class AssetService {
  constructor(private repository: AssetRepository, private uploadService: UploadsService) {}

  async create(file: Express.Multer.File) {
    const id = await this.uploadService.upload(file)

    const assetCreated = this.repository.create({
      name: 'asset',
      source: id,
      type: AssetType.IMAGE
    })

    return assetCreated
  }
}
