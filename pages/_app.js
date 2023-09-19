import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { endPoint, tokenHeader } from '@config';

const httpLink = createHttpLink({
    uri: process.env.NODE_ENV !== 'production'
        ? endPoint
        : 'https://magento.senheng.com.my/graphql'
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = process.env.NODE_ENV !== 'production' 
    ? tokenHeader
    : 'iyubu7xybryry7ky6uqupjr75p2j4z7d';
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

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
