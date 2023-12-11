import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
export class AdminResolver {
  @Mutation('authenticate')
  async authenticate(@Args('input') input: any) {
    console.log('input', input);

    return 'token';
  }

  @Mutation('hello')
  async hello() {
    return 'Hello World!';
  }
}
