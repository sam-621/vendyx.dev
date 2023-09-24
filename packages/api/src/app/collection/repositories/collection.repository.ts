import { PrismaService } from '@/app/shared/services'
import { Injectable } from '@nestjs/common'
import { Collection } from '../collection'

@Injectable()
export class CollectionRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<Collection[]> {
    return this.prismaService.collection.findMany()
  }

  async findOne(id: string): Promise<Collection | null> {
    return this.prismaService.collection.findUnique({ where: { id } })
  }
}
