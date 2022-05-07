import { atom } from "recoil";

export const dayState = atom<number>({
  key: "dayState",
  default: 1,
});
