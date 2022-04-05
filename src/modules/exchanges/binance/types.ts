export type BinanceInit = {
  apiKey?: string;
  apiSecret?: string;
  getTime?: () => number | Promise<number>;
  httpBase?: string;
  httpFutures?: string;
  wsBase?: string;
  wsFutures?: string;
  proxy?: string;
};
