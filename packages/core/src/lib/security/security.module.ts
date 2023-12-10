import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SecurityService } from './security.service';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: 'secret',
      signOptions: { expiresIn: '60s' }
    })
  ],
  providers: [SecurityService],
  exports: [SecurityService]
})
export class SecurityModule {}
