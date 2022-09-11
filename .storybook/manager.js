import { addons } from "@storybook/addons";
import { themes } from "@storybook/theming";

const themaName =
  window && window.localStorage.getItem("thema")
    ? window.localStorage.getItem("thema")
    : "dark";

addons.setConfig({
  theme: themes[themaName],
});
