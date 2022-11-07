import Head from "next/head";

import { ApolloProvider } from "@apollo/client";
import client from "../graphql/apollo-client";

import "../styles/globals.css";
import "../styles/auth.css";
import "animate.css";
import { Provider } from "react-redux";
import store from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <>    
    <Provider store={store}>
      <Head>
        <title>Wedding Bell</title>
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
      </Provider>
    </>
  );
}

export default MyApp;
