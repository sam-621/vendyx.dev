import { DataSource } from 'typeorm';

import { AdminEntity } from '@/app/persistance/entities';

let dataSource: DataSource;

export const getDataSource = async (): Promise<DataSource> => {
  if (!dataSource) {
    dataSource = await new DataSource({
      type: 'postgres',
      url: 'postgres://postgres:postgres@localhost:5432/test',
      synchronize: true,
      entities: [AdminEntity]
    }).initialize();
  }

  return dataSource;
};
