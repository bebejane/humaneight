import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { TypedDocumentNode } from '@apollo/client';

export type IntlMessage = { key: string, value: string }
export type ApiQueryOptions = { variables?: any | any[], preview?: boolean }

const isServer = typeof window === 'undefined';

export const shopifyQuery = async (query: TypedDocumentNode<any, any> | TypedDocumentNode<any, any>[], options?: ApiQueryOptions): Promise<any> => {

  const { variables, preview = false } = options || {}

  if (query === null)
    throw "Invalid Query!"

  try {

    const batch = (Array.isArray(query) ? query : [query]).map((q, idx) => {
      const vars = Array.isArray(variables) && variables.length > idx - 1 ? variables[idx] : variables || {}
      return client.query({ query: q, variables: vars })
    })

    const data = await Promise.all(batch)
    const errors = data.filter(({ errors }) => errors).map(({ errors }) => errors?.map(error => error.message)).flat()

    if (errors.length)
      throw new Error(errors.length > 1 ? errors.join('. ') : errors[0])

    let result = {}
    data.forEach((res) => result = { ...result, ...res?.data })
    return result

  } catch (err) {
    throw err
  }
}


const loggingFetch = async (input: RequestInfo, init?: RequestInit): Promise<Response> => {

  const queries = init?.body ? JSON.parse(init.body.toString()) : undefined;
  const operations = queries ? Array.isArray(queries) ? queries.map((op: { operationName: string }) => op.operationName) : [queries.operationName] : [];
  const requestName = `${operations.join(', ')}`
  const response = await fetch(input, init)
  const t = new Date().getTime()

  return {
    ...response,
    async text() {
      const result = await response.text()
      if (process.env.NODE_ENV === 'development')
        console.log("\x1b[33m%s\x1b[0m", 'gql  ', `- ${requestName}`, `- ${new Date().getTime() - t}ms`)
      return result
    }
  }
}
const shopifyApiEndpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}.myshopify.com/api/${process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_VERSION}/graphql.json`;

const linkConfig = {
  uri: shopifyApiEndpoint,
  fetch: process.env.LOG_GRAPHQL ? loggingFetch : undefined,
  batchMax: 10,
  batchInterval: 50,
  headers: {
    'X-Shopify-Storefront-Access-Token': (process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_API_TOKEN || process.env.SHOPIFY_STOREFRONT_API_TOKEN) as string,
    'Content-Type': 'application/json'
  }
}

const link = new HttpLink(linkConfig)

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  ssrMode: isServer,
  defaultOptions: {
    query: {
      fetchPolicy: process.env.DEV_CACHE ? 'cache-first' : 'no-cache',
      errorPolicy: 'all',
    }
  }
});