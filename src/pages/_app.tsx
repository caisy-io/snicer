import Head from "next/head";
import React from "react";
import { GSBase } from "../constants/styles/global-style";
import { GSFonts } from "../constants/styles/fonts";
import { StoreProvider } from "../context/store";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const meta = {
    title: "Snicer",
    description: "nicer makes screenshots nicer",
    author: "mgruber @ caisy.io ",
    keywords: "caisy screenshots docs nicer",
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        {meta.author && <meta name="author" content={meta.author} />}
        <meta name="keywords" content={meta.keywords} />
      </Head>
      <GSFonts />
      <GSBase />
      <StoreProvider>
      <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
