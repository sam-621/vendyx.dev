import { ProductVariant } from '@vendyx/common';
import { Column, JoinTable, ManyToMany, ManyToOne, Entity as TypeOrmEntity } from 'typeorm';

import { OptionValueEntity } from './option-value.entity';
import { ProductEntity } from './product.entity';
import { Entity } from '../common.entity';

@TypeOrmEntity('product_variant')
export class ProductVariantEntity extends Entity implements ProductVariant {
  @Column('varchar', { unique: true })
  sku: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  comparisonPrice: number;

  @Column('decimal', { precision: 10, scale: 2 })
  costPerUnit: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  weight: number;

  @Column('int')
  stock: number;

  @Column('boolean', { default: true })
  enabled: boolean;

  @ManyToOne(() => ProductEntity, p => p.variants)
  product: ProductEntity;

  @ManyToMany(() => OptionValueEntity)
  @JoinTable()
  options: OptionValueEntity[];
}
