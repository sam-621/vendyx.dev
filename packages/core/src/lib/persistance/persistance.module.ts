import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get<string>('DB.URL'),
        // auto load entities added to forFeature property in modules @see https://docs.nestjs.com/techniques/database#auto-load-entities
        autoLoadEntities: true
      }),
      inject: [ConfigService]
    })
  ]
})
export class PersistanceModule {}
