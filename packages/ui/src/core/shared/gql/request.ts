export const gqlRequest: GqlRequest = async ({
  query,
  variables,
  tags,
  headers,
  cache = 'force-cache'
}) => {
  try {
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

    return await result.json()
  } catch (e) {
    return null
  }
}

type GqlRequest = <R, V = Record<string, object>>(input: GqlRequestInput<V>) => Promise<R | null>

type GqlRequestInput<V> = {
  query: string
  variables?: V
  tags?: string[]
  headers?: HeadersInit
  cache?: RequestCache
}
