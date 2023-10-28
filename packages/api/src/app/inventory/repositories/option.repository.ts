import { Injectable } from '@nestjs/common'
import { Option, OptionValue } from '../inventory'
import { PrismaService } from '@/shared/persistance'

@Injectable()
export class OptionRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<Option[]> {
    return this.prismaService.option.findMany()
  }

  async findOne(id: string): Promise<Option | null> {
    return this.prismaService.option.findUnique({ where: { id } })
  }

  async findOptionValuesOnOption(optionId: string): Promise<OptionValue[]> {
    return await this.prismaService.optionValue.findMany({
      where: { optionId }
    })
  }
}
