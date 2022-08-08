import { NextPage } from "next";

import { BlogsPage } from "src/components";

import { QiitaList, fetchQiitaList } from "src/api";

export const config = { amp: true };

type Props = { blogs: QiitaList };

const Blogs: NextPage<Props> = ({ blogs }) => {
  return <BlogsPage blogs={blogs} />;
};

export const getStaticProps = async () => {
  const blogs = await fetchQiitaList();

  return {
    props: { blogs },
    revalidate: 1,
  };
};

export default Blogs;
