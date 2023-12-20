import { ProductVariant } from '@vendyx/common';
import { Column, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

import { Entity } from './common.entity';
import { OptionValueEntity } from './option-value.entity';
import { ProductEntity } from './product.entity';

export class ProductVariantEntity extends Entity implements ProductVariant {
  @Column('varchar', { unique: true })
  sku: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('decimal', { precision: 10, scale: 2 })
  comparisonPrice: number;

  @Column('decimal', { precision: 10, scale: 2 })
  costPerUnit: number;

  @Column('decimal', { precision: 10, scale: 2 })
  weight: number;

  @Column('int')
  stock: number;

  @Column()
  enabled: boolean;

  @ManyToOne(() => ProductEntity, p => p.variants)
  product: ProductEntity;

  @ManyToMany(() => OptionValueEntity)
  @JoinTable()
  options: OptionValueEntity[];
}
