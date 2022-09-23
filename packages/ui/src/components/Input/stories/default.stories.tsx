import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { useThema, Thema } from "../../../components/Thema";
import { Wrap } from "../../../components/Wrap";
import { Input } from "../";

const Component = () => {
  const { themaName, variables } = useThema();
  return (
    <Thema variables={variables} themaName={themaName}>
      <Wrap element="div">
        {`export {Input} from "@mui/material";`}
        <br />
        <Input />
      </Wrap>
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
