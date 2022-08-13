import { NextPage } from "next";
import NextHead from "next/head";

import { BlogHatenaPage } from "src/components";
import { hatenaListJSON } from "src/api";

const BlogHatena: NextPage<{
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
        <title>{title} / Hatena バックアップ / syonet</title>
        <meta name="description" content={description} />
        <meta
          property="og:title"
          content={`${title} / Hatena バックアップ / syonet`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogp.large} />
        <meta property="og:image" content={ogp.small} />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <BlogHatenaPage body={body} title={title} />
    </>
  );
};

type StaticProps = { params: { title: string } };

export const getStaticProps = async ({ params }: StaticProps) => {
  const title = params.title;
  const blog = hatenaListJSON.find((b) => {
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
  const blogPaths = hatenaListJSON.map((b) => {
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

export default BlogHatena;
