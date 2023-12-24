import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';

import { Repository } from './repository';
import { ProductEntity } from '../entities';

@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly typeorm: TypeOrmRepository<ProductEntity>
  ) {
    super(typeorm);
  }
}
