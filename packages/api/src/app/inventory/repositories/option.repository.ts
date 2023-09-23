import { PrismaService } from '@/app/shared/services'
import { Injectable } from '@nestjs/common'
import { Option } from '../inventory'

@Injectable()
export class OptionRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<Option[]> {
    return this.prismaService.option.findMany()
  }

  async findOne(id: string): Promise<Option> {
    return this.prismaService.option.findUnique({ where: { id } })
  }
}
