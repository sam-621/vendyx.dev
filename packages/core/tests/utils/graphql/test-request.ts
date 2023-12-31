import { GraphQLApiResponse } from '@vendyx/common';
import request from 'supertest';

import { authenticate } from './mutations.utils';
import { testNestApp } from '../setup-e2e';

export const testRequest = async <T>(
  query: string,
  auth?: boolean
): Promise<GraphQLApiResponse<T>> => {
  const token = auth ? await authenticate() : null;

  const result = await request(testNestApp.getHttpServer())
    .post('/admin-api')
    .set('Authorization', `Bearer ${token}`)
    .send({
      query
    });

  return result.body as GraphQLApiResponse<T>;
};
