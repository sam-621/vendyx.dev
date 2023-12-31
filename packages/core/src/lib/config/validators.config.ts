import { plainToClass } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsNumber()
  @IsNotEmpty()
  PORT: number;

  @IsEnum(['dev', 'prod', 'test'])
  @IsNotEmpty()
  MODE: 'dev' | 'prod' | 'test';

  @IsString()
  @IsNotEmpty()
  DB_URL: string;

  @IsString()
  @IsNotEmpty()
  JWT_SECRET: string;

  @IsString()
  @IsNotEmpty()
  JWT_EXPIRES_IN: string;
}

export const configValidator = (config: Record<string, unknown>) => {
  const configuration = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true
  });

  const errors = validateSync(configuration, { skipMissingProperties: false });

  if (errors.length > 0) {
    throw new Error(`Env variables validation failed: ${errors.toString()}`);
  }

  return configuration;
};
