import { Module } from '@nestjs/common';
import { ConfigModule } from '../lib/config';
import { ApiModule } from './api/api.module';
import { PersistanceModule } from './persistance';

@Module({
  imports: [ConfigModule, PersistanceModule, ApiModule]
})
export class AppModule {}
