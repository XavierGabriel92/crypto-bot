import { RSI } from "technicalindicators";
import { RSIInput } from "./types";
const calculateRsi = (rsiInput: RSIInput): number[] => {
  return RSI.calculate(rsiInput);
};
export default calculateRsi;
