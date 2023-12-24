import * as bcrypt from 'bcrypt';
import { DataSource } from 'typeorm';

import { AdminEntity } from '../src/app/persistance/entities';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '.env.local' });

(async () => {
  const username = 'admin';
  const password = 'admin';

  const dataSource = await new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    synchronize: false,
    entities: [AdminEntity]
  }).initialize();

  const adminRepository = dataSource.getRepository(AdminEntity);

  const admin = await adminRepository.findOne({
    where: {
      username
    }
  });

  if (admin) {
    console.log({
      username: password,
      password: password
    });
    await dataSource.destroy();

    return;
  }

  const hashedPassword = await bcrypt.hash('admin', 10);

  await adminRepository.save({ username, password: hashedPassword });

  console.log({
    username,
    password
  });

  await dataSource.destroy();
})();
