import { Injectable } from '@nestjs/common';
import { ID } from '@vendyx/common';

import { ListInput } from '@/app/api/common';
import { ProductRepository } from '@/app/persistance';
import { UserInputError } from '@/lib/errors';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  async find(input: ListInput) {
    return this.repository.find({ ...input });
  }

  async findUnique({ id, slug }: { id: ID; slug: string }) {
    if (id) {
      return this.findById(id);
    }

    if (slug) {
      return this.findBySlug(slug);
    }

    throw new UserInputError('No ID or SLUG provided');
  }

  private async findById(id: ID) {
    return this.repository.findOne({ where: { id } });
  }

  private async findBySlug(slug: ID) {
    return this.repository.findOne({ where: { slug } });
  }
}
