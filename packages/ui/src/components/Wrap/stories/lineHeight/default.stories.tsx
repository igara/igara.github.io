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
  title: "components/Wrap/lineHeight",
  component: Component,
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
  play: async () => {},
};

export const _lineHeight_0: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap lineHeight="0">Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _lineHeight_16: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap lineHeight="16">Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _lineHeight_24: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap lineHeight="24">Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _lineHeight_32: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap lineHeight="32">Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _lineHeight_48: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap lineHeight="48">Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};
