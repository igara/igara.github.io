import React from "react";
import { IntervalType, FontSizeType, LineHeightType } from "@igara.github.io/json";
interface Props {
    children?: React.ReactNode;
    element?: React.ElementType;
    interval?: {
        all: IntervalType;
    };
    fontSize?: FontSizeType;
    lineHeight?: LineHeightType;
}
export declare const Wrap: React.FC<Props>;
export {};
