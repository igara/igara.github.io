import React from "react";
import { expect } from "@storybook/jest";
import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { css } from "@emotion/react";

import { ThemaClassname } from "../index";
const themaClassname = ThemaClassname();

const Component = () => (
  <div className={themaClassname.themaVariables}>
    <span
      css={css`
        color: var(--border-color);
      `}
    >
      dddd
    </span>
  </div>
);

const Meta: ComponentMeta<typeof Component> = {
  title: "thema",
  component: Component,
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
  play: async () => {},
};
