import { Module } from '@nestjs/common'
import { PrismaModule } from './persistance'
import { ScalarsModule } from './scalars'
import { LoggerModule } from './logger'
import { ConfigModule } from './config'
import { GraphQLModule } from './gql'

@Module({
  imports: [ConfigModule, PrismaModule, ScalarsModule, LoggerModule, GraphQLModule]
})
export class SharedModule {}
