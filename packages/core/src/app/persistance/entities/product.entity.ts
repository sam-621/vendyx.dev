import { Product } from '@vendyx/common';
import { Column, OneToMany, Entity as TypeOrmEntity } from 'typeorm';

import { Entity } from './common.entity';
import { ProductVariantEntity } from './product-variant.entity';

@TypeOrmEntity('product')
export class ProductEntity extends Entity implements Product {
  @Column('varchar')
  name: string;

  @Column('varchar', { unique: true })
  slug: string;

  @Column('text')
  description: string;

  @Column('varchar')
  enabled: boolean;

  @OneToMany(() => ProductVariantEntity, v => v.product)
  variants: ProductVariantEntity[];
}
