import { default as json } from "./zenn_article_list.json";

export declare type ZennArticleListJSON = {
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

export const zennArticleListJSON = json as ZennArticleListJSON;
