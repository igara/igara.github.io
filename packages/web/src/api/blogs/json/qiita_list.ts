import { default as json } from "./qiita_list.json";

export declare type QiitaListJSON = {
  name: string;
  title: string;
  publishedAt: string;
  description: string;
  body: string;
  link: string;
  ogp: {
    large: string;
    small: string;
  };
}[];

export const qiitaListJSON = json as QiitaListJSON;
