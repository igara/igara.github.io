import { Feed } from "feed";
import { writeFileSync, readFileSync } from "fs";

(async () => {
  try {
    const feed = new Feed({
      title: "igara.github.io",
      description: "RSS Feed",
      id: "https://igara.github.io/",
      link: "https://igara.github.io/",
      language: "ja",
      favicon: "https://igara.github.io/favicon.ico",
      copyright: "All rights reserved 1991, syo-igarashi",
      generator: "awesome",
      feedLinks: {
        json: "https://igara.github.io/feed.json",
        atom: "https://igara.github.io/feed.xml",
      },
      author: {
        name: "syo-igarashi",
        email: "igara1119@gmail.com",
      },
    });

    const allJSONText = readFileSync("src/api/blogs/json/all.json", "utf-8");
    const allJSON = JSON.parse(allJSONText);

    allJSON.forEach((post, i) => {
      if (i > 4) return;

      const link = `https://igara.github.io${post.link}`;

      const yearMonthDay = post.publishedAt.replace(/ \d*-\d*-\d*/, "");
      const hourMinuteSecond = post.publishedAt
        .replace(/\d*-\d*-\d* /, "")
        .replace(/-/g, ":");

      feed.addItem({
        title: post.title,
        id: link,
        link,
        description: post.description,
        date: new Date(`${yearMonthDay} ${hourMinuteSecond}`),
        image: `https://igara.github.io${post.ogp.large}`,
      });
    });

    writeFileSync(`../web/public/feed.xml`, feed.atom1());
    writeFileSync(`../web/public/feed.json`, feed.json1());
  } catch (e) {
    console.log(e);
  }
})();
