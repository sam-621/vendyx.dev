import { AdminRepository } from '@/app/persistance';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin } from '@vendyx/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SecurityService {
  constructor(
    private readonly adminRepository: AdminRepository,
    private readonly jwtService: JwtService
  ) {}

  async generateToken(admin: Admin) {
    const payload = { username: admin.username, sub: admin.id };

    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

  async verifyToken(token: string) {
    return await this.jwtService.verifyAsync(token);
  }

  async hash(str: string) {
    const salt = await this.generateSalt();

    return bcrypt.hash(str, salt);
  }

  async compare(str: string, hash: string) {
    return bcrypt.compare(str, hash);
  }

  private async generateSalt() {
    return await bcrypt.genSalt();
  }
}
