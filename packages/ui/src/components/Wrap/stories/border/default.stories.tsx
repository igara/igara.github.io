import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { useThema, Thema } from "../../../Thema";
import { Wrap } from "../..";

const Component = () => {
  const { themaName, variables } = useThema();

  return (
    <Thema variables={variables} themaName={themaName}>
      <Wrap>Wrap</Wrap>
    </Thema>
  );
};

const Meta: ComponentMeta<typeof Component> = {
  title: "components/Wrap/border",
  component: Component,
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
  play: async () => {},
};

export const _border: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap border>Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};
