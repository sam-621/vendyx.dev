import { Module } from '@nestjs/common';

import {
  AdminService,
  AssetService,
  OptionService,
  ProductService,
  ProductVariantService
} from './services';
import { PersistanceModule } from '../persistance';

import { SecurityModule } from '@/lib/security';
import { StorageModule } from '@/lib/storage';

const SERVICES = [AdminService, ProductService, ProductVariantService, OptionService, AssetService];

@Module({
  imports: [PersistanceModule, SecurityModule, StorageModule],
  providers: [...SERVICES],
  exports: [...SERVICES]
})
export class ServiceModule {}
