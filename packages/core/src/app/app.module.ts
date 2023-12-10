import { Module } from '@nestjs/common';
import { AdminUiModule } from './admin-ui';
import { ConfigModule } from '../lib/config';
import { PersistanceModule } from '../lib/persistance';
import { AdminModule } from './admin/admin.module';
import { GraphQLModule } from '@/lib/gql';
import { SecurityModule } from '@/lib/security';

@Module({
  imports: [
    ConfigModule,
    PersistanceModule,
    GraphQLModule,
    SecurityModule,
    AdminUiModule,
    AdminModule
  ]
})
export class AppModule {}
