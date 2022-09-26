import Head from "next/head";
import { NextPage } from "next";
import { Layout } from "@igara.github.io/ui";
import { HomePage } from "src/components";

const Home: NextPage = () => {
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
