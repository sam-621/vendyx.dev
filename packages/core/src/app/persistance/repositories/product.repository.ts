import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ID, Product } from '@vendyx/common';
import { Repository } from 'typeorm';

import { ProductEntity } from '../entities';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productTypeormRepository: Repository<ProductEntity>
  ) {}

  async findAll(): Promise<Product[]> {
    return this.productTypeormRepository.find();
  }

  async findById(id: string): Promise<Product> {
    return this.productTypeormRepository.findOne({ where: { id } });
  }

  async create(product: Product): Promise<Product> {
    const newProduct = this.productTypeormRepository.create(product);

    await this.productTypeormRepository.insert(newProduct);

    return newProduct;
  }

  async update(id: ID, product: Partial<Product>): Promise<Product> {
    await this.productTypeormRepository.update(id, product);

    return this.findById(id);
  }

  async remove(id: ID): Promise<void> {
    await this.productTypeormRepository.delete(id);
  }
}
