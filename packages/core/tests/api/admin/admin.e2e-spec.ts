import { ErrorCode, GraphQLApiResponse } from '@vendyx/common';
import request from 'supertest';
import { testNestApp } from 'tests/utils/setup-e2e';
import { describe, test } from 'vitest';

describe('Admin Resolvers', () => {
  describe('authenticateAdmin', () => {
    test('Should return a token when valid credentials are provided', async () => {
      const r = await request(testNestApp.getHttpServer())
        .post('/admin-api')
        .send({
          query: /* GraphQL */ `
            mutation {
              authenticateAdmin(input: { username: "Admin", password: "Admin" })
            }
          `
        });

      const body = r.body as GraphQLApiResponse<{ authenticateAdmin: string }>;

      expect(body.data.authenticateAdmin).toBeTruthy();
    });

    test('Should throw a validation error when invalid credentials are provided', async () => {
      const r = await request(testNestApp.getHttpServer())
        .post('/admin-api')
        .send({
          query: /* GraphQL */ `
            mutation {
              authenticateAdmin(input: { username: "Admin", password: "Admin incorrect" })
            }
          `
        });

      const body = r.body as GraphQLApiResponse<{ authenticateAdmin: string }>;

      expect(body.data.authenticateAdmin).toBeFalsy();
      expect(body.errors[0].code).toBe(ErrorCode.VALIDATION);
    });
  });
});
