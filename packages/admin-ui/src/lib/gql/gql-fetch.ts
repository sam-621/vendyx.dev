import { type ErrorCode } from '@vendyx/common';

import { ADMIN_API_ENDPOINT } from '@/lib/config';

import { ApiError } from '../errors';

export async function gqlFetch<T, U>({
  query,
  variables
}: {
  query: string;
  variables?: Variables<U>;
}) {
  const result = await fetch(ADMIN_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      ...(query && { query }),
      ...(variables && { variables })
    })
  });

  const body = (await result.json()) as GraphQLResponse<T>;

  if (body.errors) {
    throw new ApiError(body.errors[0].message, body.errors[0].extensions.code as ErrorCode);
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
      errors: { message: string; extensions: { code: string } }[];
    };
