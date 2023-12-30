import { Injectable } from '@nestjs/common';
import { ID, partialValidateProductVariant, validateProductVariant } from '@vendyx/common';

import { CreateProductVariantInput, ListInput, UpdateProductVariantInput } from '@/app/api/common';
import { PrismaService } from '@/app/persistance';
import { UserInputError, ValidationError } from '@/lib/errors';

@Injectable()
export class ProductVariantService {
  constructor(private readonly prisma: PrismaService) {}

  async find(input: ListInput) {
    return this.prisma.productVariant.findMany({ ...input, where: { deletedAt: null } });
  }

  async findUnique(id: ID) {
    return this.prisma.productVariant.findUnique({ where: { id } });
  }

  async findOptionValues(id: ID) {
    const result = await this.prisma.optionValueOnProductVariant.findMany({
      where: { productVariantId: id },
      select: { optionValue: true }
    });

    return result.map(r => r.optionValue);
  }

  async create(id: ID, input: CreateProductVariantInput) {
    const { data, errors } = validateProductVariant(input);

    if (errors) {
      throw new UserInputError(`Invalid input: ${Object.keys(errors).join(', ')}`, errors);
    }

    const isDefaultVariant = !input.optionValues?.length;
    const defaultVariantAlreadyCreated = isDefaultVariant
      ? await this.prisma.productVariant.findFirst({
          where: { product: { id } }
        })
      : null;

    if (isDefaultVariant && defaultVariantAlreadyCreated) {
      throw new ValidationError('Default variant already created, add options instead');
    }

    const productVariantCreated = await this.prisma.productVariant.create({
      data: {
        ...data,
        product: { connect: { id } }
      }
    });

    if (isDefaultVariant) {
      return productVariantCreated;
    }

    await this.prisma.optionValueOnProductVariant.createMany({
      data: input.optionValues.map(v => ({
        optionValueId: v,
        productVariantId: productVariantCreated.id
      }))
    });

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

    const productVariantUpdated = await this.prisma.productVariant.update({
      where: { id },
      data: {
        ...productVariantToUpdate,
        ...data
      }
    });

    return productVariantUpdated;
  }

  async remove(id: ID) {
    const productVariantToRemove = await this.findById(id);

    if (!productVariantToRemove) {
      throw new UserInputError('No product variant found');
    }

    await this.prisma.productVariant.update({
      where: { id },
      data: {
        deletedAt: new Date()
      }
    });

    await this.prisma.optionValueOnProductVariant.deleteMany({
      where: { productVariantId: id }
    });

    return true;
  }

  private async findById(id: ID) {
    return this.prisma.productVariant.findFirst({ where: { id } });
  }
}
