import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app';
import { BusinessExceptionFilter } from './app/api/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*'
    }
  });

  const configService = app.get<ConfigService>(ConfigService);

  app.useGlobalFilters(new BusinessExceptionFilter());
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(configService.get('APP.PORT'));
}

bootstrap();
