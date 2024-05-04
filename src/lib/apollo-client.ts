import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

/**
 * Creates a new ApolloClient instance with the specified configuration.
 * @param {Object} link - The link to use for network requests.
 * @param {Object} cache - The cache to use for caching data.
 */
export const client = new ApolloClient({
  link: new HttpLink({ uri: `${process.env.NEXT_PUBLIC_BASE_URL}/graphql` }),
  cache: new InMemoryCache(),
});
