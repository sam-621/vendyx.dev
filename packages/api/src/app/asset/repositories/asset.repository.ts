import { PrismaService } from '@/app/shared/services'
import { Asset, AssetType } from '@/common/types/graphql'
import { Injectable } from '@nestjs/common'

@Injectable()
export class AssetRepository {
  constructor(private prismaService: PrismaService) {}

  async findMany(): Promise<AssetWithNoRelations[]> {
    const result = await this.prismaService.asset.findMany()

    return result.map(r => ({ ...r, type: r.type as AssetType }))
  }

  async findOne(id: string): Promise<AssetWithNoRelations> {
    const result = await this.prismaService.asset.findUnique({ where: { id } })

    return {
      ...result,
      type: result.type as AssetType
    }
  }
}

type AssetWithNoRelations = Omit<
  Asset,
  'products' | 'collections' | 'productVariants' | 'labelValues'
>
