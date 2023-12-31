import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CloudinaryProvider, StorageProvider } from './providers';

import { InternalServerError } from '@/lib/errors';

type Provider = 'cloudinary';

@Injectable()
export class StorageService {
  providers: StorageProvider[];

  constructor(private readonly configService: ConfigService) {
    this.providers = [new CloudinaryProvider(configService)];
  }

  async upload(file: string, provider: Provider): Promise<string | null> {
    const storageProvider = this.providers.find(p => p.code === provider);

    if (!storageProvider) {
      throw new InternalServerError('Storage provider not found');
    }

    return storageProvider.upload(file);
  }
}
