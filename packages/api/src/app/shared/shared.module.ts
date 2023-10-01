import { Global, Module } from '@nestjs/common'
import { DateScalar, IDScalar } from './services'
import { PrismaModule } from './persistance/prisma.module'

@Global()
@Module({
  imports: [PrismaModule],
  providers: [DateScalar, IDScalar]
})
export class SharedModule {}
