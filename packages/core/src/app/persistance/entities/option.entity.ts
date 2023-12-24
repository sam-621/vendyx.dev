import { Option } from '@vendyx/common';
import { Column, OneToMany, Entity as TypeOrmEntity } from 'typeorm';

import { Entity } from './common.entity';
import { OptionValueEntity } from './option-value.entity';

@TypeOrmEntity('option')
export class OptionEntity extends Entity implements Option {
  @Column('varchar')
  name: string;

  @OneToMany(() => OptionValueEntity, v => v.option)
  values: OptionValueEntity[];
}
