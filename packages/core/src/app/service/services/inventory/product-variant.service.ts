import { Injectable } from '@nestjs/common';
import { ID, partialValidateProductVariant, validateProductVariant } from '@vendyx/common';

import { CreateProductVariantInput, ListInput, UpdateProductVariantInput } from '@/app/api/common';
import { ProductVariantRepository } from '@/app/persistance';
import { UserInputError, ValidationError } from '@/lib/errors';

@Injectable()
export class ProductVariantService {
  constructor(private readonly repository: ProductVariantRepository) {}

  async find(input: ListInput) {
    return this.repository.find({ ...input });
  }

  async findUnique(id: ID) {
    return this.repository.findOne({ where: { id } });
  }

  async create(id: ID, input: CreateProductVariantInput) {
    const { data, errors } = validateProductVariant(input);

    if (errors) {
      throw new UserInputError(`Invalid input: ${Object.keys(errors).join(', ')}`, errors);
    }

    const productVariantAlreadyCreated = await this.repository.findOne({
      where: { sku: data.sku }
    });

    if (productVariantAlreadyCreated) {
      throw new ValidationError(`A variant with sku "${data.sku}" already exists`);
    }

    if (!input.optionValues?.length) {
      const defaultVariantAlreadyCreated = await this.repository.findOne({
        where: { product: { id } }
      });

      if (defaultVariantAlreadyCreated) {
        throw new ValidationError('Default variant already created, add options instead');
      }
    }

    const productVariantCreated = await this.repository.save({ product: { id }, ...data });

    return productVariantCreated;
  }

  async update(id: ID, input: UpdateProductVariantInput) {
    const productVariantToUpdate = await this.findUnique(id);

    if (!productVariantToUpdate) {
      throw new UserInputError('No product variant found');
    }

    const { data, errors } = partialValidateProductVariant(input);

    if (errors) {
      throw new UserInputError(`Invalid input: ${Object.keys(errors).join(', ')}`, errors);
    }

    const productVariantUpdated = await this.repository.update(id, {
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
