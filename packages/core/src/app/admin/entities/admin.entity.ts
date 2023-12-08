import { Entity } from '@/lib/entities';
import { Admin } from '@vendyx/common';
import { Entity as TypeOrmEntity, Column } from 'typeorm';

@TypeOrmEntity('administrator')
export class AdminEntity extends Entity implements Admin {
  @Column('varchar', { unique: true, length: 255 })
  username: string;

  @Column('varchar', { length: 255 })
  password: string;
}
