import { NextPage } from "next";

type Props = {};

export const HomePage: NextPage<Props> = ({}) => {
  return (
    <main>
      <div>工事中</div>
      <div>
        <iframe src="/blogs" width="100%" frameBorder="0" />
      </div>
    </main>
  );
};
