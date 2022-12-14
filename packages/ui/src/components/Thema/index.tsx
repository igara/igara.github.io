import React, { useState, useCallback, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import classnames from "classnames";
import commonCSS from "../../thema/common.module.css";
import darkCSS from "../../thema/dark/thema.module.css";
import lightCSS from "../../thema/light/thema.module.css";

import githubMarkdownDarkCSS from "../../thema/dark/github_markdown.txt";
import githubMarkdownLightCSS from "../../thema/light/github_markdown.txt";

const thema = ["dark", "light"] as const;
export type ThemaName = typeof thema[number];

const setThemaNameByLocalStorage = (themaName: ThemaName) => {
  if (typeof window !== "undefined" && window.localStorage) {
    if (thema.includes(themaName)) {
      window.localStorage.setItem("thema", themaName);
    }
  }
};

const getThemaNameByLocalStorage = () => {
  let selectedThemaName: ThemaName;

  if (typeof window !== "undefined" && window.localStorage) {
    const selected = window.localStorage.getItem("thema") as ThemaName;

    if (thema.includes(selected)) {
      selectedThemaName = selected;
    }
  }

  if (!selectedThemaName) {
    selectedThemaName = "dark";
  }

  return selectedThemaName;
};

export const useThema = () => {
  const selectedThemaName = getThemaNameByLocalStorage();
  const [themaName, setThemaName] = useState(selectedThemaName);

  const setThema = useCallback(
    (t: ThemaName) => {
      setThemaNameByLocalStorage(t);
      setThemaName(t);
    },
    [setThemaName]
  );

  const variables =
    themaName === "dark"
      ? classnames(commonCSS.commonVariables, darkCSS.themaVariables)
      : classnames(commonCSS.commonVariables, lightCSS.themaVariables);

  return {
    setThema,
    themaName,
    variables,
  };
};

interface ThemaProps {
  children?: React.ReactNode;
  variables: string;
  themaName: ThemaName;
}

export const Thema: React.FC<ThemaProps> = ({
  children,
  variables,
  themaName,
}) => {
  const muiThema = createTheme({
    palette: {
      mode: themaName,
    },
  });

  return (
    <div className={variables}>
      <ThemeProvider theme={muiThema}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </div>
  );
};

interface GithubMarkdownStyleProps {
  themaName: ThemaName;
}
export const GithubMarkdownStyle: React.FC<GithubMarkdownStyleProps> = ({
  themaName,
}) => {
  const [css, setCSS] = useState("");

  useEffect(() => {
    if (!css) {
      if (themaName === "dark") {
        setCSS(githubMarkdownDarkCSS);
      } else {
        setCSS(githubMarkdownLightCSS);
      }
    }
  }, [css]);

  return <style>{css}</style>;
};

export const ZennMarkdownStyle: React.FC = () => {
  const [css, setCSS] = useState("");

  useEffect(() => {
    if (!css) {
      setCSS(`.znc {
        color: var(--font-color);
        background: var(--background-color);
        border: var(--border-color) var(--border-size) solid;
      }`);
    }
  }, [css]);

  return <style>{css}</style>;
};

export const GlobalStyle: React.FC = () => {
  const [css, setCSS] = useState("");

  useEffect(() => {
    if (!css) {
      setCSS(`html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
          Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
        color: var(--font-color);
        background: var(--background-color);
      }`);
    }
  }, [css]);

  return <style>{css}</style>;
};
