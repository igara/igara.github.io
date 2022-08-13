import {
  fetchQiitaList,
  fetchQiitaDetail,
  fetchHatenaList,
  fetchHatenaDetail,
  fetchZennArticleList,
  fetchZennArticleDetailHTML,
  fetchZennArticleDetailMarkdown,
  fetcherText,
  QiitaListJSON,
  HatenaListJSON,
  ZennArticleListJSON,
} from "src/api";
import { prettifyJSONStringify } from "src/utils";
import puppeteer from "puppeteer";
import domParser from "dom-parser";
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import dayjs from "dayjs";

const DOM = new domParser();

type ZennOfficalArticleNextData = {
  props: {
    pageProps: {
      article: ZennOfficalArticle;
      user: ZennUser;
      topics: ZennTopic[];
    };
  };
};

type ZennOfficalArticle = {
  id: number;
  postType: string;
  title: string;
  slug: string;
  published: boolean;
  commentsCount: number;
  likedCount: number;
  bodyLettersCount: number;
  articleType: string;
  emoji: string;
  isSuspendingPrivate: boolean;
  publishedAt: string;
  bodyUpdatedAt: string;
  sourceRepoUpdatedAt: string;
  path: string;
  bodyHtml: string;
  toc: {
    id: string;
    text: string;
    level: number;
    children: [];
  }[];
  tocEnabled: boolean;
  shouldNoindex: boolean;
  scheduledPublishAt: string;
  badges: [];
};

type ZennUser = {
  id: number;
  username: string;
  name: string;
  avatarSmallUrl: string;
  avatarUrl?: string;
  bio?: string;
  autolinkedBio?: string;
  githubUsername?: string;
  twitterUsername?: string;
  isSupportOpen?: boolean;
  tokusyoContact?: string;
  tokusyoName?: string;
  websiteUrl?: string;
  websiteDomain?: string;
  totalLikedCount?: number;
  gaTrackingId?: string;
  followerCount?: number;
  followingCount?: number;
  articlesCount?: number;
  booksCount?: number;
  scrapsCount?: number;
};

type ZennTopic = {
  id: number;
  name: string;
  displayName: string;
  taggingsCount: number;
  imageUrl: string;
  articlesCount?: number;
  booksCount?: number;
  scrapsCount?: number;
};

type CreateOGP = {
  browser: puppeteer.Browser;
  ogpHTML: string;
  path: string;
  title: string;
  detail: string;
  width: number;
  height: number;
};

const createOGP = async ({
  browser,
  ogpHTML,
  path,
  title,
  detail,
  width,
  height,
}: CreateOGP) => {
  mkdirSync(`public/ogp/${width}x${height}${path}`, { recursive: true });

  const ogpTargetPage = await browser.newPage();
  const newOGPPage = await browser.newPage();
  try {
    await ogpTargetPage.setDefaultNavigationTimeout(0);
    await ogpTargetPage.setContent(detail);

    await newOGPPage.setDefaultNavigationTimeout(0);
    await newOGPPage.setContent(ogpHTML);
    await newOGPPage.setViewport({
      width,
      height,
    });

    const firstImageBaseURL = await ogpTargetPage.evaluate(() => {
      const imgElement = document.querySelector("img");
      if (!imgElement) return "";

      imgElement.crossOrigin = "Anonymous";

      return imgElement.src;
    });

    await newOGPPage.evaluate(
      async (args: { title: string; firstImageBaseURL: string }) => {
        const titleElement = document.querySelector(".title");
        if (!titleElement) return;

        titleElement.innerHTML = args.title;

        const backgroundElement = document.querySelector("img");

        if (!backgroundElement) return;

        backgroundElement.crossOrigin = "Anonymous";

        if (args.firstImageBaseURL) {
          backgroundElement.src = args.firstImageBaseURL;
          await new Promise((resolve) => setTimeout(resolve, 5000));
        } else {
          Object.assign(backgroundElement.style, {
            display: "none",
          });
        }
      },
      { title, firstImageBaseURL }
    );

    const b64string: string = (await newOGPPage.screenshot({
      encoding: "base64",
    })) as string;

    const ogp = Buffer.from(b64string, "base64");

    writeFileSync(
      encodeURI(`public/ogp/${width}x${height}${path}/${title}.png`),
      ogp
    );
  } catch (e) {
    console.log(e);
  }
  ogpTargetPage.close();
  newOGPPage.close();
};

