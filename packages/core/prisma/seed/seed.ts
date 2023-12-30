import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const createDefaultMarket = async () => {
  console.log('Creating default market... 🟡');
  await prisma.market.upsert({
    where: { default: true, name: 'Default Market' },
    create: {
      name: 'Default Market',
      default: true
    },
    update: {}
  });
  console.log(`Default market created 🟢`);
};

const createDefaultAdmin = async () => {
  console.log('Creating admin... 🟡');
  await prisma.administrator.upsert({
    where: { username: 'admin' },
    create: {
      username: 'admin',
      password: await bcrypt.hash('admin', 10)
    },
    update: {}
  });
  console.log(`Admin created 🟢`);
};

async function main() {
  try {
    await createDefaultMarket();
    await createDefaultAdmin();
    console.log();
    console.log('Database seeded 🟢');
  } catch (error) {
    console.log('An error has occurred while seeding the database 🔴');
    console.log({ error });
  }
}

main();
