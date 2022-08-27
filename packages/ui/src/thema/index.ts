import classnames from "classnames";
import commonCSS from "./common.module.css";
import darkCSS from "./dark/thema.module.css";
import lightCSS from "./light/thema.module.css";
import gitHubMarkdownDarkCSS from "github-markdown-css/github-markdown-dark.css";
import gitHubMarkdownLightCSS from "github-markdown-css/github-markdown-light.css";

const thema = ["dark", "light"] as const;
type Thema = typeof thema[number];

export const ThemaClassname = (themaName?: Thema) => {
  if (themaName) {
    if (window && window.localStorage) {
      window.localStorage.setItem("thema", themaName);
    }
  }
  let selectedThemaName = themaName;

  if (window && window.localStorage) {
    const selected = window.localStorage.getItem("thema") as Thema;

    if (thema.includes(selected)) {
      selectedThemaName = selected;
    }
  }

  if (!selectedThemaName) {
    selectedThemaName = "dark";
  }

  if (themaName === "light") {
    return {
      variables: classnames(commonCSS.commonVariables, lightCSS.themaVariables),
      gitHubMarkdown: gitHubMarkdownLightCSS["markdown-body"],
    };
  }

  return {
    variables: classnames(commonCSS.commonVariables, darkCSS.themaVariables),
    gitHubMarkdown: gitHubMarkdownDarkCSS["markdown-body"],
  };
};
