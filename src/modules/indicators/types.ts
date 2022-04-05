export type RSIInput = {
  values: number[];
  period: number;
};

export type MFIInput = {
  high: number[];
  low: number[];
  close: number[];
  volume: number[];
  period: number;
};
