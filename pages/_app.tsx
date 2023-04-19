import "../styles/globals.css";
import "../styles/select.css";
import type { AppProps } from "next/app";
import CompaniesIcon from "../src/components/Layout/companines";
import Footer from "../src/components/Layout/Footer";
import Header from "../src/components/Layout/header";
import "rc-dropdown/assets/index.css";
import CartDrawerComponent from "../src/components/cart/CartDrawer";
import MainNavMobile from "../src/components/Layout/header/mainNavMobile";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";
import { config } from "../src/lib/react-query-config";
import Devtools from "../src/lib/Devtools";
import NiceModal from "@ebay/nice-modal-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps, router }: AppProps) {
  const [queryClient] = useState(() => new QueryClient(config));

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <NiceModal.Provider>
            <ToastContainer />
            <Header />
            <CartDrawerComponent />
            <MainNavMobile />
            <Component {...pageProps} />
            <CompaniesIcon />
            <Footer />
          </NiceModal.Provider>
        </Hydrate>
        <Devtools />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
