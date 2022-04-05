const timeIndex = "openTime",
  oIndex = "open",
  hIndex = "high",
  lIndex = "low",
  cIndex = "close",
  vIndex = "volume";

type parseCandleDataProps = {
  openTime: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
};

function parseCandleData(prices: parseCandleDataProps[]) {
  const openTime: number[] = [];
  const open: number[] = [];
  const high: number[] = [];
  const low: number[] = [];
  const close: number[] = [];
  const volume: number[] = [];

  prices.forEach((data) => {
    openTime.push(data[timeIndex]);
    open.push(Number(data[oIndex]));
    high.push(Number(data[hIndex]));
    low.push(Number(data[lIndex]));
    close.push(Number(data[cIndex]));
    volume.push(Number(data[vIndex]));
  });
  return {
    openTime: openTime,
    open: open,
    high: high,
    low: low,
    close: close,
    volume: volume,
  };
}

export default parseCandleData;
