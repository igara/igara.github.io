import { NextPage } from "next";
import NextHead from "next/head";

import { BlogZennPage } from "src/components";
import { zennArticleListJSON } from "src/api";

const BlogZenn: NextPage<{
  title: string;
  body: string;
  description: string;
  ogp: {
    large: string;
    small: string;
  };
}> = ({ title, body, description, ogp }) => {
  return (
    <>
      <NextHead>
        <title>{title} / Zenn バックアップ / syonet</title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content={`${title} / Zenn バックアップ / syonet`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_WEB_HOST}${ogp.large}`}
        />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <BlogZennPage title={title} body={body} />
    </>
  );
};

type StaticProps = { params: { title: string } };

export const getStaticProps = async ({ params }: StaticProps) => {
  const title = params.title;
  const blog = zennArticleListJSON.find((b) => {
    return b.title === title;
  });

  return {
    props: {
      title,
      body: blog.body,
      description: blog.description,
      ogp: blog.ogp,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = () => {
  const blogPaths = zennArticleListJSON.map((b) => {
    return {
      params: {
        title: b.title,
      },
    };
  });

  return {
    paths: blogPaths,
    fallback: false,
  };
};

export default BlogZenn;
