import { Market } from '@vendyx/common';
import { Column, JoinTable, ManyToMany, Entity as TypeOrmEntity } from 'typeorm';

import { Entity } from './common.entity';
import { ProductEntity } from './inventory';

@TypeOrmEntity('market')
export class MarketEntity extends Entity implements Market {
  @Column('varchar', { length: 255 })
  name: string;

  @Column('boolean', { default: false })
  default: boolean;

  @ManyToMany(() => ProductEntity)
  @JoinTable()
  products: ProductEntity[];
}
