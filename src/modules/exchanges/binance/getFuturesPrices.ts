import { Binance } from "binance-api-node";

async function getFuturesPrices(client: Binance) {
  return await client.futuresPrices();
}
export default getFuturesPrices;
