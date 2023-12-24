import { Market } from '@vendyx/common';
import { Column, Entity as TypeOrmEntity } from 'typeorm';

import { Entity } from './common.entity';

@TypeOrmEntity('market')
export class MarketEntity extends Entity implements Market {
  @Column('varchar', { length: 255 })
  name: string;
}
