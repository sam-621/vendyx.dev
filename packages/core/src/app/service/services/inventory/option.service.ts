import { Injectable } from '@nestjs/common';

import { CreateOptionInput } from '@/app/api/common';
import { PrismaService } from '@/app/persistance';

@Injectable()
export class OptionService {
  repository: PrismaService['option'];

  constructor(private readonly prisma: PrismaService) {
    this.repository = this.prisma.option;
  }

  async create(input: CreateOptionInput) {
    return this.repository.create({
      data: {
        name: input.name,
        values: {
          createMany: {
            data: input.values?.map(v => ({ value: v })) ?? []
          }
        }
      }
    });
  }
}
