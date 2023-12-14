import { ADMIN_API_ENDPOINT } from '@/lib/config';

export async function gqlFetch<T>({ query, variables }: { query: string; variables?: Variables }) {
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
    return {
      error: {
        message: body.errors[0].message,
        code: body.errors[0].extensions.code
      }
    };
  }

  return {
    data: body.data as T
  };
}

type Variables = Record<string, unknown>;

type GraphQLResponse<T> =
  | {
      data: T;
      errors: undefined;
    }
  | {
      data: null;
      errors: { message: string; extensions: { code: string } }[];
    };
