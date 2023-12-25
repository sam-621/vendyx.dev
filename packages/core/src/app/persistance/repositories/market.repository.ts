import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ID } from '@vendyx/common';
import { Repository as TypeOrmRepository } from 'typeorm';

import { Repository } from './repository';
import { MarketEntity } from '../entities';

@Injectable()
export class MarketRepository extends Repository<MarketEntity> {
  constructor(
    @InjectRepository(MarketEntity)
    private readonly typeorm: TypeOrmRepository<MarketEntity>
  ) {
    super(typeorm);
  }

  async findDefault() {
    return this.typeorm.findOne({ where: { default: true } });
  }

  async addProduct(marketId: ID, productId: ID) {
    return this.typeorm
      .createQueryBuilder()
      .relation(MarketEntity, 'products')
      .of(marketId)
      .add(productId);
  }

  async removeProduct(marketId: ID, productId: ID) {
    return this.typeorm
      .createQueryBuilder()
      .relation(MarketEntity, 'products')
      .of(marketId)
      .remove(productId);
  }
}
