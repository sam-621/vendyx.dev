import { Injectable } from '@nestjs/common';

import { CreateOptionInput } from '@/app/api/common';
import { OptionRepository, OptionValueRepository } from '@/app/persistance';

@Injectable()
export class OptionService {
  constructor(
    private readonly optionRepository: OptionRepository,
    private readonly optionValuesRepository: OptionValueRepository
  ) {}

  async create(input: CreateOptionInput) {
    this.optionRepository.save({
      name: input.name,
      values: input.values?.map(v => ({ value: v })) ?? []
    });
  }
}
