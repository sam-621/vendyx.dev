import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ErrorCode, GraphQLApiResponse } from '@vendyx/common';
import request from 'supertest';
import { beforeEach, describe, it } from 'vitest';

import { AppModule } from '../src/app/app.module';

import { GlobalExceptionsFilter } from '@/app/api/common';
import { LoggerService } from '@/lib/logger';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
    const loggerService = await app.resolve(LoggerService);
    app.useGlobalFilters(new GlobalExceptionsFilter(loggerService));
    await app.init();
  });

  it('/ (GET)', async () => {
    const r = await request(app.getHttpServer())
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
