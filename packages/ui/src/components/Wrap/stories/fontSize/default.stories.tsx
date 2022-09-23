import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { useThema, Thema } from "../../../../components/Thema";
import { Wrap } from "../../";

const Component = () => {
  const { themaName, variables } = useThema();

  return (
    <Thema variables={variables} themaName={themaName}>
      <Wrap>Wrap</Wrap>
    </Thema>
  );
};

const Meta: ComponentMeta<typeof Component> = {
  title: "components/Wrap/fontSize",
  component: Component,
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
  play: async () => {},
};

export const _fontSize_12: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap fontSize="12">Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _fontSize_16: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap fontSize="16">Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _fontSize_24: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap fontSize="24">Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _fontSize_32: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap fontSize="32">Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};
