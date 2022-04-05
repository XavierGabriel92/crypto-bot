import { Binance, CandlesOptions } from "binance-api-node";

async function getFuturesCandles(client: Binance, options: CandlesOptions) {
  return await client.futuresCandles(options);
}
export default getFuturesCandles;
