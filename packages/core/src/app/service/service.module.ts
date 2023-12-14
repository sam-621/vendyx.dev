import { Module } from '@nestjs/common';

import { SecurityModule } from '@/lib/security';

import { AdminService } from './services';
import { PersistanceModule } from '../persistance';

@Module({
  imports: [PersistanceModule, SecurityModule],
  providers: [AdminService],
  exports: [AdminService]
})
export class ServiceModule {}
