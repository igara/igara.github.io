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
  title: "components/Wrap/borderStyle",
  component: Component,
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
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

export const _borderStyle_dotted: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap border borderStyle="dotted">
            Wrap
          </Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};
