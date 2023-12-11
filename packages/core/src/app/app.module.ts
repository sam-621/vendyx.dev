import { Module } from '@nestjs/common';
import { ConfigModule } from '../lib/config';
import { PersistanceModule } from '../lib/persistance';
import { ApiModule } from './api/api.module';

@Module({
  imports: [ConfigModule, PersistanceModule, ApiModule]
})
export class AppModule {}
