import { Module } from '@nestjs/common';

import { AdminService } from './services';
import { PersistanceModule } from '../persistance';

import { SecurityModule } from '@/lib/security';

@Module({
  imports: [PersistanceModule, SecurityModule],
  providers: [AdminService],
  exports: [AdminService]
})
export class ServiceModule {}
