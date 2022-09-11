export const Intervals = [
  "auto",
  "0",
  "4",
  "8",
  "12",
  "16",
  "24",
  "32"
] as const;

export type IntervalType = typeof Intervals[number];
