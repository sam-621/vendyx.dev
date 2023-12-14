import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*'
    }
  });

  const configService = app.get<ConfigService>(ConfigService);

  await app.listen(configService.get('APP.PORT'));
}

bootstrap();
