import { atom } from "recoil";
import { INotProviding } from "~/interfaces/api/data";

export const notProvidingState = atom<INotProviding | null>({
  key: "notProvidingState",
  default: null,
});
