import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';

import { Repository } from './repository';
import { ProductVariantEntity } from '../entities';

export class ProductVariantRepository extends Repository<ProductVariantEntity> {
  constructor(
    @InjectRepository(ProductVariantEntity)
    private readonly typeorm: TypeOrmRepository<ProductVariantEntity>
  ) {
    super(typeorm);
  }
}
