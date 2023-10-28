import { Module } from '@nestjs/common'
import { CollectionService } from './services'
import { CollectionRepository } from './repositories'
import { CollectionResolver } from './resolvers/collection.resolver'

@Module({
  providers: [CollectionResolver, CollectionService, CollectionRepository]
})
export class CollectionModule {}
