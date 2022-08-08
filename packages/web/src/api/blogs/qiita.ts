import useSWR from "swr";
import { useSWRByURL, fetcher } from "src/api";

export type QiitaList = {
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

export const fetchQiitaList = () => {
  const result = fetcher<QiitaList>({
    url: "https://api.github.com/repos/igara/qiita-export/contents/data/igara",
  });

  return result;
};

export const useSWRQiitaListFetch = () => {
  const swr = useSWRByURL<QiitaList, any>({
    url: "https://api.github.com/repos/igara/qiita-export/contents/data/igara",
  });

  return swr;
};

export const useSWRSetQiitaList = (list?: QiitaList) => {
  const swr = useSWR("USE_SWR_QIITA_LIST", null, {
    fallbackData: list ? list.slice().reverse() : [],
  });

  return swr;
};

export const getQiitaDetailURL = (name: string) => {
  return encodeURI(
    `https://raw.githubusercontent.com/igara/qiita-export/master/data/igara/${name}/README.html`
  );
};

export const fetchQiitaDetail = (name: string) => {
  const result = fetcher<string>({
    url: getQiitaDetailURL(name),
    type: "text",
  });

  return result;
};

export const useSWRQiitaDetailFetch = (name: string) => {
  const swr = useSWRByURL<string, any>({
    url: getQiitaDetailURL(name),
    type: "text",
  });

  return swr;
};
