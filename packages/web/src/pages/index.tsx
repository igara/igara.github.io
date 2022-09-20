import Head from "next/head";
import { NextPage } from "next";
import { Layout } from "@igara.github.io/ui";
import { HomePage } from "src/components";
import { useEffect, useCallback } from "react";

const Home: NextPage = () => {
  const postMessage = useCallback((e: MessageEvent<any>) => {
    const data = e.data;
    if (!data) return;

    const href = data.href;

    if (!href) return;
    window.location.href = href;
  }, []);

  useEffect(() => {
    window.addEventListener("message", postMessage);
  }, []);

  return (
    <div>
      <Head>
        <title>igara.github,io</title>
        <meta name="description" content="syo-igarashi history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomePage />
    </div>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
