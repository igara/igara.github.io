// @ts-ignore
import markdownDarkCSS from "github-markdown-css/github-markdown-dark.css";
// import markdownLighCSS from "github-markdown-css/github-markdown-light.css";

import { NextPage } from "next";

type Props = { title: string; body: string };

export const BlogHatenaPage: NextPage<Props> = ({ title, body }) => {
  return (
    <div className={markdownDarkCSS["markdown-body"]}>
      <div className="markdown-body">
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </div>
  );
};
