import { join } from 'path';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AdminResolver } from './resolvers';

import { ServiceModule } from '@/app/service';

@Module({
  imports: [
    ServiceModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      includeStacktraceInErrorResponses: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      formatError: error => {
        return {
          message: error.message,
          code: error.extensions?.code
        };
      },
      path: '/api/admin',
      typePaths: [join(process.cwd(), 'src/app/api/**/*.schema.gql')],
      definitions: {
        path: join(process.cwd(), 'src/app/api/common/types/gql.types.ts'),
        outputAs: 'class'
      },
      include: [AdminApiModule]
    })
  ],
  providers: [AdminResolver]
})
export class AdminApiModule {}
