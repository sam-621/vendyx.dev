import { Injectable } from '@nestjs/common'
import { AssetRepository } from '../repositories'
import { Asset } from '../asset'
import { ID } from '@/shared/entities/entity'

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
