module.exports = {
  stories: [
    "../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../packages/web/src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-css-modules",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, "@emotion/babel-preset-css-prop"],
  }),
};
