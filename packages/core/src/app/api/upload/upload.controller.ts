import { Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

import { StorageService } from '@/app/storage';

@Controller('upload')
export class uploadController {
  constructor(private readonly storageService: StorageService) {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile()
    file: Express.Multer.File,
    @Res() res: Response
  ) {
    const fileId = await this.storageService.upload(file.path, 'cloudinary');

    if (!fileId) {
      res.status(500).json({
        message: 'File could not be uploaded'
      });
    }

    return res.status(200).json({
      fileId
    });
  }
}
