import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Payload } from '../types/jwt.type';
import { AdminRepository } from '@/app/persistance';

@Injectable()
export class AdminJwtStrategy extends PassportStrategy(Strategy, 'admin-jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly adminRepository: AdminRepository
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('AUTH.JWT_SECRET')
    });
  }

  async validate(payload: Payload) {
    const { username } = payload;

    const user = this.adminRepository.getByUsername(username);

    if (!user) {
      return null;
    }

    return user;
  }
}
