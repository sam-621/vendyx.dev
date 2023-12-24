import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';

import { OptionValueEntity } from '../../entities';
import { Repository } from '../repository';

@Injectable()
export class OptionValueRepository extends Repository<OptionValueEntity> {
  constructor(
    @InjectRepository(OptionValueEntity)
    private readonly typeorm: TypeOrmRepository<OptionValueEntity>
  ) {
    super(typeorm);
  }
}
