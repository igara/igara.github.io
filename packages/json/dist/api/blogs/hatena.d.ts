export declare type HatenaList = {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string | null;
    type: string;
    _links: {
        self: string;
        git: string;
        html: string;
    };
}[];
export declare const fetchHatenaList: () => Promise<HatenaList>;
export declare const getHatenaDetailURL: (name: string) => string;
export declare const fetchHatenaDetail: (name: string) => Promise<string>;
