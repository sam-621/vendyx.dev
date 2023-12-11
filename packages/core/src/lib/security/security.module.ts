import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PersistanceModule } from '@/app/persistance';
import { AdminJwtStrategy } from './strategies';
import { SecurityService } from './services';

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
