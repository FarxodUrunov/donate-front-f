import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "@/styles/globals.css"
import "@/styles/responsive.css"

import type { AppProps } from 'next/app';
import Head from "next/head";


export default function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <Head>
        <title>Mysight</title>
        {/* <link rel="shortcut icon" href={"/images/logo.png"} type="image/x-icon" /> */}
        <meta name="description" content="The next generation social network & community! Connect with your friends and play with our quests and badges gamification system!" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
        <Component {...pageProps} />
      
    </>
  );
}
