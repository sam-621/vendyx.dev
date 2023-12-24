import { join } from 'path';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AdminApiModule } from './admin/admin.module';
import { DateScalar, IDScalar } from './common/scalars';

const COMMON_SCHEMA_PATH = join(process.cwd(), 'src/app/api/common/**/*.schema.gql');
const ADMIN_API_SCHEMA_PATH = join(process.cwd(), 'src/app/api/admin/**/*.schema.gql');

const COMMON_GQL_CONFIG = (configService: ConfigService): ApolloDriverConfig => ({
  playground: false,
  includeStacktraceInErrorResponses: false,
  plugins:
    configService.get('APP.MODE') !== 'dev' ? [ApolloServerPluginLandingPageLocalDefault()] : [],
  formatError: error => {
    return {
      message: error.message,
      code: error.extensions?.code
    };
  }
});

@Module({
  imports: [
    AdminApiModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => ({
        ...COMMON_GQL_CONFIG(configService),
        path: '/admin-api',
        typePaths: [COMMON_SCHEMA_PATH, ADMIN_API_SCHEMA_PATH],
        definitions: {
          path: join(process.cwd(), 'src/app/api/common/types/gql.types.ts'),
          outputAs: 'class'
        },
        include: [AdminApiModule]
      }),
      inject: [ConfigService]
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
