import { BadRequestException, Injectable } from '@nestjs/common';

import { PrismaService } from '@/app/persistance';
import { StorageService } from '@/lib/storage';

@Injectable()
export class AssetService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storageService: StorageService
  ) {}

  async create(file: Express.Multer.File) {
    const path = file.path;

    const fileId = await this.storageService.upload(path, 'cloudinary');

    if (!fileId) {
      throw new BadRequestException('File could not be uploaded');
    }

    const asset = await this.prisma.asset.create({
      data: {
        name: file.originalname,
        source: fileId
      }
    });

    return asset;
  }
}
