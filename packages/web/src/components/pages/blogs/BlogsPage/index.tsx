import { NextPage } from "next";
import { QiitaList } from "src/api";

type Props = { blogs: QiitaList };

export const BlogsPage: NextPage<Props> = ({ blogs }) => {
  return <div>ddd</div>;
};
