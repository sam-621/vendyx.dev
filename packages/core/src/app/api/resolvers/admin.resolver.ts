import { AdminService } from '@/app/service';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AdminJwtAuthGuard, AuthenticateInput } from '../common';
import { UseGuards } from '@nestjs/common';

@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation('authenticate')
  async authenticate(@Args('input') input: AuthenticateInput) {
    return this.adminService.authenticate(input.username, input.password);
  }

  @UseGuards(AdminJwtAuthGuard)
  @Mutation('hello')
  async hello() {
    return 'Hello World!';
  }
}
