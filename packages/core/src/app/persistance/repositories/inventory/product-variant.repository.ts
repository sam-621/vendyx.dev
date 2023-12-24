import { InjectRepository } from '@nestjs/typeorm';
import { Repository as TypeOrmRepository } from 'typeorm';

import { ProductVariantEntity } from '../../entities';
import { Repository } from '../repository';

export class ProductVariantRepository extends Repository<ProductVariantEntity> {
  constructor(
    @InjectRepository(ProductVariantEntity)
    private readonly typeorm: TypeOrmRepository<ProductVariantEntity>
  ) {
    super(typeorm);
  }
}
