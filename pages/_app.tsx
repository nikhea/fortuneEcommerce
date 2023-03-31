import "../styles/globals.css";
import "../styles/select.css";

import type { AppProps } from "next/app";
import CompaniesIcon from "../src/components/Layout/companines";
import Footer from "../src/components/Layout/Footer";
import Header from "../src/components/Layout/header";
import "rc-dropdown/assets/index.css";
import CartDrawerComponent from "../src/components/cart/CartDrawer";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Header />
      <CartDrawerComponent />
      <Component {...pageProps} />
      <CompaniesIcon />
      <Footer />
    </>
  );
}

export default MyApp;
