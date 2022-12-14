import React from "react";
declare const thema: readonly ["dark", "light"];
export declare type ThemaName = typeof thema[number];
export declare const useThema: () => {
    setThema: (t: ThemaName) => void;
    themaName: "dark" | "light";
    variables: string;
};
interface ThemaProps {
    children?: React.ReactNode;
    variables: string;
    themaName: ThemaName;
}
export declare const Thema: React.FC<ThemaProps>;
interface GithubMarkdownStyleProps {
    themaName: ThemaName;
}
export declare const GithubMarkdownStyle: React.FC<GithubMarkdownStyleProps>;
export declare const ZennMarkdownStyle: React.FC;
export declare const GlobalStyle: React.FC;
export {};
