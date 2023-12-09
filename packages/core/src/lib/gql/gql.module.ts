import { Module } from '@nestjs/common';
import { GraphQLModule as NGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { DateScalar, IDScalar } from './scalars';

@Module({
  imports: [
    NGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      includeStacktraceInErrorResponses: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: [
        // modules
        join(process.cwd(), 'src/app/**/*.schema.gql'),
        // directives, scalar types, etc
        join(process.cwd(), 'src/lib/gql/schema.gql')
      ],
      // schema
      definitions: {
        path: join(process.cwd(), 'src/lib/gql/gql.types.ts'),
        outputAs: 'class'
      }
    })
  ],
  providers: [IDScalar, DateScalar]
})
export class GraphQLModule {}
