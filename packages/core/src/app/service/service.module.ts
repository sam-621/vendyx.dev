import { Module } from '@nestjs/common';

import { AdminService, ProductService } from './services';
import { PersistanceModule } from '../persistance';

import { SecurityModule } from '@/lib/security';

const SERVICES = [AdminService, ProductService];

@Module({
  imports: [PersistanceModule, SecurityModule],
  providers: [...SERVICES],
  exports: [...SERVICES]
})
export class ServiceModule {}
