import { Injectable } from '@nestjs/common';
import { ID, validateProduct } from '@vendyx/common';

import { CreateProductInput, ListInput, UpdateProductInput } from '@/app/api/common';
import { MarketRepository, ProductRepository } from '@/app/persistance';
import { InternalServerError, UserInputError } from '@/lib/errors';

@Injectable()
export class ProductService {
  constructor(
    private readonly repository: ProductRepository,
    private readonly marketRepository: MarketRepository
  ) {}

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

  async create(input: CreateProductInput) {
    const { data, errors } = validateProduct(input);

    if (errors) {
      throw new UserInputError(`Invalid input: ${Object.keys(errors).join(', ')}`, errors);
    }

    const defaultMarket = await this.marketRepository.findDefault();

    if (!defaultMarket) {
      throw new InternalServerError('No default market found');
    }

    const productCreated = await this.repository.save(data);

    await this.marketRepository.addProduct(defaultMarket.id, productCreated.id);

    return productCreated;
  }

  async update(id: ID, input: UpdateProductInput) {
    const productToUpdate = await this.findById(id);

    if (!productToUpdate) {
      throw new UserInputError('No product found');
    }

    const { data, errors } = validateProduct({ ...productToUpdate, ...input });

    if (errors) {
      throw new UserInputError(`Invalid input: ${Object.keys(errors).join(', ')}`, errors);
    }

    return this.repository.update(id, data);
  }

  async remove(id: ID) {
    const productToRemove = await this.findById(id);

    if (!productToRemove) {
      throw new UserInputError('No product found');
    }

    const defaultMarket = await this.marketRepository.findDefault();

    if (!defaultMarket) {
      throw new InternalServerError('No default market found');
    }

    await this.marketRepository.removeProduct(defaultMarket.id, productToRemove.id);
    await this.repository.softRemove(productToRemove.id);

    return true;
  }

  private async findById(id: ID) {
    return this.repository.findOne({ where: { id } });
  }

  private async findBySlug(slug: ID) {
    return this.repository.findOne({ where: { slug } });
  }
}
