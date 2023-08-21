import { PrismaService } from '@/app/shared/services'
import { Label } from '@/common/types/graphql'
import { Injectable } from '@nestjs/common'

@Injectable()
export class LabelRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<LabelWithNoRelations[]> {
    return this.prismaService.label.findMany()
  }

  async findOne(id: string): Promise<LabelWithNoRelations> {
    return this.prismaService.label.findUnique({ where: { id } })
  }
}

type LabelWithNoRelations = Omit<Label, 'values'>
