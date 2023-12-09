import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { AdminMutationResolver } from './resolvers';
import { AdminService } from './services';
import { AdminRepository } from './repositories';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  providers: [AdminRepository, AdminService, AdminMutationResolver]
})
export class AdminModule {}
