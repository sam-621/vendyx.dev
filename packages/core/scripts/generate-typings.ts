import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: [join(process.cwd(), 'src/app/api/**/*.schema.gql')],
  path: join(process.cwd(), 'src/app/api/common/types/gql.types.ts'),
  outputAs: 'class'
});
