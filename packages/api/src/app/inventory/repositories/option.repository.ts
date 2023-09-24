import { PrismaService } from '@/app/shared/services'
import { Injectable } from '@nestjs/common'
import { Option, OptionValue } from '../inventory'

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
    const r = await this.prismaService.optionValue.findMany({
      where: { optionId }
    })

    console.log({
      r
    })

    return r
  }
}
