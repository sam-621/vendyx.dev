import { Global, Module } from '@nestjs/common'
import { DateScalar, IDScalar, PrismaService } from './services'

@Global()
@Module({
  providers: [PrismaService, DateScalar, IDScalar],
  exports: [PrismaService]
})
export class SharedModule {}
