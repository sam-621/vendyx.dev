import { PrismaClient } from '@prisma/client';

const cleanupDb = async () => {
  try {
    const prismaClient = new PrismaClient();

    console.log('Cleaning up DB... 🟡');

    await prismaClient.$transaction([
      prismaClient.administrator.deleteMany(),
      prismaClient.productOnMarket.deleteMany(),
      prismaClient.market.deleteMany(),
      prismaClient.optionValueOnProductVariant.deleteMany(),
      prismaClient.optionValue.deleteMany(),
      prismaClient.option.deleteMany(),
      prismaClient.productVariant.deleteMany(),
      prismaClient.product.deleteMany()
    ]);

    console.log('Database has been cleaned successfully 🟢');
  } catch (error) {
    console.log('An error has occurred during clean.. 🔴');
    console.log(error);
  }
};

cleanupDb();
