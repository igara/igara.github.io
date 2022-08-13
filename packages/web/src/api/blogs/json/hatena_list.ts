import { default as json } from "./hatena_list.json";

export declare type HatenaListJSON = {
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

export const hatenaListJSON = json as HatenaListJSON;
