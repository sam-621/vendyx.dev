import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';
import { PersistanceModule } from './persistance';

import { ConfigModule } from '@/lib/config';

@Module({
  imports: [ConfigModule, PersistanceModule, ApiModule]
})
export class AppModule {}
