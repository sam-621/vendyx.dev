import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { AdminMutationResolver } from './resolvers';

@Module({
  imports: [TypeOrmModule.forFeature([AdminEntity])],
  providers: [AdminMutationResolver]
})
export class AdminModule {}
