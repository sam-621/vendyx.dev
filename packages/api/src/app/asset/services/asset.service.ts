import { Injectable } from '@nestjs/common'
import { AssetRepository } from '../repositories'
import { ID } from '@/shared/types/models'

@Injectable()
export class AssetService {
  constructor(private readonly assetRepository: AssetRepository) {}

  async findUnique(id: ID) {
    return this.assetRepository.findUnique(id)
  }

  async findMany() {
    return this.assetRepository.findMany()
  }
}
