import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

import { SecurityService } from './services';
import { AdminJwtStrategy } from './strategies';

import { PersistanceModule } from '@/app/persistance';

@Module({
  imports: [
    PersistanceModule,
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('AUTH.JWT_SECRET'),
        signOptions: { expiresIn: configService.get('AUTH.JWT_EXPIRES_IN') }
      }),
      inject: [ConfigService]
    })
  ],
  providers: [AdminJwtStrategy, SecurityService],
  exports: [SecurityService]
})
export class SecurityModule {}
