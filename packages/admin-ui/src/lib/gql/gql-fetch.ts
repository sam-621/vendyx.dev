import { type ErrorCode } from '@vendyx/common';

import { ADMIN_API_ENDPOINT, COOKIE_TOKEN_NAME } from '@/lib/config';

import { cookies } from '../cookies';
import { ApiError } from '../errors';

export async function gqlFetch<T, U = unknown>({
  query,
  variables
}: {
  query: string;
  variables?: Variables<U>;
}) {
  const token = cookies.get(COOKIE_TOKEN_NAME);
  console.log({ token });

  const result = await fetch(ADMIN_API_ENDPOINT ?? '/admin-api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : ''
    },
    body: JSON.stringify({
      ...(query && { query }),
      ...(variables && { variables })
    })
  });

  const body = (await result.json()) as GraphQLResponse<T>;

  console.log({ body });

  if (body.errors) {
    throw new ApiError(body.errors[0].message, body.errors[0].code as ErrorCode);
  }

  return {
    data: body.data
  };
}

type Variables<T> = {
  input: T | Record<string, unknown>;
};

type GraphQLResponse<T> =
  | {
      data: T;
      errors: undefined;
    }
  | {
      data: null;
      errors: { message: string; code: string }[];
    };
