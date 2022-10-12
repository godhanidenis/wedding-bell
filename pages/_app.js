import Head from "next/head";

import { ApolloProvider } from "@apollo/client";
import client from "../graphql/apollo-client";

import "../styles/globals.css";
import "../styles/auth.css";
import "animate.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wedding Bell</title>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;
