import { NextPage } from "next";

type Props = { title: string; body: string };

export const BlogZennPage: NextPage<Props> = ({ title, body }) => {
  return (
    <div className="znc">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};
