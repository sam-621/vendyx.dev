import { Module } from '@nestjs/common';
import { GraphQLModule as NGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { DateScalar, IDScalar } from './scalars';
import { SecurityAdminApiModule } from '@/app/security';

const COMMON_GQL_SCHEMA_PATH = join(process.cwd(), 'src/lib/gql/schema.gql');
const ADMIN_GQL_SCHEMA_PATH = join(process.cwd(), 'src/app/**/*.schema.gql');
const SHOP_GQL_SCHEMA_PATH = join(process.cwd(), 'src/app/shop/**/shop-*.schema.gql');

const COMMON_OPTIONS: ApolloDriverConfig = {
  driver: ApolloDriver,
  playground: false,
  includeStacktraceInErrorResponses: false,
  plugins: [ApolloServerPluginLandingPageLocalDefault()]
};

const ADMIN_MODULES = [SecurityAdminApiModule];

@Module({
  imports: [
    ...ADMIN_MODULES,
    NGraphQLModule.forRoot<ApolloDriverConfig>({
      ...COMMON_OPTIONS,
      path: '/api/admin',
      typePaths: [COMMON_GQL_SCHEMA_PATH, ADMIN_GQL_SCHEMA_PATH],
      definitions: {
        path: join(process.cwd(), 'src/lib/gql/gql.types.ts'),
        outputAs: 'class'
      },
      include: [...ADMIN_MODULES]
    })
    // NGraphQLModule.forRoot<ApolloDriverConfig>({
    //   ...COMMON_OPTIONS,
    //   path: '/api/shop',
    //   typePaths: [COMMON_GQL_SCHEMA_PATH, SHOP_GQL_SCHEMA_PATH],
    //   definitions: {
    //     path: join(process.cwd(), 'src/lib/gql/shop-gql.types.ts'),
    //     outputAs: 'class'
    //   },
    //   include: []
    // })
  ],
  providers: [IDScalar, DateScalar]
})
export class ApiModule {}
