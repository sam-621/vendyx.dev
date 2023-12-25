import { DataSource } from 'typeorm';

import { MarketEntity } from '../src/app/persistance/entities';
import { ENTITIES } from '../src/app/persistance/persistance.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: '.env.local' });

(async () => {
  const dataSource = await new DataSource({
    type: 'postgres',
    url: process.env.DB_URL,
    synchronize: false,
    entities: [...ENTITIES]
  }).initialize();

  const marketRepository = dataSource.getRepository(MarketEntity);

  const defaultMarket = await marketRepository.findOne({
    where: {
      default: true
    }
  });

  if (defaultMarket) {
    console.log({
      id: defaultMarket.id,
      name: defaultMarket.name
    });

    await dataSource.destroy();

    return;
  }

  const market = new MarketEntity();

  market.name = 'Mexico';
  market.default = true;

  const newMarket = await marketRepository.save(market);

  console.log({
    id: newMarket.id,
    name: newMarket.name
  });

  await dataSource.destroy();
})();
