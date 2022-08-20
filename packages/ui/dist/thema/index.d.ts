declare const thema: readonly ["dark", "light"];
declare type Thema = typeof thema[number];
export declare const ThemaClassname: (themaName?: Thema) => {
    commonVariables: {
        readonly [key: string]: string;
    };
    themaVariables: string;
    gitHubMarkdown: string;
};
export {};