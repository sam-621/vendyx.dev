import { Global, Module } from '@nestjs/common'
import { PrismaModule } from './persistance/prisma.module'
import { ScalarsModule } from './scalars/scalars.module'
import { LoggerModule } from './logger'
import { ConfigModule } from './config'
import { GraphQLModule } from './gql'

@Global()
@Module({
  imports: [ConfigModule, PrismaModule, ScalarsModule, LoggerModule, GraphQLModule]
})
export class SharedModule {}
