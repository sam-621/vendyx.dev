import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';

import { Repository } from './repository';
import { OptionValueEntity } from '../entities';

@Injectable()
export class OptionValueRepository extends Repository<OptionValueEntity> {
  constructor(
    @InjectRepository(OptionValueEntity)
    private readonly typeorm: TypeOrmRepository<OptionValueEntity>
  ) {
    super(typeorm);
  }
}
