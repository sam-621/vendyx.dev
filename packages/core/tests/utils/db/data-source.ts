import { DataSource } from 'typeorm';

import { AdminEntity } from '@/app/persistance/entities';

let dataSource: DataSource;

/**
 * A helper function to create a new data source instance.
 * Only should be used in tests.
 * @returns A new data source instance to get repositories, execute queries, etc
 */
export const createConnection = () => {
  return new DataSource({
    type: 'postgres',
    url: 'postgres://postgres:postgres@localhost:5432/test',
    synchronize: true,
    entities: [AdminEntity]
  }).initialize();
};

/**
 * A helper function to close the data source connection.
 */
export const closeConnection = async () => {
  if (dataSource) {
    await dataSource.destroy();
  }
};

/**
 * Creates a data source instance if it doesn't exist and returns it.
 * Only should be used in tests.
 * @returns A data source instance to get repositories, execute queries, etc
 */
export const getDataSource = async (): Promise<DataSource> => {
  if (!dataSource) {
    dataSource = await createConnection();
  }

  return dataSource;
};
