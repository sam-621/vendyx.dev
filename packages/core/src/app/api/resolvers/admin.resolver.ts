import { AdminService } from '@/app/service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AdminJwtAuthGuard, AuthenticateAdminInput } from '../common';
import { UseGuards } from '@nestjs/common';
import { GraphQLError } from 'graphql';

@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation('authenticateAdmin')
  async authenticate(@Args('input') input: AuthenticateAdminInput) {
    // throw new GraphQLError('Invalid credentials', { extensions: { code: 'INVALID_CREDENTIALS' } });

    return this.adminService.authenticate(input.username, input.password);
  }

  @UseGuards(AdminJwtAuthGuard)
  @Mutation('hello')
  async hello() {
    return 'Hello World!';
  }
}
