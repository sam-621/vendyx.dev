import { Global, Module } from '@nestjs/common'
import { PrismaModule } from './persistance/prisma.module'
import { ScalarsModule } from './scalars/scalars.module'

@Global()
@Module({
  imports: [PrismaModule, ScalarsModule]
})
export class SharedModule {}
