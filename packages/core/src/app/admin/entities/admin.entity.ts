import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('administrator')
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { unique: true, length: 255 })
  username: string;

  @Column('varchar', { length: 255 })
  password: string;
}
