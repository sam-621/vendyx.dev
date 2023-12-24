import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from '@vendyx/common';
import { Repository as TypeOrmRepository } from 'typeorm';

import { Repository } from './repository';
import { AdminEntity } from '../entities';

@Injectable()
export class AdminRepository extends Repository<AdminEntity> {
  constructor(
    @InjectRepository(AdminEntity)
    private typeorm: TypeOrmRepository<AdminEntity>
  ) {
    super(typeorm);
  }

  async getByUsername(username: string): Promise<Admin | null> {
    return this.typeorm.findOneBy({ username });
  }
}
