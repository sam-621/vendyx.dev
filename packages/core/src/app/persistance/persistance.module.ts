import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import {
  AdminEntity,
  MarketEntity,
  OptionEntity,
  OptionValueEntity,
  ProductEntity,
  ProductVariantEntity
} from './entities';
import {
  AdminRepository,
  MarketRepository,
  OptionRepository,
  OptionValueRepository,
  ProductRepository,
  ProductVariantRepository
} from './repositories';

export const ENTITIES = [
  AdminEntity,
  ProductEntity,
  ProductVariantEntity,
  OptionEntity,
  OptionValueEntity,
  MarketEntity
];

export const REPOSITORIES = [
  AdminRepository,
  ProductRepository,
  ProductVariantRepository,
  OptionRepository,
  OptionValueRepository,
  MarketRepository
];

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DB.URL'),
        // auto load entities added to forFeature property in modules @see https://docs.nestjs.com/techniques/database#auto-load-entities
        autoLoadEntities: true,
        //synchronize: process.env.NODE_ENV !== 'production' (when project is ready)
        synchronize: true
      }),
      inject: [ConfigService]
    }),
    TypeOrmModule.forFeature([...ENTITIES])
  ],
  providers: [...REPOSITORIES],
  exports: [...REPOSITORIES]
})
export class PersistanceModule {}
