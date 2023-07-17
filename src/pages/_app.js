import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "@/styles/globals.css"
import "@/styles/responsive.css"

import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
        <Component {...pageProps} />
      
    </>
  );
}
