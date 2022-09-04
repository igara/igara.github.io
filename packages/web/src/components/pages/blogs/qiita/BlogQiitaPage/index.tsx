import { NextPage } from "next";

type Props = { title: string; body: string };

export const BlogQiitaPage: NextPage<Props> = ({ title, body }) => {
  return (
    <div className="markdown-body">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};
