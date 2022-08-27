export declare type QiitaList = {
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
export declare const fetchQiitaList: () => Promise<QiitaList>;
export declare const getQiitaDetailURL: (name: string) => string;
export declare const fetchQiitaDetail: (name: string) => Promise<string>;
