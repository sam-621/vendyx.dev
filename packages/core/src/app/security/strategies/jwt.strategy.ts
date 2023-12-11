import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Payload } from '../types';
import { AdminRepository } from '@/app/admin';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
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
