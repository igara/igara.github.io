import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { useThema, Thema, Wrap } from "@igara.github.io/ui";
import { BlogsPage } from "../";
import { allJSON } from "@igara.github.io/json";

const Component = () => {
  const { themaName, variables } = useThema();
  return (
    <Thema variables={variables} themaName={themaName}>
      <Wrap element="div">
        <BlogsPage blogs={allJSON} />
      </Wrap>
    </Thema>
  );
};

const Meta: ComponentMeta<typeof Component> = {
  title: "web/components/pages/blogs",
  component: Component,
  parameters: {
    nextRouter: {
      path: "/blogs",
      query: {},
    },
  },
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
  parameters: {
    nextRouter: {
      path: "/blogs",
      query: {},
    },
  },
  play: async () => {},
};
