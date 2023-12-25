import { Injectable } from '@nestjs/common';
import { ID, partialValidateProduct, validateProductVariant } from '@vendyx/common';

import { CreateProductVariantInput, ListInput, UpdateProductVariantInput } from '@/app/api/common';
import { ProductVariantRepository } from '@/app/persistance';
import { UserInputError } from '@/lib/errors';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductVariantRepository) {}

  async find(input: ListInput) {
    return this.repository.find({ ...input });
  }

  async findUnique(id: ID) {
    return this.repository.findOne({ where: { id } });
  }

  async create(input: CreateProductVariantInput) {
    const { data, errors } = validateProductVariant(input);

    if (errors) {
      throw new UserInputError(`Invalid input: ${Object.keys(errors).join(', ')}`, errors);
    }

    const productVariantCreated = await this.repository.save(data);

    return productVariantCreated;
  }

  async update(id: ID, input: UpdateProductVariantInput) {
    const productVariantToUpdate = await this.findUnique(id);

    if (!productVariantToUpdate) {
      throw new UserInputError('No product variant found');
    }

    const { data, errors } = partialValidateProduct(input);

    if (errors) {
      throw new UserInputError(`Invalid input: ${Object.keys(errors).join(', ')}`, errors);
    }

    const productVariantUpdated = await this.repository.save({
      ...productVariantToUpdate,
      ...data
    });

    return productVariantUpdated;
  }

  async remove(id: ID) {
    const productVariantToRemove = await this.findById(id);

    if (!productVariantToRemove) {
      throw new UserInputError('No product variant found');
    }

    await this.repository.softRemove(productVariantToRemove.id);

    return true;
  }

  private async findById(id: ID) {
    return this.repository.findOne({ where: { id } });
  }
}
