import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { prettifyJSONStringify } from "src/utils";

(async () => {
  mkdirSync("src/thema", { recursive: true });

  try {
    const commonCSS = readFileSync(
      "../ui/src/thema/common.module.css",
      "utf-8"
    );

    const intervalMatch = commonCSS.match(/--interval-.*:/g);
    const intervals = intervalMatch.map((i) => {
      const match = i.match(/[0-9]+/);
      return Number(match[0]);
    });

    const fontSizeMatch = commonCSS.match(/--font-size-.*:/g);
    const fontSizes = fontSizeMatch.map((i) => {
      const match = i.match(/[0-9]+/);
      return Number(match[0]);
    });

    const lineHeightMatch = commonCSS.match(/--line-height-.*:/g);
    const lineHeights = lineHeightMatch.map((i) => {
      const match = i.match(/[0-9]+/);
      return Number(match[0]);
    });

    writeFileSync(
      "src/thema/interval.ts",
      `export const Intervals = ${prettifyJSONStringify(intervals)} as const;`
    );
    writeFileSync(
      "src/thema/font_size.ts",
      `export const FontSizes = ${prettifyJSONStringify(fontSizes)} as const;`
    );
    writeFileSync(
      "src/thema/line_height.ts",
      `export const LineHeights = ${prettifyJSONStringify(
        lineHeights
      )} as const;`
    );
  } catch (e) {
    console.log(e);
  }
})();
