import "../styles/globals.css";
import "nprogress/nprogress.css";
import "node_modules/nprogress/nprogress.css";
import "react-modern-drawer/dist/index.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import NProgress from "nprogress";

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteDone);
    router.events.on("routeChangeError", handleRouteDone);

    return () => {
      // Make sure to remove the event handler on unmount!
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteDone);
      router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
