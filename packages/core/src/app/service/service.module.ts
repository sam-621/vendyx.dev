import { Module } from '@nestjs/common';
import { PersistanceModule } from '../persistance';
import { SecurityModule } from '@/lib/security';
import { AdminService } from './services';

@Module({
  imports: [PersistanceModule, SecurityModule],
  providers: [AdminService],
  exports: [AdminService]
})
export class ServiceModule {}
