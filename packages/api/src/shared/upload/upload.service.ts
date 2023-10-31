import { Injectable } from '@nestjs/common'
import { v2 } from 'cloudinary'

@Injectable()
export class UploadsService {
  async upload(file: Express.Multer.File) {
    const fileUploaded = await v2.uploader.upload(file.path, {
      folder: 'vendyx'
    })

    return fileUploaded.public_id
  }
}
