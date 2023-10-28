import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CollectionService } from '../services'
import { CreateCollectionInput } from '@/common/types/graphql'
import { List } from '@/common/utils'

@Resolver('Collection')
export class CollectionResolver {
  constructor(private collectionService: CollectionService) {}

  @Query('collection')
  async collection(@Args('id') id: string, @Args('slug') slug: string) {
    return this.collectionService.findOne(id, slug)
  }

  @Query('collections')
  async collections() {
    const collections = await this.collectionService.findMany()

    return new List(collections, collections.length)
  }

  @Mutation('createCollection')
  async createCollection(@Args('input') input: CreateCollectionInput) {
    const collectionCreated = await this.collectionService.create(input)

    return collectionCreated
  }
}
