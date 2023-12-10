import { AuthenticateInput } from '@/lib/gql';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AdminService } from '../services';

@Resolver()
export class AdminMutationResolver {
  constructor(private readonly service: AdminService) {}

  @Mutation('authenticate')
  async authenticate(@Args('input') input: AuthenticateInput) {
    const token = await this.service.authenticate(input.username, input.password);

    return token;
  }

  @Mutation('createAdmin')
  async createAdmin(@Args('input') input: AuthenticateInput) {
    const admin = await this.service.create(input.username, input.password);

    return admin;
  }
}
