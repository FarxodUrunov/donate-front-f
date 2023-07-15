import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "@/styles/globals.css"
import "@/styles/responsive.css"

import Head from "next/head";
// import Layout from "@/components/layout/index"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Layout> */}
      <Head></Head>
        <Component {...pageProps} />
      {/* </Layout> */}
      
    </>
  );
}
