import { Module } from '@nestjs/common'
import { ScalarsModule } from './scalars'
import { LoggerModule } from './logger'
import { ConfigModule } from './config'
import { GraphQLModule } from './gql'

@Module({
  imports: [ConfigModule, ScalarsModule, LoggerModule, GraphQLModule]
})
export class SharedModule {}
