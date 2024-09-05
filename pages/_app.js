import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { endPoint, tokenHeader, GTM } from '@config';
import TagManager from 'react-gtm-module';
import React from 'react';

const httpLink = createHttpLink({
    uri: endPoint,
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = tokenHeader;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

console.log();

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default function App({ Component, pageProps }) {
    return (
        <ApolloProvider client={client}>
            <div>
                <Component {...pageProps} />
            </div>
        </ApolloProvider>
    )
}
