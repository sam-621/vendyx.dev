import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';

import { ProductEntity } from '../../entities';
import { Repository } from '../repository';

@Injectable()
export class ProductRepository extends Repository<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly typeorm: TypeOrmRepository<ProductEntity>
  ) {
    super(typeorm);
  }
}
