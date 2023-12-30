import { Injectable } from '@nestjs/common';
import { ID, partialValidateProduct, validateProduct } from '@vendyx/common';

import { CreateProductInput, ListInput, UpdateProductInput } from '@/app/api/common';
import { PrismaService } from '@/app/persistance';
import { InternalServerError, UserInputError } from '@/lib/errors';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async find(input: ListInput) {
    console.log('input', input);

    return this.prisma.product.findMany({ ...input, where: { deletedAt: null } });
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

  async findVariants(id: ID, listInput?: ListInput) {
    const product = await this.prisma.product.findFirst({
      where: { id },
      include: { variants: { ...listInput } }
    });

    return product.variants;
  }

  async create(input: CreateProductInput) {
    const { data, errors } = validateProduct(input);

    if (errors) {
      throw new UserInputError(`Invalid input: ${Object.keys(errors).join(', ')}`, errors);
    }

    const defaultMarket = await this.prisma.market.findFirst({
      where: { default: true }
    });

    if (!defaultMarket) {
      throw new InternalServerError('No default market found');
    }

    const duplicatedSlug = await this.findBySlug(data.slug);

    if (duplicatedSlug) {
      throw new UserInputError(`A product with slug "${data.slug}" already exists`);
    }

    const productCreated = await this.prisma.product.create({
      data: {
        ...data
      }
    });

    await this.prisma.productOnMarket.create({
      data: {
        marketId: defaultMarket.id,
        productId: productCreated.id
      }
    });

    return productCreated;
  }

  async update(id: ID, input: UpdateProductInput) {
    const productToUpdate = await this.findById(id);

    if (!productToUpdate) {
      throw new UserInputError('No product found');
    }

    const { data, errors } = partialValidateProduct(input);

    if (errors) {
      throw new UserInputError(`Invalid input: ${Object.keys(errors).join(', ')}`, errors);
    }

    if (input.slug) {
      const productExists = await this.prisma.product.findFirst({
        where: { slug: data.slug, id: { not: id } }
      });

      if (productExists) {
        throw new UserInputError(`A product with slug "${input.slug}" already exists`);
      }
    }

    return this.prisma.product.update({
      where: { id },
      data: {
        ...productToUpdate,
        ...data
      }
    });
  }

  async remove(id: ID) {
    const productToRemove = await this.findById(id);

    if (!productToRemove) {
      throw new UserInputError('No product found');
    }

    const defaultMarket = await this.prisma.market.findFirst({ where: { default: true } });

    if (!defaultMarket) {
      throw new InternalServerError('No default market found');
    }

    await this.prisma.productOnMarket.delete({
      where: {
        productId_marketId: {
          productId: id,
          marketId: defaultMarket.id
        }
      }
    });

    await this.prisma.product.update({
      where: { id },
      data: {
        deletedAt: new Date()
      }
    });

    return true;
  }

  private async findById(id: ID) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  private async findBySlug(slug: ID) {
    return this.prisma.product.findUnique({ where: { slug } });
  }
}
