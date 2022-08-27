import { fetcherJSON, fetcherText } from "src/api";

const zennArticleListURL =
  "https://api.github.com/repos/igara/zenn-export/contents/articles";

export declare type ZennArticleList = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: string;
  _links: {
    self: string;
    git: string;
    html: string;
  };
}[];

export const fetchZennArticleList = async () => {
  const result = await fetcherJSON<ZennArticleList>({
    url: zennArticleListURL,
  });

  return result;
};

export const getZennArticleDetailHTMLURL = (name: string) => {
  return encodeURI(
    `https://raw.githubusercontent.com/igara/zenn-export/main/html/${name}.html`
  );
};

export const fetchZennArticleDetailHTML = (name: string) => {
  const result = fetcherText({
    url: getZennArticleDetailHTMLURL(name),
    type: "text",
  });

  return result;
};

export const getZennArticleDetailMarkdownURL = (name: string) => {
  return encodeURI(
    `https://raw.githubusercontent.com/igara/zenn-export/main/articles/${name}.md`
  );
};

export const fetchZennArticleDetailMarkdown = (name: string) => {
  const result = fetcherText({
    url: getZennArticleDetailMarkdownURL(name),
    type: "text",
  });

  return result;
};
