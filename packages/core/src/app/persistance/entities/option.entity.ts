import { Option } from '@vendyx/common';
import { Column, OneToMany } from 'typeorm';

import { Entity } from './common.entity';
import { OptionValueEntity } from './option-value.entity';

export class OptionEntity extends Entity implements Option {
  @Column('varchar')
  name: string;

  @OneToMany(() => OptionValueEntity, v => v.option)
  values: OptionValueEntity[];
}
