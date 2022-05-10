import { atom } from "recoil";
import { INotProviding } from "~/interfaces/api/data";

export const notProvidingState = atom<INotProviding | null>({
  key: "notProvidingState",
  default: null,
});

export const oakPollenNotProvidingState = atom<INotProviding | null>({
  key: "oakPollenNotProvidingState",
  default: null,
});
export const pinePollenNotProvidingState = atom<INotProviding | null>({
  key: "pinePollenNotProvidingState",
  default: null,
});
export const weedsPollenNotProvidingState = atom<INotProviding | null>({
  key: "weedsPollenNotProvidingState",
  default: null,
});
