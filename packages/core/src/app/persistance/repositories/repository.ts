import { ID } from '@vendyx/common';
import {
  DeepPartial,
  FindOptionsOrder,
  FindOptionsRelations,
  FindOptionsWhere,
  Repository as TypeormRepository
} from 'typeorm';

import { Entity } from '../entities';

export class Repository<T extends Entity> {
  constructor(private readonly repository: TypeormRepository<T>) {}

  find(options?: FindOptions<T>) {
    return this.repository.find({
      order: options.order,
      where: options.where,
      relations: options.relations,
      skip: options.skip,
      take: options.take
    });
  }

  findOne(options: FindOneOptions<T>) {
    return this.repository.findOne({
      order: options.order,
      where: options.where,
      relations: options.relations
    });
  }

  async save(entity: DeepPartial<T>) {
    const newEntity = this.repository.create(entity);

    await this.repository.insert(newEntity as any);

    return newEntity;
  }

  async update(id: ID, entity: Partial<T>) {
    await this.repository.update(id, entity as any);

    return this.findOne({ where: { id } as unknown as FindOneOptions<T>['where'] });
  }

  async remove(id: ID) {
    await this.repository.delete(id);
  }

  async softRemove(id: ID) {
    await this.repository.softDelete(id);
  }
}

type CommonFinOptions<T> = {
  order?: FindOptionsOrder<T>;
  where?: FindOptionsWhere<T>;
  relations?: FindOptionsRelations<T>;
};

type FindOptions<T> = CommonFinOptions<T> & {
  skip?: number;
  take?: number;
};

type FindOneOptions<T> = CommonFinOptions<T>;
