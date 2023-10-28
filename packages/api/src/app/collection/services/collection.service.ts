import { Injectable } from '@nestjs/common'
import { CollectionRepository } from '../repositories'
import { UserInputError } from '@/common/errors'
import { List } from '@/common/utils'

@Injectable()
export class CollectionService {
  constructor(private repository: CollectionRepository) {}

  async findOne(id: string, slug: string) {
    if (!id && !slug) throw new UserInputError('No ID or Slug provided')

    if (id) return this.repository.findOneById(id)

    return this.repository.findOneBySlug(slug)
  }

  async findMany() {
    const collections = await this.repository.findMany()

    return collections
  }
}
