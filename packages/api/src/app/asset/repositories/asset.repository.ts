import { PrismaService } from '@/shared/persistance'
import { Injectable } from '@nestjs/common'
import { Asset } from '../asset'
import { ID } from '@/shared/entities/entity'

@Injectable()
export class AssetRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findUnique(id: ID): Promise<Asset | null> {
    return this.prismaService.asset.findUnique({ where: { id } })
  }

  async findMany(): Promise<Asset[]> {
    return this.prismaService.asset.findMany()
  }
}
