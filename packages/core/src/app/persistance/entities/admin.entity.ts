import { Admin } from '@vendyx/common';
import { Entity as TypeOrmEntity, Column } from 'typeorm';
import { Entity } from './common.entity';

@TypeOrmEntity('administrator')
export class AdminEntity extends Entity implements Admin {
  @Column('varchar', { unique: true, length: 255 })
  username: string;

  @Column('varchar', { length: 255 })
  password: string;
}
