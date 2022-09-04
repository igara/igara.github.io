import { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { css } from "@emotion/react";

import { useThema, Thema } from "../";

const Component = () => {
  const { themaName, variables } = useThema();

  return (
    <Thema variables={variables}>
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
          {themaName} themaの検証
        </div>
      </div>
    </Thema>
  );
};

const Meta: ComponentMeta<typeof Component> = {
  title: "components/Thema",
  component: Component,
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
  play: async () => {},
};
