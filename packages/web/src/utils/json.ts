export const prettifyJSONStringify = (data: any) => {
  return JSON.stringify(data, null, 2);
};
