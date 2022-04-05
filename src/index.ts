import config from "config";

import BinanceService from "./modules/exchanges/binance";
import parseCandleData from "./modules/exchanges/utils/parseCandleData";
import { calculateRsi, calculateMfi } from "./modules/indicators";
import { BinanceKeys } from "./types";

async function startServer() {
  // ROTINA EM 15m que compara rsi e mfi para entrada de scalper
  // const { apiKey, apiSecret } = config.get<BinanceKeys>("binance.test");
  // const binanceService = BinanceService({ apiKey, apiSecret });
  // const prices = await binanceService.fetchFuturesPrice();
  // Object.keys(prices).forEach(async (symbol) => {
  //   const price = await binanceService.fetchFuturesCandles({
  //     symbol,
  //     interval: "15m",
  //   });
  //   const { high, low, close, volume } = parseCandleData(price);
  //   const rsi = calculateRsi({ values: close, period: 14 });
  //   const mfi = calculateMfi({ high, low, close, volume, period: 14 });
  //   const lastRsi = rsi[rsi.length - 1];
  //   const lastMfi = mfi[mfi.length - 1];
  //   if (lastRsi > 70 && lastMfi > 80) {
  //     console.log(`Moeda ${symbol} esta em sobre venda possivel SHORT \n
  //     RSI: ${lastRsi}\n
  //     MFI: ${lastMfi}
  //     `);
  //   } else if (lastRsi < 30 && lastMfi < 20) {
  //     console.log(`Moeda ${symbol} esta em sobre compra possivel LONG\n
  //     RSI: ${lastRsi}\n
  //     MFI: ${lastMfi}
  //     `);
  //   }
  // });
}

startServer();
