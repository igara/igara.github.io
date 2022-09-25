import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { GlobalStyle } from "@igara.github.io/ui";

export default class MyDocument extends NextDocument {
  render() {
    const ga = `
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}"); `;

    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
          <GlobalStyle />

          {process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
              ></script>
              <script dangerouslySetInnerHTML={{ __html: ga }}></script>
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
