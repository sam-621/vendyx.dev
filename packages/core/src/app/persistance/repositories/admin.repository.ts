import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from '@vendyx/common';
import { AdminEntity } from '../entities';

@Injectable()
export class AdminRepository {
  constructor(
    @InjectRepository(AdminEntity)
    private adminTypeormRepository: Repository<AdminEntity>
  ) {}

  getByUsername(username: string): Promise<Admin | null> {
    return this.adminTypeormRepository.findOneBy({ username });
  }

  create(username: string, password: string): Promise<Admin> {
    const admin = new AdminEntity();

    admin.username = username;
    admin.password = password;

    return this.adminTypeormRepository.save(admin);
  }
}
