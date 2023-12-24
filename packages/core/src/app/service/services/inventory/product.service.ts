import { Injectable } from '@nestjs/common';
import { ID } from '@vendyx/common';

import { ListInput } from '@/app/api/common';
import { ProductRepository } from '@/app/persistance';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  async find(input: ListInput) {
    return this.repository.find({ ...input });
  }

  async findById(id: ID) {
    return this.repository.findOne({ where: { id } });
  }

  async findBySlug(slug: ID) {
    return this.repository.findOne({ where: { slug } });
  }
}
