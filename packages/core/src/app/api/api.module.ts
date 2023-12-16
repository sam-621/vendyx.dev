import { join } from 'path';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule as NGraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';

import { DateScalar, IDScalar } from './common/scalars';
import { AdminResolver } from './resolvers';
import { ServiceModule } from '../service';

const COMMON_GQL_OPTIONS: ApolloDriverConfig = {
  driver: ApolloDriver,
  playground: false,
  includeStacktraceInErrorResponses: false,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  formatError: error => {
    return {
      message: error.message,
      code: error.extensions?.code
    };
  }
};

const ADMIN_RESOLVERS = [AdminResolver];

@Module({
  imports: [ServiceModule],
  providers: [...ADMIN_RESOLVERS]
})
class AdminApiModule {}

@Module({
  imports: [
    AdminApiModule,
    NGraphQLModule.forRoot<ApolloDriverConfig>({
      ...COMMON_GQL_OPTIONS,
      path: '/api/admin',
      typePaths: [join(process.cwd(), 'src/app/api/**/*.schema.gql')],
      definitions: {
        path: join(process.cwd(), 'src/app/api/common/types/gql.types.ts'),
        outputAs: 'class'
      },
      include: [AdminApiModule]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '../admin-ui/dist'),
      serveRoot: '/admin',
      exclude: ['/api/(.*)']
    })
  ],
  providers: [IDScalar, DateScalar]
})
export class ApiModule {}
