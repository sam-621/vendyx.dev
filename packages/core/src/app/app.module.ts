import { Module } from '@nestjs/common';
import { AdminUiModule } from './admin-ui';
import { ConfigModule } from '../lib/config';
import { PersistanceModule } from '../lib/persistance';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [ConfigModule, PersistanceModule, AdminUiModule, AdminModule]
})
export class AppModule {}
