import { ComponentMeta, ComponentStoryObj } from "@storybook/react";

import { useThema, Thema } from "../../Thema";
import { Wrap } from "../../Wrap";
import { TextField } from "..";

const Component = () => {
  const { themaName, variables } = useThema();
  return (
    <Thema variables={variables} themaName={themaName}>
      <Wrap element="div">
        {`export {TextField} from "@mui/material";`}
        <br />
        <TextField />
      </Wrap>
    </Thema>
  );
};

const Meta: ComponentMeta<typeof Component> = {
  title: "components/TextField",
  component: Component,
};

export default Meta;

export const Default: ComponentStoryObj<typeof Component> = {
  play: async () => {},
};
