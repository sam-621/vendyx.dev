import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SecurityService } from './services';
import { AdminModule } from '../admin';
import { SecurityResolver } from './resolvers';
import { JwtStrategy } from './strategies';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('AUTH.JWT_SECRET'),
        signOptions: { expiresIn: configService.get('AUTH.JWT_EXPIRES_IN') }
      }),
      inject: [ConfigService]
    }),
    AdminModule
  ],
  providers: [SecurityResolver, SecurityService, JwtStrategy],
  exports: [SecurityService]
})
export class SecurityModule {}
