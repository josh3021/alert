import { atom } from "recoil";
import { ILocation } from "../../interfaces/ILocation";

export const locationState = atom<ILocation | null>({
  key: "locationState",
  default: null,
});

export const regionState = atom<{
  code: number;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
} | null>({
  key: "regionState",
  default: null,
});
