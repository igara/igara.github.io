import { NextPage } from "next";

import { BlogsPage } from "src/components";

import { AllJSON, allJSON } from "@igara.github.io/json";
import { useThema, Thema, Wrap } from "@igara.github.io/ui";

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

Blogs.getLayout = (page) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { variables, themaName } = useThema();

  return (
    <Thema variables={variables} themaName={themaName}>
      <Wrap element="div">{page}</Wrap>
    </Thema>
  );
};

export default Blogs;
