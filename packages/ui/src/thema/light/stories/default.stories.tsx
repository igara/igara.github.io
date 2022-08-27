import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { css } from "@emotion/react";

import { ThemaClassname } from "../../../index";
const themaClassname = ThemaClassname("light");

const Component = () => (
  <div className={themaClassname.variables}>
    <div
      css={css`
        padding: var(--interval-8);
        color: var(--font-color);
        background: var(--background-color);
        border: var(--border-color) var(--border-size) solid;
      `}
    >
      <div
        css={css`
          padding: var(--interval-8);
          color: var(--font-color);
          background: var(--background-color);
          border: var(--border-color) var(--border-size) solid;
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
