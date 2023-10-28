import { Module } from '@nestjs/common'
import { CloudinaryProvider } from './providers/cloudinary.provider'
import { UploadsService } from './upload.service'
import { MulterModule } from '@nestjs/platform-express'
import { diskStorage } from 'multer'
import { randomUUID } from 'crypto'
import { extname } from 'path'

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: async () => ({
        storage: diskStorage({
          destination: './uploads',
          filename(_, file, callback) {
            callback(null, `${randomUUID()}${extname(file.originalname)}`)
          }
        })
      })
    })
  ],
  providers: [CloudinaryProvider, UploadsService],
  exports: [UploadsService, MulterModule]
})
export class UploadModule {}
