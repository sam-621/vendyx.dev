import { AdminResolver } from './resolvers';
import { GraphQLModule as NGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { Module } from '@nestjs/common';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { DateScalar, IDScalar } from './common/scalars';

const COMMON_GQL_OPTIONS: ApolloDriverConfig = {
  driver: ApolloDriver,
  playground: false,
  includeStacktraceInErrorResponses: false,
  plugins: [ApolloServerPluginLandingPageLocalDefault()]
};

const ADMIN_RESOLVERS = [AdminResolver];

@Module({
  providers: [...ADMIN_RESOLVERS]
})
class AdminApiModule {}

@Module({
  imports: [
    AdminApiModule,
    NGraphQLModule.forRoot<ApolloDriverConfig>({
      ...COMMON_GQL_OPTIONS,
      path: '/api/admin',
      typePaths: [join(process.cwd(), 'src/app/**/*.schema.gql')],
      definitions: {
        path: join(process.cwd(), 'src/app/api/common/types/gql.types.ts'),
        outputAs: 'class'
      },
      include: [AdminApiModule]
    }),
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), '../admin-ui/dist'),
      renderPath: '/admin'
    })
  ],
  providers: [IDScalar, DateScalar]
})
export class ApiModule {}
