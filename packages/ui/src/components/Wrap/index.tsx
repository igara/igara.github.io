import React from "react";
import { css } from "@emotion/react";
import {
  IntervalType,
  FontSizeType,
  LineHeightType,
} from "@igara.github.io/json";
import * as CSS from "csstype";

interface Props {
  children?: React.ReactNode;
  element?: React.ElementType;
  interval?: {
    all?: IntervalType;
    top?: IntervalType;
    right?: IntervalType;
    bottom?: IntervalType;
    left?: IntervalType;
  };
  fontSize?: FontSizeType;
  lineHeight?: LineHeightType;
  border?: boolean;
  borderStyle?: CSS.Property.BorderStyle;
}

export const Wrap: React.FC<Props> = ({
  children,
  element: Element = "span",
  interval = {},
  fontSize = "12",
  lineHeight = "16",
  border = false,
  borderStyle = "solid",
}) => {
  const allInterval = interval.all ? interval.all : "12";

  return (
    <Element
      css={css`
        padding: var(--interval-${allInterval});
        background: var(--background-color);
        ${interval.top &&
        css`
          padding-top: var(--interval-${interval.top});
        `}
        ${interval.right &&
        css`
          padding-right: var(--interval-${interval.right});
        `}
        ${interval.bottom &&
        css`
          padding-bottom: var(--interval-${interval.bottom});
        `}
        ${interval.left &&
        css`
          padding-left: var(--interval-${interval.left});
        `}
        font-size: var(--font-size-${fontSize});
        line-height: var(--font-size-${lineHeight});
        color: var(--font-color);
        ${border &&
        css`
          border: var(--border-color) var(--border-size) ${borderStyle};
        `}
      `}
    >
      {children}
    </Element>
  );
};
