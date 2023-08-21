import { PrismaService } from '@/app/shared/services'
import { Collection } from '@/common/types/graphql'
import { Injectable } from '@nestjs/common'

@Injectable()
export class CollectionRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<CollectionWithNoRelations[]> {
    return this.prismaService.collection.findMany()
  }

  async findOne(id: string): Promise<CollectionWithNoRelations> {
    return this.prismaService.collection.findUnique({ where: { id } })
  }
}

type CollectionWithNoRelations = Omit<Collection, 'products' | 'assets' | 'labelValues'>
