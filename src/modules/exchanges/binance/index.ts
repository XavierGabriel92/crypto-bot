import Binance, { CandlesOptions } from "binance-api-node";
import futuresOrder from "./futuresOrder";
import getFuturesCandles from "./getFuturesCandles";
import getFuturesPrices from "./getFuturesPrices";
import { BinanceInit } from "./types";

function BinanceService(options: BinanceInit) {
  const client = Binance(options);

  async function order() {
    return await futuresOrder(client);
  }

  async function fetchFuturesPrice() {
    return await getFuturesPrices(client);
  }

  async function fetchFuturesCandles(options: CandlesOptions) {
    return await getFuturesCandles(client, options);
  }

  return {
    order,
    fetchFuturesPrice,
    fetchFuturesCandles,
  };
}

export default BinanceService;
