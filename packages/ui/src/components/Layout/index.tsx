import React from "react";
import { Wrap, useThema, Thema } from "src/components";

interface Props {
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  const { variables, themaName } = useThema();

  return (
    <Thema variables={variables} themaName={themaName}>
      <Wrap element="div">{children}</Wrap>
    </Thema>
  );
};
