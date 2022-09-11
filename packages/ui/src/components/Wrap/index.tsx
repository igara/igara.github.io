import React from "react";
import {
  IntervalType,
  FontSizeType,
  LineHeightType,
} from "@igara.github.io/json";

interface Props {
  children?: React.ReactNode;
  element?: React.ElementType;
  interval?: {
    all: IntervalType;
  };
  fontSize?: FontSizeType;
  lineHeight?: LineHeightType;
}

export const Wrap: React.FC<Props> = ({
  children,
  element: Element = "span",
  interval = {},
  fontSize = 12,
  lineHeight = 16,
}) => <Element css={css``}>{children}</Element>;
