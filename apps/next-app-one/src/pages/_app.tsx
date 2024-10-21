import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { ApolloProvider } from '@apollo/client';
import { client } from '../store/client';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to nx-test!</title>
      </Head>
      <main className="app">
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </main>
    </>
  );
}

export default CustomApp;
