import { Module } from '@nestjs/common';
import { AdminUiModule } from './admin-ui';
import { ConfigModule } from '../lib/config';

@Module({
  imports: [ConfigModule, AdminUiModule]
})
export class AppModule {}
