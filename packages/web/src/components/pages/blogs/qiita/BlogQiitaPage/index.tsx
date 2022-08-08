import { NextPage } from "next";

type Props = { blog: string; name: string };

export const BlogQiitaPage: NextPage<Props> = ({ blog, name }) => {
  return (
    <div>
      <h1>{name}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog }} />
    </div>
  );
};
