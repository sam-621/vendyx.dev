import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SecurityService } from './services';
import { AdminModule } from '../admin';
import { SecurityResolver } from './resolvers';
import { JwtStrategy } from './strategies';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60s' }
    }),
    AdminModule
  ],
  providers: [SecurityResolver, SecurityService, JwtStrategy],
  exports: [SecurityService]
})
export class SecurityModule {}
