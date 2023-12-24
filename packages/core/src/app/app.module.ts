import { Module } from '@nestjs/common';

import { ApiModule } from './api/api.module';

import { ConfigModule } from '@/lib/config';

@Module({
  imports: [ConfigModule]
})
export class AppModule {}
