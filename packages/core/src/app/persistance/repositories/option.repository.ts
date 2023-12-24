import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';

import { Repository } from './repository';
import { OptionEntity } from '../entities';

@Injectable()
export class OptionRepository extends Repository<OptionEntity> {
  constructor(
    @InjectRepository(OptionEntity) private readonly typeorm: TypeOrmRepository<OptionEntity>
  ) {
    super(typeorm);
  }
}
