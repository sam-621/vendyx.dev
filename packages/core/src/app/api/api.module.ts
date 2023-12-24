import { join } from 'path';

import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AdminApiModule } from './admin/admin.module';
import { DateScalar, IDScalar } from './common/scalars';

@Module({
  imports: [
    AdminApiModule,
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
      path: '/admin-api',
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
