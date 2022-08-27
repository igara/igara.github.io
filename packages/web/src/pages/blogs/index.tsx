import { NextPage } from "next";

import { BlogsPage } from "src/components";

import { AllJSON, allJSON } from "@igara.github.io/json";

type Props = { blogs: AllJSON };

const Blogs: NextPage<Props> = ({ blogs }) => {
  return <BlogsPage blogs={blogs} />;
};

export const getStaticProps = () => {
  const blogs = allJSON;

  return {
    props: { blogs },
    revalidate: 1,
  };
};

export default Blogs;
