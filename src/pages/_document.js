/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <script src="/public/js/jquery.min.js" />
        <script src="/public/js/bootstrap.bundle.min.js" />
        <script src="/public/js/custom.js" />
      </body>
    </Html>
  );
}