const createQiitaOGP = async (browser: puppeteer.Browser, ogpHTML: string) => {
  const qiitaList = await fetchQiitaList();
  const qiitaListJSON = (await Promise.all(
    qiitaList.map(async (blog) => {
      const dateMatch = blog.name.match(/\d*-\d*-\d* \d*-\d*-\d* /);
      if (!dateMatch[0]) {
        return blog;
      }

      const publishedAt = dateMatch[0].replace(/ $/, "");
      const title = blog.name.replace(`${publishedAt} `, "");

      const detail = await fetchQiitaDetail(blog.name);
      const description = detail
        .replace(/\n/g, "")
        .replace(/<style>.+<\/style>/g, "")
        .replace(/<(".*?"|'.*?'|[^'"])*?>/g, "")
        .slice(0, 90);

      await createOGP({
        browser,
        ogpHTML,
        path: "/blogs/qiita",
        title,
        detail,
        width: 1200,
        height: 630,
      });

      await createOGP({
        browser,
        ogpHTML,
        path: "/blogs/qiita",
        title,
        detail,
        width: 630,
        height: 630,
      });

      return {
        name: blog.name,
        publishedAt,
        title,
        description,
        body: detail,
        link: `/blogs/qiita/${title}`,
        ogp: {
          large: encodeURI(`/ogp/1200x630/blogs/qiita/${title}.png`),
          small: encodeURI(`/ogp/630x630/blogs/qiita/${title}.png`),
        },
      };
    })
  )) as QiitaListJSON;
  const qiitaListJSONString = prettifyJSONStringify(qiitaListJSON.reverse());
  writeFileSync("src/api/blogs/json/qiita_list.json", qiitaListJSONString);

  return qiitaListJSON;
};

const createHatenaOGP = async (browser: puppeteer.Browser, ogpHTML: string) => {
  const hatenaList = await fetchHatenaList();
  const hatenaListJSON = (await Promise.all(
    hatenaList.map(async (blog) => {
      const dateMatch = blog.name.match(/\d*-\d*-\d* \d*-\d*-\d* /);
      if (!dateMatch[0]) {
        return blog;
      }

      const publishedAt = dateMatch[0].replace(/ $/, "");
      const title = blog.name.replace(`${publishedAt} `, "");

      const detail = await fetchHatenaDetail(blog.name);
      const description = detail
        .replace(/\n/g, "")
        .replace(/<style>.+<\/style>/g, "")
        .replace(/<(".*?"|'.*?'|[^'"])*?>/g, "")
        .slice(0, 90);

      await createOGP({
        browser,
        ogpHTML,
        path: "/blogs/hatena",
        title,
        detail,
        width: 1200,
        height: 630,
      });

      await createOGP({
        browser,
        ogpHTML,
        path: "/blogs/hatena",
        title,
        detail,
        width: 630,
        height: 630,
      });

      return {
        name: blog.name,
        publishedAt,
        title,
        description,
        body: detail,
        link: `/blogs/hatena/${title}`,
        ogp: {
          large: encodeURI(`/ogp/1200x630/blogs/hatena/${title}.png`),
          small: encodeURI(`/ogp/630x630/blogs/hatena/${title}.png`),
        },
      };
    })
  )) as HatenaListJSON;
  const hatenaListJSONString = prettifyJSONStringify(hatenaListJSON.reverse());
  writeFileSync("src/api/blogs/json/hatena_list.json", hatenaListJSONString);

  return hatenaListJSON;
};

const createZennOGP = async (browser: puppeteer.Browser, ogpHTML: string) => {
  const zennArticleList = await fetchZennArticleList();
  const zennArticleListJSON = (await Promise.all(
    zennArticleList.map(async (blog) => {
      const zennHTML = await fetcherText({
        url: `https://zenn.dev/igara/articles/${blog.name.replace(".md", "")}`,
      });

      const dom = DOM.parseFromString(zennHTML);
      const scriptDOM = dom.getElementById("__NEXT_DATA__");
      const zennOfficalArticle = JSON.parse(
        scriptDOM.innerHTML
      ) as ZennOfficalArticleNextData;

      const title = zennOfficalArticle.props.pageProps.article.title;
      const name = blog.name.replace(".md", "");
      const body = await fetchZennArticleDetailHTML(blog.name);
      const detail = await fetchZennArticleDetailMarkdown(name);
      const description = detail
        .replace(/^[\W|\w]*\n---/, "")
        .replace(/\n/g, "")
        .slice(0, 90);

      await createOGP({
        browser,
        ogpHTML,
        path: "/blogs/zenn",
        title,
        detail: body,
        width: 1200,
        height: 630,
      });

      await createOGP({
        browser,
        ogpHTML,
        path: "/blogs/zenn",
        title,
        detail: body,
        width: 630,
        height: 630,
      });

      return {
        name,
        title,
        publishedAt: dayjs(
          zennOfficalArticle.props.pageProps.article.publishedAt
        ).format("YYYY-MM-DD DD-HH-mm"),
        description,
        body,
        link: `/blogs/zenn/${title}`,
        ogp: {
          large: encodeURI(`/ogp/1200x630/blogs/zenn/${title}.png`),
          small: encodeURI(`/ogp/630x630/blogs/zenn/${title}.png`),
        },
      };
    })
  )) as ZennArticleListJSON;

  const zennArticleListJSONString = prettifyJSONStringify(
    zennArticleListJSON.sort((a, b) => {
      if (a.publishedAt > b.publishedAt) {
        return -1;
      } else if (a.publishedAt < b.publishedAt) {
        return 1;
      }
      return 0;
    })
  );
  writeFileSync(
    "src/api/blogs/json/zenn_article_list.json",
    zennArticleListJSONString
  );

  return zennArticleListJSON;
};

(async () => {
  mkdirSync("src/api/blogs/json", { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
  });
  const ogpHTML = readFileSync("src/commands/json_api/ogp.html", "utf-8");

  try {
    const qiitaListJSON = await createQiitaOGP(browser, ogpHTML);
    const hatenaListJSON = await createHatenaOGP(browser, ogpHTML);
    const zennArticleListJSON = await createZennOGP(browser, ogpHTML);

    const allJSON = [
      ...qiitaListJSON,
      ...hatenaListJSON,
      ...zennArticleListJSON,
    ].sort((a, b) => {
      if (a.publishedAt > b.publishedAt) {
        return -1;
      } else if (a.publishedAt < b.publishedAt) {
        return 1;
      }
      return 0;
    });

    writeFileSync(
      "src/api/blogs/json/all.json",
      prettifyJSONStringify(allJSON)
    );
  } catch (e) {
    console.log(e);
  }
  browser.close();
})();
