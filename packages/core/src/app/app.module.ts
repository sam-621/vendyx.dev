import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';
import { PersistanceModule } from './persistance';

import { ConfigModule } from '@/lib/config';
import { LoggerModule } from '@/lib/logger';

@Module({
  imports: [ConfigModule, LoggerModule, PersistanceModule, ApiModule]
})
export class AppModule {}
