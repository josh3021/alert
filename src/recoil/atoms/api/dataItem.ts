import { atom } from "recoil";
import { IDataItem } from "~/interfaces/api/data";

export const dataItemState = atom<IDataItem | null>({
  key: "dataItemState",
  default: null,
});
