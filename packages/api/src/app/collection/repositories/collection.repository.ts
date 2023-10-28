import { Injectable } from '@nestjs/common'
import { Collection } from '../collection'
import { PrismaService } from '@/shared/persistance'
import { CreateCollectionInput } from '@/shared/types'

@Injectable()
export class CollectionRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<Collection[]> {
    return this.prismaService.collection.findMany()
  }

  async findOneById(id: string): Promise<Collection | null> {
    return this.prismaService.collection.findUnique({ where: { id } })
  }

  async findOneBySlug(slug: string): Promise<Collection | null> {
    return this.prismaService.collection.findUnique({ where: { slug } })
  }

  async create(input: CreateCollectionInput): Promise<Collection | null> {
    return this.prismaService.collection.create({
      data: {
        ...input,
        description: input.description ?? undefined,
        enabled: input.enabled ?? undefined
      }
    })
  }
}
