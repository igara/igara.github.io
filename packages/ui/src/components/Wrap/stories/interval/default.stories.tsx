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
  title: "components/Wrap/interval",
  component: Component,
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
  play: async () => {},
};

export const _all_16px: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap interval={{ all: "16" }}>Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _all_24px: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap interval={{ all: "24" }}>Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _all_32px: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap interval={{ all: "32" }}>Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};

export const _top_0: ComponentStoryObj<typeof Component> = {
  render: () => {
    const TestComponent = () => {
      const { themaName, variables } = useThema();

      return (
        <Thema variables={variables} themaName={themaName}>
          <Wrap interval={{ all: "32", top: "0" }}>Wrap</Wrap>
        </Thema>
      );
    };

    return <TestComponent />;
  },
};
