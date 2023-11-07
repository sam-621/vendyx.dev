import { Module } from '@nestjs/common'
import { GraphQLModule as NGraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default'

@Module({
  imports: [
    NGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      includeStacktraceInErrorResponses: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.gql'],
      definitions: {
        path: join(process.cwd(), 'src/shared/types/graphql.ts'),
        outputAs: 'class'
      }
    })
  ]
})
export class GraphQLModule {}
