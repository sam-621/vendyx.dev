import { UploadsService } from '@/app/shared/upload'
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('assets')
export class AssetController {
  constructor(private readonly uploadService: UploadsService) {}
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile()
    file: Express.Multer.File
  ) {
    console.log({ file })

    const r = await this.uploadService.upload(file)
    console.log({
      r
    })
    return r
  }
}
