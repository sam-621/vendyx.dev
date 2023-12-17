import { log } from 'console';

import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import request from 'supertest';
import { beforeEach, describe, it } from 'vitest';

import { AppModule } from '../src/app/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule]
    }).compile();

    app = moduleFixture.createNestApplication();
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

    log(r.body);
  });
});
