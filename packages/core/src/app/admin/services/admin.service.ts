import { Injectable } from '@nestjs/common';
import { AdminRepository } from '../repositories';

@Injectable()
export class AdminService {
  constructor(private readonly repository: AdminRepository) {}

  async authenticate(username: string, password: string) {
    const admin = await this.repository.getByUsername(username);

    if (!admin) {
      return null;
    }

    if (admin.password !== password) {
      return null;
    }

    return 'token';
  }
}
