import React from "react";

interface Props {
  children?: React.ReactNode;
  element?: React.ElementType;
}

export const Wrap: React.FC<Props> = ({
  children,
  element: Element = "span",
}) => <Element>{children}</Element>;
