import { Module } from '@nestjs/common';
import { AdminUiModule } from './admin-ui';
import { ConfigModule } from '../lib/config';
import { PersistanceModule } from '../lib/persistance';

@Module({
  imports: [ConfigModule, PersistanceModule, AdminUiModule]
})
export class AppModule {}
