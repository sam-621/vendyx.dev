import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { CloudinaryProvider, StorageProvider } from './providers';

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
      Logger.error(`Storage provider ${provider} not found`);
      return null;
    }

    return storageProvider.upload(file);
  }
}
