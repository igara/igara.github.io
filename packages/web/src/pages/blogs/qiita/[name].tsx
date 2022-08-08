import { NextPage } from "next";

import { BlogQiitaPage } from "src/components";
import { fetchQiitaDetail, fetchQiitaList } from "src/api";

export const config = { amp: true };

const BlogQiita: NextPage<{ blog: string; name: string }> = ({
  blog,
  name,
}) => {
  return <BlogQiitaPage blog={blog} name={name} />;
};

type StaticProps = { params: { name: string } };

export const getStaticProps = async ({ params }: StaticProps) => {
  const name = params.name;
  const blog = await fetchQiitaDetail(name);
  return {
    props: {
      name,
      blog,
    },
    revalidate: 1,
  };
};

export const getStaticPaths = async () => {
  const qiitaList = await fetchQiitaList();

  const blogPaths =
    typeof qiitaList === "string"
      ? []
      : qiitaList.map((b) => {
          return {
            params: {
              name: b.name,
            },
          };
        });

  return {
    paths: blogPaths,
    fallback: false,
  };
};

export default BlogQiita;
