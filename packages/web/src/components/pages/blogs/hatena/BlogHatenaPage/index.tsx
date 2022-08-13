import { NextPage } from "next";

type Props = { title: string; body: string };

export const BlogHatenaPage: NextPage<Props> = ({ title, body }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </div>
  );
};
