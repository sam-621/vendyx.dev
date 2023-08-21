import { PrismaService } from '@/app/shared/services'
import { Option } from '@/common/types/graphql'
import { Injectable } from '@nestjs/common'

@Injectable()
export class OptionRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<OptionWithNoRelations[]> {
    return this.prismaService.option.findMany()
  }

  async findOne(id: string): Promise<OptionWithNoRelations> {
    return this.prismaService.option.findUnique({ where: { id } })
  }
}

type OptionWithNoRelations = Omit<Option, 'values'>
