export const LineHeights = [
  0,
  16,
  24,
  32,
  48
] as const;

export type LineHeightType = typeof LineHeights[number];
