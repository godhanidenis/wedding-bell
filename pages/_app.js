import Head from "next/head";

import "../styles/globals.css";
import "../styles/auth.css";
import "../styles/product.css";
import "animate.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";

import store from "../redux/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { ToastContainer } from "react-toastify";

const theme = createTheme({
  palette: {
    primary: {
      main: "#95539B",
    },
  },
  typography: {
    fontFamily: [
        'Kanit', 'sans-serif',
        'Poppins', 'sans-seri'
    ].join(','),
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Wedding Bell</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600&family=Poppins:wght@100;200;300;400;500;600;800&display=swap" rel="stylesheet"></link>
      </Head>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
