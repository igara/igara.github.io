export declare type FetcherOption = {
    url: string;
    type?: "text" | "json";
    headers?: RequestInit["headers"];
    method?: RequestInit["method"];
    bodyObject?: Object;
};
export declare const fetcherJSON: <Data = any>({ url, headers, method, bodyObject, }: FetcherOption) => Promise<Data>;
export declare const fetcherText: ({ url, headers, method, bodyObject, }: FetcherOption) => Promise<string>;
