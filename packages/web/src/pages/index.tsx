import Head from "next/head";
import { NextPage } from "next";
import { Layout } from "@igara.github.io/ui";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>igara.github,io</title>
        <meta name="description" content="syo-igarashi history" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>工事中</main>
    </div>
  );
};

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Home;
