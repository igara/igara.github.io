import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { prettifyJSONStringify } from "src/utils";

(async () => {
  mkdirSync("src/thema", { recursive: true });

  try {
    const commonCSS = readFileSync(
      "../ui/src/thema/common.module.css",
      "utf-8"
    );

    const intervalMatch = commonCSS.match(/--interval-\S+:/g);
    const intervals = intervalMatch.map((i) => {
      const match = i.replace("--interval-", "").replace(":", "");
      return match;
    });

    const borderRadiuslMatch = commonCSS.match(/--border-radius-\S+:/g);
    const borderRadius = borderRadiuslMatch.map((i) => {
      const match = i.replace("--border-radius-", "").replace(":", "");
      return match;
    });

    const fontSizeMatch = commonCSS.match(/--font-size-.*:/g);
    const fontSizes = fontSizeMatch.map((i) => {
      const match = i.match(/[0-9]+/);
      return match[0];
    });

    const lineHeightMatch = commonCSS.match(/--line-height-.*:/g);
    const lineHeights = lineHeightMatch.map((i) => {
      const match = i.match(/[0-9]+/);
      return match[0];
    });

    writeFileSync(
      "src/thema/interval.ts",
      `export const Intervals = ${prettifyJSONStringify(intervals)} as const;

export type IntervalType = typeof Intervals[number];
`
    );
    writeFileSync(
      "src/thema/border_radius.ts",
      `export const BorderRadius = ${prettifyJSONStringify(
        borderRadius
      )} as const;

export type BorderRadiusType = typeof BorderRadius[number];
`
    );
    writeFileSync(
      "src/thema/font_size.ts",
      `export const FontSizes = ${prettifyJSONStringify(fontSizes)} as const;

export type FontSizeType = typeof FontSizes[number];
`
    );
    writeFileSync(
      "src/thema/line_height.ts",
      `export const LineHeights = ${prettifyJSONStringify(
        lineHeights
      )} as const;

export type LineHeightType = typeof LineHeights[number];
`
    );
  } catch (e) {
    console.log(e);
  }
})();
