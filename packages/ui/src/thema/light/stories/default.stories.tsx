import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { css } from "@emotion/react";
import classnames from "classnames";

import { ThemaClassname } from "../../../index";
const themaClassname = ThemaClassname("light");

const Component = () => (
  <div
    className={classnames(
      themaClassname.commonVariables,
      themaClassname.themaVariables
    )}
  >
    <div
      css={css`
        padding: var(--interval-8);
        color: var(--font-color);
        background: var(--background-color);
        border: var(--border-color) var(--border-size) var(--border-style-solid);
      `}
    >
      <div
        css={css`
          padding: var(--interval-8);
          color: var(--font-color);
          background: var(--background-color);
          border: var(--border-color) var(--border-size)
            var(--border-style-solid);
        `}
      >
        light themaの検証
      </div>
    </div>
  </div>
);

const Meta: ComponentMeta<typeof Component> = {
  title: "thema/light",
  component: Component,
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
  play: async () => {},
};
