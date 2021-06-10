import '../styles/globals.css';
import { ApolloProvider } from "@apollo/client";
import { AppContext, AppInitialProps } from 'next/app';
import useApollo from '../apollo-client';

function MyApp({ Component, pageProps }: AppContext & AppInitialProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp
