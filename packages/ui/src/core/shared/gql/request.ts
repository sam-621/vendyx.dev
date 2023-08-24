export const gqlRequest: GqlRequest = async ({
  query,
  variables,
  tags,
  headers,
  cache = 'force-cache'
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
  })

  if (!result.ok) {
    throw new Error('Something went wrong')
  }

  const body = await result.json()

  return body.data
}

type GqlRequest = <R, V = Record<string, object>>(input: GqlRequestInput<V>) => Promise<R>

type GqlRequestInput<V> = {
  query: string
  variables?: V
  tags?: string[]
  headers?: HeadersInit
  cache?: RequestCache
}
