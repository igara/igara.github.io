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
    "storybook-addon-next-router",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  babel: async (options) => ({
    ...options,
    presets: [...options.presets, "@emotion/babel-preset-css-prop"],
  }),
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.txt$/,
      use: ["raw-loader"],
    });

    return config;
  },
  staticDirs: ["../packages/web/public"],
};
