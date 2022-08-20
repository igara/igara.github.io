import darkCSS from "./dark/thema.module.css";
import lightCSS from "./light/thema.module.css";
import gitHubMarkdownDarkCSS from "github-markdown-css/github-markdown-dark.css";
import gitHubMarkdownLightCSS from "github-markdown-css/github-markdown-light.css";

type Thema = "dark" | "light";

export const ThemaClassname = (thema?: Thema) => {
  if (thema === "light") {
    return {
      themaVariables: lightCSS.themaVariables,
      gitHubMarkdown: gitHubMarkdownLightCSS["markdown-body"],
    };
  }

  return {
    themaVariables: darkCSS.themaVariables,
    gitHubMarkdown: gitHubMarkdownDarkCSS["markdown-body"],
  };
};
