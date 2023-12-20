import { OptionValue } from '@vendyx/common';
import { Column, ManyToOne } from 'typeorm';

import { Entity } from './common.entity';
import { OptionEntity } from './option.entity';

export class OptionValueEntity extends Entity implements OptionValue {
  @Column('varchar')
  value: string;

  @ManyToOne(() => OptionEntity, o => o.values)
  option: OptionEntity;
}
