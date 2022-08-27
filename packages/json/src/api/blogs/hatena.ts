import { fetcherJSON, fetcherText } from "src/api";

const hatenaListURL =
  "https://api.github.com/repos/igara/hatenablog-export/contents/data/igara1119";

export type HatenaList = {
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

export const fetchHatenaList = async () => {
  const result = await fetcherJSON<HatenaList>({
    url: hatenaListURL,
  });

  return result;
};

export const getHatenaDetailURL = (name: string) => {
  return encodeURI(
    `https://raw.githubusercontent.com/igara/hatenablog-export/master/data/igara1119/${name}/README.html`
  );
};

export const fetchHatenaDetail = (name: string) => {
  const result = fetcherText({
    url: getHatenaDetailURL(name),
    type: "text",
  });

  return result;
};
