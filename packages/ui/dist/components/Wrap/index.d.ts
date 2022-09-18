import React from "react";
import { IntervalType, FontSizeType, LineHeightType, BorderRadiusType } from "@igara.github.io/json";
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
    borderRadius?: BorderRadiusType;
}
export declare const Wrap: React.FC<Props>;
export {};
