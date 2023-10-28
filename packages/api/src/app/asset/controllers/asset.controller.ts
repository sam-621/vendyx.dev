import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { AssetService } from '../services'

@Controller('assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile()
    file: Express.Multer.File
  ) {
    const r = await this.assetService.create(file)
    return r
  }
}
