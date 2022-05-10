import { atom } from "recoil";
import { IDataItem } from "~/interfaces/api/data";

export const dataItemState = atom<IDataItem | null>({
  key: "dataItemState",
  default: null,
});

export const oakPollenItemState = atom<IDataItem | null>({
  key: "oakPollenItemState",
  default: null,
});
export const pinePollenItemState = atom<IDataItem | null>({
  key: "pinePollenItemState",
  default: null,
});
export const weedsPollenItemState = atom<IDataItem | null>({
  key: "weedsPollenItemState",
  default: null,
});
