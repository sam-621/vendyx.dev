import { Option } from '@vendyx/common';
import { Column, OneToMany, Entity as TypeOrmEntity } from 'typeorm';

import { OptionValueEntity } from './option-value.entity';
import { Entity } from '../common.entity';

@TypeOrmEntity('option')
export class OptionEntity extends Entity implements Option {
  @Column('varchar')
  name: string;

  @OneToMany(() => OptionValueEntity, v => v.option)
  values: OptionValueEntity[];
}
