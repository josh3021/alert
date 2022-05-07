import { atom } from "recoil";
import { ITEMS } from "~/constants/common";

export const itemState = atom<ITEMS>({
  key: "itemState",
  default: ITEMS.ASTHMA_RISK,
});
