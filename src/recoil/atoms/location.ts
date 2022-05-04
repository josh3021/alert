import { atom } from "recoil";
import { ILocation } from "../../interfaces/ILocation";

export const locationState = atom<ILocation | null>({
  key: "locationState",
  default: null,
});
