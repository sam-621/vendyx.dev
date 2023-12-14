import { Admin } from '@vendyx/common';
import { Column, Entity as TypeOrmEntity } from 'typeorm';

import { Entity } from './common.entity';

@TypeOrmEntity('administrator')
export class AdminEntity extends Entity implements Admin {
  @Column('varchar', { unique: true, length: 255 })
  username: string;

  @Column('varchar', { length: 255 })
  password: string;
}
