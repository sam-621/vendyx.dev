import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { afterAll, beforeEach } from 'vitest';

import { resetDb } from './db';
import { getTextHashed } from './libs';

import { BusinessExceptionFilter } from '@/app/api/common';
import { AppModule } from '@/app/app.module';

beforeAll(async () => {
  await testPrismaClient.administrator.upsert({
    create: { username: 'Admin', password: await getTextHashed('Admin') },
    update: {},
    where: { username: 'Admin' }
  });

  await testPrismaClient.market.upsert({
    create: { name: 'Default market', default: true },
    update: {},
    where: { name: 'Default market', default: true }
  });
});

beforeEach(async () => {
  await resetDb(testPrismaClient);

  // App config
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule]
  }).compile();

  testNestApp = moduleFixture.createNestApplication({
    logger: false
  });

  testNestApp.useGlobalFilters(new BusinessExceptionFilter());

  await testNestApp.init();
});

afterAll(async () => {
  await testNestApp.close();
});

export let testNestApp: INestApplication;
export const testPrismaClient = new PrismaClient();
