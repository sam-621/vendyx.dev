import { Controller, Post, Res, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

import { AssetService } from '@/app/service';

@Controller('upload')
export class uploadController {
  constructor(private readonly assetService: AssetService) {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile()
    file: Express.Multer.File,
    @Res() res: Response
  ) {
    const asset = await this.assetService.create(file);

    return res.status(200).json(asset);
  }
}
