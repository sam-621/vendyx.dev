import { Injectable } from '@nestjs/common'
import { AssetRepository } from '../repositories'
import { ID } from '@/shared/types/models'
import { Asset } from '../asset'

@Injectable()
export class AssetService {
  constructor(private readonly assetRepository: AssetRepository) {}

  async findUnique(id: ID): Promise<Asset | null> {
    return this.assetRepository.findUnique(id)
  }

  async findMany(): Promise<Asset[]> {
    return this.assetRepository.findMany()
  }
}
