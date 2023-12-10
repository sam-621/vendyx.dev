import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Admin } from '@vendyx/common';

@Injectable()
export class SecurityService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(admin: Admin) {
    const payload = { username: admin.username, sub: admin.id };

    return {
      access_token: await this.jwtService.signAsync(payload)
    };
  }

  async verifyToken(token: string) {
    return await this.jwtService.verifyAsync(token);
  }
}
