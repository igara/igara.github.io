const { build } = require("esbuild");
const { dependencies } = require("./package.json");
const cssModulesPlugin = require("esbuild-css-modules-plugin");
const fs = require("fs");

fs.copyFileSync(
  "./node_modules/github-markdown-css/github-markdown-dark.css",
  "./src/thema/dark/github_markdown.module.css"
);
fs.copyFileSync(
  "./node_modules/github-markdown-css/github-markdown-light.css",
  "./src/thema/light/github_markdown.module.css"
);

const cssPlugin = cssModulesPlugin();

const entryFile = "src/index.ts";
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  external: Object.keys(dependencies),
  logLevel: "info",
  minify: true,
  sourcemap: false,
};

build({
  ...shared,
  format: "esm",
  outfile: "./dist/index.esm.js",
  target: ["ES6"],
  plugins: [cssPlugin],
});

build({
  ...shared,
  format: "cjs",
  outfile: "./dist/index.cjs.js",
  target: ["ES6"],
  plugins: [cssPlugin],
});
