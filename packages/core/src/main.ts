import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app';
import { GlobalExceptionsFilter } from './app/api/common';
import { LoggerService } from './lib/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*'
    }
  });

  const loggerService = await app.resolve(LoggerService);
  app.useGlobalFilters(new GlobalExceptionsFilter(loggerService));

  const configService = app.get<ConfigService>(ConfigService);

  await app.listen(configService.get('APP.PORT'));
}

bootstrap();
