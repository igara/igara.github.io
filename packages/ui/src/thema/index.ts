import darkCSS from "./dark/thema.module.css";
import lightCSS from "./light/thema.module.css";

type Thema = "dark" | "light";

export const ThemaClassname = (thema?: Thema) => {
  if (thema === "light") {
    return lightCSS.themaVariables;
  }

  return darkCSS.themaVariables;
};
