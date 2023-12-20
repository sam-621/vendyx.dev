import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  AdminEntity,
  OptionEntity,
  OptionValueEntity,
  ProductEntity,
  ProductVariantEntity
} from './entities';
import { AdminRepository } from './repositories';

const ENTITIES = [
  AdminEntity,
  ProductEntity,
  ProductVariantEntity,
  OptionEntity,
  OptionValueEntity
];

const REPOSITORIES = [AdminRepository];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DB.URL'),
        // auto load entities added to forFeature property in modules @see https://docs.nestjs.com/techniques/database#auto-load-entities
        autoLoadEntities: true,
        synchronize: process.env.NODE_ENV !== 'production'
      }),
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([...ENTITIES])
  ],
  providers: [...REPOSITORIES],
  exports: [...REPOSITORIES]
})
export class PersistanceModule {}
