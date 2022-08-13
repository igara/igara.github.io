import useSWR from "swr";

export type FetcherOption = {
  url: string;
  type?: "text" | "json";
  headers?: RequestInit["headers"];
  method?: RequestInit["method"];
  bodyObject?: Object;
};

type FetchOption = {
  headers: FetcherOption["headers"];
  method: FetcherOption["method"];
  body?: RequestInit["body"];
};

export const fetcherJSON = async <Data = any>({
  url = "",
  headers = {},
  method = "GET",
  bodyObject = {},
}: FetcherOption): Promise<Data> => {
  try {
    let fetchOption: FetchOption = {
      headers,
      method,
    };

    if (method === "POST") {
      fetchOption = {
        ...fetchOption,
        body: JSON.stringify(bodyObject),
      };
    }

    const response = await fetch(url, fetchOption);
    if (!response.ok) {
      throw new Error(`server error: ${JSON.stringify(response)}`);
    }

    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
    throw new Error(`${error}`);
  }
};

export const fetcherText = async ({
  url = "",
  headers = {},
  method = "GET",
  bodyObject = {},
}: FetcherOption) => {
  try {
    let fetchOption: FetchOption = {
      headers,
      method,
    };

    if (method === "POST") {
      fetchOption = {
        ...fetchOption,
        body: JSON.stringify(bodyObject),
      };
    }

    const response = await fetch(url, fetchOption);
    if (!response.ok) {
      throw new Error(`server error: ${JSON.stringify(response)}`);
    }

    const text = await response.text();
    return text;
  } catch (error) {
    console.error(error);
    throw new Error(`${error}`);
  }
};

export function useSWRJSONByURL<Data = any, Error = any>(
  option: FetcherOption
) {
  return useSWR<Data, Error>(option.url, () => fetcherJSON(option));
}

export function useSWRTextByURL<Error = any>(option: FetcherOption) {
  return useSWR<string, Error>(option.url, () => fetcherText(option));
}
