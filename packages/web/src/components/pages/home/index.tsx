import { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import useEvent from "@react-hook/event";

type Props = {};

export const HomePage: NextPage<Props> = ({}) => {
  const router = useRouter();

  const postMessage = useCallback((e: MessageEvent<any>) => {
    const data = e.data;
    if (!data) return;

    const href = data.href;

    if (!href) return;
    router.push(href);
  }, []);

  // @ts-ignore
  useEvent(globalThis, "message", postMessage);

  return (
    <main>
      <div>工事中</div>
      <div>
        <iframe src="/blogs" width="100%" height="400px" frameBorder="0" />
      </div>
    </main>
  );
};
