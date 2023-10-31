import { ConfigService } from '@nestjs/config'
import { v2 } from 'cloudinary'

export const CloudinaryProvider = {
  provide: 'Cloudinary',
  useFactory: async (configService: ConfigService) =>
    v2.config({
      cloud_name: configService.get<string>('CLOUDINARY.NAME'),
      api_key: configService.get<string>('CLOUDINARY.KEY'),
      api_secret: configService.get<string>('CLOUDINARY.SECRET')
    }),
  inject: [ConfigService]
}
