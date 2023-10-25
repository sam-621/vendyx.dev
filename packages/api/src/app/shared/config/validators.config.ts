import { plainToClass } from 'class-transformer'
import { IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator'

class EnvironmentVariables {
  @IsNumber()
  PORT: number

  @IsString()
  @IsNotEmpty()
  DB_URL: string

  @IsString()
  @IsNotEmpty()
  CLOUDINARY_CLOUD_NAME: string

  @IsString()
  @IsNotEmpty()
  CLOUDINARY_API_KEY: string

  @IsString()
  @IsNotEmpty()
  CLOUDINARY_API_SECRET: string
}

export const configValidator = (config: Record<string, unknown>) => {
  const configuration = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true
  })

  const errors = validateSync(configuration, { skipMissingProperties: false })

  if (errors.length > 0) throw new Error(`Configuration validation failed: ${errors.toString()}`)

  return configuration
}
