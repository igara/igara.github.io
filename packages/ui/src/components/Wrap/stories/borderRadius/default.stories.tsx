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
  title: "components/Wrap/borderRadius",
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

export const _borderRadius_8: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap border borderRadius="8">
            Wrap
          </Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _borderRadius_28: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap border borderRadius="28">
            Wrap
          </Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _borderRadius_50: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap border borderRadius="50">
            Wrap
          </Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};
