import { Injectable } from '@nestjs/common';
import { AdminRepository } from '../repositories';

import { SecurityService } from '@/lib/security';

@Injectable()
export class AdminService {
  constructor(
    private readonly repository: AdminRepository,
    private readonly securityService: SecurityService
  ) {}

  async authenticate(username: string, password: string) {
    const admin = await this.repository.getByUsername(username);

    if (!admin) {
      return null;
    }

    if (admin.password !== password) {
      return null;
    }

    const { access_token } = await this.securityService.generateToken(admin);

    return access_token;
  }
}
