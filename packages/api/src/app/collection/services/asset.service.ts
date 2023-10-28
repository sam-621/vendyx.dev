import { Injectable } from '@nestjs/common'
import { CollectionRepository } from '../repositories'
import { CreateCollectionInput } from '@/common/types/graphql'

Injectable()
export class AssetService {
  constructor(private readonly repository: CollectionRepository) {}

  create(input: CreateCollectionInput) {
    const collectionCreated = this.repository.create(input)

    return collectionCreated
  }
}
