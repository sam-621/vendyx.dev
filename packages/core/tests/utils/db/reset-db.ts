import { PrismaClient } from '@prisma/client';

export const resetDb = async (prisma: PrismaClient) => {
  await prisma.$transaction([
    // prisma.administrator.deleteMany(),
    prisma.productOnMarket.deleteMany(),
    // prisma.market.deleteMany(),
    prisma.optionValueOnProductVariant.deleteMany(),
    prisma.optionValue.deleteMany(),
    prisma.option.deleteMany(),
    prisma.productVariant.deleteMany(),
    prisma.product.deleteMany()
  ]);
};
