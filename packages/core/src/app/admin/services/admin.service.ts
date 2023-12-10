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

    const passwordsMatch = await this.securityService.compare(password, admin.password);

    if (!passwordsMatch) {
      return null;
    }

    const { access_token } = await this.securityService.generateToken(admin);

    return access_token;
  }

  async create(username: string, password: string) {
    const hashedPassword = await this.securityService.hash(password);

    return this.repository.create(username, hashedPassword);
  }
}
