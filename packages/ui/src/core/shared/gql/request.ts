export const gqlRequest: GqlRequest = async ({
  query,
  variables,
  tags,
  headers,
  cache = 'no-cache'
}) => {
  const result = await fetch('http://localhost:5000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...headers
    },
    body: JSON.stringify({
      ...(query.length > 0 && { query }),
      ...(variables !== undefined && { variables })
    }),
    cache,
    ...((tags?.length ?? 0) > 0 && { next: { tags } })
  });

  const body = await result.json();

  if (body.errors?.length > 0) {
    throw body.errors[0];
  }

  return body.data;
};

type GqlRequest = <R, V = Record<string, object>>(input: GqlRequestInput<V>) => Promise<R>;

type GqlRequestInput<V> = {
  query: string;
  variables?: V;
  tags?: string[];
  headers?: HeadersInit;
  cache?: RequestCache;
};
