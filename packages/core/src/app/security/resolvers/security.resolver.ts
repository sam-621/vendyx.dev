// import { AuthenticateInput } from '@/lib/gql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SecurityService } from '../services';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@/lib/guards';

@Resolver()
export class SecurityResolver {
  constructor(private readonly securityService: SecurityService) {}

  @Mutation('authenticate')
  async authenticate(@Args('input') input: any) {
    const token = await this.securityService.authenticate(input.username, input.password);

    return token;
  }

  @Mutation('hello')
  @UseGuards(JwtAuthGuard)
  async hello() {
    return 'Hello World!';
  }
}
