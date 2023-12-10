import { AuthenticateInput } from '@/lib/gql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SecurityService } from '../services';

@Resolver()
export class SecurityResolver {
  constructor(private readonly securityService: SecurityService) {}

  @Mutation('authenticate')
  async authenticate(@Args('input') input: AuthenticateInput) {
    const token = await this.securityService.authenticate(input.username, input.password);

    return token;
  }
}
