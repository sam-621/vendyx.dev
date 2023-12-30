import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { Payload } from '../types/jwt.type';

import { PrismaService } from '@/app/persistance';
import { UnauthorizedError } from '@/lib/errors';

@Injectable()
export class AdminJwtStrategy extends PassportStrategy(Strategy, 'admin-jwt') {
  repository: PrismaService['administrator'];

  constructor(
    private readonly configService: ConfigService,
    private readonly prisma: PrismaService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('AUTH.JWT_SECRET')
    });

    this.repository = this.prisma.administrator;
  }

  async validate(payload: Payload) {
    const { username } = payload;

    const user = this.repository.findUnique({ where: { username } });

    if (!user) {
      throw new UnauthorizedError('Invalid token');
    }

    return user;
  }
}
