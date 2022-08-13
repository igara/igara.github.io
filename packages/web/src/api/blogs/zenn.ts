import useSWR from "swr";
import {
  useSWRJSONByURL,
  fetcherJSON,
  useSWRTextByURL,
  fetcherText,
} from "src/api";

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

export const useSWRZennArticleListFetch = () => {
  const swr = useSWRJSONByURL<ZennArticleList, any>({
    url: zennArticleListURL,
  });

  return swr;
};

export const useSWRSetZennArticleList = (zennArticleList?: ZennArticleList) => {
  const swr = useSWR("USE_SWR_ZENN_ARTICLE_LIST", null, {
    fallbackData: zennArticleList ? zennArticleList.slice().reverse() : [],
  });

  return swr;
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

export const useSWRZennArticleDetailHTMLFetch = (name: string) => {
  const swr = useSWRTextByURL<any>({
    url: getZennArticleDetailHTMLURL(name),
    type: "text",
  });

  return swr;
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
