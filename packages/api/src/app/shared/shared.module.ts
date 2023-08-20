import { Global, Module } from '@nestjs/common'
import { PrismaService } from './services'
import { DateScalar } from './services/date-scalar.service'

@Global()
@Module({
  providers: [PrismaService, DateScalar],
  exports: [PrismaService]
})
export class SharedModule {}
