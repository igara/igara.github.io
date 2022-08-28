const stylelint = require("stylelint");
const fs = require("fs");

const commonCSS = fs.readFileSync("../ui/src/thema/common.module.css", "utf-8");
const darkThemaCSS = fs.readFileSync(
  "../ui/src/thema/dark/thema.module.css",
  "utf-8"
);
const lightThemaCSS = fs.readFileSync(
  "../ui/src/thema/light/thema.module.css",
  "utf-8"
);

const darkThemaMatch = darkThemaCSS.match(/--.*;/g);
const darkThemaValiables = darkThemaMatch.map((v) => {
  const key = v.match(/--.*:/)[0].replace(":", "");
  const value = v.match(/ .*;/)[0].replace(" ", "").replace(";", "");

  return {
    [key]: value,
  };
});

const lightThemaMatch = lightThemaCSS.match(/--.*;/g);
const lightThemaValiables = lightThemaMatch.map((v) => {
  const key = v.match(/--.*:/)[0].replace(":", "");
  const value = v.match(/ .*;/)[0].replace(" ", "").replace(";", "");

  return {
    [key]: value,
  };
});

const ruleName = "@igara.github.io/thema-rule";
const messages = stylelint.utils.ruleMessages(ruleName, {
  expected: "Expected...",
});

const checkVariableCount = ({ decl, result }) => {
  const selector = decl.parent.selector;
  if (selector !== ".themaVariables") return;

  const css = decl.source.input.css;
  const cssMatch = css.match(/--.*;/g);
  const cssValiables = cssMatch.map((v) => {
    const key = v.match(/--.*:/)[0].replace(":", "");
    const value = v.match(/ .*;/)[0].replace(" ", "").replace(";", "");

    return {
      [key]: value,
    };
  });

  if (cssValiables.length !== darkThemaValiables.length) {
    stylelint.utils.report({
      ruleName,
      result,
      message: `ui/src/thema/dark/thema.module.css と定義している定数の数が一致しません`,
      node: decl,
    });
    return;
  }

  if (cssValiables.length !== lightThemaValiables.length) {
    stylelint.utils.report({
      ruleName,
      result,
      message: `ui/src/thema/light/thema.module.css と定義している定数の数が一致しません`,
      node: decl,
    });
    return;
  }
};

module.exports = stylelint.createPlugin(ruleName, () => {
  return (root, result) => {
    const validOptions = stylelint.utils.validateOptions(result, ruleName, {});

    if (!root.source) return;

    const css = root.source.input.css;
    root.nodes.forEach((rule) => {
      if (rule.selector === ".themaVariables") {
      }
    });
    root.walkDecls((decl, i) => {
      if (i === 0) {
        checkVariableCount({ decl, result });
      }
    });

    if (!validOptions) return;
  };
});

module.exports.ruleName = ruleName;
module.exports.messages = messages;
