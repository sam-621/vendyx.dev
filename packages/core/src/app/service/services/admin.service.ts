import { Injectable } from '@nestjs/common';

import { PrismaService } from '@/app/persistance';
import { ValidationError } from '@/lib/errors';
import { SecurityService } from '@/lib/security';

@Injectable()
export class AdminService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly securityService: SecurityService
  ) {}

  async authenticate(username: string, password: string) {
    const admin = await this.prisma.administrator.findUnique({ where: { username } });

    if (!admin) {
      throw new ValidationError('Invalid username or password');
    }

    const passwordsMatch = await this.securityService.compare(password, admin.password);

    if (!passwordsMatch) {
      throw new ValidationError('Invalid username or password');
    }

    const { access_token } = await this.securityService.generateToken(admin);

    return access_token;
  }
}
