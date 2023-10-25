import { Module } from '@nestjs/common'
import { CloudinaryProvider } from './providers/cloudinary.provider'
import { UploadsService } from './upload.service'

@Module({
  providers: [CloudinaryProvider, UploadsService],
  exports: [UploadsService]
})
export class UploadModule {}
