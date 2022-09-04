import { NextPage } from "next";
import NextHead from "next/head";

import { BlogHatenaPage } from "src/components";
import { hatenaListJSON } from "@igara.github.io/json";
import { useThema, Thema, GithubMarkdownStyle } from "@igara.github.io/ui";

const BlogHatena: NextPage<{
  title: string;
  body: string;
  description: string;
  ogp: {
    large: string;
    small: string;
  };
  url: string;
}> = ({ title, body, description, ogp, url }) => {
  const { variables, themaName } = useThema();

  return (
    <>
      <NextHead>
        <title>{title} / Hatena バックアップ</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} / Hatena バックアップ`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="igara.github.io" />
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_WEB_HOST}${ogp.large}`}
        />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </NextHead>

      <Thema variables={variables}>
        <GithubMarkdownStyle themaName={themaName} />
        <BlogHatenaPage body={body} title={title} />
      </Thema>
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
      url: `${process.env.NEXT_PUBLIC_WEB_HOST}/blogs/hatena/${title}`,
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
