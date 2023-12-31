import { randomUUID } from 'crypto';
import { extname } from 'path';

import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { uploadController } from './upload.controller';

import { ServiceModule } from '@/app/service';

@Module({
  imports: [
    MulterModule.registerAsync({
      useFactory: async () => ({
        storage: diskStorage({
          destination: './uploads',
          filename(_, file, callback) {
            callback(null, `${randomUUID()}${extname(file.originalname)}`);
          }
        })
      })
    }),
    ServiceModule
  ],
  controllers: [uploadController]
})
export class UploadModule {}
