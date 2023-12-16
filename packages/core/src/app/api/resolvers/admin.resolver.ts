import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AdminJwtAuthGuard, AuthenticateAdminInput } from '../common';

import { AdminService } from '@/app/service';

@Resolver()
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation('authenticateAdmin')
  async authenticate(@Args('input') input: AuthenticateAdminInput) {
    return this.adminService.authenticate(input.username, input.password);
  }

  @UseGuards(AdminJwtAuthGuard)
  @Query('validateAdminToken')
  async validateAdmin() {
    return true;
  }
}
