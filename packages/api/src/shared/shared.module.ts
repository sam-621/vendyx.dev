import { Module } from '@nestjs/common'
import { ScalarsModule } from './scalars'
import { LoggerModule } from './logger'
import { ConfigModule } from './config'
import { GraphQLModule } from './gql'
import { PrismaModule } from './persistance'

@Module({
  imports: [ConfigModule, LoggerModule, PrismaModule, GraphQLModule, ScalarsModule]
})
export class SharedModule {}
