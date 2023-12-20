import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductVariantEntity } from '../entities';

export class ProductVariantRepository {
  constructor(
    @InjectRepository(ProductVariantEntity)
    private readonly typeorm: Repository<ProductVariantEntity>
  ) {}

  async findAll(): Promise<ProductVariantEntity[]> {
    return this.typeorm.find();
  }

  async findById(id: string): Promise<ProductVariantEntity> {
    return this.typeorm.findOne({ where: { id } });
  }

  async create(productVariant: ProductVariantEntity): Promise<ProductVariantEntity> {
    const newProductVariant = this.typeorm.create(productVariant);

    await this.typeorm.insert(newProductVariant);

    return newProductVariant;
  }

  async update(
    id: string,
    productVariant: Partial<ProductVariantEntity>
  ): Promise<ProductVariantEntity> {
    await this.typeorm.update(id, productVariant);

    return this.findById(id);
  }

  async remove(id: string): Promise<void> {
    await this.typeorm.delete(id);
  }
}
