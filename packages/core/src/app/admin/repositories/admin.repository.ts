import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminEntity } from '../admin.entity';
import { Admin } from '@vendyx/common';

@Injectable()
export class AdminRepository {
  constructor(
    @InjectRepository(AdminEntity)
    private adminTypeormRepository: Repository<AdminEntity>
  ) {}

  getByUsername(username: string): Promise<Admin | null> {
    return this.adminTypeormRepository.findOneBy({ username });
  }
}
