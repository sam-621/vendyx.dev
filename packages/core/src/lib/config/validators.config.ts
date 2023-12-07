import { plainToClass } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsNumber()
  @IsNotEmpty()
  PORT: number;

  @IsString()
  @IsNotEmpty()
  DB_URL: string;
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
