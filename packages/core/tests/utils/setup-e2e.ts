import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { afterAll, beforeEach } from 'vitest';

import { resetDb } from './db';

import { BusinessExceptionFilter } from '@/app/api/common';
import { AppModule } from '@/app/app.module';

beforeEach(async () => {
  await resetDb(testPrismaClient);

  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule]
  }).compile();

  testNestApp = moduleFixture.createNestApplication();

  /**
   * Server config
   */
  testNestApp.useGlobalFilters(new BusinessExceptionFilter());

  await testNestApp.init();
});

afterAll(async () => {
  await testNestApp.close();
});

export let testNestApp: INestApplication;
export const testPrismaClient = new PrismaClient();
