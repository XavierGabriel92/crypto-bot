import { MFI } from "technicalindicators";
import { MFIInput } from "./types";

const calculateMfi = (mfiInput: MFIInput) => {
  return MFI.calculate(mfiInput);
};

export default calculateMfi;
