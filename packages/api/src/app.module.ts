import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'
import { SharedModule } from './app/shared'
import { InventoryModule } from './app/inventory'
import { LoggerModule } from './app/shared/logger'
import { ConfigModule } from './app/shared/config'

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'src/common/types/graphql.ts'),
        outputAs: 'class'
      }
    }),
    LoggerModule,
    SharedModule,
    InventoryModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
