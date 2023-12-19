import { join } from 'path';

import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AdminApiModule } from './admin/admin.module';
import { DateScalar, IDScalar } from './common/scalars';

@Module({
  imports: [
    AdminApiModule,
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '../admin-ui/dist'),
      serveRoot: '/admin',
      exclude: ['/api/(.*)']
    })
  ],
  providers: [IDScalar, DateScalar]
})
export class ApiModule {}
