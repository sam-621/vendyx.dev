import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { AdminRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  providers: [AdminRepository],
  exports: [AdminRepository]
})
export class AdminModule {}
