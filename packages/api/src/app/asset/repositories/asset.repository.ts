import { AssetType } from '@/shared/types'
import { Injectable } from '@nestjs/common'
import { Asset } from '../asset'
import { PrismaService } from '@/shared/persistance'

@Injectable()
export class AssetRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<Asset[]> {
    const result = await this.prismaService.asset.findMany()

    return result.map(r => ({ ...r, type: r.type as AssetType }))
  }

  async findOne(id: string): Promise<Asset | null> {
    const result = await this.prismaService.asset.findUnique({ where: { id } })

    if (!result) return null

    return {
      ...result,
      type: result.type as AssetType
    }
  }

  async create(input: CreateAssetInputRepository) {
    const result = await this.prismaService.asset.create({ data: input })

    return result
  }
}

type CreateAssetInputRepository = Pick<Asset, 'source' | 'name' | 'type'>
