import { UploadsService } from '@/app/shared/upload'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AssetService {
  constructor(private readonly uploadService: UploadsService) {}

  create(file: Express.Multer.File) {
    const id = this.uploadService.upload(file)

    return id
  }
}
