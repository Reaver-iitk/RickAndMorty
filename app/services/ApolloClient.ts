import { ApolloClient, InMemoryCache } from '@apollo/client';
import Url from './types/graphql';

export const Client = new ApolloClient({
  uri: Url,
  cache: new InMemoryCache(),
});

export const { query } = Client;
