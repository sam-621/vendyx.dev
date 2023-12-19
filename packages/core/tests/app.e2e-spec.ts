import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ErrorCode, GraphQLApiResponse } from '@vendyx/common';
import request from 'supertest';
import { DataSource } from 'typeorm';
import { afterAll, beforeEach, describe, it } from 'vitest';

import { getDataSource } from './utils/db/data-source';
import { resetDb } from './utils/db/db-helpers';
import { dataSource, testNestApp } from './utils/setup-e2e';
import { AppModule } from '../src/app/app.module';

import { AdminEntity } from '@/app/persistance/entities';

describe('AppController (e2e)', () => {
  afterAll(async () => {
    await resetDb();
    await testNestApp.close();
  });

  it('/ (GET)', async () => {
    const admin = dataSource.getRepository(AdminEntity);
    const result = await admin.find();
    console.log({
      result
    });

    const r = await request(testNestApp.getHttpServer())
      .post('/api/admin')
      .send({
        query: /* GraphQL */ `
          mutation {
            authenticateAdmin(input: { username: "admin", password: "123456" })
          }
        `
      });

    const body = r.body as GraphQLApiResponse<string>;
    console.log({
      body: body.errors[0]
    });

    expect(body.errors.length).toBe(1);
    expect(body.errors[0].code).toBe(ErrorCode.VALIDATION);
  });
});
