import { fetcherJSON, fetcherText } from "src/api";

const qiitaListURL =
  "https://api.github.com/repos/igara/qiita-export/contents/data/igara";

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

export const fetchQiitaList = async () => {
  const result = await fetcherJSON<QiitaList>({
    url: qiitaListURL,
  });

  return result;
};

export const getQiitaDetailURL = (name: string) => {
  return encodeURI(
    `https://raw.githubusercontent.com/igara/qiita-export/master/data/igara/${name}/README.html`
  );
};

export const fetchQiitaDetail = (name: string) => {
  const result = fetcherText({
    url: getQiitaDetailURL(name),
    type: "text",
  });

  return result;
};
