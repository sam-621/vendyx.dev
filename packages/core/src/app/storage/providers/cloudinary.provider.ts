// cloudinary.service.ts
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 } from 'cloudinary';

import { StorageProvider } from './provider';

export class CloudinaryProvider implements StorageProvider {
  name = 'Cloudinary';
  code = 'cloudinary';

  constructor(private readonly configService: ConfigService) {
    v2.config({
      cloud_name: configService.get<string>('CLOUDINARY.NAME'),
      api_key: configService.get<string>('CLOUDINARY.KEY'),
      api_secret: configService.get<string>('CLOUDINARY.SECRET')
    });
  }

  async upload(file: string): Promise<string | null> {
    try {
      const fileUploaded = await v2.uploader.upload(file, {
        folder: 'vendyx'
      });

      return fileUploaded.public_id;
    } catch (error) {
      Logger.error({
        provider: this.code,
        error
      });
      return null;
    }
  }
}
