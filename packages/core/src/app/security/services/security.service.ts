import { AdminRepository } from '@/app/admin';
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

  async authenticate(username: string, password: string) {
    const admin = await this.validateUser(username, password);

    if (!admin) {
      return null;
    }

    const { access_token } = await this.generateToken(admin);

    return access_token;
  }

  async validateUser(username: string, password: string) {
    const admin = await this.adminRepository.getByUsername(username);

    if (!admin) {
      return null;
    }

    const passwordsMatch = await this.compare(password, admin.password);

    if (!passwordsMatch) {
      return null;
    }

    return admin;
  }

  private async generateToken(admin: Admin) {
    const payload = { username: admin.username, sub: admin.id };

    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

  private async verifyToken(token: string) {
    return await this.jwtService.verifyAsync(token);
  }

  private async hash(str: string) {
    const salt = await this.generateSalt();

    return bcrypt.hash(str, salt);
  }

  private async compare(str: string, hash: string) {
    return bcrypt.compare(str, hash);
  }

  private async generateSalt() {
    return await bcrypt.genSalt();
  }
}
