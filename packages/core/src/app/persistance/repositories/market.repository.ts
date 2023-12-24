import { Injectable } from '@nestjs/common';
import { Market } from '@vendyx/common';
import { Repository as TypeOrmRepository } from 'typeorm';

import { Repository } from './repository';
import { MarketEntity } from '../entities';

@Injectable()
export class MarketRepository extends Repository<Market> {
  constructor(private readonly typeorm: TypeOrmRepository<MarketEntity>) {
    super(typeorm);
  }
}
