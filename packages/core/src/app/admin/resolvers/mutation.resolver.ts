import { AuthenticateInput } from '@/lib/gql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AdminMutationResolver {
  @Mutation('authenticate')
  async authenticate(@Args('input') input: AuthenticateInput) {
    console.log({ input });

    return 'authenticated!!!';
  }
}
