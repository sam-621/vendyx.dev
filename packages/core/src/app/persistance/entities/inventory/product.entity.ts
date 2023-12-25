import { Product } from '@vendyx/common';
import { Column, OneToMany, Entity as TypeOrmEntity } from 'typeorm';

import { ProductVariantEntity } from './product-variant.entity';
import { Entity } from '../common.entity';

@TypeOrmEntity('product')
export class ProductEntity extends Entity implements Product {
  @Column('varchar')
  name: string;

  @Column('varchar', { unique: true })
  slug: string;

  @Column('text')
  description: string;

  @Column('boolean', { default: true })
  enabled: boolean;

  @OneToMany(() => ProductVariantEntity, v => v.product)
  variants: ProductVariantEntity[];
}
