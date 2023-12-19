import { createConnection } from 'net';

import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { DataSource } from 'typeorm';
import { afterAll, beforeEach } from 'vitest';

import { getDataSource } from './db/data-source';
import { resetDb } from './db/db-helpers';

import { AppModule } from '@/app/app.module';

beforeEach(async () => {
  const moduleFixture: TestingModule = await Test.createTestingModule({
    imports: [AppModule]
  }).compile();

  testNestApp = moduleFixture.createNestApplication({
    logger: false
  });

  await testNestApp.init();
  dataSource = await getDataSource();
});

afterEach(async () => {
  await testNestApp.close();
  await resetDb();
});

export let testNestApp: INestApplication;
export let dataSource: DataSource;
