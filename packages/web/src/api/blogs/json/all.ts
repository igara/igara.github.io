import { default as json } from "./all.json";

export declare type AllJSON = {
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

export const allJSON = json as AllJSON;
