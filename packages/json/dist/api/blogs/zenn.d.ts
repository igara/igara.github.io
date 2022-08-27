export declare type ZennArticleList = {
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
export declare const fetchZennArticleList: () => Promise<ZennArticleList>;
export declare const getZennArticleDetailHTMLURL: (name: string) => string;
export declare const fetchZennArticleDetailHTML: (name: string) => Promise<string>;
export declare const getZennArticleDetailMarkdownURL: (name: string) => string;
export declare const fetchZennArticleDetailMarkdown: (name: string) => Promise<string>;
