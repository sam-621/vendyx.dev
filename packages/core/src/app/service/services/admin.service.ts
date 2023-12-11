import { AdminRepository } from '@/app/persistance';
import { SecurityService } from '@/lib/security';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  constructor(
    private readonly adminRepository: AdminRepository,
    private readonly securityService: SecurityService
  ) {}

  async authenticate(username: string, password: string) {
    const admin = await this.adminRepository.getByUsername(username);

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
}
