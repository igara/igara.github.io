const { ruleName } = require(".");

testRule({
  plugins: ["./index.js"],
  ruleName,
  config: true,
  fix: false,

  accept: [
    {
      code: `.themaVariables {
        --background-color: black;
        --font-color: white;
        --border-color: white;
      }`,
    },
  ],

  reject: [
    {
      code: `.themaVariables {
        --background-color: black;
        --font-color: white;
      }`,
      message:
        "ui/src/thema/dark/thema.module.css と定義している定数の数が一致しません",
    },
  ],
});
