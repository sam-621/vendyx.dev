import { Module } from '@nestjs/common';

import { AdminService, ProductService, ProductVariantService } from './services';
import { PersistanceModule } from '../persistance';

import { SecurityModule } from '@/lib/security';

const SERVICES = [AdminService, ProductService, ProductVariantService];

@Module({
  imports: [PersistanceModule, SecurityModule],
  providers: [...SERVICES],
  exports: [...SERVICES]
})
export class ServiceModule {}
