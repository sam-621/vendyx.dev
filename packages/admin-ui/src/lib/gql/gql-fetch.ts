import { ADMIN_API_ENDPOINT } from '@/lib/config';

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
    // eslint-disable-next-line @typescript-eslint/no-throw-literal
    throw {
      error: {
        message: body.errors[0].message,
        code: body.errors[0].extensions.code
      }
    };
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
