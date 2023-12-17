import { getDataSource } from './data-source';

export const resetDb = async (): Promise<void> => {
  const datSource = await getDataSource();

  await datSource.query(/* SQL */ `
    DROP SCHEMA public CASCADE;
    CREATE SCHEMA public;
    GRANT ALL ON SCHEMA public TO postgres;
    GRANT ALL ON SCHEMA public TO public;
  `);
};
