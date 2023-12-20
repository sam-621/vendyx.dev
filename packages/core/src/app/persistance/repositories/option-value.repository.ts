import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OptionValueEntity } from '../entities';

@Injectable()
export class OptionValueRepository {
  constructor(
    @InjectRepository(OptionValueEntity) private readonly typeorm: Repository<OptionValueEntity>
  ) {}

  async findAll(): Promise<OptionValueEntity[]> {
    return this.typeorm.find();
  }

  async findById(id: string): Promise<OptionValueEntity> {
    return this.typeorm.findOne({ where: { id } });
  }

  async create(optionValue: OptionValueEntity): Promise<OptionValueEntity> {
    const newOptionValue = this.typeorm.create(optionValue);

    await this.typeorm.insert(newOptionValue);

    return newOptionValue;
  }

  async update(id: string, optionValue: Partial<OptionValueEntity>): Promise<OptionValueEntity> {
    await this.typeorm.update(id, optionValue);

    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.typeorm.delete(id);
  }
}
