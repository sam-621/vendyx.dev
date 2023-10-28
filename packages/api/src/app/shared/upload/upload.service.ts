import { Injectable } from '@nestjs/common'
import { v2 } from 'cloudinary'

@Injectable()
export class UploadsService {
  async upload(file: Express.Multer.File) {
    console.log({
      file
    })

    const fileUploaded = await v2.uploader.upload(file.path, {
      folder: 'vendyx'
    })

    console.log({ fileUploaded })

    return fileUploaded.public_id
    // let id
    // try {
    //   const options: UploadApiOptions = {
    //     resource_type: 'auto'
    //   }

    //   if (videoMimetype.includes(file.mimetype)) {
    //     options.resource_type = 'video'
    //   }

    //   const uploaded = await v2.uploader.upload(file.path, options)
    //   id = uploaded.public_id

    //   unlinkSync(file.path)

    //   return id
    // } catch (error) {
    //   console.log(error)
    //   unlinkSync(file.path)
    //   throw new InternalServerErrorException('Something went wrong uploading the file.')
    // }
  }
}
