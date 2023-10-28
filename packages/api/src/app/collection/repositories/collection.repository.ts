import { Injectable } from '@nestjs/common'
import { Collection } from '../collection'
import { PrismaService } from '@/app/shared/persistance'

@Injectable()
export class CollectionRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<Collection[]> {
    return this.prismaService.collection.findMany()
  }

  async findOne(id: string): Promise<Collection | null> {
    return this.prismaService.collection.findUnique({ where: { id } })
  }

  async create(input: CreateCollectionInput) {
    return this.prismaService.collection.create({ data: input })
  }
}

type CreateCollectionInput = Omit<Collection, 'id' | 'updatedAt' | 'createdAt'>
