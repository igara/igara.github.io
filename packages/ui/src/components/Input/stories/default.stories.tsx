import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { useThema, Thema } from "../../../components/Thema";
import { Wrap } from "../../../components/Wrap";

const Component = () => {
  const { themaName, variables } = useThema();
  return (
    <Thema variables={variables} themaName={themaName}>
      <Wrap>{`export {Input} from "@mui/material";`}</Wrap>
    </Thema>
  );
};

const Meta: ComponentMeta<typeof Component> = {
  title: "components/Input",
  component: Component,
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
  play: async () => {},
};
