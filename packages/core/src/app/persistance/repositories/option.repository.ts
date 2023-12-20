import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OptionEntity } from '../entities';

@Injectable()
export class OptionRepository {
  constructor(@InjectRepository(OptionEntity) private readonly typeorm: Repository<OptionEntity>) {}

  async findAll(): Promise<OptionEntity[]> {
    return this.typeorm.find();
  }

  async findById(id: string): Promise<OptionEntity> {
    return this.typeorm.findOne({ where: { id } });
  }

  async create(option: OptionEntity): Promise<OptionEntity> {
    const newOption = this.typeorm.create(option);

    await this.typeorm.insert(newOption);

    return newOption;
  }

  async update(id: string, option: Partial<OptionEntity>): Promise<OptionEntity> {
    await this.typeorm.update(id, option);

    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.typeorm.delete(id);
  }
}
