export const FontSizes = [
  "12",
  "16",
  "24",
  "32"
] as const;

export type FontSizeType = typeof FontSizes[number];
