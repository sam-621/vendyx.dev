import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app';
import { BusinessExceptionFilter } from './app/api/common/filters/business-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*'
    }
  });

  const configService = app.get<ConfigService>(ConfigService);

  app.useGlobalFilters(new BusinessExceptionFilter());

  await app.listen(configService.get('APP.PORT'));
}

bootstrap();
