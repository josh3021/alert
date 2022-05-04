import { atom } from "recoil";

export const regionState = atom<{
  code: number;
  region_1depth_name: string;
  region_2depth_name: string;
  region_3depth_name: string;
} | null>({
  key: "regionState",
  default: null,
});
